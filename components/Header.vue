<template>
    <div style="width: 5%;"></div>

    <v-app-bar-title style="font-weight: bold;">PCL Community</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon @click="openGithub">
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn icon @click="openBilibili">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.652q.119.119.198.257h3.213q.08-.14.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0m.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25m-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25m7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25"/></svg>
    </v-btn>

    <div style="width: 5%;"></div>
</template>

<script setup lang="ts">
import { open } from '@/utils/Utils';

const openGithub = () => {
  open('https://github.com/PCL-Community/');
};

const openBilibili = () => {
  open('https://space.bilibili.com/3546847192811755');
};
</script>