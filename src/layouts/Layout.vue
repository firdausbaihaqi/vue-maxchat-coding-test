<template>
  <main class="bg-gray-50">
    <Navbar @logout="logout" />

    <div class="flex flex-row min-h-screen bg-gray-100 xl:flex-wrap">
      <Sidebar />
      <section class="flex-1 p-6 mt-20 bg-gray-100">
        <slot></slot>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { getUserLogin, removeUserLogin } from '../helpers/auth';

import Navbar from './nav.vue';
import Sidebar from './sidebar.vue';

const router = useRouter();

onMounted(() => {
  const { isLoggedIn } = getUserLogin();

  if (!isLoggedIn) {
    router.push({ name: 'Login' });
  }
});

const logout = () => {
  removeUserLogin();
  router.push({ name: 'Login' });
};
</script>

<style lang="postcss" scoped></style>
