import type { Ref } from 'vue'

export const useFormSubmit = () => {
  const loading = ref(false)
  const errorMessage = ref('')

  const handleSubmit = async (
    formRef: Ref,
    validationMessage: string,
    submitCallback: () => Promise<void>
  ): Promise<boolean> => {
    const { valid } = await formRef.value?.validate()
    if (!valid) {
      errorMessage.value = validationMessage
      return false
    }

    loading.value = true
    errorMessage.value = ''

    try {
      await submitCallback()
      return true
    } catch (error) {
      console.error(error)
      return false
    } finally {
      loading.value = false
    }
  }

  const clearError = () => {
    errorMessage.value = ''
  }

  return {
    loading,
    errorMessage,
    handleSubmit,
    clearError
  }
}
