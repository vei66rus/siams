<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
    :items-per-page-options="itemsPerPageOptions"
    class="elevation-1"
  >
    <template #item.actions="{ item }">
      <div class="d-flex">
        <v-btn
          color="primary"
          size="x-small"
          icon="mdi-pencil"
          class="mr-3"
          @click="emit('edit', item)"
        />
        <v-btn
          color="error"
          size="x-small"
          icon="mdi-delete"
          @click="emit('delete', item)"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import type { User } from '~/entities/user'

interface Props {
  headers: unknown[]
  users: User[]
  search: string
  itemsPerPageOptions: unknown[]
}

interface Emits {
  (e: 'edit', user: User): void
  (e: 'delete', user: User): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>
