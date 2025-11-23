import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface CountdownTime {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const useLandingPage = () => {
    const router = useRouter()
    const [countdown, setCountdown] = useState<CountdownTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const handleLogin = () => {
        router.push('/login')
    }

    useEffect(() => {
        // Target date: December 25, 2024 08:00 WIB (UTC+7)
        // Convert to UTC: December 25, 2024 01:00 UTC
        const targetDate = new Date('2025-12-15T01:00:00Z').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance < 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    return {
        countdown,
        handleLogin,
    }
}

export default useLandingPage