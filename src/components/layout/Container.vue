<template lang="pug">
section.container 
  slot
</template>

<script></script>

<style lang="scss" scoped>
@import '../../scss/helpers/media.scss';

.container {
  padding: 0 1rem;
  margin: 0 auto;

  @include laptop {
    max-width: 80%;
  }
}
</style>
