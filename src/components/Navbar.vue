<template>
    <ul>
        <li><a href="/">Home</a></li>
        <li class="dropdown" style="float:right">
          <a href="javascript:void(0)" class="dropbtn"> Options <i class="arrow down"></i> </a>
          <div class="dropdown-content">
            <a @click="Logout">Logout</a>
            <a href="/chpwd">Change Password</a>
          </div>
      </li>
      <li class="notif"><i class="far fa-bell"></i></li>
    </ul>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'Home',
    methods: {
        ...mapActions({
            signOutAttempt: 'auth/signOut'
        }),
        Logout() {
            this.signOutAttempt().then(() => {
                this.$router.replace('/login')
            })
        }
    } 
}
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-height: 3rem;
  position: sticky;
  top: 0;
  background-color: black;
  z-index: 1;
  overscroll-behavior: none;
}
li {
  float: left;
}
li a{
  display: block;
  color: #fbce7b;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: sticky;
  background: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgb(139, 132, 132);
  z-index: 2;
}
.dropdown-content a {
  color: #fbce7b;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover{
  background: white;
  color: black;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.arrow {
  border: solid #fbce7b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 2px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.far {
  color: white;
}
.notif {
  float: right;
  margin-top: 15px;
  margin-right: 8px;
}
</style>