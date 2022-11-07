<template lang="pug">
section.cards
  Card(v-for="item in menu" :key="item.name" :name="item.name")
  section {{uniqueCategories}}
</template>

<script>
import Card from "../components/cards/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      menu: [
        { name: "bacon", category: "breakfast" },
        { name: "tea", category: "lunch" },
        { name: "soup", category: "dinner" },
        { name: "meat", category: "dinner" },
        { name: "bread", category: "breakfast" },
      ],
    };
  },
  computed: {
    uniqueCategories() {
      let categories = [...new Set(this.menu.map((item) => item.category))];
      return categories;
    }
  },
  mounted() {
    let categories = [...new Set(this.menu.map((item) => item.category))];
    console.log('- categories -', categories);
    
  }
};
</script>

<style lang="scss" scoped>

</style>
