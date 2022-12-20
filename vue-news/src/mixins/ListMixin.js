import bus from "@/utils/bus"

// mixin
export default {
	//재사용할 컴포넌트 옵션 & 로직
	created() {
		bus.$emit('start:spiiner');
		this.$store.dispatch('FETCH_LIST', this.$route.name)
			.then(() => {
				console.log(5);
				bus.$emit('end:spinner');
			})
			.catch((error) => {
				console.log(error);
			});
	}
}