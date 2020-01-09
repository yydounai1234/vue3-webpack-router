class Route {
  constructor(routes) {
    this.current = '/'
    this.routes = routes
    this.pushEffects = []
  }
  push(href) {
    window.history.pushState(null, null, href)
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
