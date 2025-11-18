export const useDialog = () => {
  const isOpen = ref(false)

  const openDialog = () => {
    isOpen.value = true
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  const toggleDialog = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    openDialog,
    closeDialog,
    toggleDialog
  }
}
