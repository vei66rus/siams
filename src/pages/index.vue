<template>
  <v-container fluid class="pa-4">
    <v-card class="elevation-4">
      <v-card-title class="d-flex justify-space-between align-center bg-primary text-white">
        <span class="text-h5">Список пользователей</span>
        <v-btn color="white" variant="outlined" prepend-icon="mdi-plus" to="/create">
          Добавить пользователя
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-4">
        <v-text-field
          v-model="search"
          label="Поиск по всем полям"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="comfortable"
          clearable
          class="mb-4"
        />

        <UsersTable
          :headers="headers"
          :users="users"
          :search="search"
          :items-per-page-options="itemsPerPageOptions"
          @edit="openEditDialog"
          @delete="openDeleteDialog"
        />
      </v-card-text>
    </v-card>

    <EditUserDialog v-model="editDialog" :user="selectedUser" @updated="handleUserUpdated" />

    <DeleteUserDialog v-model="deleteDialog" :user="selectedUser" @deleted="handleUserDeleted" />

    <AppSnackbar :snackbar="snackbar" @close="hideSnackbar" />
  </v-container>
</template>

<script setup lang="ts">
import type { User } from '~/entities/user'
import { useUsersList, UsersTable } from '~/features/user/users-list'
import { EditUserDialog } from '~/features/user/edit-user'
import { DeleteUserDialog } from '~/features/user/delete-user'
import { useSnackbar } from '~/shared'
import AppSnackbar from '~/shared/ui/AppSnackbar.vue'

const { search, headers, itemsPerPageOptions, users } = useUsersList()
const { snackbar, hideSnackbar } = useSnackbar()

const editDialog = ref(false)
const deleteDialog = ref(false)
const selectedUser = ref<User | null>(null)

const openEditDialog = (user: User) => {
  selectedUser.value = { ...user }
  editDialog.value = true
}

const openDeleteDialog = (user: User) => {
  selectedUser.value = user
  deleteDialog.value = true
}

const handleUserUpdated = () => {
  editDialog.value = false
  selectedUser.value = null
}

const handleUserDeleted = () => {
  deleteDialog.value = false
  selectedUser.value = null
}
</script>
