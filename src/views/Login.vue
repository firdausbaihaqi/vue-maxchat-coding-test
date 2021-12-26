<template>
  <section class="w-full min-h-screen px-4 py-10 bg-gray-100 md:px-8 md:py-16 xl:px-8">
    <div class="max-w-5xl mx-auto md:mt-5">
      <div class="flex flex-col items-center md:flex-row">
        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <img
            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
            alt="missing img"
            class="hidden transform translate-y-10 md:inline"
          />
        </div>

        <div class="w-full mt-16 md:mt-0 md:w-2/5">
          <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl  px-7"
          >
            <h3 class="mb-6 text-2xl font-semibold text-center">Mohon masuk terlebih dahulu</h3>

            <form method="post" class="mt-8">
              <div class="py-1">
                <label for="email" class="px-1 text-sm text-gray-600 md:text-base">Email</label>
                <div>
                  <span class="absolute z-10 pt-4 pl-3 text-gray-600 md:pt-3">
                    <svg
                      class="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      ></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </span>
                  <input
                    name="email"
                    placeholder="Masukan Email"
                    type="email"
                    value=""
                    class="input-text-icon"
                  />
                </div>
              </div>

              <div class="py-1">
                <label for="password" class="px-1 text-sm text-gray-600 md:text-base"
                  >Password</label
                >
                <div>
                  <span class="absolute z-10 pt-4 pl-3 text-gray-600 md:pt-3">
                    <svg
                      class="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>

                  <input
                    name="password"
                    placeholder="Masukan Password"
                    :type="show ? 'text' : 'password'"
                    class="input-text-icon"
                  />

                  <span
                    @click="show = !show"
                    class="absolute right-0 z-10 pt-3 pr-10 text-gray-600 cursor-pointer md:pt-3"
                  >
                    <i v-if="show" class="w-5 h-5 fas fa-eye-slash"></i>
                    <i v-else-if="!show" class="w-5 h-5 fas fa-eye"></i>
                  </span>
                </div>
              </div>

              <div class="block pt-6">
                <button type="submit" class="w-full btn-primary">Masuk</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const show = ref(false);
</script>

<style lang="postcss" scoped>
.input-text-icon {
  @apply w-full px-3 py-3 text-gray-700 placeholder-gray-400 rounded-lg outline-none focus:outline-none pl-11 border-gray-300;
}
</style>
