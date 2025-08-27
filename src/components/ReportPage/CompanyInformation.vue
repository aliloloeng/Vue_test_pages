<template>
  <div class="w-[360px] bg-white px-6 py-8 rounded-xl mb-6">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconCompany class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">Company Information</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">
      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Company Name</span>
        <Field
          v-model="reportStore.companyInfo.name"
          placeholder="TechCrap Industries"
          name="companyName"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="companyName"/>
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">Address</span>
        <Field
          v-model="reportStore.companyInfo.address"
          placeholder="123 Main St, City, Country"
          name="companyAddress"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 pb-8 pt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="companyAddress"/>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconCompany from './icons/IconCompany.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)

const reportStore = useReportStore()

function onSubmit() {
  // فقط state آپدیت می‌شود، alert حذف شد
  // submit نهایی از فرم اصلی انجام می‌شود
}
</script>



<!--
v-model فیلدها به store وصل باشه (companyInfo)

قوانین vee-validate بمونه

onSubmit فقط state آپدیت کنه و alert حذف بش -->
