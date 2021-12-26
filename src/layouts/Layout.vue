<template>
  <main class="bg-gray-50">
    <Navbar />

    <div class="flex flex-row xl:flex-wrap min-h-screen bg-gray-100">
      <Sidebar />
      <section class="flex-1 p-6 mt-20 bg-gray-100">
        <slot></slot>
      </section>
    </div>
  </main>
</template>

<script setup>
import Navbar from './nav.vue';
import Sidebar from './sidebar.vue';
</script>

<style lang="postcss" scoped></style>
