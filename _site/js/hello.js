console.log('hello you ❤️')

const navList = Array.from(document.querySelectorAll('.header__nav a'))

navList[0].classList.toggle('actif')

console.log(navList)

function go_id(params) {
  // window.location === 'http://localhost:4000/ingredients/'
  //   ? console.log('ok')
  //   : (window.location = 'http://localhost:4000/ingredients/')
  var id = document.getElementById('ref').value
  console.log(id)
  document.getElementById(`_${id}`).classList.add('activline')
  window.location =
    window.location + 'index.html#_' + document.getElementById('ref').value
}
