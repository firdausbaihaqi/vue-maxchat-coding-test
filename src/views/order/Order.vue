<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <div class="card-header">
          <h6 class="h6">Buat Order Baru</h6>
        </div>
        <form @submit.prevent="handleSubmit" class="card-body">
          <div class="grid gap-4 md:gap-6 md:grid-cols-2">
            <div class="col-span-2">
              <label>Pasien</label>
              <select
                @change="selectPasien($event)"
                class="block w-full py-2 mt-2 form-select form-input"
              >
                <option disabled selected value="not selected">Pilih Pasien</option>
                <option
                  v-for="pasien in dataPasien"
                  :key="pasien.id_pasien"
                  :value="pasien.id_pasien"
                >
                  {{ pasien.nama }}
                </option>
              </select>
            </div>
            <div class="col-span-2 md:col-span-1">
              <label>Obat</label>
              <select
                :disabled="selectedPasien == null"
                @change="selectObat($event)"
                class="block w-full py-2 mt-2 form-select form-input"
              >
                <option disabled selected value="not selected">Pilih Obat</option>
                <option v-for="obat in dataObat" :key="obat.id_resep" :value="obat.id_resep">
                  {{ obat.nama_obat }}
                </option>
              </select>
            </div>
            <div class="col-span-2 md:col-span-1">
              <label>Jumlah</label>
              <div class="flex w-full gap-2 mt-2">
                <button
                  :disabled="jumlahObat < 1"
                  type="button"
                  @click="jumlahObat--"
                  class="text-white bg-gray-400 btn"
                  :class="jumlahObat < 1 && 'bg-gray-300 cursor-not-allowed'"
                >
                  -
                </button>
                <input
                  :disabled="selectedObat == null"
                  type="number"
                  v-model="jumlahObat"
                  required
                  class="w-full form-input"
                  :class="selectedObat == null && '!bg-gray-200 cursor-not-allowed'"
                />
                <button
                  :disabled="selectedObat == null"
                  type="button"
                  @click="jumlahObat++"
                  class="btn-primary"
                  :class="selectedObat == null && '!bg-gray-200 cursor-not-allowed'"
                >
                  +
                </button>
              </div>
            </div>

            <div class="flex justify-end col-span-2">
              <div class="w-1/2 pl-4 font-bold text-right md:text-left">
                <span>Total : Rp {{ totalHarga }} </span>
              </div>
            </div>
          </div>
          <div class="flex justify-end gap-2 py-5">
            <button
              :disabled="totalHarga == 0"
              type="submit"
              class="btn-primary"
              :class="totalHarga == 0 && '!bg-opacity-50 cursor-not-allowed'"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Layout from '../../layouts/Layout.vue';

const store = useStore();
const router = useRouter();

const jumlahObat = ref(0);
const hargaObat = ref(0);
const totalHarga = computed(() => jumlahObat.value * hargaObat.value);
const selectedPasien = ref(null);
const selectedObat = ref(null);

const selectPasien = (event) => {
  selectedPasien.value = computed(() => store.getters.dataPasien(event.target.value));
  //   console.log(selectedPasien.value);
};

const selectObat = (event) => {
  selectedObat.value = computed(() => store.getters.dataObat(event.target.value));
  jumlahObat.value = 1;
  hargaObat.value = selectedObat.value.value.harga;
  //   console.log(selectedObat.value.value.harga);
};

const fetchPasien = () => store.dispatch('fetchPasien');
const fetchObat = () => store.dispatch('fetchObat');
const dataPasien = computed(() => store.getters.allDataPasien);
const dataObat = computed(() => store.getters.allDataObat);

onMounted(() => {
  fetchPasien();
  fetchObat();
});

const handleSubmit = () => {
  const orderData = {
    pasien: selectedPasien.value,
    obat: selectedObat.value,
    jumlahObat: jumlahObat.value,
    totalHarga: totalHarga,
  };

  store.dispatch('setOrderAction', orderData);

  router.push({ name: 'OrderPreview' });
};
</script>
