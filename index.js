
// sorting into 3 buckets of standard, special, rejected
// standard is neither heavy or bulky
// special is either bulky or heavy
// rejected is both bulky and heavy
// bulky is when any dimension >= 150
// bulky is when volume is >= 1_000_000
// heavy is when mass >= 20
function sort(width, height, length, mass) {
    const bulky = width >= 150 || height >= 150 || length >= 150 || (width * height * length) >= 1_000_000;
    const heavy = mass >= 20;

    if (bulky && heavy) {
        return "REJECTED";
    } else if (bulky || heavy) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

function test() {
    console.log(sort(100, 99, 100, 10) === "STANDARD");
    console.log(sort(150, 100, 100, 10) === "SPECIAL");
    console.log(sort(100, 100, 100, 20) === "REJECTED");
    console.log(sort(150, 100, 100, 20) === "REJECTED");
    console.log(sort(100, 100, 100, 25) === "REJECTED");
    console.log(sort(100, 200, 100, 10) === "SPECIAL");
    console.log(sort(100, 100, 1000, 10) === "SPECIAL");
    console.log(sort(100, 100, 99, 5) === "STANDARD");
}