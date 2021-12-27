<template>
  <div class="card">
    <div class="flex justify-between card-header">
      <div>
        <h6 class="text-lg font-bold md:text-xl">Preview {{ title }}</h6>
        <span class="hidden text-gray-500 normal-case md:inline">Detail dari {{ title }} </span>
      </div>
      <div class="flex-grow-0">
        <router-link :to="routerLinkAndParams">
          <button class="btn-primary">Edit</button>
        </router-link>
      </div>
    </div>

    <!-- card body -->
    <div class="pb-4">
      <!-- item -->
      <div
        v-for="(item, objectKey) in items"
        :key="item"
        class="grid px-6 py-4 border-b md:grid-cols-3 md:gap-6"
      >
        <div class="col-span-1">
          <span class="text-gray-600"> {{ objectKey.toString().replace('_', ' ') }} </span>
        </div>
        <div class="col-span-2">
          <span>{{ item }}</span>
        </div>
      </div>
      <!-- end of item -->
    </div>
    <!-- end of card body -->
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  routerLinkAndParams: Object,
  items: Object,
});
</script>

<style lang="scss" scoped></style>
