<template>
    <ul>
      <li><span style="font-weight: bold">Legend</span></li>
      <li class="list-head">Status</li>
      <li><span>0: Closed</span></li>
      <li><span>1: Opened</span></li>
      <li class="list-head">Severity</li>
      <li><span>1: Low</span></li>
      <li><span>2: Medium</span></li>
      <li><span>3: High</span></li>
      <hr>
      <li><span style="font-size:0.9em">Please refresh the page if the issue cards are not dipslaying properly</span></li>
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

li span, .special {
  display: block;
  color: #fbce7b;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
/* li a:hover {
  background-color: white;
  color: black;
} */
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