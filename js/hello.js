// document.getElementById('ref').value != '' ? const id = document.getElementById('ref').value : alert('rentrez une ref!')

function go_id(params) {
  if (document.getElementById('ref').value !== '') {
    const id = document.getElementById('ref').value;
  } else {
    alert('rentrez une ref!');
  }

  const test = (window.location =
    window.location.protocol +
    '//' +
    window.location.host +
    '/ingredients/index.html' +
    '#_' +
    document.getElementById('ref').value);

  console.log(`test: ${test}`);

  document.getElementById(`_${id}`).classList.add('activline');
}
