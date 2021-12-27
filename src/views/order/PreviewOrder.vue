<template>
  <Layout>
    <div class="card">
      <div class="flex justify-between card-header">
        <div>
          <h6 class="text-lg font-bold md:text-xl">Preview Order</h6>
          <span class="hidden text-gray-500 normal-case md:inline">Detail Order anda </span>
        </div>
      </div>

      <!-- card body -->
      <div class="pb-4">
        <!-- item -->
        <div v-if="pasien">
          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Nama Pasien </span>
            </div>
            <div class="col-span-2">
              <span>{{ pasien.nama }}</span>
            </div>
          </div>

          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Alamat </span>
            </div>
            <div class="col-span-2">
              <span>{{ pasien.alamat }}</span>
            </div>
          </div>

          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> No HP </span>
            </div>
            <div class="col-span-2">
              <span>{{ pasien.no_hp }}</span>
            </div>
          </div>
        </div>
        <!-- end of item -->

        <!-- item -->
        <div class="mt-8" v-if="obat">
          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Id Resep </span>
            </div>
            <div class="col-span-2">
              <span>{{ obat.id_resep }}</span>
            </div>
          </div>

          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Nama Obat </span>
            </div>
            <div class="col-span-2">
              <span>{{ obat.nama_obat }}</span>
            </div>
          </div>

          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Dosis </span>
            </div>
            <div class="col-span-2">
              <span>{{ obat.dosis_obat }}</span>
            </div>
          </div>

          <div class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Harga </span>
            </div>
            <div class="col-span-2">
              <span>{{ obat.harga }} x {{ jumlahObat }} </span>
            </div>
          </div>
        </div>
        <!-- end of item -->

        <!-- total -->
        <div class="pt-4 border-t-2" v-if="totalHarga">
          <div class="grid px-6 py-4 text-lg font-bold md:grid-cols-3 md:gap-6">
            <div class="col-span-1">
              <span class="text-gray-600"> Total Harga </span>
            </div>
            <div class="col-span-2">
              <span>{{ totalHarga }} </span>
            </div>
          </div>
        </div>
        <!-- end of total -->
      </div>
      <!-- end of card body -->
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../../layouts/Layout.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const store = useStore();
const router = useRouter();

const dataOrder = ref(null);
const pasien = ref(null);
const obat = ref(null);
const jumlahObat = ref(null);
const totalHarga = ref(null);

onMounted(() => {
  dataOrder.value = computed(() => store.getters.dataOrder);

  if (store.getters.dataOrder == null) {
    router.push({ name: 'Order' });
  }

  pasien.value = dataOrder.value.value.pasien;
  obat.value = dataOrder.value.value.obat;
  jumlahObat.value = dataOrder.value.value.jumlahObat;
  totalHarga.value = dataOrder.value.value.totalHarga;
});
</script>
