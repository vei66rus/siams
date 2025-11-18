export interface User {
  id: string
  fullName: string
  dateOfBirth: string
  email: string
  phone: string
}

export interface CreateUserDto {
  fullName: string
  dateOfBirth: string
  email: string
  phone: string
}

export interface UpdateUserDto extends CreateUserDto {
  id: string
}