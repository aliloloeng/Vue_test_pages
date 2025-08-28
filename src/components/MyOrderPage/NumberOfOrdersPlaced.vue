  <template>
    <div class="w-[360px] bg-[#f3f4f6] p-4 pb-8">
      <div class="flex items-center gap-4">
        <div
        v-for="(item,index) in OrderState"
        :key="index"
        class="w-25 flex flex-col items-center bg-white rounded-xl p-2 shadow-sm  "
        >
          <H1 :class="item.colorClass" class="text-xl font-semibold">{{ item.number}}</H1>
          <p class="text-sm text-gray-500">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { reactive } from 'vue';


    const OrderState = reactive([
  {
    title:'Total Order',
    number:12,
    colorClass:'text-purple-600',
  },
  {
    title:'Completed',
    number:8,
    colorClass:'text-green-600',
  },
  {
    title:'In Progress',
    number:4,
    colorClass:'text-orange-500',
  },
])
  </script>
