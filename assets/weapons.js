window.weapons = [
  {
    name: "FELSŐBBRENDŰ BOT",
    desc: "Az erdei túlélés nélkülözhetetlen eszköze.",
    pic: "felbot.jpg",
    sound: "bot",
    effect: [
      {
        val: "támadás",
        ch: "+8",
      },
      {
        val: "védelem",
        ch: "+4",
      },
    ],
  },
  {
    name: "ZSIBBASZTÓ NÁSPÁNG",
    desc: "Mindenkit kikészít.",
    pic: "zsibi.jpg",
    sound: "zsibi",
    effect: [
      {
        val: "védelem",
        ch: "+5",
      },
      {
        val: "ellenség támadás",
        ch: "-10",
      },
      {
        val: "ellenség sebesség",
        ch: "-5",
      },
    ],
  },
  {
    name: "KIS ERŐITAL",
    desc: "Ha kell egy kis erő.",
    pic: "kisero.JPG",
    sound: "swallow",
    recept: 2,
    final: "friend",
    effect: [
      {
        val: "erő",
        ch: "+20",
      },
    ],
  },
  {
    name: "NAGY ERŐITAL",
    desc: "Ha sokkal több erő kell.",
    pic: "nagyero.JPG",
    sound: "liquid",
    final: "friend",
    effect: [
      {
        val: "erő",
        ch: "+50",
      },
    ],
  },
  {
    name: "DIABOLIKUS SZTEROID",
    desc: "Dühöngő őrültté tesz, de nem túl egészséges.",
    pic: "diaster.jpg",
    sound: "demonlaugh",
    final: "friend",
    effect: [
      {
        val: "sebesség",
        ch: "+9",
      },
      {
        val: "támadás",
        ch: "+80",
      },
      {
        val: "védelem",
        ch: "-20",
      },
      {
        val: "erő",
        ch: "-5",
      },
    ],
  },
  {
    name: "KÉZIGRÁNÁT",
    desc: "Robbant egy nagyot.",
    pic: "gránát.jpg",
    sound: "bomb",
    final: "bomb",
    effect: [
      {
        val: "ellenség erő",
        ch: "-25",
      },
      {
        val: "ellenség támadás",
        ch: "-20",
      },
      {
        val: "ellenség védelem",
        ch: "-15",
      },
      {
        val: "ellenség sebesség",
        ch: "-2",
      },
    ],
  },
  {
    name: "SZEGECSES BŐRDZSEKI",
    desc: "Nemcsak kemény, hanem ijesztő is leszel.",
    pic: "rockerjacket.jpg",
    sound: "yeah",
    effect: [
      {
        val: "védelem",
        ch: "+20",
      },
      {
        val: "ellenség támadás",
        ch: "-10",
      },
    ],
  },
  {
    name: "CSÚZLI",
    desc: "Lassan, de biztosan ütögetheted az ellenfelet.",
    pic: "csúzli.jpg",
    sound: "flyhit",
    effect: [
      {
        val: "att",
        ch: "+20",
      },
      {
        val: "sebesség",
        ch: "-3",
      },
      {
        val: "védelem",
        ch: "-5",
      },
    ],
  },
  {
    name: "ROZSDÁS BÖKŐ",
    desc: "Tökéletes fegyver - amíg nincs más",
    pic: "bökő.JPG",
    sound: "stabcry",
    recept: 2,
    effect: [
      {
        val: "támadás",
        ch: "+25",
      },
      {
        val: "védelem",
        ch: "+5",
      },
    ],
  },
  {
    name: "GYILOK",
    desc: "Orvgyilkosok csendes kése",
    pic: "gyilok.jpg",
    sound: "suhint",
    recept: 3,
    effect: [
      {
        val: "támadás",
        ch: "+40",
      },
      {
        val: "sebesség",
        ch: "+2",
      },
    ],
  },
  {
    name: "KONYHAKÉS",
    desc: "Levág minden kolbászt",
    pic: "kés.JPG",
    sound: "stabcry",
    recept: 1,
    effect: [
      {
        val: "támadás",
        ch: "+10",
      },
    ],
  },
  {
    name: "BŰZBOMBA",
    desc: "Mindenki ájuldozik tőle",
    pic: "bűz.JPG",
    sound: "undor",
    recept: 1,
    final: "bomb",
    effect: [
      {
        val: "támadás",
        ch: "-5",
      },
      {
        val: "ellenség támadás",
        ch: "-10",
      },
      {
        val: "sebesség",
        ch: "-1",
      },
      {
        val: "ellenség sebesség",
        ch: "-3",
      },
      {
        val: "ellenség erő",
        ch: "-1",
      },
    ],
  },
  {
    name: "PÁLINKÁS FLASKA",
    desc: "Házi baracknak tűnik a tartalma",
    pic: "pálesz.jpg",
    sound: "whistle",
    effect: [
      {
        val: "támadás",
        ch: "+20",
      },
      {
        val: "erő",
        ch: "+10",
      },
      {
        val: "védelem",
        ch: "-5",
      },
      {
        val: "sebesség",
        ch: "-4",
      },
    ],
  },
  {
    name: "FÜTYKÖS",
    desc: "Egy hosszú, kemény fa...",
    pic: "fütykös.jpeg",
    sound: "bot",
    effect: [
      {
        val: "támadás",
        ch: "+3",
      },
      {
        val: "védelem",
        ch: "+1",
      },
    ],
  },
  {
    name: "GUMIBOGYÓ",
    desc: "Pattogsz tőle, mint a gumilabda.",
    pic: "gumibogyó.gif",
    sound: "bounce",
    recept: 3,
    effect: [
      {
        val: "sebesség",
        ch: "+5",
      },
      {
        val: "támadás",
        ch: "+30",
      },
      {
        val: "védelem",
        ch: "+40",
      },
      {
        val: "erő",
        ch: "+20",
      },
    ],
  },
  {
    name: "KATANA",
    desc: "Oshinoko családjának legendás kardja",
    pic: "katana.jpg",
    sound: "suhint",
    effect: [
      {
        val: "sebesség",
        ch: "+6",
      },
      {
        val: "támadás",
        ch: "+75",
      },
      {
        val: "védelem",
        ch: "+50",
      },
    ],
  },
  {
    name: "KÉTKEZES KARD",
    desc: "Az old-school hősök nélkülözhetetlen fegyvere.",
    pic: "kkkard.jpg",
    sound: "suhint",
    effect: [
      {
        val: "támadás",
        ch: "+33",
      },
      {
        val: "védelem",
        ch: "+10",
      },
    ],
  },
  {
    name: "GÉPFEGYVER",
    desc: "Szitává lő mindenkit",
    pic: "gépfegyver.jpg",
    sound: "machinegun",
    effect: [
      {
        val: "sebesség",
        ch: "+4",
      },
      {
        val: "támadás",
        ch: "+70",
      },
      {
        val: "ellenség védelem",
        ch: "-45",
      },
    ],
  },
  {
    name: "LÉZERFEGYVER",
    desc: "Minden létforma ellen hatásos",
    pic: "lasergun.jpg",
    sound: "lasergun",
    effect: [
      {
        val: "sebesség",
        ch: "+5",
      },
      {
        val: "támadás",
        ch: "+70",
      },
      {
        val: "ellenség védelem",
        ch: "-50",
      },
    ],
  },
  {
    name: "VADÁSZPUSKA",
    desc: "Lassú de precíz vadító vadirtó",
    pic: "vadászpuska.jpg",
    sound: "rifleshot",
    effect: [
      {
        val: "sebesség",
        ch: "-4",
      },
      {
        val: "támadás",
        ch: "+50",
      },
      {
        val: "ellenség védelem",
        ch: "-20",
      },
    ],
  },
  {
    name: "PÁNCÉLÖKÖL",
    desc: "Vállról indítható rakéták",
    pic: "rakéta.jpg",
    sound: "missile",
    effect: [
      {
        val: "sebesség",
        ch: "-6",
      },
      {
        val: "támadás",
        ch: "+80",
      },
      {
        val: "ellenség védelem",
        ch: "-40",
      },
    ],
  },
  {
    name: "CSATABÁRD",
    desc: "Az.",
    pic: "axe.jpg",
    sound: "suhint-nagy",
    recept: 3,
    effect: [
      {
        val: "sebesség",
        ch: "-1",
      },
      {
        val: "támadás",
        ch: "+30",
      },
      {
        val: "védelem",
        ch: "+15",
      },
    ],
  },
  {
    name: "LÁNGSZÓRÓ",
    desc: "Burn, baby, burn!",
    pic: "lángszóró.jpg",
    sound: "flammenwerfer",
    effect: [
      {
        val: "sebesség",
        ch: "-1",
      },
      {
        val: "támadás",
        ch: "+40",
      },
      {
        val: "ellenség védelem",
        ch: "-60",
      },
    ],
  },
  {
    name: "OSTOR",
    desc: "Nincs több engedetlenség!",
    pic: "ostor.jpg",
    sound: "ostor",
    effect: [
      {
        val: "támadás",
        ch: "+20",
      },
      {
        val: "ellenség támadás",
        ch: "-20",
      },
    ],
  },
  {
    name: "PETÁRDA",
    desc: "Piromániás hülyegyerekek játéka.",
    pic: "petárda.jpg",
    sound: "petárda",
    recept: 1,
    effect: [
      {
        val: "sebesség",
        ch: "-3",
      },
      {
        val: "ellenség erő",
        ch: "-5",
      },
    ],
  },
  {
    name: "SÁRKÁNYVÉR",
    desc: "Iszonyatos harcossá tesz",
    pic: "dragonblood.JPG",
    sound: "dragon",
    effect: [
      {
        val: "erő",
        ch: "+30",
      },
      {
        val: "sebesség",
        ch: "+3",
      },
      {
        val: "támadás",
        ch: "+40",
      },
      {
        val: "védelem",
        ch: "+25",
      },
      {
        val: "ellenség sebesség",
        ch: "-2",
      },
      {
        val: "ellenség támadás",
        ch: "-25",
      },
      {
        val: "ellenség védelem",
        ch: "-20",
      },
    ],
  },
  {
    name: "PÁNCÉL",
    desc: "Lassabban mozogsz benne, de szilárd védelmet ad.",
    pic: "armor.jpg",
    sound: "pancel",
    recept: 2,
    effect: [
      {
        val: "védelem",
        ch: "+50",
      },
      {
        val: "ellenség támadás",
        ch: "-30",
      },
      {
        val: "sebesség",
        ch: "-3",
      },
    ],
  },
  {
    name: "VARÁZSPOR",
    desc: "Megbűvöli az ellenfelet.",
    pic: "varázspor.gif",
    sound: "spell",
    final: "nme",
    effect: [
      {
        val: "ellenség támadás",
        ch: "-99",
      },
      {
        val: "ellenség védelem",
        ch: "-55",
      },
      {
        val: "ellenség sebesség",
        ch: "-8",
      },
      {
        val: "ellenség erő",
        ch: "-33",
      },
    ],
  },
  {
    name: "LÁNGPALLOS",
    desc: "A harcos angyalok fegyvere.",
    pic: "lángpallos.jpg",
    sound: "langpallos",
    effect: [
      {
        val: "támadás",
        ch: "+75",
      },
      {
        val: "ellenség védelem",
        ch: "-50",
      },
    ],
  },
  {
    name: "PROTONÁGYÚ",
    desc: "Sugárban mindent letarol.",
    pic: "proton.JPG",
    sound: "protonbeam",
    final: "sugar",
    effect: [
      {
        val: "sebesség",
        ch: "-3",
      },
      {
        val: "támadás",
        ch: "+100",
      },
      {
        val: "ellenség védelem",
        ch: "-100",
      },
    ],
  },
  {
    name: "ROBI",
    desc: "Egy leselejtezett harci robot.",
    pic: "robi.jpg",
    sound: "robitalk",
    final: "robi",
    effect: [
      {
        val: "sebesség",
        ch: "+5",
      },
      {
        val: "támadás",
        ch: "+50",
      },
      {
        val: "ellenség védelem",
        ch: "+50",
      },
      {
        val: "ellenség sebesség",
        ch: "-5",
      },
    ],
  },
];

//receptek
window.receptek = [
  {
    name: "VARÁZSPOR",
    Kőszén: 50,
    Érc: 20,
    Gyémánt: 3,
  },
  {
    name: "KÉZIGRÁNÁT",
    Kőszén: 30,
    Érc: 5,
    Gyémánt: 1,
  },
  {
    name: "PÁNCÉLÖKÖL",
    Kőszén: 50,
    Érc: 50,
    Gyémánt: 10,
  },
  {
    name: "KÉTKEZES KARD",
    Kőszén: 5,
    Érc: 10,
    Gyémánt: 2,
  },
  {
    name: "PROTONÁGYÚ",
    Kőszén: 120,
    Érc: 60,
    Gyémánt: 24,
  },
  {
    name: "LÉZERFEGYVER",
    Kőszén: 80,
    Érc: 40,
    Gyémánt: 8,
  },
  {
    name: "ROBI",
    Kőszén: 3,
    Érc: 30,
    Gyémánt: 3,
  },
];
