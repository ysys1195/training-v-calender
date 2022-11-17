<script setup>
import {ref} from "vue"
import Card from "./AccordionCard.vue"
const list = ["うわあああああああああああああああああああああああああああああああああうわあああああああああああああああああああああああああああああああああうわあああああああああああああああああああああああああああああああああ","うわあああああああああああああああああああああああああああああああああ","ﾋﾝ"]
</script>

<template>
  <h1>Accordion</h1>
  <Card v-for="(text, index) in list" :key="index" :text="text" />
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
}
.text.active {
  white-space: unset;
}
</style>
