<template>
  <ul class="px-2">
    <li
      v-for="activity in activities"
      :key="activity.id"
      class="flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
    >
      <component :is="activity.icon" class="w-6 h-6 text-blue-500"/>
      <div class="flex-1 ml-4">
        <p class="font-bold text-gray-800 mb-1">{{ activity.title }}</p>
        <p class="text-sm text-gray-400">{{ activity.subtitle }}</p>

      </div>
      <div class="flex flex-col justify-end">
        <span
          :class="{
            'text-green-600 bg-green-100 rounded-xl py-1 px-3': activity.status.toLowerCase() === 'active',
            'text-orange-600 bg-orange-100 rounded-xl py-1 px-3': activity.status.toLowerCase() === 'maintenance'
          }"
          class="font-semibold text-sm mr-4"
        >
          {{ activity.status }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  activities: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
</style>
