<template>
  <div>
    Route page
    <a href="#" @click="goBack">Go back</a>

    {{ username }}

  </div>

</template>

<script>
export default {
  name: "Route",
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>