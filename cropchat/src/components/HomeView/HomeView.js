import data from '../../data'
export default {
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    }
  },
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
