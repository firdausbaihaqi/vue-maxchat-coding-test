<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <!-- header -->
        <div class="flex justify-between card-header">
          <h4 class="h6">Daftar Obat</h4>
          <router-link to="/obat/create">
            <button class="btn-primary">Tambah</button>
          </router-link>
        </div>

        <!-- content -->
        <div class="p-4 md:p-8 overflow-x-scroll max-w-[85vw] sm:max-w-[90vw] lg:max-w-none">
          <div v-if="dataObat.length > 0">
            <Table :tableHeader="tableHeader" :items="dataObat" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import axios from 'axios';
import Layout from '../../layouts/Layout.vue';
import Table from '../../components/table.vue';
import { onMounted, ref } from '@vue/runtime-core';

const dataObat = ref([]);
const tableHeader = ['id_resep', 'nama_obat', 'dosis_obat', 'harga'];

onMounted(async () => {
  axios.get('data/obat.json').then((res) => {
    dataObat.value = res.data;
    // console.log(dataObat.value);
  });
});
</script>
