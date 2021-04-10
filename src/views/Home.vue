<template>
  <Navbar />
  <Sidebar />
  <div class="home">
    <h3>Home</h3>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  },
  // created() {
  //   const res = axios.get('/v1/protected/issue/show/1',{
  //     headers: {
  //       token: localStorage.getItem('token'),
  //       userID: localStorage.getItem('uID')
  //     }
  //   })
  // }
}
</script>

<style scoped>
.home {
  left: 10;
}
h3 {
  color: #66bde5;
}
</style>