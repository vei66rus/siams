
export const useTableSearch = () => {
  const search = ref('')

  const clearSearch = () => {
    search.value = ''
  }

  const setSearch = (value: string) => {
    search.value = value
  }

  return {
    search,
    clearSearch,
    setSearch
  }
}
