export const usePhoneFormatter = () => {

  const formatPhone = (phone: string): string => {

    const cleaned = phone.replace(/[^\d+]/g, '')


    if (!cleaned.startsWith('+7')) {
      return phone
    }

    const digits = cleaned.slice(2)

    if (digits.length !== 10) {
      return phone
    }

    return `+7-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 10)}`
  }

  const unformatPhone = (phone: string): string => {
    return phone.replace(/[^\d+]/g, '')
  }

  const handlePhoneInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    const cursorPosition = input.selectionStart || 0
    const oldValue = input.value
    const oldLength = oldValue.length

    const unformatted = unformatPhone(oldValue)

    const formatted = formatPhone(unformatted)

    const newLength = formatted.length
    const diff = newLength - oldLength
    const newCursorPosition = cursorPosition + diff

    input.value = formatted

    requestAnimationFrame(() => {
      input.setSelectionRange(newCursorPosition, newCursorPosition)
    })
  }

  const isValidPhone = (phone: string): boolean => {
    const unformatted = unformatPhone(phone)
    return /^\+7\d{10}$/.test(unformatted)
  }

  return {
    formatPhone,
    unformatPhone,
    handlePhoneInput,
    isValidPhone
  }
}
