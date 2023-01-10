<template>
  <Container>
    <section class="cards has-four-cards metrics">
      <Card class="is-vertical" v-for="card in cards" :key="card.icon"
            :card="card"/>
    </section>
  </Container>
</template>

<script>
import Card from '../components/Card.vue';
import Container from '../components/layout/Container.vue';

export default {
  name: 'Metrics',
  components: {
    Card,
    Container,
  },
  data() {
    return {
      cards: [
        {
          icon: 'truck',
          title: '20 мин',
          text: 'ПРИБЫТИЕ МАСТЕРА',
        },
        {
          icon: 'lock-open',
          title: 'до 30 мин',
          text: 'ОТКРЫТИЕ ЗАМКА',
        },
        {
          icon: 'check-circle',
          title: '100%',
          text: 'РЕЗУЛЬТАТ',
        },
        {
          icon: 'user-circle',
          title: 'на 100%',
          text: 'ОФИЦИАЛЬНО',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/layout/media-querries';


$cards-section-padding: 2rem 0;


.cards {
  padding: $cards-section-padding;

  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

</style>