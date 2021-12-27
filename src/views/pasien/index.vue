<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <!-- header -->
        <div class="flex justify-between card-header">
          <h4 class="h6">Daftar Pasien</h4>
          <router-link to="/pasien/create">
            <button class="btn-primary">Tambah</button>
          </router-link>
        </div>

        <!-- content -->
        <div class="p-4 md:p-8 overflow-x-scroll max-w-[85vw] sm:max-w-[90vw] lg:max-w-none">
          <div v-if="dataPasien.length > 0">
            <Table
              :tableHeader="tableHeader"
              :items="dataPasien"
              :detailLinkName="detailLinkName"
              :updateLinkName="updateLinkName"
              @deleteItem="deletePasien"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../../layouts/Layout.vue';
import Table from '../../components/table.vue';
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();

const tableHeader = ['id_pasien', 'nama', 'usia', 'gender', 'alamat'];
const detailLinkName = 'PasienDetail';
const updateLinkName = 'PasienUpdate';

const fetchPasien = () => store.dispatch('fetchPasien');
const dataPasien = computed(() => store.getters.allDataPasien);

const deletePasien = (id_pasien) => store.dispatch('deletePasienAction', id_pasien);

onMounted(() => {
  fetchPasien();
});
</script>
