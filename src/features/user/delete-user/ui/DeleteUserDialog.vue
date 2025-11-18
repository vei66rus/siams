<template>
  <v-dialog :model-value="modelValue" max-width="500" persistent @update:model-value="updateDialog">
    <v-card>
      <v-card-title class="bg-error text-white">
        <span class="text-h5">Подтверждение удаления</span>
      </v-card-title>

      <v-card-text class="pa-6">
        <div class="text-h6 mb-4">Вы уверены, что хотите удалить пользователя?</div>

        <v-card v-if="user" class="bg-grey-lighten-4 pa-4" elevation="0">
          <div class="mb-2">
            <strong>ФИО:</strong> {{ user.fullName }}
          </div>
          <div class="mb-2">
            <strong>Email:</strong> {{ user.email }}
          </div>
          <div class="mb-2">
            <strong>Телефон:</strong> {{ user.phone }}
          </div>
        </v-card>

        <v-alert type="warning" variant="tonal" class="mt-4">
          Это действие нельзя отменить!
        </v-alert>

        <v-alert v-if="errorMessage" type="error" closable class="mt-4" @click:close="clearError">
          {{ errorMessage }}
        </v-alert>
      </v-card-text>

      <v-card-actions class="pa-6 pt-0">
        <v-btn color="grey" variant="outlined" size="large" @click="closeDialog"> Отмена </v-btn>
        <v-spacer />
        <v-btn
          color="error"
          variant="elevated"
          size="large"
          prepend-icon="mdi-delete"
          :loading="loading"
          @click="handleDelete"
        >
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { User } from '~/entities/user'
import { useDeleteUser } from '../model/useDeleteUser'

interface Props {
  modelValue: boolean
  user: User | null
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'deleted'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { loading, deleteUser } = useDeleteUser()

const errorMessage = ref('')

const updateDialog = (value: boolean) => {
  emit('update:modelValue', value)
}

const closeDialog = () => {
  emit('update:modelValue', false)
  errorMessage.value = ''
}

const clearError = () => {
  errorMessage.value = ''
}

const handleDelete = async () => {
  if (!props.user) return

  try {
    await deleteUser(props.user.id)
    emit('deleted')
  } catch (error) {
    console.error(error)
  }
}
</script>
