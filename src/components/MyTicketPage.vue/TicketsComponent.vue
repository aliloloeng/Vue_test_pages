<template>
  <div class="bg-[#f3f4f6] py-4  shadow-md w-[95%] max-w-[375px] mx-auto space-y-4">

    <div class="flex items-center justify-between px-4 mb-8">

      <div>
        <select v-model="selectedFilter" class="border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All Tickets</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="inProgress">In Progress</option>
        </select>
      </div>

      <div>
        <button @click="toggleSort" class="flex bg-white items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          Sort
          <svg v-if="sortAsc" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="space-y-3">
      <TicketsItemComponent
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :title="ticket.title"
        :status="ticket.status"
        :text="ticket.text"
        :date="ticket.date"
        :Ticket="ticket.Ticket"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TicketsItemComponent from './TicketsItemComponent.vue'

const tickets = ref([
  {
    id: 1,
    title: 'Login authentiction failed ',
    status: 'Urgrent',
    text:"I can't log in to my account. I've tried resetting my password multiple times but I'm still gettin...",
    date: '2025-08-20',
    Ticket:341212,
  },
  {
    id: 2,
    title: 'Feature request : Dark mode',
    status: 'Resolved',
    text:"Would it be possible to add a dark mode option to the app? It would be easier on the eyes wh...",
    date: '2025-08-18',
    Ticket:341212,
  },
  {
    id: 3,
    title: 'Payment issue with subscription',
    status: 'In Progress',
    text:"I'm having trouble with my monthly payment.The system shows an error when I try to upda...",
    date: '2025-08-15',
    Ticket:341212,
  }
])

const selectedFilter = ref('all')
const sortAsc = ref(true)

function toggleSort() {
  sortAsc.value = !sortAsc.value
}

const filteredTickets = computed(() => {
  let filtered = tickets.value

  if (selectedFilter.value !== 'all') {
    filtered = filtered.filter(t => {
      if (selectedFilter.value === 'open') return t.status === 'Resolved'
      if (selectedFilter.value === 'closed') return t.status === 'Urgrent'
      if (selectedFilter.value === 'inProgress') return t.status === 'In Progress'
      return true
    })
  }

  return filtered.sort((a, b) => {
    if (sortAsc.value) return new Date(a.date) - new Date(b.date)
    else return new Date(b.date) - new Date(a.date)
  })
})
</script>


<style scoped></style>
