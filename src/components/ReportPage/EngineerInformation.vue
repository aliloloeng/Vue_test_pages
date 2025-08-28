<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconCustomerEng/>
      </div>
      <h2 class="text-2xl font-bold">Engineer Information</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Engineer Name</span>
        <Field
          v-model="reportStore.engineerInfo.name"
          placeholder="John Doe"
          name="name"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="name" />
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">National ID</span>
        <Field
          v-model="reportStore.engineerInfo.nationalId"
          placeholder="National ID"
          name="nid"
          rules="required|numeric|length:10"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="nid" />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, numeric, length } from '@vee-validate/rules'
import IconCustomerEng from './icons/IconCustomerEng.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)
defineRule('numeric', numeric)
defineRule('length', length)

const reportStore = useReportStore()

function onSubmit() {
}
</script>
