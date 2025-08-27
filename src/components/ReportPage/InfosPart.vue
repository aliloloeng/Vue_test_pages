<template>
  <section class="bg-[#f3f4f6] p-4">
    <div class=" py-2 px-4 border border-[#d0e0f6] bg-[#eef2ff] rounded-xl flex ">
      <div class="mt-2 mr-2">
        <IconInfo/>
      </div>
      <div>
        <h3 class="text-[#364f98] font-semibold">Draft Mode Active</h3>
      <p class="text-[#4971e0] w-[298px] "> You can start filling out this report and return later to complete it. Please note: submissions are monitored by the admin team</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import IconInfo from './icons/IconInfo.vue';
</script>
