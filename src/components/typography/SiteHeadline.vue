<template lang="pug">
  h1.site-headline {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.site-headline
  font-size: 99px

</style>
