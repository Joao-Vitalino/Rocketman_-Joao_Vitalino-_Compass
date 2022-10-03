// IF ... ELSE

// Se a hora estiver entre 6h até 12h : Bom dia!
// Se estiver entre 12h e 18h : Boa tarde!
// Caso contrário : Boa noite!

let hora = 22;

if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}