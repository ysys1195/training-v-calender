<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view></router-view>
  <div class="links">
    <h2>カレンダー</h2>
    <router-link class="link" to="/" >V-Calender</router-link>
    <router-link class="link" to="/self_calender" >自作カレンダー</router-link>
    <router-link class="link" to="/accordion" >アコーディオン</router-link>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.links {
  margin: 20px;
  padding: 10px 20px 20px;
  background-color: gray;
  border-radius: 10px;
}
a {
  color: black;
}
.links .link {
  display: inline-block;
  background-color: rgb(216, 143, 116);
  padding: 10px;
  margin: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
