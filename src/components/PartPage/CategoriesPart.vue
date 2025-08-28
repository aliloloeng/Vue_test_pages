<template>
  <div class="w-[360px] bg-[#f3f4f6] px-4 py-4">

    <div class="mb-4">
      <h1 class="text-xl font-semibold text-gray-800">Categories</h1>
    </div>

    <div class="flex gap-2 overflow-x-scroll mb-8">
      <button
        v-for="(cat, index) in categories"
        :key="index"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-2 rounded-full text-sm border border-gray-300 font-medium whitespace-nowrap transition',
          activeCategory === cat ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <div class="flex justify-between items-center w-full mb-6">
      <h1 class="text-xl font-bold text-gray-600">Available Part</h1>
      <button class="flex items-center text-lg font-semibold text-gray-500 gap-1 py-1 px-2 rounded-full hover:bg-gray-200">
        <IconFilter/>
        Filter
      </button>
    </div>

    <ProductsItemsComponent
      :products="products"
      :active-category="activeCategory"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductsItemsComponent from './ProductsItemsComponent.vue'
import IconFilter from './Icons/IconFilter.vue'

import HydraulicPumpHP from '@/assets/images/HydraulicPumpHP-200.jpg'
import ElectricalMotorEm from '@/assets/images/ElectricalMotorEm-150.png'
import BallBearingBB from '@/assets/images/BallBearingBB-45.jpg'
import OilFilterOF from '@/assets/images/OilFilterOF30.jpg'
import PressureValvePV from '@/assets/images/PressureValvePV-80.jpg'
import PowerCablePC from '@/assets/images/PowerCablePC100.jpg'

const products = ref([
  { name: "Hydraulic Pump HP-200", categories:"Hydraulic System", price: 1250, Qty: 15, image: HydraulicPumpHP },
  { name: "Electrical Motor Em-150", categories:"Electrical Component", price: 890, Qty: 3, image: ElectricalMotorEm },
  { name: "Ball Bearing BB-45", categories:"Mechanical Part", price: 125, Qty: 50, image: BallBearingBB },
  { name: "Oil Filter OF-30", categories:"Filter System", price: 45, Qty: 0, image: OilFilterOF },
  { name: "Pressure Valve PV-80", categories:"Hydraulic System", price: 320, Qty: 25, image: PressureValvePV },
  { name: "Power Cable PC-100", categories:"Electrical Component", price: 75, Qty: 100, image: PowerCablePC },
])

const categories = ["All", "Hydraulic", "Electrical", "Mechanical","Filter System"];
const activeCategory = ref("All")

const addToCart = (item) => {
  alert("Added to cart: " + item.name)
}
</script>
