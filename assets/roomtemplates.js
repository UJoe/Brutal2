let templates = [
  //normal

  {
    num: 0,
    title: "A",
    type: "normal",
    music: "basicmusic",
    pic: "starttown.jpg",
    desc: `
      <p>
       A
      </p>
      <p>
       B
      </p>
    `,
    buttons: [
      {
        txt: "Egy",
        new: 1,
      },
      {
        txt: "Kettő",
        new: 2,
      },
    ],
  },

  //normal with extras

  {
    num: 1,
    title: "A",
    type: "normal",
    music: "basicmusic",
    pic: "forest,6",
    desc: `
      <p id="extra"></p>  
      <p>
       A <span id="fullName"></span>
      </p>
      <p>
       B <span class="name"></span>
      </p>
    `,
    obj: ["X_Béna Boldizsár", "M_Oshinoko", "W_FEGYVER"],
    change: [
      {
        id: "ero",
        crease: -4,
        rnd: 3,
      },
      {
        id: "hat",
        crease: 5,
      },
    ],
    Xchange: "sleep",
    buttons: [
      {
        txt: "Egy",
        new: 1,
        cond: "W_FELSŐBBRENDŰ BOT",
      },
      {
        txt: "Kettő",
        new: 2,
        modi: 2,
        cond: "M_Oshinoko, !J_Gárda, =_name_Sanyi",
      },
    ],
  },

  //trial

  {
    num: 1,
    type: "trial",
    value: "Hatalom",
    pass: 2,
    fail: 3,
  },
  {
    num: 1,
    type: "Xtrial",
    value: "com",
    pass: 2,
    fail: 3,
  },
  {
    num: 1,
    type: "Ytrial",
    value: "M_Oshinoko, !X_Béna Boldizsár",
    pass: 2,
    fail: 3,
  },

  //pursuit

  {
    num: 3,
    title: "A csirkefogó üldözése",
    type: "pursuit",
    level: 2,
    music: "longmixed",
    pic: "runner.gif",
    desc: `
      <p>
        Desc
      </p>
      <p>
        Írd be a megjelenő matematikai műveletek eredményét!
      </p>
      <p>
        Minél gyorsabban válaszolsz, illetve minél több az Eszed és az Ügyességed, annál közelebb kerülsz a csirkefogóhoz. Annyi időd van rá, amennyi az Erődből telik.
      </p>
    `,
    buttons: [
      {
        txt: "Elkaplak!",
      },
    ],
    pass: 10,
    fail: 9,
  },

  //aknakereső

  {
    num: 111,
    title: "Mari néni kertje",
    type: "mine",
    size: 7,
    akna: 3,
    kincs: 10,
    music: "lightmonkey",
    pic: "grannygarden.jpg",
    treasure: "pearl.png",
    desc: `
      <p>
        Desc
      </p>
      <p>
        Addig áshatsz, amennyi erőd van. A kertben összesen <span id="kincs"></span> kincs és <span id="akna"></span> bomba van. Ha bombát ásol ki, az ügyességedtől függ, hogy mennyit sebesülsz. Ha üres mezőn ásol, az első szám a szomszédos mezőkön lévő kincsek, a második a bombák számát mutatja meg. Próbálj meg minél több kincset megtalálni!
      </p>
    `,
    buttons: [
      {
        txt: "Nosza!",
      },
    ],
    pass: 112,
    fail: 113,
  },

  //fight

  {
    num: 17,
    title: "Harc a csirkefogóval",
    type: "fight",
    pic: "dualfight.gif",
    nmepic: "boldi.JPG",
    att: 50,
    def: 20,
    speed: 5,
    hp: 60,
    desc: `
      <p>
      </p>
      <p>
        A támadásod, védelmed és sebességed a pontjaidtól, illetve az aktuálisan használt tárgyadtól függ (ha van), amit egy ideig változtathatsz, de csak egy lehet aktív. Az ellenfél saját sebessége szerint támad rád, te pedig rögtön nyomd meg a Támadás gombot, ha tudod. Mindketten vihettek be kritikusabb támadásokat is, ha elég nagy az aktuális támadás és az ellenfél védelme közti különbség.
      </p>
    `,
    buttons: [
      {
        txt: "Na gyere!",
      },
    ],
    pass: 112,
    fail: 113,
  },

  {
    num: 48,
    title: "Utcai támadás",
    type: "fight",
    pic: "sötétalak.jpg",
    nmepic: "mugger.jpg",
    dungeon: true,
    level: 1,
    desc: `
      <p>
       Hirtelen rádtámad egy sötét alak.
      </p>
    `,
    buttons: [
      {
        txt: "Küzdjünk meg!",
      },
    ],
    pass: 47,
    fail: 47,
  },

  //death

  {
    num: 20,
    title: "Bitang Boti emberei megölnek",
    type: "death",
    music: "difshots",
    stopmusic: true,
    pic: "shot.jpg",
    desc: `
      <p></p>
      <p>Kalandod itt véget ért, de most már tudod, hogy többet kellett volna készülnöd a Botival való csatára, mert ő nem egy egyszerű polgármester.</p>
    `,
  },

  // dungeon

  {
    num: 47,
    title: "Bolyongás az utcákon",
    type: "dungeon",
    pic: "darkstreet.jpg",
    music: "darkbackground",
    desc: "<p>Bolyongsz a sötét utcákon, hátha találsz valamit...<p>",
    contBtn: "Tovább bolyongsz",
    exitBtn: {
      txt: "Inkább hazamész",
      new: 46,
    },
    exitDesc: "<p>Eleget bolyongtál, elfáradtál.</p>",
    fight: 48,
    end: 12,
    find: [
      "W_SZEGECSES BŐRDZSEKI",
      "W_CSÚZLI",
      "W_ROZSDÁS BÖKŐ",
      "W_KÉZIGRÁNÁT",
      "W_KIS ERŐITAL",
      "W_NAGY ERŐITAL",
      "W_DIABOLIKUS SZTEROID",
    ],
    findmany: 3,
  },
];
