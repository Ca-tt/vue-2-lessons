<template>
  <header class="site-header">

    <Container class="has-columns-between-desktop">

      <!-- left column -->
      <div class="left-column">

        <Card :card="cards[0]" class="is-horizontal"></Card>

      </div>

      <!-- right column -->
      <div class="right-column">

        <Card :card="cards[1]" class="is-horizontal"></Card>
        <Card :card="cards[2]" class="is-horizontal"></Card>
        <Card :card="cards[3]" class="is-horizontal"></Card>

      </div>
      <!-- right column end-->
    </Container>
  </header>
</template>

<style lang="scss" scoped>
$header-padding: .5em 0;

.site-header {
  padding: $header-padding;
  background-color: #222222;
}

.header-icon {
  padding: 0;
  font-size: 18px;
  color: #999;
  margin-right: 10px;
}

.clock {
  max-width: 18px;
}

.site-header,
a {
  color: white;
}

@media (max-width: 767px) {
  header {
    display: none;
  }
}
</style>

<script>
import Container from '../components/layout/Container';
import Card from '../components/Card';

export default {
  name: "Header",
  components: {
    Container,
    Card,
  },
  data() {
    return {
      cards: [
        {
          icon: 'lock',
          title: '',
          text: 'Открываем замки любой сложности',
        },
        {
          icon: 'clock',
          title: '',
          text: 'Работаем круглосуточно',
        },
        {
          icon: 'mobile',
          title: '',
          text: '067 135 15 47',
        },
        {
          icon: 'mobile',
          title: '',
          text: '099 053 88 64',
        },
      ]
    }
  }
};
</script>
