<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="p-2 bg-purple-200 rounded-xl w-10">
        <IconCheck class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">Checklist</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div v-for="(item, index) in reportStore.checklist" :key="index" class="flex flex-col pb-4">
        <span class="text-xl font-semibold text-gray-700 my-2">Item {{ index + 1 }}</span>
        <Field
          v-model="reportStore.checklist[index]"
          placeholder="Enter item..."
          :name="'item-' + index"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none "
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" :name="'item-' + index" />
      </div>

      <button
        type="button"
        @click="addItem"
        class="flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 mt-2"
      >
        <IconPlus/>
        Add Item
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconCheck from './icons/IconCheck.vue'
import IconPlus from './icons/IconPlus.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)

const reportStore = useReportStore()

function addItem() {
  reportStore.checklist.push('')
}

function onSubmit() {
  alert("Checklist submitted:\n" + JSON.stringify(reportStore.checklist, null, 2))
}

if (reportStore.checklist.length === 0) {
  reportStore.checklist.push('')
}

</script>
