<template>
  <div class="main_box">
    <div id="google_maps">
       <iframe
            width="100%"
            height="470px"
            frameborder="0"
            style="border:0;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.423562945353!2d23.566233!3d46.756547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e7b11873599%3A0x164d4cd66d5df32f!2sVila+Rosa!5e0!3m2!1sen!2sro!4v1428045213597">
        </iframe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GMap'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.main_box {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    height: auto;
    width: 100%;
    min-width: 320px;
    background-color: green;
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
</style>
