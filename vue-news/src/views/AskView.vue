<template>
	<div>
        <list-item></list-item>
		<!--<ul class="news-list">
			<li v-for="item in fetchedAsk" class="post">
				<div class="points">
					{{ item.points }}
				</div>
				<div>
					<p class="news-title">
						<router-link v-bind:to="`/item/${item.id}`" class="link-text">
                            {{ item.title }}
                        </router-link>
					</p>
					<small class="link-text">
                        {{ item.time_ago }}
                        by 
						<router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
					</small>
				</div>
			</li>
		</ul>-->
	</div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
// import { mapState } from 'vuex';
import { mapGetters } from "vuex";
import ListItem from '../components/ListItem.vue';

export default {
    components : {
        ListItem : ListItem,
    },
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
};
</script>