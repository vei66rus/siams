<template>
  <v-form ref="formRef" v-model="isValid" @submit.prevent="emit('submit')">
    <v-row>
      <v-col
        v-for="field in fields"
        :key="field.name"
        :cols="field.cols || 12"
        :md="field.mdCols || field.cols || 12"
      >
        <v-text-field
          v-model="formData[field.name]"
          :label="field.label"
          :type="field.type"
          :rules="getRules(field.name)"
          :placeholder="field.placeholder"
          variant="outlined"
          density="comfortable"
          required
          :prepend-inner-icon="field.icon"
        />
      </v-col>
    </v-row>

    <v-alert v-if="errorMessage" type="error" closable class="mb-4" @click:close="clearError">
      {{ errorMessage }}
    </v-alert>

    <slot name="actions" :is-valid="isValid" :loading="loading" />
  </v-form>
</template>

<script setup lang="ts">
import type { FormField } from '~/shared'
import { useValidation, usePhoneFormatter } from '~/shared'

interface Props {
  modelValue: Record<string, string>
  fields: FormField[]
  errorMessage?: string
  loading?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: Record<string, string>): void
  (e: 'submit'): void
  (e: 'clearError'): void
}

const props = withDefaults(defineProps<Props>(), {
  errorMessage: '',
  loading: false
})

const emit = defineEmits<Emits>()

const { fullNameRules, dateOfBirthRules, emailRules, phoneRules } = useValidation()
const { formatPhone } = usePhoneFormatter()

const formRef = ref()
const isValid = ref(false)

const formData = computed({
  get: () => props.modelValue,
  set: value => {
    if (value.phone && value.phone !== props.modelValue.phone) {
      value.phone = formatPhone(value.phone)
    }
    emit('update:modelValue', value)
  }
})

const validationRulesMap: Record<string, unknown[]> = {
  fullName: fullNameRules,
  dateOfBirth: dateOfBirthRules,
  email: emailRules,
  phone: phoneRules
}

const getRules = (fieldName: string) => {
  return validationRulesMap[fieldName] || []
}

const clearError = () => {
  emit('clearError')
}

const validate = async () => {
  const result = await formRef.value?.validate()
  return result?.valid || false
}

defineExpose({
  validate
})
</script>
