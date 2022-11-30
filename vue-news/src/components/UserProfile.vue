<template lang="">
	<div>
		<!-- 질문 상세 정보 -->
		<section>
			<div class="user-container">
				<div>
					<i class="fas fa-user"></i>
				</div>
				<div class="user-description">
					<div>userName : {{ userInfo.id }}</div>
					<slot name="userName"></slot>
					<!--<router-link v-bind:to="`/user/${fetchedItem.user}`">
						{{ userInfo.id }}
					</router-link>-->
					<div class="time">
						<!--{{ userInfo.created }}-->
						<slot name="time"></slot>
					</div>
				</div>
			</div>
			<slot namne="karma"></slot>
			<!--<h2>{{ fetchedItem.title }}</h2>-->
		</section>
	</div>
</template>

<script>


export default {
	props : {
		info : Object
	},
	computed : {
		userInfo(){
			return this.$store.state.user;
		}
	},
}
</script>

<style scoped>
	.user-container{
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}
	.fa-user{
		font-size: 2.5rem;
	}
	.user-description{
		padding-left: 8px;
	}
	.time{
		font-size: 0.7rem;
	}
</style>