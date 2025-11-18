export interface FormField {
  name: string
  label: string
  type: string
  icon: string
  placeholder?: string
  cols?: number
  mdCols?: number
}

export const USER_FORM_FIELDS: FormField[] = [
  {
    name: 'fullName',
    label: 'ФИО',
    type: 'text',
    icon: 'mdi-account',
    cols: 12
  },
  {
    name: 'dateOfBirth',
    label: 'Дата рождения',
    type: 'date',
    icon: 'mdi-calendar',
    cols: 12,
    mdCols: 6
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    icon: 'mdi-email',
    cols: 12,
    mdCols: 6
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'text',
    icon: 'mdi-phone',
    placeholder: '+7-XXX-XXX-XX-XX',
    cols: 12
  }
]

export const VALIDATION_MESSAGES = {
  REQUIRED: {
    fullName: 'ФИО обязательно для заполнения',
    dateOfBirth: 'Дата рождения обязательна для заполнения',
    email: 'Email обязателен для заполнения',
    phone: 'Телефон обязателен для заполнения'
  },
  FORMAT: {
    fullName: 'ФИО должно содержать минимум Фамилию и Имя',
    fullNamePattern: 'ФИО должно содержать только русские буквы',
    email: 'Некорректный формат email',
    phone: 'Формат телефона: +7-XXX-XXX-XX-XX',
    age: 'Возраст должен быть не менее 18 лет',
    dateOfBirth: 'Дата рождения не может быть в будущем'
  },
  FORM: {
    fillCorrectly: 'Пожалуйста, заполните все поля корректно'
  }
}

export const SUCCESS_MESSAGES = {
  USER_CREATED: 'Пользователь успешно создан',
  USER_UPDATED: 'Пользователь успешно обновлен',
  USER_DELETED: 'Пользователь успешно удален'
}

export const ERROR_MESSAGES = {
  USER_CREATE_ERROR: 'Произошла ошибка при создании пользователя',
  USER_UPDATE_ERROR: 'Произошла ошибка при обновлении пользователя',
  USER_DELETE_ERROR: 'Произошла ошибка при удалении пользователя'
}