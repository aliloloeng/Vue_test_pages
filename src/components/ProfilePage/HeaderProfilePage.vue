<template>
  <header class="bg-white gap-15 text-gray-700 font-semibold px-2 py-3 flex justify-center items-center drop-shadow-md relative z-50 w-[95%] max-w-[375px] mx-auto">
    <RouterLink to="/">
      <IconArrow class="w-6 h-6"/>
    </RouterLink>

    <h1 class="text-xl font-bold text-gray-700">Support Center</h1>

    <button @click="toggleMenu" class="focus:outline-none">
      <component :is="menuOpen ? IconClose : IconVerticalMenu" class="w-6 h-6"/>
    </button>
  </header>

  <div
    v-if="menuOpen"
    class="fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300"
    @click="toggleMenu"
  ></div>

  <div
    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300"
    :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <h2 class="text-xl font-bold mb-6">Menu</h2>
    <ul class="space-y-4">
      <li>
        <RouterLink to="/" class="block hover:text-blue-500 transition">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/machines" class="block hover:text-blue-500 transition">
          Machines
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="block hover:text-blue-500 transition">
          About
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconVerticalMenu from './Icons/IconVerticalMenu.vue'
import IconClose from './Icons/IconClose.vue'
import IconArrow from './Icons/IconArrow.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
