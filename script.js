// --- PARTE 2: Variables y Tipos de Datos ---
let nombre = 'Victor Yataco'; 
let edad = 30; // Pon tu edad real aquí
let estaAprendiendo = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Está aprendiendo?:", estaAprendiendo);

// Verifica tipos
console.log(typeof nombre);       
console.log(typeof edad);         
console.log(typeof estaAprendiendo); 

// Variables con const
const curso = 'Code 101';
const maxIntentos = 10;

// Interacción con el Usuario
let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuántos años tienes?');
let ciudad = prompt('¿En qué ciudad vives?'); // Logro 🟢

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);

// --- PARTE 3: Operadores ---
let a = 20;
let b = 7;
console.log('Suma:', a + b);
console.log('Módulo:', a % b);

// Calculadora de edad y Template Literals
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario); 
console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento} y vives en ${ciudad}.`); // Logro 🟢

// Cálculo para los 100 años (Logro 🟡)
let anioCien = anioNacimiento + 100;
console.log(`Cumplirás 100 años en el año: ${anioCien}`);

// Preview de Condicionales (Logro 🔴)
if (Number(edadUsuario) >= 18) {
    console.log("Status: Eres mayor de edad.");
} else {
    console.log("Status: Eres menor de edad.");
}