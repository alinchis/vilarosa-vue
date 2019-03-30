<template>
  <div class="info_footer">
	<h3 id="copy" >S.C. 4 Anotimpuri Turism S.R.L. - ® Vila Rosa - 2018</h3>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.info_footer {
    background-color: #d2d2d2;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    display: block;
    overflow: hidden;
    min-height: 30px;
    padding: 0;
    width: 100%;
    min-width: 320px;
    bottom: 0px;
}
h3 {
	color:#808080;
	letter-spacing:0;
	opacity:1;
	padding-bottom:0;
	padding-top:0;
	text-decoration:none;
	text-indent:0;
	text-transform:none;
	font-style:normal;
	font-variant:normal;
	font-weight:400;
	font-size:68.75%;
	line-height:normal;
	font-family: Open Sans, sans-serif;
	float: left;
	text-align: left;
	position: relative;
	display: block;
	clear: left;
	margin: 0px auto 10px auto;
}

h3#copy {
	float: none;
	clear: none;
	visibility: visible;
	text-align: center;
	margin-bottom: 0;
	margin-top: 10px;
}
</style>
