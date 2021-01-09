//問題文 現状わかりやすい単語で代用中
a = ["ミ","ル","ク","テ","ィ","ー"].join("");


b = ["ペ","ッ","ト","ボ","ト","ル"].join("");


c = ["エ","コ","バ","ッ","グ"].join("");

q = [a,b,c];

const button = document.getElementById("button");


// ボタンを押すとa,b,c....の配列からランダムに出題される

function ran (){
    const y = q[Math.floor(Math.random() * q.length)];
    return y
    // for(i = y.length -1;i>0;i--){
    //     //乱数生成を使ってランダムに取り出す値を決める
    //     r = Math.floor(Math.random()*(i+1));
    //     //取り出した値と箱の外の先頭の値を交換する
    //     tmp = y[i];
    //     y[i] = y[r];
    //     y[r] = tmp;

    //     return y;
    // }


}

button.addEventListener("click", () => {
   document.getElementById("question").textContent = ran();
});










// 上記 q[Math.floor(Math.random() * q.length) で配列からランダムに取得したものを
// 下のフィッシャーイェーツで混ぜたい(ミルクティー → クティミールなどランダムに)




// 出題時の配列内文字と、入力された文字が合っているかの正誤判定をしたい。
document.getElementById("cheak").addEventListener("click", () => {
    if(document.getElementById("answer").value === q){
        // 上記ｑが多分ボタンを押したときの返り値？とかになるのだと思う。
        window.alert("正解");
    } else {
        window.alert("不正解")
    }
});

