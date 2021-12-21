import Vue, { CreateElement } from 'vue'
import Component from '../../../lib/index'
// import Component from 'vue-class-component'

@Component
export default class World extends Vue {
  render(h: CreateElement) {
    return <p>this is rendered via TSX</p>
  }
}
