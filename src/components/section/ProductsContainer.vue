<template>
  <div class="row g-gs">
    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="product in productData.products" :key="product.id">
        <Products :product="product"></Products>
    </div>
  </div>
</template>

<script>
// import SectionData from '@/store/store.js'
import { mapState } from 'vuex'
import Products from '@/components/section/Products'

export default {
  name: 'ProductsContainer',
  components: { 
    Products 
  },
  computed: {
    ...mapState([
      'productData'
    ])
  }
  // data () {
  //     return {
  //       SectionData,
  //     }
  // }

};
</script>