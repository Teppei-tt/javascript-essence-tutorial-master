function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    // number = 5 という値が代入された状態でaddNumberがreturnされる。（レキシカルスコープ）
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);
