<template>
  <div>
    <!-- about us section -->
    <about-us :header="text_vr.vilarosa.header" :text="text_vr.vilarosa.text"></about-us>

    <!-- reception section -->
    <reception :header="text_vr.reception.header" :text="text_vr.reception.text"></reception>

    <!-- rooms section -->
    <rooms :rooms="text_vr.rooms"></rooms>

    <!-- price info section -->
    <price-info :header="text_vr.price_info.header" :text="text_vr.price_info.text"></price-info>

    <!-- management section -->
    <management :header="text_vr.management.header" :text="text_vr.management.text"></management>

    <!-- pro-nature section -->
    <pro-nature :header="text_vr.pro_nature.header" :text="text_vr.pro_nature.text"></pro-nature>

    <!-- map section -->
    <g-map></g-map>

    <!-- contacts section -->


    <!-- copyright footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import AboutUs from '@/components/VilaRosa/AboutUs.vue'
import Reception from '@/components/VilaRosa/Reception.vue'
import Rooms from '@/components/VilaRosa/Rooms.vue'
import PriceInfo from '@/components/VilaRosa/PriceInfo.vue'
import Management from '@/components/VilaRosa/Management.vue'
import ProNature from '@/components/VilaRosa/ProNature.vue'
import GMap from '@/components/VilaRosa/GMap.vue'
import PageFooter from '@/components/VilaRosa/Footer.vue'

export default {
  name: 'VilaRosa',
  components: {
      AboutUs,
      Reception,
      Rooms,
      PriceInfo,
      Management,
      ProNature,
      GMap,
      PageFooter
  },
  computed: {
      site_lang () {
        return this.$store.state.lang_select
      },
      text_vr () {
        return this.$store.getters.get_text
      }
  },
  methods: {
      toggleLang () {
        // console.log(`@LANG_TOGGLE_ACT`)
        this.$store.dispatch('LANG_TOGGLE_ACT')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
