<template>
  <Layout>
    <Preview v-if="data" title="Data Obat" :routerLinkAndParams="routerLinkAndParams" :items="data" />
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
  id_resep: String,
});

const data = ref(null);
const routerLinkAndParams = { name: 'ObatUpdate', params: { id_resep: props.id_resep } };

const fetchObat = () => store.dispatch('fetchObat');

onMounted(() => {
  fetchObat();
  const obat = computed(() => store.getters.dataObat(props.id_resep));
  data.value = obat.value;
});
</script>
