<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from '../../../lib/index'
// import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
  message: string = 'hello component'

  sayHello() {
    alert(this.message)
  }
}
</script>
