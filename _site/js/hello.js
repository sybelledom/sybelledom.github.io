// traitement saisie interdiction lettre
const refInput = document.getElementById('ref')
let ref_ = ''
const allRef = [...document.querySelectorAll('tr td:first-child')]
const allRefNorm = allRef.map(i => normalizSpace(i.innerHTML))

// add keypress listener
document.addEventListener('keypress', refInputKey)
console.log(allRefNorm)
function isPresent (arg, ref) {
  console.log(`isPresent dit ref: ${ref}, ça vaut ${arg.includes(ref)}?`)
  if (arg.includes(ref)) {
    console.log(`ref: ${ref} existe`)
    go_id(ref_)
    document.getElementById('gotoref').classList.add('mdr_ok')
  } else {
    alert("votre référence n'est pas valide.")
    window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      '/ingredients/index.html'
  }
}

function refInputKey (e) {
  console.log(e.key)
  ref_ += e.key
  console.log(ref_)
  if (isFinite(e.key) || e.key == 'Enter') {
    if (ref_.length === 7) {
      isPresent(allRefNorm, ref_)
      ref_ = ''
    }
  } else {
    alert('Oups juste des chiffres :)')
  }
}

function normalizSpace (string) {
  return string.replace(/[\n\r\s\t]+/g, '')
}

function go_id (params) {
  if (params) {
    window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      '/ingredients/index.html' +
      '#_' +
      params
    document.getElementById(`_${params}`).classList.add('activline')
  }
}

// gestion click btn
document.getElementById('gotoref').addEventListener('click', function (params) {
  if (document.getElementById('ref').value !== '') {
    let id = document.getElementById('ref').value
    id = normalizSpace(id)
    const test = (window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      '/ingredients/index.html' +
      '#_' +
      id)

    console.log(`id:${id}`)

    document.getElementById(`_${id}`).classList.toggle('activline')
  }
})

// BUTTON RETURN ON TOP
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block'
  } else {
    document.getElementById('myBtn').style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
