export const USER_TABLE_HEADERS = [
  { title: 'ФИО', key: 'fullName', sortable: true },
  { title: 'Дата рождения', key: 'dateOfBirth', sortable: true },
  { title: 'Email', key: 'email', sortable: false },
  { title: 'Телефон', key: 'phone', sortable: false },
  { title: 'Действия', key: 'actions', sortable: false, align: 'center' as const }
]

export const TABLE_ITEMS_PER_PAGE_OPTIONS = [
  { value: 10, title: '10' },
  { value: 25, title: '25' },
  { value: 50, title: '50' },
  { value: 100, title: '100' }
]