import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Please enter your email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email format'
    },
    maxLength: {
      value: 160,
      message: 'Length from 5 to 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Length from 5 to 160 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Please enter your password'
    },
    maxLength: {
      value: 160,
      message: 'Length from 5 to 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Length from 5 to 160 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Please enter your confirmPassword'
    },
    maxLength: {
      value: 160,
      message: 'Length from 5 to 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Length from 5 to 160 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Re-enter password does not match'
        : undefined
  }
})
