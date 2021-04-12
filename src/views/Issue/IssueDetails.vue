<template>
  <Navbar />
  <template v-if="loaded">
    <h2> {{ issueDetails.issue.Title }}</h2>
    <!-- <button v-if="isUser">Edit Issue</button> -->
    <div class="wrapper">
      <label>Description </label>
      <span>{{ issueDetails.issue.Body }}</span>
      <label>Severity </label>
      <span>{{ issueDetails.issue.Severity }} </span>
      <label>Status </label>
      <span>{{ issueDetails.issue.Status }}</span>
      <label>Created At</label>
      <span>{{ issueDetails.issue.CreatedAt }}</span>
      <label>Last Updated </label>
      <span>{{ issueDetails.issue.UpdatedAt }} </span>
    </div>
    <div class="replies" v-if="isOpen">
      <div class="reply">
        <input type="text" v-model="Body" placeholder="Leave a comment...">
        <button @click="SubmitReply(issueDetails.issue)">Submit</button>
      </div>
    </div>
    <div class="replies" v-else>
      <div class="reply">
        <span style="color:green">Issue Completed. Comment disabled</span>
      </div>
    </div>
    <div class="replies">
      <div class="reply" v-for="reply in issueDetails.replies" :key="reply.id">
        <i class="fas fa-backspace" @click="DeleteReply(reply)" v-if="reply.UserID == uID"></i> 
        <span style="color:#fbce7b"> {{ reply.Replier }} </span>
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
      loaded: false,
      isOpen: true,
      Body: '',
      // isUser: true,
      uID: localStorage.getItem('uID')
    }
  },
  methods: {
    ...mapActions ({
      fetchIssuesID: 'issue/fetchIssuesID',
      postReply: 'issue/postReply',
      deleteReply: 'issue/deleteReply'
    }),
    SubmitReply(issue) {
      var issueID =  issue.ID
      var Body = this.Body
      this.postReply({
        issueID,
        Body
      }).then(() => {
        alert("Comment posted")
        this.Body = ''
        this.fetchIssuesID(this.id).then(() => {
          this.loaded = true
        })
      })
      .catch(() => {
        console.log("Post failed at VUE:70");
      })
    },
    DeleteReply(reply) {
      var confirm = window.confirm('Delete Reply?')
      if(confirm) {
        var replyID = reply.ID
        var issueID = this.id
        this.deleteReply({
          replyID,
          issueID 
        })
          .then(() => {
            alert('Reply successfully deleted')
            this.fetchIssuesID(this.id).then(() => {
              this.loaded = true
            })
          })
          .catch(() => {
            console.log('Delete failed at VUE:97');
          })
      }
    }
  },
  computed: {
    ...mapGetters({
      issueDetails: 'issue/issueDetails'}),
  },
  created() {
    this.fetchIssuesID(this.id)
    .then(() => {
      this.loaded = true
      if(this.issueDetails.issue.Status == 0){
        this.isOpen = false
      }
      // if(this.issueDetails.issue.UserID != this.uID) {
      //   this.isUser = false
      // }
    })
    .catch(() => {
      console.log('Failed');
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

.replies {
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
input {
  width: 100%;
  padding-bottom: 80px;
  padding-left: 3px;
  padding-top: 5px;
  text-align: top;
  border: 1px solid black;
  border-radius: 5px;
  font-family: inherit;
}
button {
  float:right;
  margin-top: 10px;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
i {
  float: right;
  color: white;
  cursor: pointer;
}
</style>