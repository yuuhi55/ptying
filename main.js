//問題文 現状わかりやすい単語で代用中
a = ["ミ","ル","ク","テ","ィ","ー"];
// この時点で[].join("")記入すると下の文でシャッフルできない。理由不明


b = ["ペ","ッ","ト","ボ","ト","ル"];


c = ["エ","コ","バ","ッ","グ"];

q = [a,b,c];

const button = document.getElementById("button");


// ボタンを押すとa,b,c....の配列からランダムに出題される

function ran(){
    const y = q[Math.floor(Math.random() * q.length)];
    
    for(i = y.length -1;i>0;i--){
        //乱数生成を使ってランダムに取り出す値を決める
        r = Math.floor(Math.random()*(i+1));
        //取り出した値と箱の外の先頭の値を交換する
        tmp = y[i];
        y[i] = y[r];
        y[r] = tmp;

        return y;
    }
}
    


button.addEventListener("click", () => {
   document.getElementById("question").textContent = ran().join("");
//    最終的に表示する場面で.join("")で""を外す。

});


// 出題時の配列内文字と、入力された文字が合っているかの正誤判定をしたい。
document.getElementById("cheak").addEventListener("click", () => {
    if(document.getElementById("answer").value === a.join("")) {
        // 上記a.joinが多分ボタンを押したときの返り値？とかになるのだと思う。yはスコープ外？で使えない
        window.alert("正解");
    } else {
        window.alert("不正解")
    }
});

