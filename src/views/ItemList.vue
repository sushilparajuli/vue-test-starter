<template>
    <div class="item-list">
        <item 
        v-for="item in displayItems" 
        :item='item' 
        :key='item.id' />
    </div>
  
</template>

<script>
import Item from '../components/Item.vue'

export default {
  data () {
    return {
        displayItems: window.items
    }
  },
  components: {
    Item
  }
}
</script>