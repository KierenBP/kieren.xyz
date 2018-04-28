<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{name: 'Home'}" exact>Home</router-link>
      <router-link :to="{name: 'About'}" exact>About Me</router-link>
      <!-- <router-link :to="{name: 'Projects'}" exact>Projects</router-link>
      <router-link :to="{name: 'Resume'}" exact>Resume</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700');
* {
  font-family: 'Roboto', 'Helvetica Neue';
}
.nav {
  margin: 30px auto 100px auto;
  text-align: center;
  a {
    margin-right: 20px;
    text-transform: uppercase;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  .router-link-active {
    text-decoration: underline;
  }
}
</style>
