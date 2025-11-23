'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import useLogin from './Login.hook'
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Login = () => {
  const { form, onSubmit } = useLogin()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Login</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Field data-invalid={!!errors.email}>
            <FieldContent>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-invalid={!!errors.email}
                  />
                )}
              />
              <FieldError>{errors.email?.message}</FieldError>
            </FieldContent>
          </Field>

          <Field data-invalid={!!errors.password}>
            <FieldContent>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    aria-invalid={!!errors.password}
                  />
                )}
              />
              <FieldError>{errors.password?.message}</FieldError>
            </FieldContent>
          </Field>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <div className="text-center text-sm">
          <a href="#" className="text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login