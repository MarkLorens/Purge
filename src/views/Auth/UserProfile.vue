<template>
  <Navbar />
  <template v-if="loaded">
    <h2> Your Account</h2>
    <div class="wrapper">
      <label>Name </label>
      <span>{{ getProfile.Name }}</span>
      <label>Email </label>
      <span>{{ getProfile.Email }} </span>
      <label>Role </label>
      <span>{{ getProfile.Role.Name }}</span>
      <label>Created At</label>
      <span>{{ getProfile.CreatedAt }}</span>
      <label>Issues</label>
      <div v-for="issue in getProfile.Issues" :key="issue.id">
        <router-link class="span" :to="{ name: 'IssueDetails', params: { id: issue.ID } }">
            {{ issue.Title }}
        </router-link>
      </div>
    </div>
  </template>
  <template v-else>
    <span class="loading">Loading Data...</span>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../../components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            loaded: false
        }
    },
    props: ['id'],
    methods: {
        ...mapActions({
            fetchProfile: 'account/fetchProfile'
        })
    },
    computed: {
        ...mapGetters({
            getProfile: 'account/getProfile'
        })
    },
    created() {
        this.fetchProfile(this.id).then(() => {
            this.loaded = true
        })
    }
}
</script>

<style>
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
    span, .span{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: #6acbfe;
    }

</style>