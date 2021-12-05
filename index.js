 const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push('Ralph');
    return destructivelyAppendCat;
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
    return destructivelyPrependCat;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return destructivelyRemoveLastCat;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return destructivelyRemoveFirstCat;
}
function appendCat() {
const copyOfAppendCat = [...cats, "Broom"];
return copyOfAppendCat
}
function prependCat() {
    const copyOfPrependCat = ["Arnold", ...cats];
    return copyOfPrependCat
    }
function removeFirstCat() {
    const copyOfRemoveFirstCat = cats.slice(1);
return copyOfRemoveFirstCat
}
function removeLastCat() {
    const copyOfRemoveLastCat = cats.slice(-0,-1);
return copyOfRemoveLastCat
}