import baz from 'bazooka'

const lazyBaz = (filename) => (n) => (
  filename().then(f => (f.bazFunc || f.default)(n))
)

baz.register({
  a: lazyBaz(() => import('./a.js')),
  b: lazyBaz(() => import('./b.js')),
  c: lazyBaz(() => import('./c.js')),
})

baz.refresh(document.body)
