<template>
	<div class="honor">
		<iListPage :data="iData"></iListPage>
	</div>
</template>

<script>
	import iListPage from './../listpage/ListPage'
	export default {
		name: 'Honor',
		data () {
			return {
				iData: {
					url: './../static/honor/honor'
				}
			}
		},
		components: {
			iListPage
		}
	}
</script>

<style lang="scss">
	.honor{
		.list{
			.cover {
				float: left;
				width: 13rem;
			}
			.cont {
				padding-left: 0.5rem;
				.title {
					margin-top: 0.4rem;
					font-size: 1.8rem;
					font-weight: bold;
				}
				.view-detail{
					color: #f00;
				}
			}
			.description {
				margin-top: 0.6rem;
				margin-bottom: 0.6rem;
				color: #666;
				line-height: 1.6;
			}
		}
	}
</style>
