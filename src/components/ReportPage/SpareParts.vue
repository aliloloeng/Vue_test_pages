<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconRepairSparePart />
      </div>
      <h2 class="text-2xl font-bold">Spare Parts</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Part Name</span>
        <Field
          placeholder="Part name"
          v-model="part.partName"
          name="partName"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="partName" />
      </div>

      <div class="flex items-center gap-4">
        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">Quantity</span>
          <Field
            placeholder="Enter quantity"
            v-model="part.quantity"
            name="quantity"
            rules="required|numeric|min_value:1"
            type="number"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-2 py-2 focus:outline-none"
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="quantity" />
        </div>

        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">Status</span>
          <Field
            as="select"
            v-model="part.status"
            name="status"
            rules="required"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="">Select status</option>
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
            <option value="ordered">Ordered</option>
          </Field>
          <ErrorMessage class="text-red-500 text-xs mt-1" name="status" />
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, numeric, min_value } from '@vee-validate/rules'
import { useReportStore } from '@/store/reportStore'
import IconRepairSparePart from './icons/IconRepairSparePart.vue'

defineRule('required', required)
defineRule('numeric', numeric)
defineRule('min_value', min_value)

const reportStore = useReportStore()

const part = reactive({
  partName: '',
  quantity: '',
  status: ''
})

function onSubmit() {
  reportStore.addSparePart({ ...part })
  part.partName = ''
  part.quantity = ''
  part.status = ''
}
</script>
