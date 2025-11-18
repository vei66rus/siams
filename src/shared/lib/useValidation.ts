import { VALIDATION_MESSAGES } from '../config/form.config'

type ValidationRule = (v: string) => boolean | string

export const useValidation = () => {
  const createRequiredRule = (message: string): ValidationRule => {
    return (v: string) => !!v || message
  }

  const createPatternRule = (pattern: RegExp, message: string): ValidationRule => {
    return (v: string) => {
      if (!v) return true
      return pattern.test(v) || message
    }
  }

  const createMinWordsRule = (minWords: number, message: string): ValidationRule => {
    return (v: string) => {
      if (!v) return true
      const parts = v.trim().split(/\s+/)
      return parts.length >= minWords || message
    }
  }

  const createAgeRule = (minAge: number, message: string): ValidationRule => {
    return (v: string) => {
      if (!v) return true
      const date = new Date(v)
      const now = new Date()
      const age = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      return age >= minAge || message
    }
  }

  const createMaxDateRule = (maxDate: Date, message: string): ValidationRule => {
    return (v: string) => {
      if (!v) return true
      const date = new Date(v)
      return date <= maxDate || message
    }
  }

  const fullNameRules: ValidationRule[] = [
    createRequiredRule(VALIDATION_MESSAGES.REQUIRED.fullName),
    createMinWordsRule(2, VALIDATION_MESSAGES.FORMAT.fullName),
    createPatternRule(/^[А-Яа-яЁё\s-]+$/, VALIDATION_MESSAGES.FORMAT.fullNamePattern)
  ]

  const dateOfBirthRules: ValidationRule[] = [
    createRequiredRule(VALIDATION_MESSAGES.REQUIRED.dateOfBirth),
    createAgeRule(18, VALIDATION_MESSAGES.FORMAT.age),
    createMaxDateRule(new Date(), VALIDATION_MESSAGES.FORMAT.dateOfBirth)
  ]

  const emailRules: ValidationRule[] = [
    createRequiredRule(VALIDATION_MESSAGES.REQUIRED.email),
    createPatternRule(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, VALIDATION_MESSAGES.FORMAT.email)
  ]

  const phoneRules: ValidationRule[] = [
    createRequiredRule(VALIDATION_MESSAGES.REQUIRED.phone),
    (v: string) => {
      if (!v) return true
      const unformatted = v.replace(/[^\d+]/g, '')
      return /^\+7\d{10}$/.test(unformatted) || VALIDATION_MESSAGES.FORMAT.phone
    }
  ]

  return {
    fullNameRules,
    dateOfBirthRules,
    emailRules,
    phoneRules
  }
}