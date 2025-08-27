<template>
  <section class="bg-[#f3f4f6] p-4 text-gray-700 space-y-6">
    <BasicInformation />
    <ActionDetails />
    <CheckList />
    <CustomerInformation />
    <CompanyInformation />
    <EngineerInformation />
    <SpareParts />
    <RatingPart />
    <SignaturesPart />

    <div class="flex justify-end pt-6">
      <button
        @click="submitReport"
        class="flex items-center justify-center gap-2 text-xl font-semibold px-6 py-4 w-full bg-[#2652c3] text-white rounded-xl shadow hover:bg-blue-800 transition"
      >
      <IconSend/>
        Submit Report
      </button>
    </div>
  </section>
</template>

<script setup>
import { useReportStore } from '@/store/reportStore'
import BasicInformation from '@/components/ReportPage/BasicInformation.vue'
import ActionDetails from './ActionDetails.vue'
import CheckList from './CheckList.vue'
import CustomerInformation from './CustomerInformation.vue'
import CompanyInformation from './CompanyInformation.vue'
import EngineerInformation from './EngineerInformation.vue'
import SpareParts from './SpareParts.vue'
import RatingPart from './RatingPart.vue'
import SignaturesPart from './SignaturesPart.vue'
import IconSend from './icons/IconSend.vue'

const reportStore = useReportStore()

function submitReport() {
  alert("Report Submitted:\n" + JSON.stringify(reportStore.$state, null, 2))
}
</script>
