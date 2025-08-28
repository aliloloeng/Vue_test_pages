<template>
  <header
    class="bg-white text-gray-700 px-4 py-3 flex items-center drop-shadow-md"
  >
    <RouterLink to="/" class="mr-2">
      <IconArrow class="w-6 h-6" />
    </RouterLink>

    <div class="flex gap-5 justify-between w-full">
      <div class="flex items-center gap-2">
        <div class="bg-[#3b82f6] p-2 rounded-md flex-shrink-0">
          <IconReport class="w-5 h-5 text-white" />
        </div>
        <div class="leading-tight">
          <h2 class="font-bold text-base sm:text-xl">New Report</h2>
          <p class="text-xs sm:text-sm text-gray-400">TechCrap Industries</p>
        </div>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <button
          class="flex gap-1 px-2 py-1 text-sm sm:text-base text-[#3b82f6] bg-blue-100 rounded-xl hover:shadow-blue-300 shadow-sm"
        >
          <IconSave />
          Save
        </button>
        <img
          :src="user"
          alt="User Avatar"
          class="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 object-cover"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import user from "@/assets/images/user.jpg";
import IconArrow from "./icons/IconArrow.vue";
import IconReport from "./icons/IconReport.vue";
import IconSave from "./icons/IconSave.vue";
</script>

<style scoped></style>
