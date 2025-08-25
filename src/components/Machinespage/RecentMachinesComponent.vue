<template>
  <main class="bg-[#f3f4f6] p-4">
    <div class="flex justify-between mb-3 px-5">
      <h1 class="text-xl font-bold text-gray-600 ">Recent Machines</h1>
      <button
        @click="toggleAll"
        class="text-sm font-medium flex items-center gap-1 text-blue-500 hover:underline"
      >
        <span>{{ showAll ? 'Show Less' : 'See All' }}</span>
      </button>
    </div>
    <RecentMachinesItemsComponent :activities="visibleActivities"/>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import IconChimney from './icons/IconChimney.vue'
import Icongear from './icons/IconGear.vue'
import Iconwrench from './icons/Iconwrench.vue'
import RecentMachinesItemsComponent from './RecentMachinesItemsComponent.vue'

const showAll = ref(false)

const UserActivities = ref([
  {
    id:1,
    title:"Maintenance Report #2846",
    subtitle:"CNC Machine - Floor 2",
    status:"Active",
    icon:IconChimney,
  },
  {
    id:2,
    title:"Parts Order #1254",
    subtitle:"Hydraulic Pump Replacement",
    status:"Maintenance",
    icon:Iconwrench,
  },
  {
    id:3,
    title:"Issue Report #3412",
    subtitle:"Assembly Line B - Urgent",
    status:"Active",
    icon:Icongear,
  },
])

const visibleActivities = computed(() => {
  return showAll.value ? UserActivities.value : UserActivities.value.slice(0, 1)
})

function toggleAll(){
  showAll.value = !showAll.value
}
</script>
