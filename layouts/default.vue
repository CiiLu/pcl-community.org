<template>
  <v-app>
    <v-app-bar :elevation="1">
      <Header />
    </v-app-bar>
    <v-main style="margin-left: 10%; margin-right: 10%">
      <slot />
    </v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>
