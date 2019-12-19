<template>
<item-list />
</template>

<script>
import ItemList from './views/ItemList.vue'
export default {
  name: "App",
  components: {
    ItemList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
