<template>
  <div class="home">
    <div class="info">
      <img src="../assets/me.jpg" class="avatar">
      <h1>Kieren Butcher-Penrose</h1>
      <p>Software Engineer working with Javascript.</p>
    <div class="block">
      <a :href="`mailto:${email}`">{{email}}</a><br/>
      <a href="https://twitter.com/kierenbp" class="social" target="_blank">Twitter</a>
      <a href="https://github.com/kierenbp" class="social" target="_blank">Github</a>
      <a href="https://medium.com/@kierenbp" class="social" target="_blank">Medium</a>
      <a href="https://www.linkedin.com/in/kierenbp" class="social" target="_blank">Linkedin</a>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 100px;
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
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>

