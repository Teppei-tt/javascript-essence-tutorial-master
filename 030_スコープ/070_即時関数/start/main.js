//  ()：変数の実行と、グループ化の意味を持つ
function a() {
    console.log("called");
}

a();

let b = (function () {
    console.log("called");
})();

let c = (function () {
    console.log("called");

    // 一度しか呼ばれないため、クロージャーと同じ感じでプライベート変数やパブリック変数として扱える。
    let privateVal = 0;

    let publicVal = 10;

    function publicFn() {
        console.log("publicFn is called: " + privateVal++);
    }

    return {
        publicVal,
        publicFn,
    };
})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);
