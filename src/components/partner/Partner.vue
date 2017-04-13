<template>
	<div class="partner">
		<iListPage :data="iData"></iListPage>
	</div>
</template>

<script>
	import iListPage from './../listpage/ListPage'
	export default {
		name: 'Partner',
		data () {
			return {
				iData: {
					url: './../static/partner/partner'
				}
			}
		},
		components: {
			iListPage
		}
	}
</script>

<style lang="scss" >
	.partner .listpage{
		.list{
			.cont {
				.description {
					height: 8.8rem;
					overflow: hidden;
					-webkit-line-clamp: 7;

				}
			}
		}
	}
</style>