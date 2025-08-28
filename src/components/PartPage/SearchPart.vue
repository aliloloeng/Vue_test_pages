<template>
  <div class="w-[360px] bg-[#f3f4f6] px-4 pt-8 pb-4 ">

    <div class=" bg-white relative">
      <input
        type="text"
        placeholder="Search parts..."
        class="w-full pl-10 pr-4 py-2 border rounded-sm border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <IconSearchBoxComponent/>
    </div>
  </div>
</template>

<script setup>
import IconSearchBoxComponent from './Icons/IconSearchBoxComponent.vue';

</script>

<style scoped></style>
