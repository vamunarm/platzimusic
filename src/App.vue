<template lang="pug">
  #app
    img(src='https://vamunarm.github.io/platzimusic/src/assets/logo.png')
    h1 Platzimusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
</template>
<script src="./controlApp.js"></script>
<style lang="stylus">
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      margin-top 60px
    h1, h2
      font-weight normal
    ul
      list-style-type none
      padding 0
    li
      display inline-block
      margin 0 10px
    a
      color #42b983
    h1
      color #af140a
</style>
