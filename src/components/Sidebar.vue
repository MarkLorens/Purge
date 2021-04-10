<template>
    <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">1</a></li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 20%;
  background-color: #354d73;
  height: 100%;
  position: fixed;
  overflow: auto;
}

li a {
  display: block;
  color: #fbce7b;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: white;
  color: black;
}
</style>