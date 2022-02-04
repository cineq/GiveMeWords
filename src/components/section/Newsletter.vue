<template>
  <section class="subscibe-section section-space-sm">
            <div class="container">
                <div class="join-form-wrap">
                    <div class="row g-gs align-items-center">
                        <div class="col-lg-3">
                            <h3 class="form-title">{{ newsletterData.title }}</h3>
                        </div><!-- end col -->
                        <div class="col-lg-3 col-md-4">
                            <input class="form-control form-control-s1" type="text" name="name" :placeholder="newsletterData.inputText">
                        </div><!-- end col -->
                        <div class="col-lg-3 col-md-4">
                            <input class="form-control form-control-s1" type="text" name="email" :placeholder="newsletterData.inputTextTwo">
                        </div><!-- end col -->
                        <div class="col-lg-3 col-md-4">
                            <a href="#" class="btn btn-primary d-md-block">{{ newsletterData.btnText }}</a>
                        </div><!-- end col -->
                    </div><!-- row -->
                </div><!-- end join-form-wrap -->
            </div><!-- end container -->
    </section><!-- end subscibe-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
// import SectionData from '@/store/store.js'
import { mapState } from 'vuex'

export default {
  name: 'Newsletter',
  computed: {
      ...mapState([
          'newsletterData'
      ])
  }
//   data () {
//     return {
//       SectionData
//     }
//   }
}
</script>
