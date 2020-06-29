let que = document.getElementById("que");
let res = document.getElementById("res");
let kokki = document.getElementById("kokki");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 20;
let sco = 0;
let flag = true;
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + " | 時間 : " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア：" + sco + " | 終了";
    que.textContent = "時間切れ！";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 14;
let name = new Array(max);
name = [
  "ニューヨーク",
  "ロンドン",
  "パリ",
  "ヴェネツィア",
  "オタワ",
  "ベルリン",
  "ピョンヤン",
  "ムンバイ",
  "ヨハネスブルグ",
  "クアラルンプール",
  "カイロ",
  "キト",
  "ダルハン",
  "プナカ",
];
let seikai = new Array(max);
seikai = [
  "✕",
  "〇",
  "〇",
  "✕",
  "〇",
  "〇",
  "〇",
  "✕",
  "✕",
  "〇",
  "〇",
  "〇",
  "✕",
  "✕",
];
maru.addEventListener("click", () => {
  aswer("〇");
});
batsu.addEventListener("click", () => {
  aswer("✕");
});

let aswer = (str) => {
  if (flag) {
    if (seikai[num] == str) {
      que.textContent = "問題" + (num + 1) + " 正解";
      sco++;
      res.textContent = "スコア：" + sco + " | 時間 : " + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + " 不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + "国旗の首都は" + name[num];
        kokki.src = "img/kokki" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の解答終了";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう";
        kokki.src = "img/clear.png";
      }
    }
  }
};
