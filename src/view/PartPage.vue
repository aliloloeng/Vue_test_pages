<template>
  <div class="flex justify-center">
    <div>
      <HeaderPartPage/>
      <SearchPart/>
      <CategoriesPart/>
      <ProductsComponent/>
    </div>
  </div>
</template>
<script setup>
import CategoriesPart from '@/components/PartPage/CategoriesPart.vue';
import HeaderPartPage from '@/components/PartPage/HeaderPartPage.vue';
import ProductsComponent from '@/components/PartPage/ProductsComponent.vue';
import SearchPart from '@/components/PartPage/SearchPart.vue';

</script>
<style scoped></style>
