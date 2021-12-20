import Vue from 'vue'
import { VueClass } from './declarations'
import { warn } from './util'

export function collectDataFromConstructor(vm: Vue, Component: VueClass<Vue>) {
  const originalInit = Component.prototype._init
  Component.prototype._init = function(this: Vue) {
    const keys = Object.getOwnPropertyNames(vm)
    if (vm.$options.props) {
      for (const key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key)
        }
      }
    }

    keys.forEach(key => {
      Object.defineProperty(this, key, {
        get: () => vm[key],
        set: value => { vm[key] = value },
        configurable: true
      })
    })
  }

  const data = new Component()

  Component.prototype._init = originalInit

  const plainData = {}
  Object.keys(data).forEach(key => {
    if (data[key] !== undefined) {
      plainData[key] = data[key]
    }
  })

  if (process.env.NODE_ENV !== 'production') {
    if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
      warn(
        'Component class must inherit Vue or its descendant class ' +
        'when class property is used.'
      )
    }
  }

  return plainData
}
