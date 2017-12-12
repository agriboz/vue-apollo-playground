import Vue from 'vue'
import {
  ApolloClient
} from 'apollo-client'

import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'

import VueApollo from 'vue-apollo'
import App from './app'
// Create the apollo client
const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjaxsc0xk31do01425qwrevge'
  }),
  cache: new InMemoryCache()
})

// Install the vue plugin
Vue.use(VueApollo)

// Install the vue plugin

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  apolloProvider,
  components: {
    App
  }
})
