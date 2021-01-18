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
  alert('Items in your cart: ' + cart_get_number_of_items())
}

function cart_get_number_of_items() {
  let cnt = 0

  for(let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)
    let value = window.localStorage.getItem(key)

    if (key.indexOf('product_') === 0) {
      cnt += value * 1
    }
  }
  return cnt
}
