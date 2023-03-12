function cycle(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function recursion(n){
if (n === 1) {
    return 1;
} else {
    return n + recursion(n - 1);
}
}

let num = 100;

console.log("Результати суми чисел від 1 до 100");
console.log("Циклом: " + cycle(num) + ", Рекурсією: " + recursion(num));