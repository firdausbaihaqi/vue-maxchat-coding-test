<template>
  <Layout>
    <!-- welcome -->
    <div
      class="
        text-white
        duration-300
        border-green-400
        shadow-md
        !bg-green-400
        hover:!bg-green-500
        card
        mb-5
      "
    >
      <div class="grid items-center md:flex md:flex-row card-body">
        <div class="items-center justify-center hidden w-40 h-40 md:flex img-wrapper">
          <img src="/happy.svg" alt="img title" />
        </div>

        <div class="py-2 ml-0 md:ml-10">
          <h3 class="text-2xl font-semibold text-white md:text-4xl">
            Selamat datang, {{ username }}!
          </h3>
        </div>
      </div>
    </div>
    <!-- end welcome -->

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- card -->
      <div class="report-card">
        <div class="card">
          <div class="flex flex-col card-body">
            <div class="flex flex-row items-center justify-between">
              <div class="text-xl text-green-500 md:text-3xl fas fa-users"></div>
            </div>

            <div class="flex items-end justify-between mt-8">
              <div>
                <h1 class="h5">{{ totalPasien }}</h1>
                <p>Total Pasien Terdaftar</p>
              </div>

              <router-link to="/pasien" class="text-gray-400 hover:text-indigo-600">
                lihat semua <i class="ml-2 text-sm fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="p-1 mx-4 bg-white border border-t-0 rounded rounded-t-none footer"></div>
      </div>
      <!-- end card -->

      <!-- card -->
      <div class="report-card">
        <div class="card">
          <div class="grid flex-col md:flex card-body">
            <div class="flex flex-row items-center justify-between">
              <div class="text-xl text-indigo-600 md:text-3xl fas fa-clipboard-list"></div>
            </div>

            <div class="flex items-end justify-between mt-8">
              <div>
                <h1 class="h5">{{ totalObat }}</h1>
                <p>Total data Obat</p>
              </div>

              <router-link to="/obat" class="text-gray-400 hover:text-indigo-600">
                lihat semua <i class="ml-2 text-sm fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="p-1 mx-4 bg-white border border-t-0 rounded rounded-t-none footer"></div>
      </div>
      <!-- end card -->
    </div>
  </Layout>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { getUserLogin } from '../helpers/auth';
import Layout from '../layouts/Layout.vue';

const store = useStore();
const username = ref(null);
const totalPasien = computed(() => store.getters.allDataPasien.length);
const totalObat = computed(() => store.getters.allDataObat.length);

const fetchPasien = () => store.dispatch('fetchPasien');
const fetchObat = () => store.dispatch('fetchObat');

onMounted(() => {
  const { data } = getUserLogin();
  username.value = data.username;
  fetchObat();
  fetchPasien();
});
</script>
