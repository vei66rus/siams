<template>
  <v-container fluid class="pa-4">
    <v-card class="mx-auto elevation-4" max-width="800">
      <v-card-title class="bg-primary text-white">
        <span class="text-h5">Создание нового пользователя</span>
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
              <v-btn
                color="grey"
                variant="outlined"
                size="large"
                prepend-icon="mdi-arrow-left"
                @click="router.push('/')"
              >
                Назад
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
                Создать
              </v-btn>
            </div>
          </template>
        </UserForm>
      </v-card-text>
    </v-card>

    <AppSnackbar :snackbar="snackbar" @close="hideSnackbar" />
  </v-container>
</template>

<script setup lang="ts">
import { UserForm } from '~/widgets/user-form'
import { useCreateUser } from '~/features/user/create-user'
import { USER_FORM_FIELDS, VALIDATION_MESSAGES, useSnackbar } from '~/shared'
import AppSnackbar from '~/shared/ui/AppSnackbar.vue'

const router = useRouter()
const { loading, createUser } = useCreateUser()
const { snackbar, hideSnackbar } = useSnackbar()

const formRef = ref()
const errorMessage = ref('')
const formFields = USER_FORM_FIELDS

const formData = ref({
  fullName: '',
  dateOfBirth: '',
  email: '',
  phone: ''
})

const handleSubmit = async () => {
  const isValid = await formRef.value?.validate()
  if (!isValid) {
    errorMessage.value = VALIDATION_MESSAGES.FORM.fillCorrectly
    return
  }

  errorMessage.value = ''

  try {
    await createUser(formData.value)
  } catch (error) {
    console.error(error)
  }
}
</script>
