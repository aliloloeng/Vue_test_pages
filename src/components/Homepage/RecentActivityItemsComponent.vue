<template>
  <ul class="px-2">
    <li
      v-for="activity in activities"
      :key="activity.id"
      class="flex items-end justify-between p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
    >
      <component :is="activity.icon" class="w-6 h-6 mb-11 text-blue-500"/>
      <div class="flex-1 ml-4">
        <p class="font-bold text-gray-800 mb-1">{{ activity.title }}</p>
        <p class="text-sm text-gray-400 mb-2">{{ activity.subtitle }}</p>
        <span
          :class="{
            'text-green-500 bg-green-200 rounded-xl py-1 px-2': activity.status.toLowerCase() === 'completed',
            'text-blue-500 bg-blue-200 rounded-xl py-1 px-2': activity.status.toLowerCase() === 'in progress',
            'text-red-500 bg-red-200 rounded-xl py-1 px-2': activity.status.toLowerCase() === 'pending'
          }"
          class="font-semibold text-sm mr-4"
        >
          {{ activity.status }}
        </span>
      </div>
      <div class="flex flex-col justify-end">
        <span class="text-gray-400 text-sm">{{ activity.time }}</span>
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
