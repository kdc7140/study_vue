<template>
  <div>
    <section>
		<div>
			<div>
				{{ itemInfo }}
			</div>
			<div>
				<router-link :to="`/user${fetchedItem.user}`">
					{{ fetchedItem.user}}
				</router-link>
				<div>
					{{fetchedItem.time_ago}}
				</div>
			</div>
			<h2>{{ fetchedItem.title }}</h2>
		</div>
	</section>
	<section>

	</section>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    ...mapGetters(['fetchedItem']),
	itemInfo(){
      return this.$store.state.item;
    }
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    // axios.get(`https://api.hnpwa.com.v0/user${this.$route.params.id}.json`);
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>



<style>

</style>