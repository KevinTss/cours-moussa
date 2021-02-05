const obj = {
  eleve1: "Marc",
  eleve2: "Julien",
  eleve3: "Mohammed",
}


obj.eleve1 // Marc

obj["eleve2"] // Julien

function lol() {
  return obj
}

lol().eleve1 // Marc

lol()["eleve2"] // Julien


{
  nom: "kevin"
}.nom // kevin

const a = { nom: "kevin" }

a.nom // kevin
