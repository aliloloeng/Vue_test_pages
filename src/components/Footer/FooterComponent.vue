<template>
  <nav class="bg-white text-gray-500  px-6 py-5 flex justify-center items-center">
    <ul class="flex space-x-10 font-bold">
      <li>
        <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/report" class="hover:text-gray-300">Report</RouterLink>
      </li>
      <li>
        <RouterLink to="/machines" class="hover:text-gray-300">Machines</RouterLink>
      </li>
      <li>
        <RouterLink to="/part" class="hover:text-gray-300">Part</RouterLink>
      </li>
      <li>
        <RouterLink to="/profile" class="hover:text-gray-300">Profile</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped> 
  @reference "@/assets/main.css";
</style>
