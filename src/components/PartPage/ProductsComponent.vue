<template>
  <section class="grid grid-cols-2 gap-4">
    <div
      v-for="(item, i) in products"
      :key="i"
      class="bg-white rounded-xl flex-1 items-center shadow-sm hover:shadow-md transition"
    >
      <div class="relative">
        <img :src="item.image" alt="part" class="w-full h-20 object-cover rounded-t-lg" />
        <div
          class="absolute top-1 right-1 px-2 py-1 rounded-full text-xs font-semibold"
          :class="{
            'bg-red-100 text-red-600': item.Qty === 0,
            'bg-yellow-100 text-yellow-600': item.Qty > 0 && item.Qty < 5,
            'bg-green-100 text-green-600': item.Qty >= 5
          }"
        >
          {{ item.Qty === 0 ? "Out of stock" : item.Qty < 5 ? "Low stock" : "In stock" }}
        </div>
      </div>

      <div class="px-3">
        <div class="flex-1">
          <div>
            <h2 class="font-semibold text-gray-700 h-15 text-lg my-2">{{ item.name }}</h2>
            <p class="text-gray-500 text-sm mb-2">{{ item.categories }}</p>
          </div>
          <div class="flex items-center justify-between mb-2">
            <p class="text-blue-600 text-lg font-semibold">${{ item.price }}</p>
            <p class="text-gray-500 text-ms">Qty : {{ item.Qty }}</p>
          </div>
        </div>

        <button
          class="mb-2 py-2 w-full rounded-lg text-white"
          :class="item.Qty === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 cursor-pointer hover:bg-blue-600'"
          @click="$emit('add-to-cart', item)"
          :disabled="item.Qty === 0"
        >
          {{ item.Qty === 0 ? 'Out Of Stock' : 'Add To Cart' }}
        </button>
        
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  products: { type: Array, required: true }
})
</script>
