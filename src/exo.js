const chaine = "azertyuiop";

const correspondance = {
  "a": "1",
  "b": "2",
  "c": "3",
  "d": "4",
  "e": "5",
  "f": "6",
  "g": "7",
  "h": "8",
  "i": "9",
  "j": "0",
};

function changeCaracteres(chaine, correspondance) {
  let chaineModifiee = "";

  for (let i = 0; i < chaine.length; i++) {
    const caractere = chaine[i];
    const caractereModifie = correspondance[caractere];
    if (caractereModifie !== undefined) {
      chaineModifiee += caractereModifie;
    } else {
      chaineModifiee += caractere;
    }
  }

  return chaineModifiee;
}

const chaineModifiee = changeCaracteres(chaine, correspondance);
console.log(chaineModifiee); // "1234567890"
