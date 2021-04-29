//média ponderada
let n1 = 10.0
let n2 = 5.0
let n3 = 7.5
let p1 = 2
let p2 = 3
let p3 = 4

let mp = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
if (mp >= 7) {
    console.log("Aprov" + mp);
} else {
    console.log("Reprov" + mp);
}