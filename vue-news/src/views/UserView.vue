<template>
  <div>
    <user-profile v-bind:info="userInfo">
      <div slot="userName">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined '+ userInfo.created }}</span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
    <!--<p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>-->
  </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue';

export default {
  components : {
    UserProfile
  },
  computed : {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    console.log(userName);
    // axios.get(`https://api.hnpwa.com.v0/user${this.$route.params.id}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>