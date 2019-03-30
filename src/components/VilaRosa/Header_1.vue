<template>
  <div class="header_1">
		<h1>{{this.$props.text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header_1',
	props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.header_1 {
  color: #C0C0C0;
  display: block;
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: normal;
  font-family: Open Sans, sans-serif;
}
h1 {
  text-indent: 0px;
  text-align: center;
  max-width: 1024px;
  margin: 0px auto 0px auto;
  color: #3d3d3d;
  opacity: 1;
  padding-bottom: 20px;
  padding-top: 15px;
  text-decoration: none;
  text-transform: none;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 1.2em;
  font-family: Ubuntu, sans-serif;
}
</style>
