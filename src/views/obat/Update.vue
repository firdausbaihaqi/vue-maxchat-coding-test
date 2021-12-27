<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <div class="card-header">
          <h6 class="h6">Edit Data Obat</h6>
        </div>
        <form @submit.prevent="handleSubmit" class="card-body">
          <div class="grid grid-cols-1 gap-0 sm:gap-4 md:gap-6 md:grid-cols-2">
            <div class="col-span-1 sm:col-span-2">
              <label>ID Obat</label>
              <input
                type="number"
                required
                disabled
                v-model="data.id_resep"
                class="block w-full py-2 mt-2 form-input !bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div class="col-span-1 sm:col-span-2">
              <label>Nama </label>
              <input
                type="text"
                required
                v-model="data.nama_obat"
                class="block w-full py-2 mt-2 form-input"
              />
            </div>

            <div>
              <label>Dosis Obat <span class="text-sm text-gray-400"> (dalam mg/g)</span></label>
              <input
                type="text"
                required
                v-model="data.dosis_obat"
                class="block w-full py-2 mt-2 form-input"
              />
            </div>
            <div>
              <label>Harga</label>
              <input
                type="number"
                required
                v-model="data.harga"
                class="block w-full py-2 mt-2 form-input"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2 py-5">
            <button type="submit" class="btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../../layouts/Layout.vue';
import Table from '../../components/table.vue';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

const props = defineProps({
  id_resep: String,
});

const router = useRouter();
const store = useStore();

const data = ref({
  id_resep: null,
  nama_obat: null,
  dosis_obat: null,
  harga: null,
});

const fetchObat = () => store.dispatch('fetchObat');
onMounted(() => {
  fetchObat();

  const obat = computed(() => store.getters.dataObat(props.id_resep));
  data.value = {
    id_resep: props.id_resep,
    nama_obat: obat.value.nama_obat,
    dosis_obat: obat.value.dosis_obat,
    harga: obat.value.harga,
  };
});

const updateObat = (updatedObat) => {
  const payload = {
    id_resep: props.id_resep,
    updatedObat: updatedObat,
  };

  store.dispatch('updateObatAction', payload);
};

const handleSubmit = () => {
  updateObat(data.value);
  router.push({ name: 'Obat' });
};
</script>
