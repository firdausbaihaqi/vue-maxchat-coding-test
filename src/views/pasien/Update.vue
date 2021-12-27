<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <div class="card-header">
          <h6 class="h6">Edit Data pasien</h6>
        </div>
        <form @submit.prevent="handleSubmit" class="card-body">
          <div class="grid grid-cols-1 gap-0 sm:gap-4 md:gap-6 md:grid-cols-2">
            <div>
              <label>ID Pasien</label>
              <input
                type="number"
                disabled
                v-model="data.id_pasien"
                class="block w-full py-2 mt-2 form-input !bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label>NIK</label>
              <input type="number" v-model="data.nik" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div class="col-span-1 sm:col-span-2">
              <label>Nama </label>
              <input type="text" v-model="data.nama" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div>
              <label>Usia</label>
              <input type="number" v-model="data.usia" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div>
              <label>Jenis Kelamin</label>
              <select v-model="data.gender" class="block w-full py-2 mt-2 form-select form-input">
                <option disabled selected value="not selected">Pilih jenis kelamin</option>
                <option value="laki-laki">laki-laki</option>
                <option value="perempuan">perempuan</option>
              </select>
            </div>
            <div>
              <label>No HP</label>
              <div>
                <input type="text" v-model="data.no_hp" class="block w-full py-2 mt-2 form-input" />
              </div>
            </div>
            <div>
              <label>Alamat</label>
              <input type="text" v-model="data.alamat" class="block w-full py-2 mt-2 form-input" />
            </div>
          </div>
          <div class="flex justify-end gap-2 py-5">
            <button type="submit" class="btn-primary">Update</button>
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
  id_pasien: String,
});

const router = useRouter();
const store = useStore();

const data = ref({
  id_pasien: null,
  nik: null,
  nama: null,
  usia: null,
  gender: null,
  alamat: null,
  no_hp: null,
});

const fetchPasien = () => store.dispatch('fetchPasien');
onMounted(() => {
  fetchPasien();

  const pasien = computed(() => store.getters.dataPasien(props.id_pasien));
  data.value = {
    id_pasien: props.id_pasien,
    nik: pasien.value.nik,
    nama: pasien.value.nama,
    usia: pasien.value.usia,
    gender: pasien.value.gender,
    alamat: pasien.value.alamat,
    no_hp: pasien.value.no_hp,
  };
});

const updatePasien = (updatedPasien) => {
  const payload = {
    id_pasien: props.id_pasien,
    updatedPasien: updatedPasien,
  };

  store.dispatch('updatePasienAction', payload);
};

const handleSubmit = () => {
  updatePasien(data.value);
  router.push({ name: 'Pasien' });
};

// console.log(lastIdPasien);
</script>
