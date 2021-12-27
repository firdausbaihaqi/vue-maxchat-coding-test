<template>
  <Layout>
    <Preview v-if="data" title="Data Pasien" :routerLinkAndParams="routerLinkAndParams" :items="data" />
  </Layout>
</template>

<script setup>
import Layout from '../../layouts/Layout.vue';
import Preview from '../../components/preview.vue';
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';

const store = useStore();
const props = defineProps({
  id_pasien: String,
});

const data = ref(null);
const routerLinkAndParams = { name: 'PasienUpdate', params: { id_pasien: props.id_pasien } };

const fetchPasien = () => store.dispatch('fetchPasien');

onMounted(() => {
  fetchPasien();
  const pasien = computed(() => store.getters.dataPasien(props.id_pasien));
  data.value = pasien.value;
});
</script>

<style lang="scss" scoped></style>
