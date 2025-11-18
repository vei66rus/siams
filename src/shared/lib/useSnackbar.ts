interface SnackbarState {
  show: boolean
  message: string
  color: 'success' | 'error' | 'warning' | 'info'
}

const globalSnackbar = ref<SnackbarState>({
  show: false,
  message: '',
  color: 'success'
})

export const useSnackbar = () => {
  const showSnackbar = (
    message: string,
    color: 'success' | 'error' | 'warning' | 'info' = 'success'
  ): void => {
    globalSnackbar.value = {
      show: true,
      message,
      color
    }
  }

  const hideSnackbar = (): void => {
    globalSnackbar.value.show = false
  }

  const showSuccess = (message: string): void => {
    showSnackbar(message, 'success')
  }

  const showError = (message: string): void => {
    showSnackbar(message, 'error')
  }

  const showWarning = (message: string): void => {
    showSnackbar(message, 'warning')
  }

  const showInfo = (message: string): void => {
    showSnackbar(message, 'info')
  }

  return {
    snackbar: globalSnackbar,
    showSnackbar,
    hideSnackbar,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}
