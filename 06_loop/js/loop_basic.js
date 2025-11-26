/**
 * for
 * 1 から 100 までの足し算
 */

// 合計を入れる変数
let sum = 0;

// TODO: for Loop : 合計を計算: sum = sum + index の複合演算
// for と入力して、For Loop を選択
// 1 から 100 まで繰り返し: 1 以上 100 以下
for (let index = 1; index <= 100; index++) {
    // sum に index を足す
    sum += index;
}

// Python だとこう書く
/*
sum = 0
for index in range(1, 101):
    sum += index
print(sum)
*/

// 合計を表示
console.log(sum);

/**
 * while
 */
let num = 0;
// TODO: While Statement 
// 1) num が 10 以下だったらずっと繰り返し
// 2) 10 までの偶数(even number)を表示
// 3) 7 だったらループを終了
// 4) num を １ 増やす

while (num <= 10) {
    
    // num を１増やす
    num++
}
