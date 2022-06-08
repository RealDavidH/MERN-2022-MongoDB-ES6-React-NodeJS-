//1

Number.prototype.isPrime = () => {
    for (let i = 2; i < Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 10000) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//2
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}

rFib(20);
// iterative
// Iterative would be faster, taking only 0.0327 milliseconds to run compared to the 2.1182 of the recursive
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);


//3

const story =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)

//This is the more Better version. Taking 1.79 milliseconds 
const story2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed = reverseString(story2)
console.log(reversed)


function reverseString(str) {
    let j = str.length - 1;
    let tempstr1 = "";
    for (let i = 0; i < str.length; i++) {
        tempstr1 += str[j];
        j--;
    }
    return tempstr1;
}