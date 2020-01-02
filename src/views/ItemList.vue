<template>
    <div class="item-list">
        <item 
        v-for="item in $store.getters.displayItems" 
        :item='item' 
        :key='item.id' />
    </div>
  
</template>

<script>
import Item from '../components/Item.vue'
import { fetchListData } from '../api/api'


export default {
   beforeMount () {
    this.loadItems()
  },
  components: {
    Item
  },
  methods: {
    loadItems () {
      this.$bar.start()
      this.$store.dispatch( 'fetchListData', {type: 'top'})
        .then(items => {
          this.displayItems = items
          this.$bar.finish()
        })
        .catch(() => this.$bar.fail())
    }
  }
}
</script>