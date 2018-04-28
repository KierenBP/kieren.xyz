<template>
	<div class="home">
		<div class="info">
			<img src="../assets/me.jpg" class="avatar">
			<h1>Kieren Butcher-Penrose</h1>
			<p>Software Engineer working with Javascript.</p>
		<div class="block">
			<a style="margin-bottom: 20px;" :href="`mailto:${email}`">{{email}}</a><br/>
			<div v-for="s in social" :key="s.name" class="social">
				<a :href="s.link" target="_blank"><icon :name="s.icon" scale="1.9"></icon></a>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			email: 'kieren@kieren.nz',
			social: [{
				name: 'Twitter',
				link: 'https://twitter.com/kierenbp',
				icon: 'brands/twitter-square',
			}, {
				name: 'Github',
				link: 'https://github.com/kierenbp',
				icon: 'brands/github-square',
			}, {
				name: 'Medium',
				link: 'https://medium.com/@kierenbp',
				icon: 'brands/medium',
			}, {
				name: 'Linkedin',
				link: 'https://www.linkedin.com/in/kierenbp',
				icon: 'brands/linkedin',
			}],
		};
	},
};
</script>

<style lang="scss" scoped>
.fa-icon {
	color: #000;
}
.home {
	display: flex;
	justify-content: center;
	height: 150px;
}
.avatar {
	border-radius: 100%;
	width: 230px;
}
.info {
	text-align: center;
}
.social {
	display: inline;
	margin-right: 20px;
	&:last-of-type {
		margin-right: 0;
	}
}
</style>

