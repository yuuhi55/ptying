//問題文 現状わかりやすい単語で代用中
// a = ["ミ","ル","ク","テ","ィ","ー"];
// この時点で[].join("")記入すると下の文でシャッフルできない。理由不明
a = "プログラム".split("");

b = "アルゴリズム".split("");

c = "メソッド".split("");

d = "かんすう".split("")

e = "クロージャ".split("")

f = "コーディング".split("")

g = "システムエンジニア".split("")

h = "人工知能".split("")

i = "スコープ".split("")

j = "ソフトウェア".split("")

k = "ソースコード".split("")

l = "テキストエディタ".split("")

m = "チューリングマシン".split("")

n = "デバッグ".split("")

o = "マークアップ言語".split("")

p = "無限ループ".split("")

q = "リファクタリング".split("")

r = "リポジトリ".split("")

s = "ワークツリー".split("")

t = "インデックス".split("")

u = "コミット".split("")

v = "プッシュ".split("")

w = "プル".split("")

x = "フェッチ".split("")

y = "マージ".split("")

z = "ブランチ".split("")

q = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]



// ボタンを押すとa,b,c....の配列からランダムに出題される

function ran(){
    answer = [];
    // 回答を格納
    answer = q[Math.floor(Math.random() * q.length)];
    // シャッフルするためにコピーする
    const y = answer.slice()
    for(i = y.length -1;i>0;i--){
        r = Math.floor(Math.random()*(i+1));
        tmp = y[i];
        y[i] = y[r];
        y[r] = tmp;
        return y;
    }
}
    


document.getElementById("button").addEventListener("click", () => {
   document.getElementById("question").textContent = ran().join("");
//    最終的に表示する場面で.join("")で""を外す。

});


// 出題時の配列内文字と、入力された文字が合っているかの正誤判定をしたい。
document.getElementById("cheak").addEventListener("click", () => {
    if(document.getElementById("answer").value === answer.join("")) {
        // 上記a.joinが多分ボタンを押したときの返り値？とかになるのだと思う。yはスコープ外？で使えない
        window.alert("正解");
    } else {
        window.alert("不正解")
    }
});



