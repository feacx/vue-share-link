<template>
	<div class="listpage">
		<div class="banner">
			<img :src="banner" alt="">
		</div>
		<div class="m-hd">
			<h1>{{ title }}</h1>
		</div>
		<ul class="list clearfix">
			<li v-for="item in list">
				<div class="cover">
					<img class="img js_img" :src="item.head" alt="item.name">
				</div>
				<div class="cont">
					<h2 class="title js_title">{{ item.name }}</h2>
					<p class="description">{{ item.description }}</p>
					<a href="more" class="view-detail">查看详细&gt;&gt;</a>
				</div>
			</li>
		</ul>
		<div class="more-btn">
			<mt-button type="default" plain size="small" @click="getMore" v-show="moreBtn == 1">加载更多...</mt-button>
		</div>
		<div class="desc">
			<p v-html="intro"></p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object
			}
		},
		data () {
			return {
				title: '',
				banner: '',
				list: [],
				pageNumber: 0,
				intro: '',
				moreBtn: 1,
			}
		},
		methods: {
			getMore () {
				let $me = this
				$me.$http.get($me.data.url + $me.pageNumber + '.json')
				.then(res => {
					let data = res.data
					$me.banner = data.banner
					data.forEach((val, index) => {
						$me.list.push(val)
					})
					$me.pageNumber++
				})
				.catch(res => {
					$me.moreBtn = 0
				})
			}
		},
		created () {
			let $me = this
			$me.$http.get($me.data.url + '.json')
			.then(res => {
				let data = res.data
				$me.title = data.title
				$me.banner = data.banner
				$me.intro = data.intro
				data.list.forEach((val, index) => {
					$me.list.push(val)
				})
				$me.pageNumber++
			})
		}
	}
</script>