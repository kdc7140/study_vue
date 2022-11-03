<template>
  <div>
    <div v-for='jobs in jobsList'>{{ jobs.title }}</div>
  </div>
</template>

<script>

import { fetchJobsList } from '../api/index.js';

export default {
  data(){
    return{
      jobsList : []
    }
  },
  created(){
    fetchJobsList()
      .then(response => {
        console.log(response);
        this.jobsList = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style>

</style>