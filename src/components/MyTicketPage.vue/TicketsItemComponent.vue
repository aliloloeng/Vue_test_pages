<template>
  <div
    class="flex flex-col justify-between items-center bg-white p-3 rounded-lg border-l-5 border-gray-200 hover:shadow-md transition"
    :class="borderColor(status)"
  >
    <div class="flex justify-center items-center gap-[80px] mb-5">
      <p class="font-semibold text-gray-800">{{ title }}</p>
      <span
        :class="statusColor(status)"
        class="px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ status }}
      </span>
    </div>

    <div class="flex items-center space-x-4 mb-5">
      <p class="w-90">{{ text }}</p>
    </div>

    <div class="flex justify-center items-center gap-[110px] text-sm text-gray-500">
      <p>Ticket : #{{ Ticket }} </p>
      <p>Date: {{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  status: String,
  text: String,
  date: String,
  Ticket: Number,
})

function statusColor(status) {
  switch (status) {
    case 'Urgrent':
      return 'bg-red-100 text-red-700'
    case 'Resolved':
      return 'bg-green-100 text-green-700'
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function borderColor(status) {
  switch (status) {
    case 'Urgrent':
      return 'border-l-4 border-red-500'
    case 'Resolved':
      return 'border-l-4 border-green-500'
    case 'In Progress':
      return 'border-l-4 border-yellow-500'
    default:
      return 'border-l-4 border-gray-400'
  }
}
</script>

<style scoped></style>
