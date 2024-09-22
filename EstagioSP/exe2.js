function calFibonacci(n) {
    const fib = [0, 1];
    while (fib[fib.length - 1] <= n) {
        fib.push(fib[fib.length - 1] + fib.length - 2);
    }
    return fib;
}

function realFibonacci(num) {
    return calFibonacci(num).includes(num);
}

const numero = 13;

if (realFibonacci(numero)) {
    console.log(`O número ${numero} pertence a sequência`)
} else {
    console.log(`O número ${numero} não pertence a sequência`)
}