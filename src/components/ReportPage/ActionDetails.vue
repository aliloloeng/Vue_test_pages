<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl  mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-green-200 p-2 rounded-xl w-10">
        <IconRepaireFix/>
      </div>
      <h2 class="text-xl font-bold">Action Details</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Description</span>
        <Field
          as="textarea"
          placeholder="Enter action details..."
          v-model="reportStore.actionDescription"
          name="description"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="description" />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconRepaireFix from './icons/IconRepaireFix.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)

const reportStore = useReportStore()

function onSubmit() {
  alert("Action Details submitted:\n" + JSON.stringify(reportStore.$state, null, 2))
}
</script>
