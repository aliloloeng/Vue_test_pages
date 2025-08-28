<template>
  <ProductsComponent
    :products="filteredProducts"
    @add-to-cart="$emit('add-to-cart', $event)"
  />
</template>

<script setup>
import { computed } from 'vue'
import ProductsComponent from './ProductsComponent.vue'


const props = defineProps(['products', 'activeCategory'])

const filteredProducts = computed(() => {
  if(props.activeCategory === 'All') return props.products
  return props.products.filter(p => p.categories.includes(props.activeCategory))
})
</script>
