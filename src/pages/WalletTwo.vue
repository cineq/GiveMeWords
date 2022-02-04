<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="breadcrumbData.breadcrumbListFour.title" :lists="breadcrumbData.breadcrumbListFour.navList"></HeroFour>
    </header>
    <!-- wallet section -->
    <WalletSectionTwo></WalletSectionTwo>
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import { mapState } from 'vuex'
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'WalletTwo',
  components: {
    HeroFour
  },
  computed: {
    ...mapState([
      'breadcrumbData'
    ])
  }
  // data () {
  //   return {
  //     SectionData
  //   }
  // }
}
</script>
