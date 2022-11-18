<script setup>
import {ref, onMounted} from "vue"
defineProps({
  text: String
})
let show = ref(false);
const onClickCard = () => {
  show.value = !show.value
  console.log(show.value);
}
onMounted (() => {
  const textHeight = document.getElementsByClassName('text')[0].height
  console.log(textHeight);
})

</script>

<template>
  <div class="card-wrapper" @click="onClickCard">
    <div class="text" :class="{active: show}">{{text}}</div>
  </div>
</template>

<style scoped>
.card-wrapper {
  background-color: #fff;
  width: 300px;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
}
.text {
  overflow: hidden;
  color: #000;
  text-align: left;
  height: 24px;
  transition: height 0.5s ease-in;
}
.active {
  height: auto;
}
</style>
