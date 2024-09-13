let a = 0, b = 1
let cont = 1;

console.log("os 10 primeiros numeros da sequecia de fibonacci são")
while (cont <= 10) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
    cont++;
}