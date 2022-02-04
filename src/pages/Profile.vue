<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-pattern-3">
          <!-- Header main -->
          <HeaderDashboard></HeaderDashboard>
          <!-- hero -->
          <AuthorHero avatarSize="avatar-3" :isCopyInput="true" :coverimg="getUser.coverImg" :img="getUser.img" :title="getUser.title" :username="getUser.userName" :btntext="getUser.btnText" :btnlink="getUser.btnLink"></AuthorHero>
        </header>
        <!-- Author section  -->
        <ProfileSection></ProfileSection>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import {mapGetters, mapState} from "vuex"
import { Auth } from "aws-amplify";
import store from '@/store/store'
export default {
  name: 'Profile',
  computed: {
      ...mapState({
        a: state => state.auth.authorPersonalData.userName,
      }),
      ...mapGetters({
        getUser: "auth/getUser"
        })
  },
  mounted() {
    function logUser() {
      const userInfoo = Auth.currentUserInfo();
      console.log(userInfoo)
      // console.log(this.a)
      console.log(store.auth)
    }

    logUser()
  }
}
</script>
