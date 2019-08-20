// traitement saisie interdiction lettre
const refInput = document.getElementById('ref');
let ref_ = '';
const allRef = [...document.querySelectorAll('tr td:first-child')];
const allRefNorm = allRef.map(i => normalizSpace(i.innerHTML));

// add keypress listener
document.addEventListener('keypress', refInputKey);
// console.log(allRefNorm);

function isPresent(arg, ref) {
  console.log(
    `isPresent dit ref: ${ref} === ${ref_}, ça vaut ${arg.includes(ref)}?`
  );
  if (arg.includes(ref)) {
    console.log(`ref: ${ref} existe`);
    go_id(ref_);
  } else {
    alert("votre référence n'est pas valide.");
    window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      '/ingredients/index.html';
  }
}

function refInputKey(e) {
  console.log(e.key);
  ref_ += e.key;
  console.log(ref_);
  if (isFinite(e.key) || e.key == 'Enter') {
    if (ref_.length === 7) {
      e.preventDefault(); // important FIX bug for safari browser
      isPresent(allRefNorm, ref_);
      ref_ = '';
    }
  } else {
    alert('Oups juste des chiffres :)');
  }
}

function normalizSpace(string) {
  return string.replace(/[\n\r\s\t]+/g, '');
}

function go_id(params) {
  if (params) {
    window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      '/ingredients/index.html' +
      '#ref' +
      params;

    document.getElementById(`ref${params}`).classList.add('activline');
  }
}
