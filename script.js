"use strict";

PetiteVue.createApp({
  apikey: "32800434-71f431c79c22cf3b3177d9d4c",
  data: false,
  name: "",
  kaito: ["", "", "", "", ""],
  cnt: [0, 0, 0, 0, 0],
  kotae: "",
  score: 0,
  kaisetu: "",
  isShow: false,

  game: [
    { num: 1, answ: "", nazoo: "../images/nazo_01.jpg" },
    { num: 2, answ: "", nazoo: "../images/nazo_02.jpg" },
    { num: 3, answ: "", nazoo: "../images/nazo_03.jpg" },
    { num: 4, answ: "", nazoo: "../images/nazo_04.jpg" },
    { num: 5, answ: "", nazoo: "../images/nazo_05.jpg" },
  ],

  answer: [
    {
      show: true,
      num: 1,
      kai: "正解:スモモ",
      setu: "SからGまで進んでいくと'みぎからかたかなよめ'という文章があらわれる。右からカタカナだけを読むと'スモモ'となる。問題文にある'スすめ'の'ス'も含めるので注意。",
      nazoo: "../images/nazo_01.jpg",
    },
    {
      show: true,
      num: 2,
      kai: "正解:桃",
      setu: "問題文の'ハテナに入る果物はなに？'を全てひらがなにすると'はてなにはいるくだものはなに？'になる。左側にある数字は、問題文の何番目の文字を読むかということを表す。そのため、1.5は１文字目の'は'と５文字目の'は'で母となる。問題の？は10.10なので10文字目の'も'を続けるため正解は'桃'となる。",
      nazoo: "../images/nazo_02.jpg",
    },
    {
      show: true,
      num: 3,
      kai: "正解:orange",
      setu: "26個あるものといえばアルファベット。26番目=o、18番目=r、1番目=a、14番目=n、7番目=g、5番目=eで正解はorange。以下は対応表。",
      nazoo: "../images/nazo_03.jpg",
    },
    {
      show: true,
      num: 4,
      kai: "正解:ニュース",
      setu: "矢印はそれぞれ東西南北をあらわしている。（↑=N・北、→=E・東、↓=S・南、←=W・西）1行目からsee=見る、sense=感覚、we=私たち となる。？にはいるのは↑→←↓、つまりnewsとなり'ニュース'が正解。",
      nazoo: "../images/nazo_04.jpg",
    },
    {
      show: true,
      num: 5,
      kai: "正解:ありがとう",
      setu: "イラストにはアリが10匹いる。'アリ'が十（とう）いるので正解は'ありがとう'",
      nazoo: "../images/nazo_05.jpg",
    },
  ],

  mark() {
    let sco = 0;
    this.isShow = true;

    if (this.game[0].answ === "スモモ") {
      sco += 20;
    }
    if (this.game[1].answ === "桃") {
      sco += 20;
    }
    if (this.game[2].answ === "orange") {
      sco += 20;
    }
    if (this.game[3].answ === "ニュース") {
      sco += 20;
    }
    if (this.game[4].answ === "ありがとう") {
      sco += 20;
    }
    this.score = sco;
  },

  async getProgramList() {
    const url = `https://pixabay.com/api/?key=${this.apikey}`;
    const res = await fetch(url);
    const obj = await res.json();
    const index = obj.hits.findIndex((e) => e.tags.includes("animal"));
    this.data = obj.hits[index].previewURL;
    //console.log(JSON.stringify(obj, null, 2));
  },
}).mount();

//console.log(this.data);
//https://pixabay.com/api/?key=32800434-71f431c79c22cf3b3177d9d4c
