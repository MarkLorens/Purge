<template>
  <Navbar />
  <Sidebar />
  <button class="btn_create" @click="createNew"><p>Create new issue</p></button>
  <div class="issues" v-if="loaded">
    <div class="issue" v-for="issue in allIssues" :key="issue.id">
      <span> {{ issue.Title }} </span>
      <span>Severity: {{ issue.Severity }}; Status: {{ issue.Status }}</span>
      <span style="color:#a6a6a1">Updated: {{ issue.UpdatedAt }}</span>
      <span class="created">Created: {{ issue.CreatedAt }}</span>
    </div>
  </div>
  <div class="issues" v-else>
    <div class="">
      <span style="color:white">Loading data...</span>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      loaded: false
    }
  },
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issue/fetchIssues'
    }),
    createNew(){
      this.$router.replace('/createIssue')
    }
  },
  computed: {
    ...mapGetters({
      allIssues: 'issue/allIssues'})
  },
  created() {
    this.fetchIssues().then(() => {
      this.loaded = true
    })
  }
}
</script>

<style scoped>
.issues, button {
  display: grid;
  max-width: 900px;
  margin: 20px auto;
  margin-left: 20rem;
  grid-template-columns: repeat(1);
  gap: 2rem;
}
.issue {
  border: 1px solid white;
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
  cursor: pointer;
}
.created {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #a6a6a1;
  cursor: pointer;
}
span {
  margin-top: 3px;
  display: block;
  color: #7ccab5;
}
.btn_create {
  background: #354d73;
  border: 1px solid white;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  color: white;
  cursor: pointer;
}
</style>