import baz from 'bazooka'

const lazyBaz = (filename) => (n) => (
  filename().then(f => (f.bazFunc || f.default)(n))
)

baz.register({
  a: lazyBaz(() => import('./a')),
  b: lazyBaz(() => import('./b')),
})

baz.refresh(document.body)
