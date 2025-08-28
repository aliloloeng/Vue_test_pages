<template>
  <header class="card-bg px-2 py-3 drop-shadow-md center-flex mobile-box">
    <div class="flex justify-between items-center w-full">
      <!-- Logo -->
      <div>
        <p class="font-medium w-5 mr-20 ">Company Logo</p>
      </div>

      <!-- Title -->
      <div>
        <h1 class="font-semibold mr-10">TechCrop</h1>
      </div>

      <!-- User Info -->
      <section class="flex gap-3 items-center">
        <div class="flex flex-col items-end">
          <h3 class="font-bold">{{ user[0].name }}</h3>
          <p class="user-sub">{{ user[0].status }}</p>
          <p class="user-sub">{{ user[0].job }}</p>
        </div>
        <div>
          <img class="rounded-full" :src="user[0].img" alt="User Avatar">
        </div>
      </section>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue';
import userimage from '@/assets/images/user.jpg'

const user = reactive([
  {
    name: 'Ali',
    job: 'Developer',
    status: 'maintenance',
    img: userimage
  }
])
</script>
