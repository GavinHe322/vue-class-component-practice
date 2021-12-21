<template>
  <div>
    <input v-model="msg" type="text">

    <p>
      Alert message
      <el-button @click="greet">click me</el-button>
    </p>
    <Hello ref="helloComponent" />
    <World />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import Component from '../../lib/index'
import Hello from './components/Hello.vue'
import World from './components/World'

const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})

@Component({
  components: {
    Hello,
    World
  }
})
export default class App extends AppProps {
  msg: number = 123

  helloMsg: string = 'Hello, ' + this.propMessage

  $refs!: {
    helloComponent: Hello
  }

  greet() {
    alert('greeting: ' + this.msg)
    this.$refs.helloComponent.sayHello()
  }
}
</script>
