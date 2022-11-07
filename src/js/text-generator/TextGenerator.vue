// Necessary todo
// 1. Сколько текста нагенерить? (progress bar) (мало, средне, много текста)
// 2. При ховере копировать текст (Кнопка copy text сверху)

// View appearance
// посередине страницы ползунок с выбором текста. Текст появляется динамично
// изначально текст уже есть и его можно скопировать 

// Bonus todo
// 1. Pick up language (ru / eng) (radio or switch)
// 2. Font size change depending on text quantity (depending on fixed viewport width and height)

<template lang="pug">
  SiteHeadline(text="True") True text
</template>

<script>
import SiteHeadline from "../../components/typography/SiteHeadline.vue";

export default {
  components: {
    SiteHeadline,
  },
};
</script>

<style lang="scss" scoped>
.site-generator {
  // 
}
</style>
