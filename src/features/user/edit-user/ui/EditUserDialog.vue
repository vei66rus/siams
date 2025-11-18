<template>
  <v-dialog :model-value="modelValue" max-width="800" persistent @update:model-value="updateDialog">
    <v-card>
      <v-card-title class="bg-primary text-white">
        <span class="text-h5">Редактирование пользователя</span>
      </v-card-title>

      <v-card-text class="pa-6">
        <UserForm
          ref="formRef"
          v-model="formData"
          :fields="formFields"
          :error-message="errorMessage"
          :loading="loading"
          @submit="handleSubmit"
          @clear-error="errorMessage = ''"
        >
          <template #actions="{ isValid }">
            <div class="d-flex justify-space-between w-100">
              <v-btn color="grey" variant="outlined" size="large" @click="closeDialog">
                Отмена
              </v-btn>
              <v-btn
                color="primary"
                variant="elevated"
                size="large"
                prepend-icon="mdi-content-save"
                :disabled="!isValid"
                :loading="loading"
                @click="handleSubmit"
              >
                Сохранить
              </v-btn>
            </div>
          </template>
        </UserForm>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { User } from '~/entities/user'
import { UserForm } from '~/widgets/user-form'
import { useEditUser } from '../model/useEditUser'
import { USER_FORM_FIELDS, VALIDATION_MESSAGES } from '~/shared'

interface Props {
  modelValue: boolean
  user: User | null
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'updated'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { loading, updateUser } = useEditUser()

const formRef = ref()
const errorMessage = ref('')
const formFields = USER_FORM_FIELDS

const formData = ref({
  id: '',
  fullName: '',
  dateOfBirth: '',
  email: '',
  phone: ''
})

watch(
  () => props.user,
  newUser => {
    if (newUser) {
      formData.value = { ...newUser }
      errorMessage.value = ''
    }
  },
  { immediate: true }
)

const updateDialog = (value: boolean) => {
  emit('update:modelValue', value)
}

const closeDialog = () => {
  emit('update:modelValue', false)
  errorMessage.value = ''
}

const handleSubmit = async () => {
  const isValid = await formRef.value?.validate()
  if (!isValid) {
    errorMessage.value = VALIDATION_MESSAGES.FORM.fillCorrectly
    return
  }

  try {
    await updateUser(formData.value)
    emit('updated')
  } catch (error) {
    console.error(error)
  }
}
</script>
