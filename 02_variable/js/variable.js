// TODO: 変数定義 商品名「itemName」
// キャメルケース
var itemName = "コーヒー"
// スネークケース
// var item_name = "コーヒー"
// let itemName = "コーヒー"

// TODO: 変数定義 価格「price」
var price = 450
// var kakaku = 450

// TODO: 変数定義 個数「quantity」
var quantity = 3

// TODO: 変数定義 割引「discount」
var discount = 50

// TODO: itemName に再代入
itemName = "紅茶"

// TODO: 商品名をコンソール表示
// clg
console.log(itemName)
// もしブラウザを読み込んでも表示できない人
// Win: Ctrl + Shif + R
// Mac: Cmd + Shift + R

// TODO: 価格, 個数, 割引
console.log(price, quantity, discount);

// TODO: 商品名をHTML表示
document.getElementById("item-name").innerHTML = itemName

// TODO: 価格をHTML表示
document.getElementById("price").innerHTML = price

// TODO: 個数をHTML表示
document.getElementById("quantity").innerHTML = quantity

// TODO: 割引をHTML表示
document.getElementById("discount").innerHTML = discount

// TODO: 定数定義 税率「TAX_RATE」
// const taxRate
const TAX_RATE = 0.1
// TAX_RATE = 0.08 // エラーになる

// TODO: 税率をHTML表示
document.getElementById("tax-rate").innerHTML = TAX_RATE