/*
  クロージャーを用いたプライベート変数の定義方法
*/
function incrementFactory() {
  let num = 0; //incrementFactory()が呼ばれない限り初期化できない

  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
