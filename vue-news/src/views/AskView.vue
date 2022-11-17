<template>
    <div>
        <p v-for="item in fetchedAsk">
            <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
// import { mapState } from 'vuex';
import { mapGetters } from "vuex";

export default {
    computed: {
        // #4. 배열 표현법 -> store의 getters에서 선언한 함수명을 직접 갖다 쓸 수 있음
        ...mapGetters(["fetchedAsk"]),

        // #3. 객체표현법 -> 상단 for문이 askItems 변수로 들어감
        // ...mapGetters({
        //   askItems : 'fetchedAsk'
        // })

        // #2.
        // ...mapState({
        //   fetchedAsk : state => state.ask
        // })

        // #1.
        // ask() {
        //   return this.$store.state.ask
        // }
    },
    created() {
        console.log("ask");
        this.$store.dispatch("FETCH_ASK");
    },
};
</script>

<style></style>
