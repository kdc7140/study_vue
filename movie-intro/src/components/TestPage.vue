<template>
  <div>
    <h1>This is an about page</h1>
    {{ counter }}
    <button @click="click">click</button>
  </div>
</template>

<script>
//import { computed } from "vue";
//import { useStore } from "vuex";

import commonUtil from '../common/common.util.js';

export default {
  data(){
    return {
      counter : 10,
    }
  },
  mounted () {
    console.log("AA");
    commonUtil.callList();
  },
  methods : {
    click(){
      console.log('click');

    }
  },
};
</script>
 