<template>
	<div class="about">
		<div class="intro-text">
			<h3>Intro</h3>
			<p>My name is Kieren Butcher-Penrose. I am 18 years old and I was born on the 4th of June 1999 in New Zealand. I am a full stack Javascript developer.</p><p> I am experienced with Vue, Vue-Router and SASS in the frontend and NodeJS, ExpressJS and MySQL in the backend.</p> <p>I am constantly looking to improve my programming and computer knowledge and become a skilled developer with an understanding of backend, frontend and server technology.</p>
		</div>
		<div class="block-text">
			<h3>Background</h3>
			<p>From an early age, I formed an interest in computers. At the age of ten, I installed Linux on my first laptop which is what kickstarted my passion for computers.</p>
			<p>Throughout the ages of 13 to 15, I started to use Linux in server environments to host gaming servers with custom modifications for friends and hosting community forums using MyBB with Apache.</p>
			<p>I started coding with HTML and CSS in 2014 before moving on to Javascript. I learned these skills through self learning courses like Lynda.com, TeamTreeHouse, Code School, multiple books and practicing. My high school later gave me 4 periods a week where I could continue to learn and further develop my programming skills.</p>
		</div>
		<div class="block-text">
			<h3>Experience</h3>
			<p>In 2015, I started my first job for Maketu Pies. Then moving on to more complex development with Wordpress for pilatesfitnessltd.com.</p>
			<p>At the start of 2016 I took up an internship at Ashley Cho I.T. Solutions which consisted of me developing frontend and backend applications using Javascript/NodeJS, React and MySQL. I also helped change their development process by introducing Git version control to the team.</p>
			<p>Currently I am employed full time at Safe T Works in Taupo. I am working with Javascript, Vue, NodeJS, ExpressJS, Google Cloud and MySQL to build OSHTrak.</p>
		</div>
		<div class="block-text">
			<h3>Future</h3>
			<p>In 5 years time I would like to know more programming languages like Golang and Swift. Learn cloud and gain certifcation in Amazon Web Services and/or Google Cloud Platform. Build stronger relationships with people in the web development industry and create/contribute to open source products.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'about',
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.intro-text, .block-text {
	margin: 0 auto;
	text-align: center;
}
@media (min-width: 700px) {
	.intro-text, .block-text {
		width: 50%;
	}
}
.block-text {
	margin-top: 20px;
}
</style>

