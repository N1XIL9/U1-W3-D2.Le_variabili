// Dovrai impostare strutture var, let, const
// Creare un esempio per dimostrare la differenza fondamentale tra var/let e const 

var sectionOne = 'string';
var sectionOne = '345';
// con VAR posso RI-DICHIARARE la stessa variabile 

let sectionTwo = 'string';
// let sectionTwo = '345';
// con LET non posso RI-DICHIARARE la stessa variabile 

// ------------------------------------------------ 

const age = '04-04-1991';
// age = '04-04..'
// con CONST non posso RI-ASSEGNARE la stessa variabile 


let numberOne = '1';
numberOne = '10';
// con LET e VAR posso RI-ASSEGNARE la stessa variabile 


// Utilizza anche un tipo booleano e concatenalo in 
// una stringa o ad una variabile di tipo stringa



let booleano = true;
booleano += sectionTwo;

// Esegui delle operazioni di somma e sottrazione

4 + 10; // 14
numberOne + 3; // 13
14 - 13; // 1


//! Mostrare con direttive output il risultato degli script

console.log(sectionOne);
console.log(sectionTwo);
console.log(age);
console.log(number);
console.log(booleano + true);


