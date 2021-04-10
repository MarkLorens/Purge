<template>
  <Navbar />
  <Sidebar />
  <div class="issues">
    <div class="issue" v-for="issue in allIssues" :key="issue.id">
      <span> {{ issue.Title }} </span>
      <span>Severity: {{ issue.Severity }}; Status: {{ issue.Status }}</span>
      <span>Updated: {{ issue.UpdatedAt }}</span>
      <span class="created">{{ issue.CreatedAt }}</span>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issue/fetchIssues'
    })
  },
  computed: {
    ...mapGetters({
      allIssues: 'issue/allIssues'})
  },
  created() {
    this.fetchIssues()
    console.log(this.allIssues);
  }
}
</script>

<style scoped>
.issues {
  display: grid;
  max-width: 800px;
  margin: 20px auto;
  margin-left: 20rem;
  grid-template-columns: repeat(1);
  gap: 2rem;
}
.issue {
  border: 1px solid black;
  background: #eee;
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
  color: black;
  cursor: pointer;
}
span {
  margin-top: 3px;
  display: block;
}
</style>