<template>
  <div id="app">
    <img src="./assets/logo.png">
     <p v-if="loading">
        Loading...
    </p>
    <ul>
      <li :key="p.id" v-for="p in allPosts">
        <p>{{p.imageUrl}}</p>
        <p>{{p.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import allPosts from './apollo/queries/allPosts.gql'

export default {
  data: () => ({
    allPosts: {},
    loading: 0
  }),
  apollo: {
    allPosts: {
      prefetch: true,
      query: allPosts,
      loadingKey: 'loading'
    }
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
