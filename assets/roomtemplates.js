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
      <p class="cond" data-cond="=_name_Q">
       C
      </p>
      <p>
       D <span class='part'></span> 
      </p>

    `,
    obj: ["X_Béna Boldizsár", "M_Oshinoko", "W_FEGYVER"],
    help: "H_Mari",
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
        modi: "Elnáspágollak!",
      },
      {
        txt: "Kettő",
        new: 2,
        modi: 2,
        cond: ">_ero_70, !J_Gárda, =_name_Sanyi",
      },
      {
        txt: "Három",
        new: 3,
      },
    ],
  },

  //normal + select
  {
    num: 65,
    title: "Megalakul a Párt",
    type: "normal",
    music: "lightaction",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Szavaid lángra lobbantanak pár ifjú szívet, akik gazdái készek melléd állni.
      </p>
        Valaki bedobja rögtön, hogy tartsatok egy alakuló gyűlést nála. El is vonul a lelkes csapat. Útközben több névjavaslat is elhangzik, így amikor megérkeztek és helyet foglaltok egy nagy étkezőasztal körül, elsőkörben a párt nevéről indítotok szavazást. 
      <p>
        A javaslatokra kattintva válaszd ki, melyik név tetszik a legjobban!
      </p>
      `,
    obj: ["J_Párt"],
    change: [
      {
        id: "sup",
        crease: 10,
        rnd: 5,
      },
    ],
    select: [
      [
        { name: "Független", val: 3 },
        { name: "Függő", val: -3 },
        { name: "Hatalmas", val: 5 },
      ],
      [
        { name: "Brutál", val: 5 },
        { name: "Böszme", val: 4 },
        { name: "Zöld", val: -5 },
      ],
      [
        { name: "Párt", val: -2 },
        { name: "Szövetség", val: 1 },
        { name: "Banda", val: 3 },
      ],
    ],
    wvar: "part",
    sep: " ",
    cvar: "sup",
    //wc: true,
    submit: {
      txt: "Ez lesz dicső nevünk!",
      new: 90,
    },
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
    goalpic: "runner.gif",
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
    med: 113,
    fail: 114,
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
    pic: "forest,6",
    music: "darkbackground",
    desc: "<p>Bolyongsz a sötét utcákon, hátha találsz valamit...<p>",
    contBtn: "Tovább bolyongsz",
    failBtn: {
      txt: "Inkább hazamész",
      new: 47,
    },
    passBtn: {
      txt: "Hurrá! / Hazamész",
      new: 48,
    },
    passDesc:
      "<p>Eleget bolyongtál, elfáradtál. / Teljesítetted a küldetést.</p>",
    fight: 49,
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
