window.rooms = [
  {
    num: 0,
    title: "Start",
    type: "normal",
    music: "basicmusic",
    pic: "starttown.jpg",
    desc: `
      <p>
       Lesétálsz az utcára, megnézni, hogy megy az emberek sorsa.
       Mindenki mosolyog és integet, amikor meglát. Tényleg szeretik a megmentőjüket.
       Az állatok sem rejtőznek el, követnek az utca oldalán. Jóleső érzés, hogy tettél valami hasznosat egy egész közösségért.
      </p>
      <p>
       Besétálsz egészen a főtérig. Ott mindig vannak jó páran, és bármi történik ott, hamar elterjed a híre.
       Megállsz középen. Minden szem feléd fordul. Érzik, hogy valami fontosat akarsz nekik mondani.
      </p>
      <p>
       Mi a terved velük?
      </p>
    `,
    buttons: [
      {
        txt: "Leigázod őket",
        new: 1,
      },
      {
        txt: "Megoldod minden problémájukat",
        new: 100,
      },
      {
        txt: "Felkészíted őket az űrlények támadására",
        new: 200,
      },
      {
        txt: "Semmi, majd alakul valahogy",
        new: 300,
      },
    ],
  },
  {
    num: 1,
    type: "trial",
    value: "Hatalom",
    pass: 2,
    fail: 3,
  },
  {
    num: 2,
    title: "A hatalomszerzés kezdete",
    type: "normal",
    music: "darkmystic",
    pic: "starttown-dark.jpg",
    desc: `
      <p>
        - Eljött az idő, hogy átvegyem a hatalmat felettetek - jelented be hűvösen.
      </p>
      <p>
        Az emberek először zavartan néznek rád, de elszánt, kemény arcodból kiolvassák, hogy nem viccelsz. Tanácstalanul néznek egymásra. Nemrég szabaultak meg a technokrata varázsló Battle Beetle zsarnokságától - csak azért, hogy egy újabb despota irányítsa az életüket?
      </p>
      <p>
        De te kőkemény maradsz. Valójában a szíved mélyén mindig is erre vágytál. Battle Beetle csak útban volt a terveid megvalósításában. De most eltűnt, és eljött a te időd!
      </p>
      <p>
        Ahogy fagyos tekinteted végigfuttatod a tömegen, észreveszed, hogy egy sunyi kis hajléktalannak tűnő alak hirtelen sarkon fordul és eltűnik egy mellékutcában. Mit teszel?
      </p>
    `,
    buttons: [
      {
        txt: "A nyomába eredsz",
        new: 6,
      },
      {
        txt: "Szólsz a népnek, hogy kapják el",
        new: 7,
      },
      {
        txt: "Nem törődsz vele",
        new: 8,
      },
    ],
  },
  {
    num: 3,
    title: "A hatalomátvétel kezdeti nehézségei",
    type: "normal",
    music: "basicmusic",
    pic: "shockedmass.gif",
    desc: `
      <p>
        - Emberek! Mivel megmentettelek titeket, hálával tartoztok... és hát... kérnék tőletek valamit, de azt nagyon ám! - szólsz hozzájuk olyan arckifejezéssel, ami kb. félúton fluktuál a szerencsétlen kéregető és a kisstílű utcai rabló arckifejezése között. - Szeretném, ha uratokká választanátok... pontosabban: fogadnátok el!
      </p>
      <p>
        Az emberek értetlenül bámulnak hol rád, hol egymásra. Láthatóan nem győzted meg őket. Aztán egyszer csak elkezdenek kérdezgetni:
      </p>
      <ul>
        <li>Ezt pontosan hogy érted?</li>
        <li>Ugye csak viccelsz?</li>
        <li>Te, Gyuszi, mikor hozod már azt a jó házipálinkát, hogy rohadj meg?!</li>
        <li>Ismerős ez a fazon... tudom már, ez a híres festő, aki lila dinnyéket fest mindenhova!</li>
        <li>Miről beszélt? Ez elfogadásról? Jó ember az ilyen, ne bántsátok...</li>
      </ul>
      <p>
        Egyre nagyobb a zűrzavar. Valamit tenned kell.
      </p>
    `,
    buttons: [
      {
        txt: "Megerősíted, hogy át akarod felettük venni a hatalmat.",
        new: 4,
      },
      {
        txt: "Közlöd, hogy csak vicceltél",
        new: 5,
      },
    ],
  },
  {
    num: 4,
    type: "trial",
    value: "Lélek",
    pass: 5,
    fail: 2,
  },
  {
    num: 5,
    title: "Inkább nem igázod le őket",
    type: "normal",
    music: "basicfun",
    pic: "starttown.jpg",
    desc: `
      <p>
       Az emberek elmosolyodnak. Egy idősebb hölgy előrelép és igy szól hozzád:
      </p>
      <p>
       - Igen, nemrég szabadultunk fel neked köszönhetően Battle Beetle zsarnokságától, és nem akarunk egy zsarnok alatt élni. Tudjuk, hogy te jó ember vagy. Éppen ezért szívesen segítünk neked bármiben.
      </p>
      <p>
       A nép helyeslően bólogat. Meggondoltad magad. Valami mást fogsz velük kezdeni. Mi legyen ez?
      </p>
    `,
    buttons: [
      {
        txt: "Továbbra is segíted őket, ha gondjuk van",
        new: 100,
      },
      {
        txt: "Felkészíted őket az űrlények támadására",
        new: 200,
      },
      {
        txt: "Nincs terved, meglátod, hogy alakul",
        new: 300,
      },
    ],
  },
  {
    num: 6,
    title: "A csirkefogó üldözése",
    type: "pursuit",
    level: 2,
    music: "longmixed",
    pic: "runner.gif",
    desc: `
      <p>
        Nyakadba szeded a lábad, de amikor befordulsz a mellékutcába, a csirkefogó már eltűnt. Nem fut annyira gyorsan, de vajon vagy-e elég okos és ügyes, hogy a nyomokból olvasva kellően gyorsan utána eredj és bírod-e szuflával az üldözést?
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
  {
    num: 7,
  },
  {
    num: 8,
  },
  {
    num: 9,
    title: "Összeesel",
    type: "normal",
    change: [
      {
        id: "Erő",
        crease: -4,
        rnd: true,
        rval: 3,
      },
    ],
    music: "ziha",
    pic: "lying.JPG",
    desc: `
      <p>
       Nem bírod tovább, összeesel a fáradtságtól.
      </p>
    `,
    buttons: [
      {
        txt: "Továbbra is segíted őket, ha gondjuk van",
        new: 100,
      },
      {
        txt: "Felkészíted őket az űrlények támadására",
        new: 200,
      },
      {
        txt: "Nincs terved, meglátod, hogy alakul",
        new: 300,
      },
    ],
  },
  {
    num: 10,
    title: "Elkaptad",
    type: "normal",
    music: "basicfun",
    pic: "starttown.jpg",
    desc: `
      <p>
       Elkaptad.
      </p>
    `,
    buttons: [
      {
        txt: "Továbbra is segíted őket, ha gondjuk van",
        new: 100,
      },
      {
        txt: "Felkészíted őket az űrlények támadására",
        new: 200,
      },
      {
        txt: "Nincs terved, meglátod, hogy alakul",
        new: 300,
      },
    ],
  },
];
