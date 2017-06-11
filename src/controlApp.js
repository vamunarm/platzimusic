import getArtists from './api' // index.js
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: 'argentina', value: 'argentina'},
        {name: 'colombia', value: 'colombia'},
        {name: 'españa', value: 'spain'}
      ],
      selectedCountry: 'spain',
      loading: true
    }
  },
components: {
  Artist,
  Spinner
},
methods:{
  refreshArtists(){
    const self = this
    this.loading = true
    this.artists = []
    getArtists(this.selectedCountry)
      .then(function (artists) {
        self.loading = false
        self.artists = artists
      })
  }
},
  mounted() {
    this.refreshArtists()
  },
  watch: {
    selectedCountry(){
      this.refreshArtists()
    }
  }
}
