console.log('required c.js')

import a from './a.js'

export default (node) => {
  console.log('c', node)
  a(node)
}
