<template>
  <div>
    <!-- <b-input-group
      v-for="size in ['sm', '', 'lg']"
      :key="size"
      v-model="id"
      :size="size"
      class="mb-3"
      prepend="ID"
    > -->
     <b-input-group
      key="lg"
      size="lg"
      class="mb-3"
      prepend="ID"
    >
      <b-form-input v-model="deleteId"></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="success" @click="deleteItem">
          Delete
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteId: null,
    }
  },
  methods: {
    async deleteItem() {
      console.log("deleteId:", this.deleteId)
      const res = await this.$axios({
        method: 'delete',
        url: '/' + this.deleteId,
      })
      if (res.status === 200) {
        // this.$refs.menu1.click()
        alert(JSON.stringify(res))
      }
    },
  },
}
</script>
