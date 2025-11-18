import { useUserStore } from '~/entities/user'
import { USER_TABLE_HEADERS, TABLE_ITEMS_PER_PAGE_OPTIONS } from '~/shared'

export const useUsersList = () => {
  const userStore = useUserStore()

  const search = ref('')

  const headers = USER_TABLE_HEADERS
  const itemsPerPageOptions = TABLE_ITEMS_PER_PAGE_OPTIONS

  const users = computed(() => userStore.users)

  return {
    search,
    headers,
    itemsPerPageOptions,
    users
  }
}
