import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '@/view/HomeView.vue'
import MachinesPage from '@/view/MachinesPage.vue'
import PartPage from '@/view/PartPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import ReportPage from '@/view/ReportPage.vue'

const routes = [
{ path: '/', name: 'Home', component: HomeView },
{ path: '/report', name: 'Report', component: ReportPage },
{ path: '/machines', name: 'Machines', component: MachinesPage },
{ path: '/part', name: 'Part', component: PartPage },
{
  path: '/profile',
  name: 'Profile',
  component: ProfilePage,
  children:[
    { path:'myTicket', name:'myTicket', component:() => import('@/view/profile/MyTicketPage.vue') },
    { path:'massageAdmin', name:'massageAdmin', component:() => import('@/view/profile/massageAdminPage.vue') }
  ]
},
]


const router = createRouter({
  history: createWebHistory('/Vue_test_pages/'),
  routes
})

export default router
