<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <div class="card-header">
          <h6 class="h6">Tambahkan Data obat Baru</h6>
        </div>
        <div class="card-body">
          <div>
            <div class="grid grid-cols-1 gap-0 sm:gap-4 md:gap-6 md:grid-cols-2">
              <div class="col-span-1 sm:col-span-2">
                <label>ID Obat</label>
                <input
                  type="number"
                  disabled
                  class="block w-full py-2 mt-2 form-input !bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div class="col-span-1 sm:col-span-2">
                <label>Nama </label>
                <input type="text" class="block w-full py-2 mt-2 form-input" />
              </div>

              <div>
                <label>Dosis Obat <span class="text-sm text-gray-400"> (dalam mg/g)</span></label>
                <div class="flex gap-2">
                  <input type="number" class="w-4/5 py-2 mt-2 form-input" />
                  <select class="w-1/5 py-2 mt-2 form-select form-input">
                    <option value="Mg">Mg</option>
                    <option value="G">G</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Harga</label>
                <input type="number" class="block w-full py-2 mt-2 form-input" />
              </div>
            </div>
            <div class="flex justify-end gap-2 py-5">
              <button type="submit" class="btn-primary">Tambah</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../../layouts/Layout.vue';
import Table from '../../components/table.vue';
</script>
