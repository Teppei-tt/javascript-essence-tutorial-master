/*
クロージャーを用いると異なる結果を返す、関数をどう的に作成することができる。
*/
function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    // number = 5 という値が代入された状態でaddNumberがreturnされる。（レキシカルスコープ）
    return addNumber;
}

// addNumberFactoryが関数スコープのため、numの値は、addNumberFactoryの呼び出しの度に、引数の値を取る。動的な関数である。
const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);
