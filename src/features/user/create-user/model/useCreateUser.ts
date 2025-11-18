import type { CreateUserDto } from '~/entities/user'
import { useUserStore } from '~/entities/user'
import { useSnackbar, SUCCESS_MESSAGES, ERROR_MESSAGES } from '~/shared'

export const useCreateUser = () => {
  const userStore = useUserStore()
  const { showSuccess, showError } = useSnackbar()
  const router = useRouter()

  const loading = ref(false)

  const createUser = async (userData: CreateUserDto): Promise<void> => {
    loading.value = true

    try {
      userStore.createUser(userData)
      showSuccess(SUCCESS_MESSAGES.USER_CREATED)

      setTimeout(() => {
        router.push('/')
      }, 500)
    } catch (error) {
      showError(ERROR_MESSAGES.USER_CREATE_ERROR)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    createUser
  }
}
