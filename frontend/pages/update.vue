<template>
  <div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-0"
        label="ID:"
        label-for="input-0"
        description="We'll never share your ID with anyone else."
      >
        <b-form-input
          id="input-0"
          v-model="form.id"
          placeholder="Enter ID"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="We'll never share your name with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Description:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        description: '',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      await this.put()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.id = ''
      this.form.name = ''
      this.form.description = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async put() {
      const res = await this.$axios({
        method: "put",
        data: this.form,
      })
      if (res.status === 200) {
        // this.$refs.menu1.click()
        alert('success')
      }
    },
  },
}
</script>
