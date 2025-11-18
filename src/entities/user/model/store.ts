import { defineStore } from 'pinia'
import type { User, CreateUserDto, UpdateUserDto } from './types'
import { INITIAL_USERS_DATA } from './constants'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>(
    INITIAL_USERS_DATA.map((user, index) => ({
      id: `user-${index + 1}`,
      ...user
    }))
  )

  const getUserById = (id: string): User | undefined => {
    return users.value.find(user => user.id === id)
  }

  const createUser = (userData: CreateUserDto): void => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      ...userData
    }
    users.value.push(newUser)
  }

  const updateUser = (userData: UpdateUserDto): void => {
    const index = users.value.findIndex(user => user.id === userData.id)
    if (index === -1) {
      throw new Error('Пользователь не найден')
    }
    users.value[index] = { ...userData }
  }

  const deleteUser = (id: string): void => {
    const index = users.value.findIndex(user => user.id === id)
    if (index === -1) {
      throw new Error('Пользователь не найден')
    }
    users.value.splice(index, 1)
  }

  return {
    users,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  }
})