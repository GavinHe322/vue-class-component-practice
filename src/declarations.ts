import Vue, { ComponentOptions } from 'vue'

export type VueClass<V> = { new (...args: any[]): V & Vue } & typeof Vue

export type DecoratedClass = VueClass<Vue> & {
  __decrators__?: ((options: ComponentOptions<Vue>) => void)[]
}
