<template>
  <v-snackbar
    :model-value="snackbar.show"
    :color="snackbar.color"
    :timeout="timeout"
    location="top right"
    @update:model-value="handleUpdate"
  >
    {{ snackbar.message }}
    <template #actions>
      <v-btn variant="text" @click="onClose">
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
interface Props {
  snackbar: {
    show: boolean
    message: string
    color: string
  }
  timeout?: number
}

interface Emits {
  (e: 'close'): void
}

withDefaults(defineProps<Props>(), {
  timeout: 3000
})

const emit = defineEmits<Emits>()

const handleUpdate = (value: boolean) => {
  if (!value) {
    emit('close')
  }
}

const onClose = () => {
  emit('close')
}
</script>
