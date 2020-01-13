import { ref } from 'vue'
class Route {
  constructor(routes) {
    this.current = ref('/')
    this.routes = routes
    this.pushEffects = []
    window.onpopstate = (e) => {
      console.log(312321321,e)
    }
  }
  push(href) {
    window.history.pushState(null, null, href)
    this.current.value = href
    this.run(href)
  }
  run(href) {
    this.pushEffects.forEach(item => {
      item(href)
    })
  }
  onpush(effect) {
    this.pushEffects.push(effect)
    return effect
  }
  clear(effect) {
    const index = this.pushEffects.findIndex(item => item === effect)
    this.pushEffects.splice(index, 1)
  }
}

export default Route
