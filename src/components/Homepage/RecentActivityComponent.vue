<template>
  <main class="bg-[#f3f4f6] p-4">
    <div class="flex justify-between mb-3 px-5">
      <h1 class="text-xl font-bold text-gray-600 ">Recent Activities</h1>
      <button
        @click="toggleAll"
        class="text-sm font-medium flex items-center gap-1 text-blue-500 hover:underline"
      >
        <span>{{ showAll ? 'Show Less' : 'See All' }}</span>
      </button>
    </div>
    <RecentActivityItemsComponent :activities="visibleActivities"/>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import RecentActivityItemsComponent from './RecentActivityItemsComponent.vue'
import Iconwrench from './Icons/IconWrench.vue'
import IconShoppingCart from './Icons/IconShoppingCart.vue'
import IconWarning from './Icons/IconWarning.vue'

const showAll = ref(false)

const UserActivities = ref([
  {
    id:1,
    title:"Maintenance Report #2846",
    subtitle:"CNC Machine - Floor 2",
    status:"Completed",
    time:"2h ago",
    icon:Iconwrench,
  },
  {
    id:2,
    title:"Parts Order #1254",
    subtitle:"Hydraulic Pump Replacement",
    status:"In Progress",
    time:"Yesterday",
    icon:IconShoppingCart,
  },
  {
    id:3,
    title:"Issue Report #3412",
    subtitle:"Assembly Line B - Urgent",
    status:"Pending",
    time:"2 days ago",
    icon:IconWarning,
  },
])

const visibleActivities = computed(() => {
  return showAll.value ? UserActivities.value : UserActivities.value.slice(0, 1)
})

function toggleAll(){
  showAll.value = !showAll.value
}
</script>
