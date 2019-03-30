<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Vila Rosa</router-link> |
      <router-link to="/map">Harta</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #C0C0C0;
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: normal;
  font-family: Open Sans, sans-serif;
}
html, body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    min-width: 720px;
}
#nav {
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
