"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

// traitement saisie interdiction lettre
var refInput = document.getElementById("ref");
var ref_ = "";

var allRef = _toConsumableArray(document.querySelectorAll("tr td:first-child"));

var allRefNorm = allRef.map(function(i) {
  return normalizSpace(i.innerHTML);
}); // listener

document.getElementById("ref").addEventListener("keypress", refInputKey);
document.getElementById("search_btn").addEventListener("click", btn_action); // console.log(allRefNorm);

function isPresent(arg, ref) {
  console.log(
    "isPresent dit ref: "
      .concat(ref, " === ")
      .concat(ref_, ", \xE7a vaut ")
      .concat(arg.includes(ref), "?")
  );

  if (arg.includes(ref)) {
    console.log("ref: ".concat(ref, " existe"));
    go_id(ref_);
  } else {
    alert("votre référence n'est pas valide.");
    window.location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/ingredients/index.html";
  }
}

function refInputKey(e) {
  console.log(e.key);
  ref_ += e.key;
  console.log(ref_);

  if (isFinite(e.key) || e.key == "Enter") {
    if (ref_.length === 7) {
      e.preventDefault(); // important FIX bug for safari browser

      isPresent(allRefNorm, ref_);
      ref_ = "";
    }
  } else {
    alert("Oups juste des chiffres :)");
  }
}

function normalizSpace(string) {
  return string.replace(/[\n\r\s\t]+/g, "");
}

function go_id(params) {
  if (params) {
    window.location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/ingredients/index.html" +
      "#ref" +
      params;
    document.getElementById("ref".concat(params)).classList.add("activline");
  }
}

function btn_action(e) {
  e.preventDefault();
  go_id(refInput.value);
} // gestion supp : backspace + supp

document.getElementById("ref").addEventListener("keydown", KeyCheck);

function KeyCheck(event) {
  var KeyID = event.keyCode;

  switch (KeyID) {
    case 8:
      // gérer le cas d'une suppression suite à une selection
      ref_ = ref_.slice(0, -1);
      console.log("bckspa ref_: ".concat(ref_));
      break;

    case 46:
      console.log("delete");
      break;

    default:
      break;
  }
}
