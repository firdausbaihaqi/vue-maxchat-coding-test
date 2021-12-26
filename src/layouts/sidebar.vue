<template>
  <div>
    <button
      @click="isOpen = !isOpen"
      class="
        fixed
        z-30
        inline-block
        duration-300
        bg-gray-600
        rounded-full
        lg:hidden
        left-5
        w-14
        h-14
        hover:bg-blue-400
        bottom-5
      "
    >
      <i class="text-white fas fa-chevron-right"></i>
    </button>

    <div
      :class="{ hidden: !isOpen }"
      id="sideBar"
      class="
        fixed
        top-0
        left-0
        z-50
        flex-col flex-wrap flex-none
        w-64
        min-h-full
        p-6
        mt-0
        bg-white
        border-r border-gray-200
        md:z-20
        lg:relative
        md:pt-4 md:top-12
        lg:flex
      "
    >
      <!-- sidebar content -->
      <div class="flex flex-col pt-7">
        <!-- sidebar toggle -->
        <div class="block mb-4 text-right lg:hidden">
          <button @click="isOpen = !isOpen">
            <i class="text-lg fas fa-times-circle"></i>
          </button>
        </div>
        <!-- end sidebar toggle -->

        <p class="mb-3 ml-2 text-sm tracking-wider text-gray-600 uppercase">Beranda</p>

        <router-link to="/" class="sidebar-item" active-class="sidebar-item-active">
          <i class="ml-4 mr-2 text-sm fas fa-chart-pie"></i>
          Dashboard
        </router-link>

        <p class="mt-4 mb-3 ml-2 text-sm tracking-wider text-gray-600 uppercase">Pasien</p>

        <router-link to="/pasien" class="sidebar-item" active-class="sidebar-item-active">
          <i class="ml-4 mr-2 text-sm fas fa-user"></i>
          Data pasien
        </router-link>

        <router-link to="/pasien/create" class="sidebar-item" active-class="sidebar-item-active">
          <i class="ml-4 mr-2 text-sm fas fa-user-plus"></i>
          Tambah data pasien
        </router-link>
        <p class="mt-4 mb-3 ml-2 text-sm tracking-wider text-gray-600 uppercase">Obat</p>
        <router-link to="/obat" class="sidebar-item" active-class="sidebar-item-active">
          <i class="ml-4 mr-2 text-sm fas fa-folder"></i>
          Data obat
        </router-link>

        <router-link to="/obat/create" class="sidebar-item" active-class="sidebar-item-active">
          <i class="ml-4 mr-2 text-sm fas fa-folder-plus"></i>
          Tambah data obat
        </router-link>
      </div>
      <!-- end sidebar content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const isOpen = ref(false);
</script>

<style lang="postcss" scoped>
.sidebar-item {
  @apply py-2 pl-2 text-sm capitalize transition duration-200 ease-in-out rounded-full text-gray-500 hover:text-indigo-600;
}

.sidebar-item-active {
  @apply text-indigo-600 hover:bg-indigo-100 bg-indigo-50 !important;
}
</style>
