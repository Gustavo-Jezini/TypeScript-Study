// unknown é o pai de todos os tipos, porem é mais seguro que o any
// Com any permite qualquer coisa, já o unknown não

let x: any;
x = 10;
x = '10';

const y = 800;
 console.log(x + y); // 10800

let z: unknown;

z = '11';

console.log(z + y);
// Ocorre um erro. O Unknown te força a fazer uma checagem

// TSError: ⨯ Unable to compile TypeScript:
// src/A0010/index.ts(15,13): error TS2571: Object is of type 'unknown'.

