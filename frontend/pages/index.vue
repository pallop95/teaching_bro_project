<template>
  <div class="container">
    <h1>Items</h1>
    <div class="grid-box">
      <!-- <Checkbox v-for="(checkbox, index) in checkboxList" :key="index" /> -->
      <p v-for="item in items" :key="`item-${item.id}`">{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: [],
    }
  },
  async mounted() {
    this.items = await this.getAll()
  },
  methods: {
    async getAll() {
      const res = await (this as any).$axios({
        method: 'get',
        // url: 'event/lastLocation",
        headers: {
          Authorization: 'hello',
        },
      })
      if (res.status === 200) {
        return res.data
      }
    },
  },
})
</script>
