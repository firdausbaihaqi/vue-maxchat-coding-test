<template>
  <Layout>
    <div class="w-full">
      <div class="card">
        <div class="card-header">
          <h6 class="h6">Tambahkan Data pasien Baru</h6>
        </div>
        <div class="card-body">
          <div class="grid grid-cols-1 gap-0 sm:gap-4 md:gap-6 md:grid-cols-2">
            <div>
              <label>ID Pasien</label>
              <input
                type="number"
                disabled
                class="block w-full py-2 mt-2 form-input !bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label>NIK</label>
              <input type="number" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div class="col-span-1 sm:col-span-2">
              <label>Nama </label>
              <input type="text" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div>
              <label>Usia</label>
              <input type="number" class="block w-full py-2 mt-2 form-input" />
            </div>
            <div>
              <label>Jenis Kelamin</label>
              <select class="block w-full py-2 mt-2 form-select form-input">
                <option disabled selected value="not selected">Pilih jenis kelamin</option>
                <option value="laki-laki">laki-laki</option>
                <option value="perempuan">perempuan</option>
              </select>
            </div>
            <div>
              <label>No HP</label>
              <div>
                <span class="absolute mt-[9px] text-gray-500 ml-3">+62 </span>
                <input type="number" class="block w-full py-2 mt-2 form-input !pl-11" />
              </div>
            </div>
            <div>
              <label>Alamat</label>
              <input type="text" class="block w-full py-2 mt-2 form-input" />
            </div>
          </div>
          <div class="flex justify-end gap-2 py-5">
            <button type="submit" class="btn-primary">Tambah</button>
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
