import { flol } from './shared.js'
import { createElement } from 'preact'

console.log('required a.js')

export default (node) => {
  console.log('a', node)
  flol(createElement('div'))
}
