import parse from 'xml-parser'
import axios from 'axios'
export default {
  data () {
    return {
      'catUrl': null,
      'response': null,
      'title': null
    }
  },
  mounted () {
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1', {headers: {'Access-Control-Allow-Origin': '*'}}).then(response => {
      this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    })
      .catch(error => { console.log(error, 'error') })
  },
  methods: {
    postCat () {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'comment': this.title,
          'info': 'Posted by Prashant on Tuesday',
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }
  }
}
