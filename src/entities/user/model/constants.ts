import type { CreateUserDto } from './types'

export const INITIAL_USERS_DATA: CreateUserDto[] = [
  {
    fullName: 'Иванов Иван Иванович',
    dateOfBirth: '1990-05-15',
    email: 'ivanov@example.com',
    phone: '+7-999-123-45-67'
  },
  {
    fullName: 'Петрова Анна Сергеевна',
    dateOfBirth: '1985-12-03',
    email: 'petrova@example.com',
    phone: '+7-999-234-56-78'
  },
  {
    fullName: 'Сидоров Алексей Петрович',
    dateOfBirth: '1995-07-22',
    email: 'sidorov@example.com',
    phone: '+7-999-345-67-89'
  },
]