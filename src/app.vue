<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-title class="text-h5 font-weight-bold">
        Управление пользователями
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <NuxtPage />
    </v-main>

    <v-footer color="primary" app>
      <v-container>
        <div class="text-center text-white">
          <span>&copy; {{ new Date().getFullYear() }} - SIAMS Ekaterinburg </span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>
