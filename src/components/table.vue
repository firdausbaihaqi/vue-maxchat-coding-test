<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="th in tableHeader"
                  :key="th"
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                >
                  {{ th.toString().replace('_', ' ') }}
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- penjelasan  -->
              <!-- melakukan perulangan sebanyak items.length. pada setiap perulangan cetak item dengan key yang sesuai dengan tableHeader, karena nama key object dan urutan nya sama -->
              <tr v-for="item in items" :key="item.id">
                <td
                  v-for="th in tableHeader"
                  :key="th"
                  class="px-6 py-4 text-sm text-gray-600 whitespace-nowrap"
                >
                  <!-- limit 30 karakter agar tidak ada teks yang terlihat terlalu lebar -->
                  {{ item[th].toString().substring(0, 30) }}
                </td>

                <td class="flex justify-end gap-3 px-6 py-4 text-lg font-medium whitespace-nowrap">
                  <!-- tableHeader[0] berisi id -->

                  <router-link
                    :to="{ name: 'PasienDetail', params: { id_pasien: item[tableHeader[0]] } }"
                    class="text-yellow-500 cursor-pointer hover:text-yellow-600"
                  >
                    <i class="fas fa-eye"></i>
                  </router-link>

                  <router-link
                    :to="{ name: 'PasienUpdate', params: { id_pasien: item[tableHeader[0]] } }"
                    class="text-indigo-500 cursor-pointer hover:text-indigo-600"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <!-- emit deleteItem dengan parameter item[id_pasien / id_obat] -->
                  <a
                    @click.prevent="this.$emit('deleteItem', item[tableHeader[0]])"
                    class="text-red-500 cursor-pointer hover:text-red-600"
                  >
                    <i class="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tableHeader: Array,
  items: Object,
});

const emit = defineEmits(['deleteItem']);
</script>
