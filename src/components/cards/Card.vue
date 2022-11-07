<template lang="pug">
figure.card.is-3 Card Title - {{ name }}
  
  .card-image.
    card image 
  
  figcaption.card-content.
    card content
  
  .card-footer.
    card footer
</template>

<script>
export default {
  data() {
    return {
      text: "card text from Vue",
    };
  },
  mounted() {
    // console.log('- this.menu -', this.menu);
  },
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.card {
}
</style>
