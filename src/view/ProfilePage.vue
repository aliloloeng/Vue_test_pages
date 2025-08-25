<template>
  <div class="flex justify-center">
    <div>
      <HeaderProfilePage/>
      <UserProfileComponent/>
      <section>
        <nav>
          <ul class="flex space-x-4 my-4 text-lg font-semibold ">
            <li>
              <RouterLink
                to="/profile/myTicket"
                class="px-4 py-2 "
                :class="isActive('/profile/myTicket') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'"
              >
                My Ticket
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/profile/massageAdmin"
                class="px-4 py-2 "
                :class="isActive('/profile/massageAdmin') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'"
              >
                Message Admin
              </RouterLink>
            </li>
          </ul>
        </nav>
        <router-view/>
      </section>
    </div>
  </div>
</template>
<script setup>
import HeaderProfilePage from '@/components/ProfilePage/HeaderProfilePage.vue';
import UserProfileComponent from '@/components/ProfilePage/UserProfileComponent.vue';

import { useRoute } from 'vue-router'
const route = useRoute()

function isActive(path) {
  return route.path === path
}

</script>
<style scoped></style>

