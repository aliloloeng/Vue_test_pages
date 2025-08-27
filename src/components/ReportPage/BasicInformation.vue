<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl mb-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconBaceInfo class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">Basic Information</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Topic</span>
        <Field
          placeholder="Enter report topic"
          v-model="reportStore.title"
          name="title"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="title" />
      </div>

      <div class="flex items-center justify-between ">

        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">Type</span>
          <Field
            as="select"
            v-model="reportStore.type"
            name="type"
            rules="required"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select type</option>
            <option value="incident">Incident</option>
            <option value="maintenance">Maintenance</option>
            <option value="inspection">Inspection</option>
          </Field>
          <ErrorMessage class="text-red-500 text-xs mt-1" name="type" />
        </div>

        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">Status</span>
          <Field
            as="select"
            v-model="reportStore.status"
            name="status"
            rules="required"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </Field>
          <ErrorMessage class="text-red-500 text-xs mt-1" name="status" />
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconBaceInfo from './icons/IconBaceInfo.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)

const reportStore = useReportStore()

function onSubmit() {
  alert("Basic Information submitted:\n" + JSON.stringify(reportStore.$state, null, 2))
}
</script>
