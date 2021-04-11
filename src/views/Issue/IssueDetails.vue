<template>
  <Navbar />
  <template v-if="loaded">
    <h2> {{ issueDetails.Title }}</h2>
    <div class="wrapper">
      <label>Description </label>
      <span>{{ issueDetails.Body }}</span>
      <label>Severity </label>
      <span>{{ issueDetails.Severity }} </span>
      <label>Status </label>
      <span>{{ issueDetails.Status }}</span>
      <label>Created At</label>
      <span>{{ issueDetails.CreatedAt }}</span>
      <label>Last Updated </label>
      <span>{{ issueDetails.UpdatedAt }} </span>
    </div>
    <div class="replies">
      <div class="reply" v-for="reply in issueDetails.Replies" :key="reply.id">
        <span style="color:#fbce7b"> {{ reply.UserID }} </span>
        <span> {{ reply.Body }}</span>
        <span class="created">{{ reply.CreatedAt }}</span>
      </div>
    </div>
  </template>
  <template v-else>
    <span class="loading">Loading Data...</span>
  </template>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  components: {
    Navbar
  },
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    ...mapActions ({
      fetchIssuesID: 'issue/fetchIssuesID'
    })
  },
  computed: {
    ...mapGetters({
      issueDetails: 'issue/issueDetails'}),
  },
  created() {
    this.fetchIssuesID(this.id).then(() => {
      this.loaded = true
    })
  }
}
</script>

<style scoped>
.wrapper{
        max-width: 420px;
        margin: 30px auto;
        text-align: left;
        background: #1f2430;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #fbce7b;
        display: inline-block;
        margin: 25px 0 15px;
        font-weight: bold;
    }
    span{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: #6acbfe;
    }

.replies, button {
  display: grid;
  max-width: 900px;
  margin: 20px auto;
  margin-left: 20rem;
  grid-template-columns: repeat(1);
  gap: 2rem;
}
.reply {
  padding: 1rem;
  text-align: left;
  position: relative;
}
.created {
  color: #a6a6a1;;
}
span {
  margin-top: 3px;
  display: block;
}
.loading {
  margin-top: 30px;
  color: white;
}
</style>