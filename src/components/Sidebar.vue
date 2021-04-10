<template>
    <ul>
      <li class="list-head">Sort by</li>
      <li><a href="#">Severity</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">Created Date</a></li>
      <li><a href="#">Last Updated</a></li>
      <li><a href="#">Title</a></li>
      <li class="list-head">Filter</li>
      <li><a href="#">Completed</a></li>
      <li><a href="#">Replied</a></li>
      <li class="special">Severity Of:
        <select>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
        </select>
      </li>
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

li a, .special {
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
.list-head {
  color: white;
  text-align: left;
  margin-left: 5px;
  margin-top: 5px;
}
select {
  border-radius: 5px;
  width: 2rem;
}
</style>