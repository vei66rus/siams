import { useUserStore } from '~/entities/user'
import { useSnackbar, SUCCESS_MESSAGES, ERROR_MESSAGES } from '~/shared'

export const useDeleteUser = () => {
  const userStore = useUserStore()
  const { showSuccess, showError } = useSnackbar()

  const loading = ref(false)

  const deleteUser = async (userId: string): Promise<void> => {
    loading.value = true

    try {
      userStore.deleteUser(userId)
      showSuccess(SUCCESS_MESSAGES.USER_DELETED)
    } catch (error) {
      showError(ERROR_MESSAGES.USER_DELETE_ERROR)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    deleteUser
  }
}
