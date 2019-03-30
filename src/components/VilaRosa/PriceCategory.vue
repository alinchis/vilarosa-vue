<template>
  <div class="main_box">
    <div class="main_article_box" >
        <p class="p1_hotel" >{{this.$props.category.title}} <span>- {{this.$props.category.subtitle}}</span></p>
        <p class="p1_hotel"><span>{{this.$props.category.description}}</span></p>
        <p>{{this.$props.category.time_span}}</p>
        <hr>
        <table class="price">
            <tr
                v-for="price in this.$props.category.prices"
                :key="price.id"
            >
                <td>{{price[0]}}</td>
                <td>{{price[1]}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PriceCategory',
  props: ['category']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
article.home_article {
    column-count: 1;
}
div.main_box {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    height: auto;
    width: 100%;
    min-width: 320px;
    background-color: #f3f2ed;
    margin: 0px auto 0px auto;
}
div.main_article_box {
    max-width: 1024px;
    margin: 0px auto 0px auto;
    padding-left: 10px;
    padding-right: 10px;
    color: #C0C0C0;
    text-align: left;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: normal;
    font-family: Open Sans, sans-serif;
    padding: 10px 0px 10px 0px;
}
div#main_image {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    max-width: 100%;
    min-width: 320px;
    height: 470px;
    background-size: cover;
    background-image: url(../../assets/VilaRosa/vr_panorama_6@2x.jpg);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 50% 50%;
    background-origin: initial;
    background-clip: initial;
    background-color: #808080;
    padding: 0;
}
p.p1 {
    color: #515151;
    letter-spacing: 0;
    opacity: 1;
    text-align: justify;
    text-decoration: none;
    text-transform: none;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 87.5%;
    line-height: 150%;
    font-family: Open Sans, sans-serif;
    text-indent: 10%;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 0;
}
p.p1_hotel {
    font-weight: bold;
    font-size: 90%;
    line-height:120%;
    margin-top: 20px;
    margin-bottom: 0;
}

p.p1_hotel span, p.p1_special span {
    font-weight: normal;
    font-size: 80%;
}
table.price {
    width: 100%;
    color:#515151;
    letter-spacing:0;
    opacity:1;
    text-align:justify;
    text-decoration:none;
    text-transform:none;
    font-style:normal;
    font-variant:normal;
    font-weight:400;
    font-size:80%;
    line-height:150%;
    font-family: Open Sans, sans-serif;
    text-indent: 10px;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 0;
}

</style>
