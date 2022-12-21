<template>
  <div id="mainApp">
    <div id="witchingListTitle">
      시청중인 목록
    </div>
    <div id="watchingList">
    <!--<router-link to="#"><img src="../assets/doctor.png"></router-link>
    <router-link to="#"><img src="../assets/mrSunshine.png"></router-link>
    <router-link to="#"><img src="../assets/loveMistake.png"></router-link>-->

      <img src="../assets/doctor.png">
      <img src="../assets/mrSunshine.png">
      <img src="../assets/loveMistake.png">
    </div>

    <div id="popularListTitle">
      지금 뜨는 콘텐츠
    </div>
    <div id="popularList">
        <img src="../assets/mrSunshine.png">
        <img src="../assets/doctor.png">
        <img src="../assets/loveMistake.png">
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorldd',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainApp{
  background-color: black;
  text-align: left;
  color : white;
}

#witchingListTitle{
  font-size: 1.5em;
  padding: 40px 0 0 20px;
}

#watchingList{
  width : 100%;
  display : flex;
  background-color: black;
}

#watchingList img{
  width : 300px;
  padding : 20px;
  object-fit: cover;
}

#popularListTitle{
  font-size: 1.5em;
  padding: 40px 0 0 20px;
}

#popularList{
  width : 100%;
  display : flex;
  background-color: black;
}

#popularList img{
  width : 300px;
  padding : 20px;
  object-fit: cover;
}


</style>
