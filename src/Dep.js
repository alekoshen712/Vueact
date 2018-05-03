class Dep {
  constructor () {
    this.deps = []
  }
  notify () {
    this.deps.forEach(watcher => {
      watcher.notify()
    })
  }
  addSub (watcher) {
    if (!this.deps.includes(watcher)) {
      this.deps.push(watcher)
    }
  }
}

Dep.target = null

export default Dep
