<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Test</router-link> |
      <router-link to="/js/text-generator">Text Generator</router-link> |
      <router-link to="/js/todo-list">Todo List</router-link> |
      <router-link to="/js/cards">Cards</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
/* 
  All common styles, one file.
  Accessed globally in app 
*/
@import "./scss/common";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
