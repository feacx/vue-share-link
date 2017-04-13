<template>
	<div class="teacher">
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
					url: './../static/teacher/teacher'
				}
			}
		},
		components: {
			iListPage
		}
	}
</script>

<style lang="scss">
.teacher, .student, .partner{
	.view-detail{
		display: none;
	}
}
	.teacher{
		.list{
			.cover {
				float: left;
				width: 7rem;
				height: 7rem;
				.img {
					border-radius: 1rem;
				}
			}
			.cont {
				padding-left: 0.5rem;
				.description {
					margin-top: 0.6rem;
					-webkit-line-clamp: 3;
					line-height: 1.6;
				}
			}
		}
	}
</style>
