import type { UpdateUserDto } from '~/entities/user'
import { useUserStore } from '~/entities/user'
import { useSnackbar, SUCCESS_MESSAGES, ERROR_MESSAGES } from '~/shared'

export const useEditUser = () => {
  const userStore = useUserStore()
  const { showSuccess, showError } = useSnackbar()

  const loading = ref(false)

  const updateUser = async (userData: UpdateUserDto): Promise<void> => {
    loading.value = true

    try {
      userStore.updateUser(userData)
      showSuccess(SUCCESS_MESSAGES.USER_UPDATED)
    } catch (error) {
      showError(ERROR_MESSAGES.USER_UPDATE_ERROR)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    updateUser
  }
}
