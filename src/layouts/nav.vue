<template>
  <div
    class="fixed top-0 z-40 flex flex-row flex-wrap justify-between w-full p-5 bg-white border-b border-gray-200 shadow-sm "
  >
    <div class="flex flex-none text-indigo-600">
      <strong class="flex-1 mx-2 capitalize">Hospital</strong>
    </div>

    <!-- navbar content -->
    <div class="flex flex-row-reverse items-center">
      <!-- profile -->
      <div class="relative md:static">
        <button
          class="flex flex-wrap items-center menu-btn focus:outline-none focus:shadow-outline"
          @click="isOpen = !isOpen"
        >
          <div class="w-8 h-8 overflow-hidden rounded-full">
            <i class="text-2xl text-indigo-600 fas fa-user-circle"></i>
          </div>

          <div class="flex ml-2 capitalize">
            <h1 class="p-0 m-0 text-sm font-semibold leading-none text-gray-800">nama user</h1>
            <i class="block ml-2 text-xs leading-none fas fa-chevron-down"></i>
          </div>
        </button>

        <div
          x-cloak
          v-if="isOpen"
          class="fixed right-0 z-20 w-full py-2 text-right text-gray-500 bg-white rounded shadow-md  md:text-left md:absolute md:w-40"
        >
          <!-- item -->
          <button
            @click="modalLogout = !modalLogout"
            class="w-full px-4 py-2 text-sm font-medium tracking-wide text-left capitalize transition-all duration-300 ease-in-out bg-white  hover:bg-gray-200 hover:text-gray-900"
          >
            <i class="mr-1 text-xs fas fa-user-times"></i>
            Logout
          </button>
          <!-- end item -->

          <!-- Modal-->
          <div
            v-if="modalLogout"
            class="fixed top-0 left-0 flex items-center justify-center w-full h-full"
          >
            <!-- overlay -->
            <div class="absolute z-10 w-full h-full bg-gray-900 opacity-50"></div>
            <!-- overlay -->

            <div
              class="fixed z-50 flex flex-col w-full px-4 mx-auto mt-10 bg-white border rounded-lg  py-7 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
            >
              <div class="px-4 text-left">
                <!--Title-->
                <div class="flex items-center justify-between pb-3">
                  <p class="text-2xl font-bold text-gray-600">Yakin ingin keluar?</p>
                  <button class="z-50" @click="modalLogout = !modalLogout">
                    <i class="fas fa-times hover:text-red-500"></i>
                  </button>
                </div>
                <hr />
                <!--Body-->
                <p class="py-4">
                  tekan tombol "Logout" dibawah apabila anda ingin mengakhiri sesi anda
                </p>

                <!--Action-->
                <div class="flex justify-end pt-8">
                  <div class="flex gap-2">
                    <button type="submit" class="btn-danger">Logout</button>

                    <button class="btn-secondary" @click.prevent="modalLogout = !modalLogout">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end profile -->
    </div>
    <!-- end navbar content -->
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const isOpen = ref(false);
const modalLogout = ref(false);
</script>

<style lang="scss" scoped></style>
