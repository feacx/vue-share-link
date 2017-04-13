<template>
	<div class="student">
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
					url: './../static/student/student'
				}
			}
		},
		components: {
			iListPage
		}
	}
</script>

<style lang="scss" >
	.partner, .student{
		.list{
			li{
				float: left;
				width: 33.333%;
			}
			.cover {
				.img {
					border-radius: 100%;
				}
			}
			.cont {
				.title {
					margin-top: 0.6rem;
					text-align: center;
				}
				.description {
					height: 3.7rem;
					overflow: hidden;
					-webkit-line-clamp: 3;
				}
			}
		}
	}
</style>