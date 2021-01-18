function test() {
  let x = window.localStorage.getItem('bbb')
  x++
  window.localStorage.setItem('bbb', x)
  alert(x)
}

function add_to_cart(id) {
  let key = 'product_' + id
  let x = window.localStorage.getItem(key)
  x++
  window.localStorage.setItem(key, x)
}
