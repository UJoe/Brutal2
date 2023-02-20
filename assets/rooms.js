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
        txt: "Átveszed felettük a hatalmat",
        new: 1,
      },
      {
        txt: "Megkérdezed, miben tudnál még nekik segíteni",
        new: 168,
      },
    ],
  },
  {
    num: 1,
    type: "trial",
    value: "hat",
    pass: 2,
    fail: 3,
  },
  {
    num: 2,
    title: "A hatalomszerzés kezdete",
    type: "normal",
    music: "darkmystic",
    pic: "shockedmass.gif",
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
        <li>Miről beszél? Ez elfogadásról? Jó ember az ilyen, ne bántsátok...</li>
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
    value: "lel",
    pass: 5,
    fail: 2,
  },
  {
    num: 5,
    title: "Inkább nem igázod le őket",
    type: "normal",
    music: "basicmusic",
    pic: "starttown.jpg",
    desc: `
      <p>
       Az emberek elmosolyodnak. Egy idősebb hölgy előrelép és igy szól hozzád:
      </p>
      <p>
       - Nemrég szabadultunk fel neked köszönhetően Battle Beetle zsarnokságától, és nem akarunk ismét egy zsarnok alatt élni. A mostani polgármesterünk, olyan, amilyen, de azt tudjuk, hogy te jó ember vagy. Inkább éljünk békésen és segítsük egymást.
      </p>
      <p>
       A nép helyeslően bólogat. Meggondoltad magad. Inkább...
      </p>
    `,
    buttons: [
      {
        txt: "...megkérdezed miben segíthetsz nekik",
        new: 168,
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
    goalpic: "runner.gif",
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
    title: "A töketlen nép",
    type: "normal",
    music: "darkmystic",
    pic: "shockedmass.gif",
    desc: `
    <p>
      Hiába szólsz rájuk, hogy kapják el a csirkefogót, csak zavartan pislognak egymásra.
    </p>
    <p>
      Mit teszel?
    </p>
    `,
    buttons: [
      {
        txt: "Rájuk ripakodsz",
        new: 11,
        modi: "hat",
      },
      {
        txt: "Elkezded őket ütlegelni",
        new: 11,
        modi: "ero",
      },
      {
        txt: "Ravaszan ráveszed őket, hogy engedelmeskedjenek",
        new: 11,
        modi: "esz",
      },
      {
        txt: "Inkább magad eredsz a csirkefogó után",
        new: 6,
        modi: 3,
      },
    ],
  },
  {
    num: 8,
    title: "Bitang Botond színre lép",
    type: "normal",
    music: "gangwar",
    pic: "syrencars.jpg",
    desc: `
      <p>
       Hosszú perceken át farkasszemet nézel a tömeggel. Ők nem tudják, mi lesz most velük, te meg még nem igazán találtad ki, hogy hogyan vedd át a hatalmat. Amikor végre eszedbe jut valami és szólnál, közeledő szirénázás üti meg a füledet.
      </p>
      <p>
       Mindenki az erősödő hangok irányába néz. Nemsokára egy rendőrautó-konvoly közepén megjelenik maga a város polgármestere: Bitang Botond. Megállnak a tér közepén és Bitang Botond állig felfegyverzett testőrei gyűrűjében kiszáll a kocsiból. Először végigmér téged. Nehéz megállapítani, mit gondol rólad. Aztán így szól:
      </p>
      <p>
        - Te vagy az, <span id="fullName"></span>? Hallottam, hogy te mentetted meg a várost Battle Beetle-től és bandájától. Csak azért tetted, hogy te vedd át a hatalmat a békés polgárok felett? Ha ez a terved, lebeszélnélek róla téged én és városunk rendjének őrei.
      </p>
      <p>
        Mit felelsz erre?
      </p>
    `,
    buttons: [
      {
        txt: "Küzdjünk meg mint férfi a férfival!",
        new: 33,
        cond: "férfi",
      },
      {
        txt: "Küzdjünk meg mint nő a férfival!",
        new: 33,
        cond: "nő",
      },
      {
        txt: "Eltaposlak a talpnyalóiddal együtt téged is, te gyáva féreg!",
        new: 20,
      },
      {
        txt: "Indulsz a következő önkormányzati választáson",
        new: 12,
        modi: "- Hmmm, meglátjuk... Sok szerencsét! Szükséged lesz rá - szól kurtán Boti, azzal int a testőreinek és a konvoly szirénázva eltávozik a főtérről. De sejted, hogy nem ennyi lesz a vele való küzdelem.",
      },
    ],
  },
  {
    num: 9,
    title: "Meglógott a csirkefogó",
    type: "normal",
    change: [
      {
        id: "ero",
        crease: -4,
        rnd: 3,
      },
    ],
    music: "ziha",
    pic: "lying.JPG",
    desc: `
      <p>
       Nem bírod tovább, összeesel a fáradtságtól. A tüdőd sípol, levegőért kapkodsz...
      </p>
      <p>
       Pár percig a földön fekszel, majd lassan feltápászkodsz. Nem tudod, ki volt ez és hová ment, de talán a legokosabb most, ha - megszégyenülten bár, de - visszamész az emberekhez a főtérre, hátha valaki ismerte őt.
      </p>
    `,
    buttons: [
      {
        txt: "Tovább",
        new: 15,
      },
    ],
  },
  {
    num: 10,
    title: "Elkaptad a csirkefogót",
    type: "normal",
    music: "longmixed",
    pic: "darkstreet.jpg",
    desc: `
      <p>
       A nyomokat követve végül megpillantod az iszkoló csirkefogót, aki láthatóan kezd kidögleni a futástól. Érzed, hogy el tudod kapni, így egy utolsót sprintelve végül utóléred és letepered.
      </p>
      <p>
       Mit teszel most vele?
      </p>
    `,
    buttons: [
      {
        txt: "Agyba-főbe vered",
        new: 17,
      },
      {
        txt: "Kifaggatod",
        new: 22,
      },
    ],
  },
  {
    num: 11,
    type: "trial",
    pass: 14,
    fail: 15,
  },
  {
    num: 12,
    title: "A jelöltség bejelentése",
    type: "normal",
    music: "democracy",
    pic: "speaker.png",
    desc: `
        <p id="modified"></p>
        <p>
         Ünnepélyes arckifejezéssel a néphez fordulsz:
        </p>
        <p>
         - Én hiszek a demokratikus intézményekben és a választás tisztaságában! Indulok a polgármesteri választásokon közös szebb jövőnk érdekében!
        </p>
        <p>
          Az emberek közül néhányan tapsolnak és helyeselnek, mások szkeptikusan állnak. Hosszú út áll előtted, de talán meg tudod győzni a népet, hogy rád szavazzon, és így törvényes vezetőjükké válhatsz. Ehhez azonban a jelenlegi polgármestert, Bitang Botondot is le kell győznöd.
        </p>
        <p>
        Hogyan fogsz hozzá?
        </p>
      `,
    change: [
      {
        id: "lel",
        crease: 3,
        rnd: 5,
      },
    ],
    obj: ["D_választás"],
    buttons: [
      {
        txt: "Ígérsz fűt-fát",
        new: 21,
      },
      {
        txt: "Megkérdezed, miben tudnál nekik segíteni",
        new: 168,
      },
    ],
  },
  {
    num: 13,
    type: "Xtrial",
    value: "com",
    pass: 32,
    fail: 5,
  },
  {
    num: 14,
    title: "A nép kezd engedelmeskedni",
    type: "normal",
    music: "darkmystic",
    pic: "mobbing.jpg",
    desc: `
      <p>
        Vagy egy tucat markos legény a csirkefogó nyomába ered, és nemsokára már hozzák is eléd a gonosz képű embert. Örülsz, hogy sikerült tekintélyt szerezni a szavadnak.
      </p>
      <p>
        - Ki vagy te és hová rohantál? - dörrensz rá az egyre ijedtebb haramiára.
      </p>
      <p>
        - Gyurcsány Frigyes... vagyok... - kezdi hebegni, de egyből többen ráordítanak.
      </p>
      <p>
        - Ne hazudj! Béna Boldizsár vagy, ismerünk!
      </p>
      <p>
        - Igen, ez Béna Boldizsár! Bitang Botond spiclije! Biztos most is hozzá rohant!
      </p>
      <p>
        Bitang Botond a város polgármestere. Valószínűleg tényleg igaza van az embereknek. Most jelentetted be hatalmi igényeidet, így logikus, hogy ezt akarta jelenteni Boldi. De láthatóan a nép melletted áll. Ezt ki is használod. Megvető képpel Béna úr felé fordulsz.
      </p>
      <p>
        - Szóval jelenteni akartál? Gondolod, hogy nélküled nem jut el a hírem Bitang Botondhoz? Ne aggódj, nemsokára megtudja, hogy leáldozott az ő csillaga. De te többet nem fogsz jelentgetni neki!
      </p>
      <p>
        Mi a terved?
      </p>

    `,
    change: [
      {
        id: "hat",
        crease: 5,
      },
      {
        id: "sup",
        crease: 1,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "A levágott fejét a főtér oszlopára tűzöd",
        new: 16,
      },
      {
        txt: "Párbajra hívod ki",
        new: 25,
      },
      {
        txt: "Bezáratod egy megbízható ember pincéjébe",
        new: 18,
      },
      {
        txt: "Elereszted azzal, hogy mondja meg Bitang Botondnak, hogy indulsz a legközelebbi önkormányzati választáson",
        new: 12,
        modi: "Béna Boldi valamit dadog, aztán gyorsan eliszkol.",
      },
    ],
  },
  {
    num: 15,
    title: "Béna Boldi meglógott",
    type: "normal",
    music: "darkmystic",
    pic: "shockedmass.gif",
    desc: `
      <p>
        Csalódott vagy, hogy nem sikerült ekkapni a csirkefogót, de azért megkérdezed, hátha ismerte valaki. Pár ember jelentkezik is.
      </p>
      <ul>
        <li>Ez Béna Boldizsár volt.</li>
        <li>Igen, ő volt!</li>
        <li>Ismerjük a disznót. Bitang Botond spiclije.</li>
        <li>Lehet, hogy most is hozzá szaladt.</li>
      </ul>
      <p>
        Bitang Botond a város polgármestere. Ha át akarod venni a hatalmat a város felett, akkor előbb-utóbb biztos meg kell majd vele küzdened. De kérdés, hogy hogyan akarsz vele megküzdeni?
      </p>
    `,
    change: [
      {
        id: "hat",
        crease: -3,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Indulsz a következő önkormányzati választáson",
        new: 12,
      },
      {
        txt: "Puccsot hajtasz végre",
        new: 13,
      },
    ],
  },
  {
    num: 16,
    title: "Béna Boldi kivégzése",
    type: "normal",
    music: "darkmystic",
    pic: "behead.jpg",
    obj: ["X_Béna Boldizsár", "E_Boldi kivégzése", "M_Oshinoko"],
    desc: `
      <p id="modified"></p>
      <p>
        - Végezzétek ki! - adod ki a kegyetlen parancsot. Megfagy a levegő.
      </p>
      <p>
        Először senki sem mozdul. De aztán előjön a tömegből egy keménykötésű, sebhelyes ázsiai. Meghajol előtted, aztán előránt egy katanát, odaugrik a reszkető, vánszorgó Boldihoz és egy csatakiáltással levágja az orrát. Halkan elmorog egy japán káromkodást, majd újra nekirugaszkodik és ezúttal a fejét vágja le.
      </p>
      <p>
        A tömegben többen felszisszennek és elfordítják a fejüket. De néhány keményebb kötésű ember kíváncsian szemléli az eseményeket. Odalépsz a fejhez és felemeled. Két nő elájul. Nem törődsz velük. Ránézel a körülötted állókra és emelt hangon így szólsz hozzájuk:
      </p>
      <p>
        - Így jár mindaz, aki az ellenség besúgója! Véget ért annak a polgármesternek az uralma, aki semmit sem tett értetek, amikor Battle Beetle mocskos bandája rátok támadt! Egyedül én védtelek meg titeket! És ez így is lesz! Új korszak köszönt ránk. Ennek jelzésére tűzd ki az áruló fejét a főtér oszlopára!
      </p>
      <p>
        Az utolsó mondatot már az ázsiai fickóhoz címzed. Ő ismét meghajol, visszarakja a kardot a hátán lévő hüvelybe, átveszi a fejet, majd hihetetlen ügyességgel felmászik az oszlopra és a tetejére nyomja a vérző fejet. Amikor visszamászott melléd, megszólítod:
      </p>
      <p>
        - Mi a neved?
      </p>
      <p>
        - Oshinoko vagyok. Ősi jakuza-család sarja. Nagyapám még az utolsó japán császár testőre volt. A császár halála után utaztam ide megélhetést keresve.
      </p>
      <p>
        - És találtál már munkát?
      </p>
      <p>
        - Semmi olyat, ami méltó lenne a családomhoz.
      </p>
      <p>
        - Állj az én szolgálatomba! Ilyen emberekre van szükségem - mondod, kihasználva a kedvező fordulatot. Oshinoko az ajánlat elfogadásának jeleként az eddigi legmélyebben hajol meg előtted.
      </p>
      <p>
        Mit teszel ezután?
      </p>
    `,
    change: [
      {
        id: "hat",
        crease: 6,
        rnd: 9,
      },
      {
        id: "lel",
        crease: -6,
        rnd: 9,
      },
      {
        id: "sup",
        crease: -1,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Megkérdezed, ki akar még a szolgálatodba állni",
        new: 23,
      },
      {
        txt: "Elvonulsz Oshinokoval tanácskozni",
        new: 24,
      },
    ],
  },
  {
    num: 17,
    title: "Harc a csirkefogóval",
    type: "fight",
    pic: "solofight.gif",
    nmepic: "boldi.JPG",
    att: 50,
    def: 20,
    speed: 3,
    hp: 60,
    desc: `
      <p>
        Megálltok egymással szemben fogat vicsorgatva egy sötét sikátorban. Meg kell vele küzdened. A futástól láthatóan kicsit kifáradt és lelassult.
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
    pass: 26,
    fail: 27,
    modi: "Tisztes távolba iszkoltál a csirkefogótól.",
  },
  {
    num: 18,
    title: "Béna Boldi elzárása",
    type: "normal",
    music: "basicfun",
    pic: "tied.jpg",
    obj: ["M_Ügyes Frigyes"],
    desc: `
      <p>
        Kérésedre rögtön jelentkezik egy hetyke bajszú, energikus fickó, akinek munkaruhája tele van szerszámokkal. 
      </p>
      <p>
        - Szolgálatodra: Ügyes Frigyes vagyok, az ezermester. Én elzárom úgy, hogy a kutya sem találja meg ezt a haramiát! - mondja, azzal az ingujjából előhúz egy drótkötelet és azzal pillanatok alatt körbetekeri Boldit. A drót végéből csinál egy foggantyút, a maradékot pedig foggal kettérágja. Mindenki tátott szájjal lesi. Frici ezután nézegeti egy kicsit a riadt Boldit, hümmög egy kicsit, majd az egyik zsebéből elővesz fél pár görkorcsolyát, ráerősíti Boldi összekötözött lábaira, aztán kipróbálja, hogy mennyire tudja húzni-vonni Boldit így a foggantyúval. Végül elégedetten csettint egyet.
      </p>
      <p>
        - Jó lesz így! Szeretnél velem jönni, kedves <span class="name"></span>, hogy megmutassam, hová viszem?
      </p>
      <p>
        Mivel a népnek már elmondtad a lényeget, de Ügyes Frigyesben olyan alakra találtál, aki jó szolgálatodra lehet, beleegyezel. Így legalább jobban megismerkedtek.
      </p>
      <p>
        Elindultok. Frici húzza maga után a hullamerevre kötözött, görkorcsolyán guruló Boldit. Amikor elértek egy traktorszerű, kétszemélyes járgányhoz, hozzákötözi a hátuljához, és megállapítja, hogy simán fog gurulni utánatok. Felpattantok mindketten az ülésekre és elindultok pöfögve ki a városból a szomszédos erdő felé. Útközben Frici mesélni kezd.
      </p>
      <p>
        - Szóval, főnök! A következő a szitu. Én már 30 éve vagyok ezermester és feltaláló. Ha nem lennék ilyen szerény, azt mondanám, hogy a város egyik legjobb, legokosabb szakembere vagyok. Mégsem kapok megbecsülést. Még erre a verdára sem kaptam forgalmi engedélyt ettől a rihes Bitang Botitól! Állandóan csak szivat! Pedig ha látnád, miket tud! Majd ha már elzártuk ezt a spiclit, akkor megmutatom. Egyszóval, tele van a lopótököm már ezzel a Botival és a gengsztereivel! Még hogy rendőrök! Egyedül Botit őrzik! Nem véletlenül tudott ez a Battle Beetle is ennyi ideig szabadon garázdálkodni! Segítek én neked bármiben, amiben kell, csak hogy leszámoljunk vele!
      </p>
      <p>
        Egyre jobban megkedveled a fickót. Nemsokára eléritek az erdőt, ahol úttalan utakon zötykölődve végül eljuttok egy minden oldalról takarásban lévő kis kunyhóhoz.
      </p>
      <p>
        - Na, megérkeztünk! - mondja Frici, azzal lepattan a járgányról és hátramegy Boldihoz.
      </p>
    `,
    change: [
      {
        id: "sup",
        crease: 5,
      },
    ],
    buttons: [
      {
        txt: "Te is leszállsz",
        new: 19,
      },
    ],
  },
  {
    num: 19,
    title: "Ügyes Frigyes rejtekhelye",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        Frici bevonszolja a kunyhóba a megkötözött Boldit. Megkérdezed, kell-e segíteni, de megnyugtat, hogy elboldogul egyedül is. Csak helyet kell még az új csomagnak csinálnia, ami lehet, hogy el fog tartani egy ideig.
      </p>
      <p>
        Eltűnnek a kunyhóban. Te addig helyet foglalsz egy tuskón és hallgatod a madárcsicsergést. Ettől feltöltődsz egy kicsit. Békés pihenésedet azonban nemsokára egy vészjósló állatias morgás zavarja meg. 
      </p>
      <p>
        - Na, már megint egy böszmedve! - kiált ki Frici a kunyhóból. - Várj, adok valamit, hogy ne legyél teljesen eszköztelen! Felsőbbrendű botot kérsz vagy zsibbasztó náspángot?
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: 1,
        rnd: 5,
      },
    ],
    obj: ["E_Boldi elzárása"],
    buttons: [
      {
        txt: "Jó lesz a bot, köszi!",
        new: 34,
      },
      {
        txt: "Azt a zsibbasztó valamit!",
        new: 35,
      },
    ],
  },
  {
    num: 20,
    title: "Bitang Boti emberei megölnek",
    type: "death",
    music: "difshots",
    stopmusic: true,
    pic: "shot.jpg",
    desc: `
      <p>- Haha! Érdemes volt ezért a viccért idejönni! - nevet fel gúnyosan Boti és int az embereinek.</p>
      <p>Az első lövés a válladat éri. Megpróbálsz menekülni, de több oldalról is találatok érnek. Aki a tömegből nem menekült el azonnal, azokat is célbaveszik Boti emberei...</p>
      <p>Kalandod itt véget ért, de most már tudod, hogy többet kellett volna készülnöd a Botival való csatára, mert ő nem egy egyszerű polgármester.</p>
    `,
  },
  {
    num: 21,
    type: "Xtrial",
    value: "recruit",
    pass: 39,
    fail: 40,
  },
  {
    num: 22,
    title: "A csirkefogó vallatása?",
    type: "normal",
    music: "darkmystic",
    pic: "darkstreet.jpg",
    desc: `
      <p>
       - Ki vagy te és miért menekültél?! - dörrensz rá a láthatóan megijedt alakra.
      </p>
      <p>
       - Ne bánts! Én csak... égve hagytam a ... - de már nem tudja befejezni, mert a feje hirtelen elválik a testétől és lehull a földre, vérző nyakú teste pedig döngve mellé rogy.
      </p>
      <p>
        A sötétből egy marcona tekintetű ázsiai fickó lép elő. A katanájáról letörli a vért, elrakja a hüvelyébe majd meghajol feléd.
      </p>
      <p>
        - Szolgálatodra, <span class="name"></span> san! Oshinoko vagyok, a jakuza. Ez pedig Béna Boldizsár volt, Bitang Botond polgármesterünk kémje.
      </p>
      <p>
        Mit reagálsz?
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: 0,
        rnd: 1,
      },
    ],
    obj: ["X_Béna Boldizsár", "M_Oshinoko"],
    buttons: [
      {
        txt: "Nagyszerű, és most hogy fogom megtudni, hogy mit hagyott égve?!",
        new: 27,
        modi: "Bár nehéz bármilyen érzelmet leolvasni Oshinoko arcáról, úgy tűnt, hogy először elcsodálkozik, majd elszégyelli magát. Végül szó nélkül meghajol és egy szempillantás alatt eltűnik a sötétben. Mivel egy fejetlen embert tényleg nehéz kifaggatni, inkább otthagyod.",
      },
      {
        txt: "Köszönöm a névsorolvasást, most elmehetsz!",
        new: 27,
        modi: "Oshinokon egy halvány árnyalatnyi meglepődés látszik, de tudja a kötelességét. Némán meghajol és egy szempillantás alatt eltűnik a sötétben. Te is ott hagyod a hullát, ahol van, jobb a békesség.",
      },
      {
        txt: `Ha már azt mondtad, hogy "szolgálatomra", váltsd is be!`,
        new: 24,
      },
    ],
  },
  {
    num: 23,
    type: "Xtrial",
    value: "recruit",
    pass: 41,
    fail: 40,
  },
  {
    num: 24,
    title: "Tanácskozás Oshinokoval",
    type: "normal",
    music: "oshinoko",
    pic: "oshinoko-home.JPG",
    desc: `
      <p>
       Oshinoko meghajol és int, hogy kövesd. Úgy teszel. 
      </p>
      <p>
       Kanyargós útvonalon haladtok a város egyre ismeretlenebb részein. Egyre kevesebb emberrel találkoztok, aki meglát titeket, az is rögtön visszahúzódik. Már erősen sötétedik, mire végül egy félreeső sikátorban Oshinoko megáll egy puszta fal előtt és megkér, hogy állj szorosan mellé. Ezután morog valamit japánul. Pár pillanat múlva a lábatok alatt megmozdul a talaj kör alakban és a fallal együtt fordultok 180 fokot. Egy pillanat alatt a fal túloldalára kerültetek!
      </p>
      <p>
       Egy lampionokkal tompán megvilágított virágos kertben vagytok. Egy közeli kis tavon tavirózsák lebegnek, előttetek pedig egy hagyományos japán ház áll. Oshinoko int, hogy menjetek be.
      </p>
      <p>
       Amikor beléptek, Oshinoko hellyel kínál - a szőnyegen. Az ajtóban megjelenik egy mosolygós gésha. Oshinoko egy horkanás kíséretében int neki, mire a gésha eltűnik és nemsokára illatosan gőzölgő teáskészlettel jelenik meg, amit a közöttetek lévő kis asztalra helyez. Ezután meghajol és eltűnik.
      </p>
      <p>
       Oshinoko tölt neked és magának és csak azután szólal meg, hogy az első kortyot megittátok a testet-lelket melengető teából.
      </p>
      <p>
       - Bitang Botondnak vesznie kell! Ő és a bandája már évtizedek óta szívják a város lakóinak vérét. Battle Beetle egy szerencselovag varázsló volt, de Bitang Botond sokkal rosszabb: egy maffiózó. Azóta szerettem volna veled találkozni, hogy végeztél Battle Beetle-lel és a Big Bugokkal. Benned látom azt a tüzet, ami csak az igazi hősökben lobog! Ha összefogunk,  legyőzhetjük őt! A kardom téged szolgál.
      </p>
      <p>
       Mit felelsz erre?
      </p>
    `,
    buttons: [
      {
        txt: "Egy ilyen kard magamnak is jól jönne",
        new: 42,
      },
      {
        txt: "Taníts meg pár harci fogásra!",
        new: 43,
        modi: "Oshinoko meghajol, felhörpinti a maradék teát, majd átkísér egy dojoba.",
      },
      {
        txt: "Engem jobban érdekel, ki volt ez a gésha",
        new: 44,
      },
    ],
    change: [
      {
        id: "ugy",
        crease: 2,
        rnd: 3,
      },
      {
        id: "lel",
        crease: 5,
        rnd: 5,
      },
      {
        id: "ero",
        crease: 10,
        rnd: 5,
      },
    ],
  },
  {
    num: 25,
    title: "Párbaj Béna Boldival",
    type: "fight",
    pic: "solofight.gif",
    nmepic: "boldi.JPG",
    att: 50,
    def: 20,
    speed: 4,
    hp: 60,
    desc: `
      <p>
        Megálltok egymással szemben, hogy szabályosan megküzdjetek. A nép érdeklődéssel figyeli párbajotokat.
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
    pass: 28,
    fail: 29,
  },
  {
    num: 26,
    title: "A csirkefogó legyőzése",
    type: "normal",
    music: "darkmystic",
    pic: "darkstreet.jpg",
    desc: `
      <p>
       A csirkefogó összeesik és nem mozdul. Kifújod magad és közelebb lépsz. A harc közben kicsúszott a zsebéből a pénztárcája, abból pedig a személyije. Látod, hogy Béna Boldizsárnak hívják, legalább ezt megtudtad.
      </p>
      <p>
       Mit teszel most vele?
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: -3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Visszaviszed a főtérre, hogy példát statuálj vele",
        new: 16,
        modi: "Visszarakod a zsebébe a tárcát és a válladra kapod a fickót. Nem olyan nehéz. Érzed, hogy még lélegzik, tehát nem halt meg. Valamit nyöszörög is, de először nem érted. Aztán mintha azt mondaná, hogy Bitang Botond - akiről tudod, hogy a polgármester - bosszút fog állni rajta. Ezek szerint az ő embere volt. Talán most akart köpni neki. De nemsokára megérkeztek a főtérre. A tömeg elé dobod Boldit.",
      },
      {
        txt: "Kirabolod",
        new: 30,
      },
      {
        txt: "Megeszed",
        new: 31,
      },
      {
        txt: "Tovább mész",
        new: 27,
        modi: "Otthagyod a jól elpáholt fickót.",
      },
    ],
  },
  {
    num: 27,
    title: "A sötétedő utcán",
    type: "normal",
    music: "nightstalker",
    pic: "darkstreet.jpg",
    desc: `
        <p id="modified"></p>
        <p>
         Az egyre sötétedő város utcáján álldogálsz. Merre veszed az utadat?
        </p>
        `,
    buttons: [
      {
        txt: "Egy kocsmába",
        new: 45,
      },
      {
        txt: "Hazamész",
        new: 46,
      },
      {
        txt: "Csak bolyongsz össze-vissza",
        new: 47,
      },
    ],
  },
  {
    num: 28,
    title: "Béna Boldi legyőzése párbajban",
    type: "normal",
    music: "ravewin",
    pic: "cheering.gif",
    desc: `
      <p>
       Boldi összerogyik. Nem tudod, hogy él-e még vagy meghalt, de a nép hirtelen üdvrigalgásba tör ki, és magával ragad a hangulatuk. Mindenhonnan azt hallod, hogy te vagy a hős, aki az összes ellenségükkel leszámol. Érzed, hogy most fontos döntést kell meghoznod, de a nép melletted áll.
      </p>
    `,
    change: [
      {
        id: "hat",
        crease: 5,
        rnd: 5,
      },
      {
        id: "sup",
        crease: 10,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Levágatod Boldi fejét elrettentő példaként",
        new: 16,
      },
      {
        txt: "Biztos, ami biztos: bezáratod Boldit valahová",
        new: 18,
      },
      {
        txt: "Közlöd, hogy a következő, akivel leszámolsz, a polgármester lesz",
        new: 32,
      },
      {
        txt: "Bejelented, hogy indulsz a következő önkormányzati választáson",
        new: 12,
        modi: "A mozdulatlan Béna Boldival már senki nem törődik.",
      },
    ],
  },
  {
    num: 29,
    title: "Párbajvereség Béna Bolditól",
    type: "normal",
    music: "crowdshout",
    pic: "booing.gif",
    desc: `
      <p>
       Szégyen szemre megfutamodsz. A tömeg már nem támogat.
      </p>
    `,
    change: [
      {
        id: "hat",
        crease: -5,
        rnd: 5,
      },
      {
        id: "sup",
        crease: -5,
        rnd: 5,
      },
      {
        id: "lel",
        crease: -3,
      },
    ],
    buttons: [
      {
        txt: "Messze rohansz tőlük.",
        new: 27,
        modi: "Addig rohansz megszégyenülten, amíg már egyáltalán nem hallod a hangjukat.",
      },
    ],
  },
  {
    num: 30,
    title: "Béna Boldi kirablása",
    type: "normal",
    music: "darkmystic",
    pic: "darkstreet.jpg",
    desc: `
      <p>
        Átkutatod a zsebeit. Találsz nála némi készpénzt és néhány tárgyat. Elrakod mind. Közben Boldi elkezd nyöszörögni. Ezek szerint még él.
      </p>
      `,
    obj: ["W_KONYHAKÉS", "W_BŰZBOMBA", "W_PÁLINKÁS FLASKA"],
    change: [
      {
        id: "lel",
        crease: -3,
      },
      {
        id: "hat",
        crease: 5,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Visszaviszed a főtérre, hogy példát statuálj vele",
        new: 16,
        modi: "A válladra kapod a fickót. Nem olyan nehéz. Valamit nyöszörög is, de először nem érted. Aztán mintha azt mondaná, hogy Bitang Botond - akiről tudod, hogy a polgármester - bosszút fog állni rajta. Ezek szerint az ő embere volt. Talán most akart köpni neki. De nemsokára megérkeztek a főtérre. A tömeg elé dobod Boldit.",
      },
      {
        txt: "A késsel véget vetsz szenvedéseinek",
        new: 49,
      },
      {
        txt: "Gyorsan eltűnsz a helyszínről",
        new: 27,
        modi: "Úgy látod, senki nem látott meg, de azért jobb az óvatosság. Jó messzire futsz a tetthelytől.",
      },
    ],
  },
  {
    num: 31,
    title: "Béna Boldi elfogyasztása",
    type: "normal",
    music: "darkmystic",
    pic: "darkstreet.jpg",
    desc: `
      <p>
        Valami ősi barbár ösztönnek engedelmeskedve elkezded enni legyőzött ellenfeled, hogy az ereje beléd szálljon. Közben találsz egy kést is a zsebében, azzal még gyorsabban haladsz, mint foggal és körömmel. Valamennyit talán hatott rád a civilizáció, akármiylen brutális a világ.
      </p>
      <p>
        Egy pálinkás flaskát is találsz nála, de rögtön meg is iszod. Végül megtörlöd a kést és a szádat Boldi letépett ruhájában és tovább állsz.
      </p>
      `,
    obj: ["W_KONYHAKÉS", "X_Béna Boldizsár"],
    change: [
      {
        id: "lel",
        crease: -10,
        rnd: 10,
      },
      {
        id: "ero",
        crease: 15,
        rnd: 5,
      },
      {
        id: "esz",
        crease: -3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Sétálsz egyet vacsora után",
        new: 27,
        modi: "Úgy látod, senki nem látott meg, de azért jobb az óvatosság.",
      },
    ],
  },
  {
    num: 32,
    title: "A nép a puccs mellé áll",
    type: "normal",
    music: "revolut",
    pic: "lelkesnép.gif",
    desc: `
      <p>
        Miután elmondod a terved, egyre többen kezdik kiabálni a tömegből, hogy "Így van! Vesszen a zsarnok Bitang Botond!", végül már mindenki áttér a "Vesszen Boti, éljen <span class="name"></span>!" skandálására.
      </p>
      <p>
        Mit kezdesz ezzel a hangulattal?
      </p>
      `,
    change: [
      {
        id: "sup",
        crease: 12,
        rnd: 12,
      },
      {
        id: "hat",
        crease: 4,
        rnd: 3,
      },
    ],
    obj: ["D_puccs"],
    buttons: [
      {
        txt: "Azonnal a városháza elé vonultok",
        new: 50,
      },
      {
        txt: "Kiválasztasz néhány embert, akivel saját csapatot hozol létre",
        new: 51,
      },
    ],
  },
  {
    num: 33,
    title: "Bitang Botond megijed",
    type: "normal",
    music: "gangwar",
    pic: "syrencars.jpg",
    desc: `
      <p>
        Kérésed láthatóan zavarba hozza a polgármestert. Motyog valamit, hogy majd annak is eljön az ideje, de nem most, azzal beugrik a kocsiba és elhajt a konvollyal.
      </p>
      <p>
        Érzed, hogy bátor tetteddel - és az ő gyávaságával - a nép kezd melléd állni. Mit teszel ezután?
      </p>
      `,
    change: [
      {
        id: "sup",
        crease: 10,
        rnd: 5,
      },
      {
        id: "hat",
        crease: 7,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Bejelented, hogy puccsot fogsz végrehajtani Boti ellen",
        new: 32,
      },
      {
        txt: "Bejelented, hogy indulsz a következő választáson",
        new: 12,
      },
    ],
  },
  {
    num: 34,
    title: "A felsőbbrendű bot megszerzése",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        - Oké, legalább elütöd az időt valamivel, amíg én elintézem Boldit - kurjant vidáman Frici és egy sodrófára emlékeztető tárgyat dob ki a kunyhóból. Valami jobbra számítottál, de ha megvizsgálod (feléviszed az egeret), akkor azért látszik, hogy egy kicsit felturbózza a képességeidet. Ne felejts el rákattintani a harcban, ha használni is akarod!
      </p>
      `,
    obj: ["W_FELSŐBBRENDŰ BOT"],
    buttons: [
      {
        txt: "Na jöjjön az a böszme állat!",
        new: 36,
      },
    ],
  },
  {
    num: 35,
    title: "A zsibbasztó náspáng megszerzése",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        - Oké, legalább elütöd az időt valamivel, amíg én elintézem Boldit - kurjant vidáman Frici és egy dugóhúzóta emlékeztető tárgyat dob ki a kunyhóból. Valami jobbra számítottál, de ha megvizsgálod (feléviszed az egeret), akkor azért látszik, hogy egy kicsit odatesz az ellenfélnek. Ne felejts el rákattintani a harcban, ha használni is akarod!
      </p>
      `,
    obj: ["W_ZSIBBASZTÓ NÁSPÁNG"],
    buttons: [
      {
        txt: "Na jöjjön az a böszme állat!",
        new: 36,
      },
    ],
  },
  {
    num: 36,
    title: "Harc a böszmedvével",
    type: "fight",
    pic: "medvetanc.gif",
    nmepic: "böszmedve.png",
    att: 40,
    def: 30,
    speed: 3,
    hp: 80,
    desc: `
      <p>
        Éppen, hogy sikerül felkapnod a tárgyat, máris kiugrik egy szemüveges(!) medve habzó szájjal, morogva a bokorból, és furcsa táncstílusban kerülgetni kezd. Úgy tűnik, meg kell egymással küzdenetek (hacsak nem menekülsz el elítélendő módon rögtön a kapott tárggyal).
      </p>
      <p>
        A támadásod, védelmed és sebességed a pontjaidtól, illetve az aktuálisan használt tárgyadtól függ (ha van), amit egy ideig változtathatsz, de csak egy lehet aktív. Az ellenfél saját sebessége szerint támad rád, te pedig rögtön nyomd meg a Támadás gombot, ha tudod. Mindketten vihettek be kritikusabb támadásokat is, ha elég nagy az aktuális támadás és az ellenfél védelme közti különbség.
      </p>
    `,
    buttons: [
      {
        txt: "Jól van, játsszuk le!",
      },
    ],
    pass: 37,
    fail: 38,
  },
  {
    num: 37,
    title: "A Betyármobil",
    type: "normal",
    music: "traktor",
    pic: "betyármobil.JPG",
    desc: `
      <p>
        Utolsó támadásodtól lehull a böszmedve szemüvege, ő pedig döngve mellédől és többé nem mozdul. Frici vigyorogva kidugja a fejét:
      </p>
      <p>
        - Végeztél, <span class="name"></span>? Jól van, én is. Szép munka! Csinálunk belőle egy jó ebédet! Legalább megmutatom, mi mindenre képes az én Betyármobilom!
      </p>
      <p>
        Azzal meghúz egy kart a traktoron - amiről megtudtad, hogy Betyármobilnak hívják -, mire kinyílik egy csapóajtó az egyik oldalán. Frici megfogja a böszmedvét, beledobja a keletkezett résbe, aztán rácsukja a csapóajtót. A betyármobil felbőg és nemsokára megnyílik két másik ajtó, az egyiken egy bundakabát, a másikon pedig több aranybarnára sült húspogácsa jön elő és sorakozik fel egy átlátszó csőben. Frici gyengéd szeretettel megpaskolja a járgányt.
      </p>
      <p>
        - Mindig tudja, miből mit lehet hasznosítani. És ez még nem minden! Most figyelj! - kiált büszkén, azzal felpattan a vezetőfülkébe.
      </p>
      <p>
        A Betyármobil ugrik egyet miközben megprödül a tengelye körül. Ezután Frici odavezeti egy fához, nyomkod pár gombot egy ideig, majd a gépből kijön két kar különféle megmunkáló fejekkel, elkezdik dolgozni a fát, repül a fűrészpor szerteszét, majd a végén megjelenik Dávid király faszobra a fa helyén. A fején még maradt is egy kis levél.
      </p>
      <p>
        Frici büszkén mosolyog, neked az állad is leesett és elismerően bólogatsz.
      </p>
      <p>
        - Ez csak egy kis bemutató volt, valójában még rengeteg mást is tud az én Betyárom, de most inkább együnk, amíg friss a böszmedvehús!
      </p>
      `,
    buttons: [
      {
        txt: "Rendben",
        new: 54,
      },
    ],
  },
  {
    num: 38,
    title: "Menekülés a vadonba",
    type: "normal",
    music: "forest",
    pic: "forest1.JPG",
    desc: `
      <p>
        Inkább mented az irhád, jó messze futsz a böszmedvétől. Annyira, hogy már Frici titkos kunyhójához se találsz vissza.
      </p>
      <p>
        Egyedül maradtál a sűrű erdőben. Merre mész tovább?
      </p>
      `,
    buttons: [
      {
        txt: "Talán erre...",
        new: 55,
      },
      {
        txt: "Nem is, inkább arra!",
        new: 56,
      },
      {
        txt: "De leginkább meg erre. Igen, erre!",
        new: 57,
      },
    ],
  },
  {
    num: 39,
    title: "A nép hisz neked",
    type: "normal",
    music: "democracy",
    pic: "lelkesnép.gif",
    desc: `
      <p>
        A népet lázba hozza az ingyen kakasnyalóka, a reklámmentes internet, a járványok szétmorzsolása, a "Minden háztartásba törpehörcsög, hóbagoly vagy takarító robotnő!" program, az önkormányzat által finanszírozott szuperképesség-fejlesztő tanfolyam valamint az agymosással való végső leszámolás. Perpill ezek jutottak eszedbe, de érzed, hogy ez még csak a kezdet.
      </p>
      <p>
        Mit teszel ezután?
      </p>
      `,
    change: [
      {
        id: "sup",
        crease: 10,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Megkérdezed, hogy kik akarnak hozzád csatlakozni.",
        new: 64,
      },
      {
        txt: "Elbocsátod őket és elmész a város más részébe is",
        new: 27,
        modi: "Boldogan váltok egy egymástól. Érzed, hogy új reményt adtál a népnek, és ez erőt ad ahhoz, hogy még több embert elérj. A szegényebb negyed felé veszed az utadat...",
      },
      {
        txt: "Konkrét segítséget is szeretnél nekik nyújtani",
        new: 57,
      },
    ],
  },
  {
    num: 40,
    title: "A nép csalódik benned",
    type: "normal",
    music: "slowguitar",
    pic: "booing.gif",
    desc: `
      <p>
        A népet nem hozza lázba se a digitális iskolatej program, se a nyugdíjasoknak ingyen bot, se a kedvezményes hólapát-vásár, és nem hiszik el, hogy örök életet tudsz nekik adni. Mivel más ötlet hirtelen nem jut eszedbe, ezért megköszönöd a részvételt.
      </p>
      <p>
        A csalódott nép távozik és nemsokára üres lesz a tér.
      </p>
      `,
    buttons: [
      {
        txt: "Távozol, de a városban maradsz",
        new: 27,
        modi: "Szomorkáson járkálni kezdesz a városban...",
      },
      {
        txt: "Kirohansz az egész városból",
        new: 55,
      },
      {
        txt: "Elvonulsz Oshinokoval tanácskozni",
        new: 24,
        cond: "M_Oshinoko",
      },
    ],
  },
  {
    num: 41,
    title: "Megalakul a <span class='name'></span> Gárda",
    type: "normal",
    music: "lightaction",
    pic: "gangcars.jpg",
    desc: `
      <p>
        Szavaid lángra lobbantanak pár ifjú szívet, akik gazdái készek megdönteni veled a rendszert.
      </p>
      <ul>
        <li>Vesszen Boti!</li>
        <li>Jó buli lesz!</li>
        <li>Te vagy a mi urunk, <span id='fullName'></span>!</li>
        <li>Ez az, legyen a nevünk <span class='name'></span> Verőlegényei!</li>
        <li>Nem, az túl konkrét! Legyen inkább <span class='name'></span> Gárda!</li>
        <li>Ez az, ez jól hangzik!!</li>
      </ul>
      <p>
        Jóváhagyod a névválasztást. Tetszik a lelkesedésük. De kellene egy akcióterv.
      </p>
      `,
    obj: ["J_Gárda"],
    change: [
      {
        id: "sup",
        crease: 15,
        rnd: 10,
      },
      {
        id: "hat",
        crease: 6,
        rnd: 4,
      },
    ],
    buttons: [
      {
        txt: "Elvonulsz tanácskozni a Gárdával",
        new: 58,
      },
      {
        txt: "Elvonulsz tanácskozni a Gárdával és Oshinokoval",
        new: 59,
        cond: "M_Oshinoko",
      },
    ],
  },
  {
    num: 42,
    title: "A katana megszerzésének próbája",
    type: "normal",
    music: "oshinoko",
    pic: "oshinoko-face.JPG",
    desc: `
    <p>
      Oshinoko hosszasan rád néz, majd komoly hangon így szól:
    <p>
      - Van a katanámnak egy párja, ami még a dédapámé volt. Ezt nem kaphatja meg bárki. De a nemes cél érdekében felajánlhatom neked, <span class="name"></span> san - ha kiállod a próbád!
    </p>
    </p>
    <p>
      - Milyen próbát?
    </p>
    <p>
      - Dédapám vanepuca próbáját. Beállsz shiko-dachiban egy izzó parázs fölé. Egy órán keresztül felváltva ütlek-váglak én, hízeleg az asszonyom és szemtelenkedik veled a gyerekem. Annyi a feladatod, hogy bármi történik, semmi nem billent ki a shiko-dachiból és némán tűrsz mindent. Nagy testi és lelki erő kell, hogy kibírd! Nem először csináljuk ezt. És eddig még nem talált új gazdára a kard. Készen állsz a vanepuca próbára?"
    </p>
    `,
    buttons: [
      {
        txt: "Ezt simán kiállom!",
        new: 60,
      },
      {
        txt: "Úgy érzem, nem vagyok még elég felkészült, taníts!",
        new: 43,
      },
      {
        txt: "Nem olyan fontos ez a katana, inkább beszéljük meg Bitang Botond megbuktatását",
        new: 63,
      },
    ],
  },
  {
    num: 43,
    title: "Gyakorlás Oshinokoval",
    type: "normal",
    music: "fight7",
    pic: "dualfight.gif",
    desc: `
      <p id="modified"></p>
      <p>
        Egész éjjel gyakoroltok. Nemcsak testileg-lelkileg edz meg, hanem megtanítja neked a családja által használt titkos micuki orvgyilkos technikát, amivel képes vagy mások számára alig érzékelhető árnyékká válni, miközben a te érzékeid kiélesednek.
      </p>
      <p>
        Már közeledik a hajnal, amikor abbahagyjátok. Oshinok felajánlja, hogy pihenj meg nála, aztán ha felébredsz,  megbeszélitek a további haditervet.
      </p>
      <p>
        Mivel hulla fáradt vagy, megköszönöd a felajánlást. Sakura - akit először géshának néztél, de kiderült, hogy Oshinoko felesége - elkészíti a fekhelyedet, ahol mély, békés álomra szenderülsz...
      </p>
      `,
    obj: ["S_micuki", "J_Oshinoko"],
    change: [
      {
        id: "ero",
        crease: 20,
        rnd: 10,
      },
      {
        id: "ugy",
        crease: 15,
        rnd: 10,
      },
      {
        id: "hat",
        crease: 15,
        rnd: 5,
      },
      {
        id: "lel",
        crease: 10,
        rnd: 5,
      },
      {
        id: "esz",
        crease: 5,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Felébredsz",
        new: 66,
        modi: "Már javában felkelt a nap, amikor felébredsz. Felkelsz, hogy megkeresd vendéglátóidat.",
      },
    ],
  },
  {
    num: 44,
    title: "Oshinoko dühbe gurul",
    type: "fight",
    pic: "dualfight.gif",
    nmepic: "oshinoko-home.JPG",
    att: 100,
    def: 50,
    speed: 8,
    hp: 90,
    desc: `
      <p>
        Oshinoko vérveres arccal felpattan és rád ordít:
      </p>
      <p>
        - Sakura nem gésha!!! Befogadlak a házamba, felajánlom a szolgálatomat, erre te sértegeted az asszonyomat!
      </p>
      <p>
        - Jól van, na, nem kell így felkapni a ... teáskannát! - próbálod csitítani, de már repül feléd a forró kanna. Jól megéget a rád ömlő tea. Közben Oshinoko kardot ránt és feléd ugrik. Nincs mese, meg kell vele küzdened az életedért.
      </p>
    `,
    buttons: [
      {
        txt: "A francba...",
      },
    ],
    change: [
      {
        id: "ero",
        crease: -3,
        rnd: 2,
      },
    ],
    pass: 52,
    fail: 53,
  },
  {
    num: 45,
    title: "A Kutya Veres Kasza kocsma",
    type: "normal",
    music: "pubmusic",
    pic: "kocsma.jpg",
    desc: `
      <p>
        Belépsz a legközelebbi zajos, füstös kocsmába, ami a "Kutya Veres Kasza" nevet viseli büszkén. A társadalom szélére csúszott büdös, koszos alakok próbálnak - többnyire sikeresen - eljutni itt az öntudatlanság mámoros ködjébe. A sok üres tekintet között néha látsz egy-két fenyegető vagy kíváncsi tekintetet, de értelmet nem sokat. Igen... ez szülővárosod kellemes, otthonos milliője. Mosolyogva mély lélegzetet veszel, hogy minél jobban magaddba szívd.
      </p>
      <p>
        Ahogy körüljáratod tekintetedet, egy sarokban lévő asztalnál észreveszel három gnómszerű alakot, akik feléd mutogatnak és láthatóan rólad beszélnek. De mielőtt jobban megfigyelnéd őket, oldalról rádförmed egy búgó basszus hang:
      </p>
      <p>
        - Rendelni is akarsz vagy csak ácsorogsz, amíg ki nem hajítunk?!
      </p>
      <p>
        Mit felelsz?
      </p>
      `,
    buttons: [
      {
        txt: "Adj egy grogot vagy én hajítalak ki!",
        new: 67,
        modi: "A ragyás képű, 150 kilós kocsmáros fogatlan szája szélesre húzódik.</p><p>- Hehe! Bodri papát akarod kihajítani a saját kocsmájából? Tetszel nekem kölyök! Itt a grogod!",
      },
      {
        txt: "Köszönöm, inkább csak ácsorgok.",
        new: 68,
      },
      {
        txt: "Egy Vodka Martinit! Rázva, nem keverve!",
        new: 67,
        modi: "A ragyás képű, 150 kilós kocsmáros nagyot néz, de aztán megvonja a vállát és elkészíti az italodat.",
      },
      {
        txt: "Nem mondasz semmit, csak odamész a sarokban lévő társasághoz",
        new: 69,
      },
    ],
  },
  {
    num: 46,
    title: "Este otthon",
    type: "normal",
    music: "calmusic",
    pic: "home.jpg",
    desc: `
      <p>
        Megérkeztél szerény kis hajlékodba. Kifújod magad e mozgalmas nap után. Mivel eléggé elfáradtál, már csak egy könnyű vacsorát dobsz be, aztán bezuhansz az ágyba és egyből elnyom az álom...
      </p>
      `,
    buttons: [
      {
        txt: "Zzzz...",
        new: 70,
      },
    ],
  },
  {
    num: 47,
    title: "Bolyongás az utcákon",
    type: "dungeon",
    pic: "darkstreet.jpg",
    music: "darkbackground",
    desc: "<p>Bolyongsz a sötét utcákon, hátha találsz valamit...<p>",
    contBtn: "Tovább bolyongsz",
    failBtn: {
      txt: "Inkább hazamész",
      new: 46,
    },
    passBtn: {
      txt: "Most már tényleg hazamész",
      new: 46,
    },
    passDesc: "<p>Eleget bolyongtál, elfáradtál.</p>",
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
  {
    num: 48,
    title: "Utcai támadás",
    type: "fight",
    pic: "sötétalak.jpg",
    nmepic: "mugger.jpg",
    dungeon: true,
    level: 2,
    desc: `
      <p>
       Ahogy sétálgatsz a sötét utcákon, az egyik sikátorból hirtelen rádtámad egy sötét alak!
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
  {
    num: 49,
    title: "Béna Boldi kinyírása",
    type: "normal",
    music: "darkmystic",
    pic: "darkstreet.jpg",
    desc: `
      <p>
        Valami azt súgja, hogy jobb, ha nem hagyod életben, így inkább hidegvérrel elvágod a a védekezésképtelen fickó nyakát a frissen szerzett konyhakéssel. Szétnézel: nem látott meg senki, vagy ha mégis, nem érdekli, mit csinálsz.
      </p>
      `,
    obj: ["X_Béna Boldizsár"],
    change: [
      {
        id: "lel",
        crease: -5,
        rnd: 7,
      },
    ],
    buttons: [
      {
        txt: "Távozol a tetthelyről",
        new: 27,
      },
    ],
  },
  {
    num: 50,
    type: "Ytrial",
    value: ">_sup_34, >_hat_70",
    pass: 77,
    fail: 76,
  },
  {
    num: 51,
    title: "Összeáll a kemény csapat",
    type: "normal",
    music: "revolut",
    pic: "lelkesnép.gif",
    desc: `
      <p>
        Kérésedre rögtön jelentkezik jó pár lelkes ember. Köztük egy marcona japán, akit Oshinokonak hívnak és kiderül róla, hogy ősi jakuza-család sarja. Gyorsan eldöntitek azt is, hogy a csapat neve <span class="name"></span> Gárda lesz.
      </p>
      <p>
        A hangulat mindenkit magával ragad, mert érzik, hogy rátermett vezetőre találtak benned, aki megdöntheti a zsarnok Boti hatalmát. De kell egy haditerv, hogy biztosabban célt érjetek. Így végül elküldöd a maradék népet és elvonulsz Oshinokoval és a <span class="name"></span> Gárdával megbeszélni a haditervet.
      </p>
      `,
    obj: ["M_Oshinoko", "J_Gárda"],
    change: [
      {
        id: "lel",
        crease: 1,
      },
      {
        id: "esz",
        crease: 2,
        rnd: 1,
      },
      {
        id: "sup",
        crease: 20,
        rnd: 15,
      },
      {
        id: "hat",
        crease: 7,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Tanácskozol az embereiddel",
        new: 59,
      },
    ],
  },
  {
    num: 52,
    title: "Oshinoko halála",
    type: "normal",
    music: "sadjapan",
    pic: "deadninja.png",
    desc: `
      <p>
        Nem tudod, hogy csináltad, de egyszer csak Oshinoko összerogy és nem mozdul többet. Megnézed: nem lélegzik, tényleg meghalt.
      </p>
      <p>
        Hirtelen Sakura jelenik meg és sírva a férja mellé rogy. Iszonyatosan rosszul érzed magad, nem tudod, mit csinálj. Félig öntudatlanul kiveszel egy pár virágot egy közeli vázából és Oshinoko élettelen kezébe nyomod. Ettől csak még jobban kezd sírni Sakura. Valamit szeretnél tenni érte, de nem jut semmi az eszedbe, így gépiesen leveszed az órádat és Oshinoko hideg csuklójára teszed. A nő már önkívületben ordít. Sarkon fordulsz és kirohansz a házból.
      </p>
      <p>
        Kaput sehol nem találsz, de eszedbe jut a forgó fal, amin bejöttetek. Megpróbálod felidézni, pontosan hol lehetett, mivel nem nagyon van jelzés a falon. Ahogy vizsgálódsz, Sakura fuldokló sírással rád kiált valamit japánul a házból. Megfordulsz és látod, hogy valamilyen tárgyat tart a kezében és rád irányítja. Mielőtt meg tudnád állapítani, hogy fegyver-e vagy csak valamilyen távirányító, hirtelen mozdul alattad a talaj és te kiforogsz az utcára. Szóval így működik.
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: -7,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Szomorúan elindulsz az utcán",
        new: 27,
      },
    ],
  },
  {
    num: 53,
    title: "Menekülés Oshinokotól",
    type: "pursuit",
    level: 8,
    music: "longmixed",
    pic: "darkescape.gif",
    goalpic: "exit.png",
    desc: `
      <p>
        Megpróbálsz elmenekülni az őrjöngő jakuza elől, de ez nem olyan egyszerű. Nemcsak azért, mert Oshinoko profi bérgyilkos, hanem azért is, mert a birtokán nincs kapu. Semmi nem jelzi, hol jöttetek be, így rohanás közben kell kiagyalnod, hogyan tudnál kijutni az utcára. 
      </p>
      <p>
        Írd be a megjelenő matematikai műveletek eredményét minél gyorsabban, hogy kijuss, mielőtt elfogy az erőd! A haladás mértéke az eszedtől és ügyességedtől is függ.
      </p>
    `,
    buttons: [
      {
        txt: "Spuri!",
      },
    ],
    pass: 27,
    modi: "Sikerült nagy nehezen kijutnod Oshinokotól. Szaladsz még egy ideig, aztán kifújod magad...",
    fail: 78,
  },
  {
    num: 54,
    title: "Tanácskozás Ügyes Frigyessel",
    type: "normal",
    music: "think1",
    pic: "frici.JPG",
    desc: `
      <p>
        Frici bemegy a kunyhóba és nemsokára előhoz egy aktatáska-szerű tárgyat. Amint kinyitja, az egy asztallá és két székké alakul át. Büszke mosollyal rádkacsint. Aztán térül-fordul párat a kunyhó mélye és az asztal között és némi csalódással nyugtázod, hogy teljesen normális tárgyakkal tér vissza: egy üveg bor két pohárral, két tányér evőeszközökkel, egy kiló kenyér és egy üveg kovászos uborka kerül az asztalra. Végül kiszedi a Betyár-mobilból a még mindig meleg húspogácsákat és szétosztja kettőtök tányérján. Bort is tölt, megkínál uborkával és kenyérrel, majd elkezdtek falatozni. Nem is rossz a böszmedvehús, a fűszerezése is jól el van találva. Tényleg ügyes ez a Betyár-mobil, minden falat után egyre nagyobb tisztelettel pillantasz rá. Amikor már elmúlt az éhségetek, Frici jelentőségteljesen hátradől, megpödri a bajszát és így szól:
      </p>
      <p>
        - Na, <span class="name"></span>! Akkor térjünk rá a fontos teendőinkre! Hogy távolítsuk el ezt a Bitangot? Két lehetőség van elkapni, mivel máshol nem igazán szokott megjelenni. Vagy a városházán, amit egy erőddé alakított át és ott is lakik, vagy amikor a testőrei konvolyában járja az utcát. Ez utóbbiak állig fel vannak fegyverkezve, és bár Betyár sok jó képességgel rendelkezik, azért inkább munkagép, mint harci járgány, nem lenne jó ha kárt tennének benne. A hivatallal talán több szerencsénk lenne, mivel én magam is dolgoztam az épületen és a fejemben van annak a tervrajza. A felszínen nehéz bejutni, mert erős az ellenőrzés, de ha ásnánk egy alagutat Betyárral az épület alá, lenne ötletem, hol tudnánk alulról behatolni. Melyik legyen?
      </p>
    `,
    change: [
      {
        id: "ero",
        crease: 7,
        rnd: 5,
      },
    ],
    obj: ["J_Ügyes Frigyes"],
    buttons: [
      {
        txt: "Jó ötlet, ássuk be magunkat az épületbe!",
        new: 79,
      },
      {
        txt: "Az utcán könnyebb lenne elkapni, csak csinálj egy mesterlövész puskát!",
        new: 80,
      },
      {
        txt: "Ha dolgoztál az épületen, nincs belépőd oda?",
        new: 81,
      },
    ],
  },
  {
    num: 55,
    title: "Bolyongás az erdőben",
    type: "normal",
    music: "forest",
    pic: "forest1.JPG",
    desc: `
      <p>
        Egyre fáradtabban bolyongsz a sűrű erdőben. 
      </p>
      <p>
        Merre mész tovább?
      </p>
      `,
    buttons: [
      {
        txt: "Emerre",
        new: 57,
      },
      {
        txt: "Amarra",
        new: 82,
      },
      {
        txt: "Ide-oda",
        new: 56,
      },
    ],
    change: [
      {
        id: "ero",
        crease: -1,
        rnd: 2,
      },
    ],
  },
  {
    num: 56,
    title: "Bolyongás az erdőben",
    type: "normal",
    music: "forest",
    pic: "forest2.jpg",
    desc: `
      <p>
        Egyre fáradtabban bolyongsz a sűrű erdőben. 
      </p>
      <p>
        Merre mész tovább?
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: -2,
        rnd: 3,
      },
      {
        id: "lel",
        crease: 1,
      },
    ],
    buttons: [
      {
        txt: "Emerre",
        new: 83,
      },
      {
        txt: "Amarra",
        new: 55,
      },
      {
        txt: "Ide-oda",
        new: 56,
      },
    ],
  },
  {
    num: 57,
    title: "Bolyongás az erdőben",
    type: "dungeon",
    pic: "forest,5",
    music: "forest",
    desc: "Bolyongsz a sűrű erdőben...",
    contBtn: "Még beljebb mész",
    failBtn: {
      txt: "Megpróbálsz kijutni",
      new: 56,
    },
    passBtn: {
      txt: "Megpróbálsz kijutni",
      new: 56,
    },
    passDesc: "<p>Elfáradtál és unod már ezt a rohadt erdőt.</p>",
    fight: 84,
    end: 5,
    find: [
      "W_CSÚZLI",
      "W_FÜTYKÖS",
      "W_ROZSDÁS BÖKŐ",
      "W_GUMIBOGYÓ",
      "W_KIS ERŐITAL",
      "W_PÁLINKÁS FLASKA",
    ],
    findmany: 5,
  },
  {
    num: 58,
    title: "Tanácskozás a <span class='name'></span> Gárdával",
    type: "normal",
    music: "think1",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Egy Burkoló Elemér névre hallgató fickó javaslatára elmentek egy közeli garázsba, ahol csak egy nagy asztal van székekkel és egy hűtő, némi kajával és sörrel. Körbeülitek az asztalt és kezdetét veszi a tanácskozás, hogyan buktassátok meg Bitang Botit, ami közben sok névvel megismerkedsz.
      </p>
      <ul>
        <li>Egyszerűen menjünk a városházára, keressük meg és verjük agyon!</li>
        <li>Nem olyan egyszerű az Trancsír Ábrahám! A városháza egy erőd, oda komoly terv kell!</li>
        <li>Hát találj ki, ha olyan nagy ész vagy, Penge Menyhért!</li>
        <li>Vagy mi lenne, ha az utcán ütnénk rajta? Tudom, hogy mindenhova követi a konvoly, de talán mégis egyszerűbb, mint az erődbe bejutni.</li>
        <li>Amúgy ez a Boti hol lakik?</li>
        <li>Ezt se tudod, Lüke Ferdinánd? A városházán!</li>
        <li>Vagy zsaroljuk meg valamivel, fiúk! Nem jó ötlet?</li>
        <li>Nem emlékszel Szabó Winnetou esetére, Hajtogató Huba? Ő is megzsarolta Botit, már nem emlékszem mivel, de az egész családját kiirtották, a tehenét eladták a cirkusznak, a földjét meg sóval és paprikával szórták fel!</li>
        <li>Ja, én emlékszem, pedig elég agyafúrt volt az a Winnetou.</li>
        <li>Akármit csinálunk, fegyver kell hozzá! Szita Kálmán tud szerezni, ugye, Szita?</li>
        <li>Persze, bármit, ami csak kell!</li>
        <li>Ha van elég fegyverünk, akkor eléggé ütőképes csapat vagyunk! De mit mondasz, főnök? A városházán támadjuk meg vagy az utcán?</li>
      </ul>
      `,
    change: [
      {
        id: "ero",
        crease: 4,
        rnd: 3,
      },
    ],
    buttons: [
      {
        txt: "A városházán",
        new: 87,
      },
      {
        txt: "Az utcán",
        new: 88,
      },
    ],
  },
  {
    num: 59,
    title: "Tanácskozás a <span class='name'></span> Gárdával és Oshinokoval",
    type: "normal",
    music: "think1",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Egy Burkoló Elemér névre hallgató fickó javaslatára elmentek egy közeli garázsba, ahol csak egy nagy asztal van székekkel és egy hűtő, némi kajával és sörrel. Körbeülitek az asztalt és kezdetét veszi a tanácskozás, hogyan buktassátok meg Bitang Botit, ami közben sok névvel megismerkedsz.
      </p>
      <ul>
        <li>Egyszerűen menjünk a városházára, keressük meg és verjük agyon!</li>
        <li>Nem olyan egyszerű az Trancsír Ábrahám! A városháza egy erőd, oda komoly terv kell!</li>
        <li>Hát találj ki, ha olyan nagy ész vagy, Penge Menyhért!</li>
        <li>Vagy mi lenne, ha az utcán ütnénk rajta? Tudom, hogy mindenhova követi a konvoly, de talán mégis egyszerűbb, mint az erődbe bejutni.</li>
        <li>Amúgy ez a Boti hol lakik?</li>
        <li>Ezt se tudod, Lüke Ferdinánd? A városházán!</li>
        <li>Vagy zsaroljuk meg valamivel, fiúk! Nem jó ötlet?</li>
        <li>Nem emlékszel Szabó Winnetou esetére, Hajtogató Huba? Ő is megzsarolta Botit, már nem emlékszem mivel, de az egész családját kiirtották, a tehenét eladták a cirkusznak, a földjét meg sóval és paprikával szórták fel!</li>
        <li>Ja, én emlékszem, pedig elég agyafúrt volt az a Winnetou.</li>
        <li>Akármit csinálunk, fegyver kell hozzá! Szita Kálmán tud szerezni, ugye, Szita?</li>
        <li>Persze, bármit, ami csak kell!</li>
        <li>Ha van elég fegyverünk, akkor eléggé ütőképes csapat vagyunk! Azt kellene eldönteni, hogy a városházán támadjuk meg vagy az utcán?</li>
        <li>
        Bármelyiket is választjuk, egy dolog fontos - szól végül Oshinoko. Úgy tűnik, a szavának olyan tekintélye van, hogy rögtön mindenki elhallgat és rá szegeződik minden tekintet. - Ha nyíltan támadunk, még fegyverekkel is rosszak az esélyeink. Láttam az embereit, ha könnyen félre lehetne őket állítani, már megtettem volna én is egymagam. Az én javaslatom a következő. Nemsokára indulnak az önkormányzati választások. Sok helyen fog emiatt kampányolni. Egy olyan helyszínen kell rajta ütnünk, ahol nagyobb civil tömeggel érintkezik, de kevésbé védhető a helyszín. El kell vegyülnünk a tömegben annyian, amennyi őrt egyszerre semlegesíteni tudunk. Nem lőfegyverrel, mert azzal könnyen lebukhatunk, hanem hagyományos fegyverekkel, például fúvócsővel. Aztán végezni kell Botival is meg a rendőrfőnökkel, Böszme Bélával is. Hiába nyírjuk ki őt, a Béla vezette álrendőrökkel meggyűlhet a bajunk. De ha Béla feje is hull, akkor még törvényesen is felszámoltathatjuk azt a bűnszervezetet, amit létrehozott.
        </li>
      </ul>
      <p>
        Mindenki helyeslően bólogat. De feléd fordulnak, hogy te hogyan döntesz.
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: 4,
        rnd: 3,
      },
    ],
    obj: ["J_Oshinoko"],
    buttons: [
      {
        txt: "Jó az, amit Oshinoko mond",
        new: 88,
      },
      {
        txt: "Hatásosabb lenne, ha mégis a városházát ostromolnánk meg",
        new: 87,
      },
    ],
  },
  {
    num: 60,
    type: "Xtrial",
    value: "vanepuca",
    pass: 61,
    fail: 62,
  },
  {
    num: 61,
    title: "A katana megszerzése",
    type: "normal",
    music: "epiclift",
    pic: "oshinoko-home.JPG",
    desc: `
      <p>
       Keményen beleállsz a shiko-dachiba. Oshinoko ordítozva elkezd csépelni, de te csak állsz, mint egy szikla. Aztán jön a felesége mindenféle trükkel elterelve a figyelmedet, győzködve, hogy nem kell ezt a próbát csinálnod, inkább játszatok valami vidámabbat. De te csak a katanára gondolsz és méltóságteljesen átnézel a feje felett. Úgyis tudod, hogy nem gondolja komolyan, csak szerepet játszik. Az utolsó harmadban jön a kölyök. Egy tenyérbemászó képű kis taknyos, aki hihetetlen szemtelenül elhord mindenfélének, csúfolja, hogy hogy állsz, hogy már érzi sült húsod undorító szagát, amitől elhányja magát, és egyébként is, nem így kell tartani a kezed, még ehhez is béna vagy és hasonlók. Furcsa módon ezt volt a legnehezebb kiállni, mert akaratlanul is módosítani kezdtél azon a pózon, amibe már kényelmesen belemerevedtél, amitől csak rosszabb lett a helyzet. És egyébként is többször lekevertél volna már neki egy nagy maflást amiatt, amit megengedett veled, a hőssel szemben. De végül akárhogy szivat Oshinoko családja, te kőkemény maradsz. Amikor letelik az egy óra Oshinoko zord ábrázatán igazi elismerő mosoly jelenik meg. De a shiko-dachibol képtelen vagy kijönni, úgy elgémberedett a lábad. Oshinoko barátságosan áthajít egy kis kerti padra és furcsán nevetve beleöklöz a lábaidba. Kezd lassan visszatérni beléjük az élet, de meg kell állapítanod, hogy sokkal szimpatikusabb Oshinoko, amikor nem nevet.
      </p>
      <p>
       - Elismerésem, <span class="name"></span> san! Kiálltad a Vanepuca próbát, méltó lettél dédapám kardjára! És most kapj el, ha tudsz!
      </p>
      <p>
        - ...Mi ...van? - nyöszörgöd sírból jövő hangon, de Oshinoko megint csak nevetve gyomorszájon vág párszor.        
      </p>
      <p>
        - Csak vicceltem! Nincs több próba. Ha fel tudsz állni, kövess, hogy megkapd méltó jutalmadat.
      </p>
      <p>
        Remegő lábakkal feltápászkodsz, teszel pár tétova lépést, majd inkább 5 centis lépésekre váltasz és úgy követed Oshinokot a házba. A felesége és gyereke már várnak bent. Mindketten büszke mosollyal meghajolnak előtted. Lassan kezded felfogni te is, hogy tényleg valami emberfeltti dolgot vittél véghez. Oshinoko odalép a kandallóhoz, ami felett egy titkos rekeszt kinyit és kiveszi belőle a valóban mesterien megmunkált katanát. Büszkén morogva forgatja és nézegeti egy ideig, de aztán feléd fordul és meghajolva két kézzel átnyújtja.
      </p>
      <p>
        - Kiálltad dédapám próbáját, ezért tiéd lehet a kardja. Használd tisztességgel, tudván, mit kell szétvágni és mit kell egybeforrasztani!
      </p>
      <p>
        - Méltó leszek rá! - mondod szerény mosollyal és átveszed.
      </p>
      <p>
        - Banzáj! - ordít egy hatalmasat Oshinoko és int a többieknek, akik mosolyogva elmennek, majd egymás után hordanak be a szobába mindenféle jobbnál-jobb ételt és italt. Amikor rogyásig telik az asztal, mind a négyen letelepedtek és a nap maradék részét csak ünnepléssel töltitek el.
      </p>
      <p>
        A dínomdánom közben kiderül, hogy valójában Sakura és Khi Csi - a gyerek - is teljesen más, mint amilyennek megismerted őket, mindketten tisztelettudó, szerény, kellemes emberek.
      </p>
      <p>
        Pár órával hajnal előtt hagyjátok csak abba kimerülten a mulatozást. Elvezetnek a vendégszobába, ahol fáradtan az ágyra rogysz és azonnal elnyom az álom.
      </p>
    `,
    obj: ["W_KATANA", "J_Oshinoko"],
    buttons: [
      {
        txt: "Felébredsz",
        new: 66,
        modi: "Már javában felkelt a nap, amikor felébredsz. Felkelsz, hogy megkeresd vendéglátóidat.",
      },
    ],
  },
  {
    num: 62,
    title: "A vanepuca próba elbukása",
    type: "normal",
    music: "sadjapan",
    pic: "oshinoko-home.JPG",
    desc: `
      <p>
       Keményen beleállsz a shiko-dachiba. Oshinoko ordítozva elkezd csépelni, de te csak állsz, mint egy szikla. Bár altestednél kezd egyre elviselhetetlenebb lenni a hőség. Aztán jön a felesége mindenféle trükkel elterelve a figyelmedet, győzködve, hogy nem kell ezt a próbát csinálnod, inkább játszatok valami vidámabbat. De te csak a katanára gondolsz és méltóságteljesen átnézel a feje felett. Úgyis tudod, hogy nem gondolja komolyan, csak szerepet játszik. Márcsak azért is, mert egyre furcsább szagod lesz, ahogy pörkölődsz, biztos szánalmas látvány lehetsz. Az utolsó harmadban jön a kölyök. Egy tenyérbemászó képű kis taknyos, aki hihetetlen szemtelenül elhord mindenfélének, csúfolja, hogy hogy állsz, hogy elhányja magát a szagodtól és egyébként is látszik, hogy mindjárt összecsinálod magad, de ha koszos lesz a padló, veled nyalatja fel, és azzal le is köp. Ez az utóbbi gesztus az egyre elviselhetetlenebb elgémberedéssel és az égető érzéssel együtt végleg betett nálad. Mégiscsak te vagy a város hőse, nem kell mindent elviselned egy kardért.  A lábad ugyan nem mozog, de a köpés miatt amúgyis közlebb húzódott gyerek pont karnyújtásnyira van tőled, így egy hatalmas pofont keversz le neki. A gyerek edzve lehet ehhez, mert az utolsó pillanatban elhajol, így csak meglegyinted. De ez csak mégjobban felbőszít és - mint Loja, a nagy lajhár harcos, akinek harci technikáját egy 6 órás vágatlan dokumentumfilmben volt szerencsétlenséged megfigyelni - megpróbálod elkapni. De sajnos elmarad a remélt jutalom, mert amint kimozdulsz a shiko-dachiból, Oshinoko rögtön ott terem, elkapja a karod és olyan szigorú tekintettel ordít rád egy japán szótagot, amitől ismét kényelmesebbnek érzed visszamerevedni.
      </p>
      <p>
       - Elbuktad a próbát!
      </p>
      <p>
        Épp kezdenéd mondani, hogy azért ez aránytalan szivatás volt egy kardhoz képest, de rögtön ott terem Sakura, Oshinoko felesége és Khi Csi, a gyerekük, teljesen más ábrázattal, mint amit eddig mutattak feléd és sűrű meghajlások közepette bocsánatot kérnek tőled a viselkedésükért. Annyira hiteles és megható az alázatuk, hogy a végén te kezded magad rosszul érezni. Oshinoko zord ábrázata is kezd enyhülni.
      </p>
      <p>
        - Ne szégyenkezz emiatt, mert a próba valóban nehéz és a családom nagyon jól játsza a szerepét. De ez csak egy szerep volt részükről. Dédapám katanája ma is a helyén marad, cserébe viszont adok neked valamit, mert látom benned a tüzet. Megtanítalak néhány hasznos harci technikára.
      </p>
      <p>
        Jó ötletnek tűnik, mert úgy érzed, tényleg jól jönne ha erősödnél ezután a bukás után, így belemész. Oshinoko kicsit megütöget, hogy helyreálljon a vérkeringésed, aztán átkísér egy dojoba.
      </p>
    `,
    buttons: [
      {
        txt: "Na, mutasd meg, mit tudok tanulni tőled!",
        new: 43,
      },
    ],
  },
  {
    num: 63,
    title: "Oshinokonak közbejött valaki",
    type: "normal",
    music: "oshinoko",
    pic: "oshinokodark.jpg",
    desc: `
      <p>
        Oshinoko elgondolkodva kihörpinti maradék teáját. Már éppen megszólalt volna, amikor zaj hallatszik az udvarról. Oshinoko ordít egy kurta felismerhetetlen szótagot majd felpattan és a kardjával együtt kirohan. Mivel kíváncsi vagy, mi történt, mész utána.
      </p>
      <p>
        Egy Oshinokohoz hasonló marcona alak áll a kertben, sötét köpenybe burkolózva. Váltanak pár kemény szót egymással, de náluk sosem lehet tudni, hogy éppen esküdt ellenségek, akik harcra hergelik egymást vagy csak nyájasan beszélgetnek az időjárásról. Oshinoko közben észreveszi, hogy kijöttél és feléd fordul.
      </p>
      <p>
        - El kell intéznem valamit. Jobb, ha hazamész és másnap visszajösz. Akkor tudunk beszélni.
      </p>
      <p>
        Kezded megszokni a stílusukat, így csak némán bólintasz. Oshinoko megmutatja, hova kell állnod, hogy elhagyd a kertet, mivel kapu nincs, csak a felismerhetetlen forgófal. Miközben odamész, elhaladsz a másik alak előtt. Az arca tényleg hasonlít Oshinokoéra - bár ezeknél az ázsiaiaknál mást jelent a különbözőség - de van egy sebhely a bal arcán. Egy inyencfalatra talált pszichopata gyilkos tekintetével mér végig téged. Ezt látva Oshinoko ráförmed két szótagot, mire az alak unottan elfordítja a tekintetét rólad. Ezek szerint legalább Oshinoko a főnök. Megvonod a vállad és beállsz a fal mellé. Az azonnal kifordul veled. Kikerültél ismét az utcára. Igyekszel megjegegyezni a helyet, hogy másnap visszatalálj, és útnak indulsz.
      </p>
    `,
    obj: ["J_Oshinoko"],
    buttons: [
      {
        txt: "Na, menjünk valamerre!",
        new: 27,
      },
    ],
  },
  {
    num: 64,
    type: "Xtrial",
    value: "recruit",
    pass: 65,
    fail: 91,
  },
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
      {
        id: "hat",
        crease: 10,
        rnd: 5,
      },
      {
        id: "ero",
        crease: 5,
        rnd: 2,
      },
    ],
    select: [
      [
        { name: "Független", val: 3 },
        { name: "Függő", val: -3 },
        { name: "Hatalmas", val: 4 },
        { name: "Egyetlen", val: 2 },
        { name: "Magyar", val: 0 },
        { name: "Globális", val: -2 },
        { name: "Kozmikus", val: 5 },
        { name: "Misztikus", val: 4 },
        { name: "Örök", val: 2 },
        { name: "Titkos", val: -1 },
        { name: "Becsületes", val: 3 },
      ],
      [
        { name: "Brutalista", val: 5 },
        { name: "Böszme", val: 4 },
        { name: "Zöld", val: -5 },
        { name: "Vörös", val: -4 },
        { name: "Antidemokratikus", val: -3 },
        { name: "Kemény", val: 2 },
        { name: "Hős", val: 4 },
        { name: "Szelíden Virágzó", val: -5 },
        { name: "Bitangirtó", val: 5 },
        { name: "Gyökerű", val: 0 },
        { name: "Király", val: 1 },
        { name: "Rendcsináló", val: 3 },
        { name: "Gitáros", val: 5 },
        { name: "Tolvaj", val: -2 },
        { name: "name", val: 1 },
      ],
      [
        { name: "Párt", val: -2 },
        { name: "Szövetség", val: 1 },
        { name: "Banda", val: 3 },
        { name: "Nagykoalíció", val: 3 },
        { name: "Emberek", val: -3 },
        { name: "Dinasztia", val: 2 },
        { name: "Klán", val: 5 },
        { name: "Osztag", val: 4 },
      ],
    ],
    wvar: "part",
    sep: " ",
    cvar: "sup",
    submit: {
      txt: "Ez lesz dicső nevünk!",
      new: 90,
    },
  },
  {
    num: 66,
    title: "Reggel Oshinokonál",
    type: "normal",
    music: "japanmorning",
    pic: "oshinoko-morning.jpg",
    desc: `
      <p id="modified"></p>
      <p>
       Oshinokora és Sakurára a ház bejáratában ülve találsz rá. Olyan élénken beszélgetnek, hogy észre sem vesznek először. Oshinoko megfontoltan, de keményen beszél, ez nála normális. Sakura szavait nem érted, de aggódónak tűnik, bár ő is próbál kemény maradni. De az egész jelenetből érződik  kettőjük szoros, meghitt kapcsolata.
      </p>
      <p>
        Hirtelen észrevesznek, felállnak és meghajolva üdvözölnek. Oshinoko megszólal:
      </p>
      <p>
        - Az éjjel itt járt a fivérem, Szenyamuki. Eljutott Bitang Botondhoz Béna Boldizsár meggyilkolásának híre és bosszút forral ellenünk. Ez felgyorsítja az eseményeket. De nem mindegy, hogy Szenyamuki melyik oldalra áll.
      </p>
      <p>
        - És mitől függ, hogy melyik oldalra áll? - kérdezed.
      </p>
      <p>
        - Hogy kit lát esélyesebbnek a győzelemre - jelenti ki kurtán és súlyosan Oshinoko. Egy ideig elgondolkodva maga elé néz, majd megrázza a fejét és folytatja. - Rossz útra tévedt, elvtelen jakuza lett belőle, nem követi a családunk értékeit. Egy gyilkológép! Ha megnyernénk, sokkal nagyobb esélyünk lenne felszámolni Boti egész bandáját. De ha ellenünk fordul, semmelyik percben nem vagyunk biztonságban.
      </p>
      <p>
        - És mit mondott, amikor itt járt?
      </p>
      <p>
        - Azt, hogy szerinte esélytelenek vagyunk Boti ellen. Tudja ő is, hogy leginkább ő tudná növelni az esélyeinket, de nem akar vesztesek mellé állni.
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: 2,
        rnd: 3,
      },
    ],
    buttons: [
      {
        txt: "Boldogulunk mi nélküle is.",
        new: 93,
      },
      {
        txt: "Majd én beszélek ezzel Szenyamukival.",
        new: 94,
      },
    ],
  },
  {
    num: 67,
    title: "A pultnál",
    type: "normal",
    music: "pubmusic",
    pic: "kocsma.jpg",
    desc: `
      <p id="modified"></p>
      <p>
       Felhörpinted az italodat. Ettől kicsit jobban érzed magad. Erősebbnek. Bár egy kicsit lalassulsz. De az önbizalmad megnő. Remélem, tudtad követni a pontváltozásokat.
      </p>
      <p>
       Most mit teszel?
      </p>
    `,
    change: [
      {
        id: "ero",
        crease: 5,
        rnd: 2,
      },
      {
        id: "hat",
        crease: 2,
        rnd: 2,
      },
      {
        id: "ugy",
        crease: -1,
        rnd: 1,
      },
    ],
    buttons: [
      {
        txt: "Lefejeled a kidobóembert",
        new: 96,
      },
      {
        txt: "Odamész a téged bámuló kocsmatöltelékekhez",
        new: 69,
      },
      {
        txt: "Szóba elegyedsz a kocsmárossal",
        new: 95,
      },
    ],
  },
  {
    num: 68,
    title: "Megkérnek, hogy távozz a kocsmából",
    type: "normal",
    music: "pubmusic",
    pic: "kidobo.jpg",
    desc: `
      <p>
       Amint ezt mondod, rögtön eléd lép egy iszonyatos kigyúrt izomagy. Valószínűleg a kidobóember. Végigmér, aztán kétértelmű mosoly jelenik meg zord ábrázatán és így szól.
      </p>
      <p>
       - Ácsorogni kint is lehet. Nem esik az eső, fiatal még az éjszaka, frissebb is a levegő. Egészségesebb ilyenkor sétálni, mint alkohollal és füsttel roncsolni a tüdőd és a bélflórád. Nem gondolod?
      </p>
    `,
    buttons: [
      {
        txt: "Meggyőztél. Fontos az egészség, megyek is.",
        new: 47,
      },
      {
        txt: "Rohadtul nem hiteles ez az érvelés egy dagadt disznótól, aki ilyen egészségkárosító helyen dolgozik!",
        new: 96,
      },
    ],
  },
  {
    num: 69,
    title: "A kocsmatöltelékek",
    type: "normal",
    music: "pubmusic",
    pic: "kocsmatöltelékek.jpg",
    desc: `
      <p>
       Ahogy közeledsz feléjük, elhallgatnak és növekvő áhitattal követik lépteidet. Megállsz felettük. Egy ideig némán nézitek egymást, aztán a legidősebbnek tűnő lecsúszott alak - biztos az alfa hím - borízű hangon megszólal:
      </p>
      <p>
       - Te vagy á hős, ki legyőszte Bedől... Betlit?
      </p>
      <p>
       - Ha Battle Beatle-re gondolsz, akkor igen - feleled kapásból. Felesleges lenne titkolni. A legkisebb gnóm rögtön kikerekedett szemmel elkiáltja magát, miközben úgy oldalba löki a harmadik tagot, hogy az kilöttyinti a sörét. De láthatóan nem foglalkozik vele.
      </p>
      <p>
        - Hű, Frédi! Asztakutya! Látod, megmontam! Húha, most micsinájunk? Rendeljünk neki a legjob sörbű! BODRIII!!! - Ez utóbbit dobhártyátszaggatóan ordítja. Először azt hiszed, a kutyája kapta el közben a tökét az asztal alatt, de nem! A pultos rögtön visszaordít neki.
      </p>
      <p>
       - Mi van, Pitypang?!
      </p>
      <p>
       - Ászok ászát a hős úrnak! Itt van Bedő Billy legyőzője!
      </p>
      <p>
        Rögtön elcsendesedik a kocsma és minden szem rád szegeződik. Igen, a hírneved sokszor megelőz. Ezt pedig előnyödre tudod fordítani. Mit teszel?
      </p>
    `,
    obj: ["M_Kocsmatöltelékek"],
    buttons: [
      {
        txt: "Megkérdezed, ki akar neked segíteni Bitang Botond polgármester legyőzésében",
        new: 71,
      },
      {
        txt: "Alázattal elfogadod az ingyen sört és letelepszel az asztalukhoz",
        new: 98,
      },
    ],
  },
  {
    num: 70,
    type: "Xtrial",
    value: "night",
    fail: 72,
    mid: 73,
    pass: 74,
  },
  {
    num: 71,
    type: "Xtrial",
    value: "recruit",
    pass: 99,
    fail: 100,
  },
  {
    num: 72,
    title: "Álmodban kivégeznek",
    type: "death",
    music: "suhint",
    stopmusic: true,
    pic: "deadbed.JPG",
    desc: `
      <p>
       Éjjel, amikor mélyen alszol, Bitang Boti legjobb orvgyilkosa belopózik az otthonodba. Nesztelenül az ágyadhoz lép és leszúr. Belédnyilall a fájdalom, de már nem tudsz az elvérzés ellen semmit tenni, így inkább tovább alszol - örökké...
      </p>
      <p>
       Kalandod itt véget ért, de most már tudod, hogy csendben ki kellett volna iktatnod a polgármester besúgóját.
      </p>
    `,
  },
  {
    num: 73,
    title: "Harc Bitang Boti orvgyilkosával",
    type: "fight",
    pic: "orvgyilkos.gif",
    nmepic: "orvgyilkos.gif",
    att: 75,
    def: 40,
    speed: 7,
    hp: 50,
    desc: `
      <p>
       Éjjel, amikor mélyen alszol, Bitang Boti legjobb orvgyilkosa belopózik az otthonodba. Nesztelenül az ágyad mellé lép, de ekkor valahogy megérzed a jelenlétét. Kinyitod a szemed és a homályban meglátod a vörösen izzó szemű sötét, nőies alakot. Azonnal kiugrasz az ágy másik oldalára. Épp időben, mert a beszűrődő holdfényben megvillan a tőre pengéje, amivel épp lesújtott rád - de már nem talált el.
      </p>
      <p>
       - Ki vagy te és mit keresel itt?! - ordítasz rá.
      </p>
      <p>
       - Nem nyilvánvaló mindkettő? - felel hűvős alt hangján. - Azt gondoltad, nem jut el Botond mesterhez a terved híre, hogy meg akarod dönteni a hatalmát? Azt hitted, hagyni fogja? Alábecsülted!
      </p>
      <p>
       - Nem becsültem alá, ha maga helyett mást küld elvégezni a mocskos melót! Ez egy gyáva féreg! - vonod le a bölcs következtetést a kapott információk alapján.
      </p>
      <p>
       - Az lehet, én viszont elvégzem a munkát, amiért megfizet - felel a nő gyakorlatias kötelességtudattal, azzal feléd ugrik.
      </p>
    `,
    buttons: [
      {
        txt: "Gyere csak!",
      },
    ],
    pass: 101,
    fail: 102,
  },
  {
    num: 74,
    title: "A 2. nap reggele",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p id="modified"></p>
      <p>
        Napsütéses reggel és az utca zaja ébreszt fel. Összekapod magad, eszel valamit és mivel még korán van ahhoz, hogy bárhová elindulj, egy kis időt eltölthetsz otthon is. Mit teszel?
      </p>
      `,
    Xchange: "sleep",
    buttons: [
      {
        txt: "Edzel",
        new: 103,
      },
      {
        txt: "Imádkozol",
        new: 104,
      },
      {
        txt: "Rejtvényeket fejtesz",
        new: 105,
      },
      {
        txt: "Nyomkodod a telefonodat",
        new: 106,
      },
    ],
  },
  {
    num: 75,
    title: "Merre mész tovább a 2. napon?",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p>
        Miután végeztél, átgondolod, hogy mik történtek veled tegnap és ezek fényében merre menj tovább. Hová mész?
      </p>
      `,
    buttons: [
      {
        txt: "Oshinokohoz",
        new: 66,
        cond: "J_Oshinoko, !J_Gárda",
        modi: "Viszonylag kevés bolyongással sikerül visszatalálnod Oshinoko házának falához. Mivel jobb ötleted nincs, beállsz oda, ahonnan befordult a fal és vársz. Semmi nem történik. Kicsit arrébb állsz, mert hátha nem jól emlékeztél. Megint semmi. Ezt még háromszor megismétled, mire végre befordul veled a fal. Hurrá!",
      },
      {
        txt: "A Gárdához",
        new: 107,
        cond: "J_Gárda, D_ostrom",
      },
      {
        txt: "A Gárdához",
        new: 107,
        cond: "J_Gárda, D_utca-Gárda, !J_Oshinoko",
      },
      {
        txt: "A Gárdához",
        new: 108,
        cond: "J_Gárda, D_utca-Gárda, J_Oshinoko",
      },
      {
        txt: "Ügyes Frigyes kunyhójához",
        new: 132,
        cond: "J_Ügyes Frigyes, D_földalatt",
      },
      {
        txt: "Ügyes Frigyes kunyhójához",
        new: 133,
        cond: "J_Ügyes Frigyes, D_utca-Frici",
      },
      {
        txt: "A pártgyűlésre",
        new: 110,
        cond: "J_Párt",
      },
      {
        txt: "Erdeiékhez",
        new: 111,
        cond: "J_Erdeiék",
      },
      {
        txt: "A régi fagyigyárba Bogihoz",
        new: 112,
        cond: "J_Bogi",
      },
      {
        txt: "A piacra",
        new: 113,
        cond: "!J_Gárda, !J_Párt, !J_Erdeiék, !J_Oshinoko, !J_Ügyes Frigyes",
      },
    ],
  },
  {
    num: 76,
    title: "A tüntetők szétoszlatása",
    type: "normal",
    music: "darkmystic",
    pic: "szekus.jpg",
    desc: `
      <p>
        Amikor megérkezel lelkes kis csapatod botcsinálta vezéreként a Városháza elé, ott az őrök fitymálva nézegetnek titeket. Hátranézel, és valóban túl kicsinek tűnik követőid száma. Kezdesz elbizonytalanodni, talán túl korán vonultál ide. De igyekszel nem mutatni csalódottságodat.
      </p>
      <p>
        Az egyik őr, láthatóan a vezetőjük, gallérmikrofonján keresztül beszél pár szót valakivel, aztán feléd fordul.
      </p>
      <p>
        - A polgármester úr üzeni, hogy nincs most kedve a játszadozáshoz. 1 percet kaptok, hogy békésen elvonuljatok, és akkor kegyesen elfelejti ezt az incidenst. Ha nem mentek el, az nem lesz jó nektek.
      </p>
      `,
    buttons: [
      {
        txt: "Hallgatsz rá",
        new: 114,
      },
      {
        txt: "Megrohamozzátok a Városházát",
        new: 115,
        modi: "Amint megmozdulnak az emberek a Városháza kerítése felé, a biztonsági őrök harci alakzatba rendeződnek, a vezetőjük pedig kiadja a tűzparancsot ellenetek.",
      },
    ],
  },
  {
    num: 77,
    title: "Sikertelen tüntetés a városháza előtt",
    type: "pursuit",
    music: "longmixed",
    level: 5,
    pic: "menekülők.gif",
    goalpic: "exit.png",
    desc: `
      <p>
        A lelkes nép már útközben elkezd különféle szlogeneket kezd ordibálni.
      </p>
      <ul>
        <li>Monnyon le!</li>
        <li>Hülye vagy, ezt ki kell nyírni!</li>
        <li><span id="fullName"></span> a mi vezérünk!</li>
        <li>Ingyen kakasnyalókát!</li>
        <li>Elég az agymosó diktatúrából!</li>
        <li>Reklámmentes internet!</li>
        <li>Törpehörcsög, hóbagoly, öld a köcsög Bitangot!</li>
      </ul>
      <p>
        Leginkább ezt az utolsó, a költészet szabályaival elég laza kapcsolatban álló alkotást kapta fel a nép. Ennek skandálásával érkeztek meg a Városházára. 
      </p>
      <p>
        A biztonsági őrök vezetője beszél pár mondatot a gallérmikrofonjába - de nem érted, mert elnyomja az ordító tömeg, majd bólint egyet, mire harci alakzatba rendeződnek az őrök.
      </p>
      <p>
        - Tünjetek el innen! - mondja hűvösen és minden őr a tömegre szegezi a gépfegyverét. A nép nagyrésze megszeppen, de egy idősödő, sebhelyes képű hulligán méltatlannak találja ezt a bánásmódot és ezt el is ordítja a biztonsági főnöknek, nyomatékul pedig letép egy utcai kukát a helyéről és hozzávágja. Úgy tűnik, ezt a a biztonsági vezér szintén zokon veszi, mert kiadja a tűzparancsot.
      </p>
      <p>
        Szerencsére van akkora kritikus tömeg, hogy esélyed legyen elmenekülni, de vajon okosan választod-e meg az útvonalat és bírod-e erővel. Ezt úgy derítjük most ki, hogy minél gyorsabban beírod a megjelenő matematikai műveletek eredményét a szökéshez.
      </p>
      `,
    buttons: [
      {
        txt: "Bakker, ezek tényleg lőnek!",
      },
    ],
    pass: 27,
    modi: "Utcáról utcára rohanva, lehetőleg takarásban futva sikerül végül a város szegényebb negyedébe eljutnod, ahova már nem követnek.",
    fail: 115,
  },
  {
    num: 78,
    title: "Nem sikerül elmenekülni Oshinokotól",
    type: "death",
    music: "ziha",
    stopmusic: false,
    pic: "kertihulla.JPG",
    desc: `
      <p>Egyre kétségbeesettebben keresed a kijáratot, de sehol nem találod. Ahogy a falat vizsgálod, hirtelen éles szúró fájdalmat érzel a nyakadban. Eltaláltak valamivel Oshinokoék, de már nem tudod meg, mivel. Még két találat ér, és érzed, hogy elhagy az erőd és elsötétül a világ...</p>
      <p>Kalandod itt véget ért, de legalább jó komposzt lesz belőled.</p>
    `,
  },
  {
    num: 79,
    title: "A földalatti behatolás terve",
    type: "normal",
    music: "basicfun",
    pic: "plan.jpg",
    desc: `
      <p>
        - Remek! Ez a jobb terv! - csap az asztalra Frici, amitől lerepülnek az evőeszközök, de nem törődik vele, sőt, inkább még kevesli is az eredményt, mert a következő mozdulatával mindent leseper az asztalról. Aztán lelkes izgalommal előkap egy papírt a mellényéből, szétteríti az asztalon és villámssebességgel elkezd rá rajzolni egy tervet.
      </p>
      <p>
        - Ez a városháza tervrajza. Itt, a server-szoba melletti üres raktárban fogjuk kiásni magunkat, mert azzal a helységgel a kutya sem törődik.
      </p>  
      <p class="cond" data-cond="=_name_Q">
        - Az jó, mert akkor le tudom vágni a biztonsági rendszert! Viszem a laptomomat! - vágod rá egyből. Frici szeme elismerően csillog.
      </p>
      <p>
        Ekkor megjelenik a ház mellett egy kóborkutya és unottan de helyeslően  vakkant egyet. Frici rá vigyorog, mire az eb rémülten nagyot ugrik és vinnyogva eliszkol. Frici folytatja:
      </p>
      <p>
        -Amíg eljutunk oda, addig is gyűjthetünk a földből pár hasznos anyagot, amiből fegyvereket tud készíteni Betyár. Ásványkicsekben gazdag hely felé építették a Városházát, mindenre gondoltak. A server-szobából nyílik egy vészhelyzeti alagút a biztonsági központba. Ott felmászunk, meglepetésszerűen megjelenünk és kiiktatjuk az őröket. Itt számítok harci képességeidre. Ezután ezen a titkos menekülő-folyosón keresztül tudunk eljutni Boti rezidenciájára. Ott már nem lesz más, csak ő. Ha jól csináljuk, észre sem vesz senki. Miután elintéztük Botit, ugyanitt visszamegyünk Betyárhoz és hazajövünk ünnepelni. Régóta agyalok már ezen a terven, csak eddig még nem találtam olyan útvonalat, ahol nem találkozunk őrökkel. De ezen az útvonalon van a legkevesebb. Csak én egy ezermester-feltaláló vagyok, nem harcos. De ketten meg tudjuk csinálni! Mit szólsz?
      </p>
      <p>
        - Tetszik a terv! - mondod lelkesen. 
      </p>
      <p>
        - Ej, ripityom! Hát vesszen a zsarnok! Nekem még akkor kell pár átalakítást végeznem Betyáron. Gyere vissza holnap délután ide a kunyhóhoz és este végrehajtjuk a tervet. Mindent előkészítek addig. Innen úgy találsz a legkönnyebben haza, hogy követed a sárga kikericseket. Visszafelé is ugyanez. Jaj, de jó! Megyek is Betyárhoz, mert sok dolgom van, minden jót! - mondja lelkesen Frici. Ugrik hármat, a negyediknél megpördül a levegőben, majd esés közben elkapja a kezedet. Ügyesen kézfogássá alakítja a mozdulatot, kihúzza magát és elbúcsúzik tőled. Te is tőle és elindulsz a jelzett virágokat követve.
      </p>
      <p>
        Hosszú séta vár rád, de nem érzed soknak, mert téged is magával ragad a lelkesedés. Nem is akarsz már ma mást csinálni, csak hazamenni aludni, hogy másnap legyen.
      </p>
    `,
    obj: ["D_földalatt"],
    change: [
      {
        id: "lel",
        crease: 1,
      },
    ],
    buttons: [
      {
        txt: "Hazaérkezel",
        new: 46,
      },
    ],
  },
  {
    num: 80,
    title: "Az utcai rajtaütés terve Fricivel",
    type: "normal",
    music: "basicfun",
    pic: "frici.JPG",
    desc: `
      <p>
        - Egy mesterlövész puska? - gondolkodik el Frici. - Hogy ez eddig nem jutott az eszembe, teringettét! Hmmm, agyalok rajta. Kitalálok valamit. Gyere vissza holnap reggel! Addig összerakok egy jó kis mordályt. Innen úgy találsz a legkönnyebben haza, hogy követed a sárga kikericseket. Visszafelé is ugyanez. Akkor viszlát holnap, vesszen a zsarnok! - mondja lelkesen Frici. Elbúcsúztok egymástó, és elindulsz a jelzett virágokat követve.
      </p>
      <p>
        Hosszú séta vár rád, késő este érsz haza, már nincs is kedved máshová menni.
      </p>
    `,
    obj: ["D_utca-Frici"],
    change: [
      {
        id: "ero",
        crease: -1,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Hazaérkezel",
        new: 46,
      },
    ],
  },
  {
    num: 81,
    title: "Nem érdemes belógni",
    type: "normal",
    music: "think1",
    pic: "frici.JPG",
    desc: `
      <p>
       - Dehogy van! Azt egyből visszaveszik, amint lejár a szerződés. Hidd el, csak az a két lehetőség van, amit mondtam.
      </p>
    `,
    buttons: [
      {
        txt: "Akkor legyen a beásás!",
        new: 79,
      },
      {
        txt: "Jó, akkor csinálj egy mesterlövész fegyvert és szedjük le az utcán",
        new: 80,
      },
    ],
  },
  {
    num: 82,
    type: "Ytrial",
    value: "M_Ügyes Frigyes",
    pass: 85,
    fail: 86,
  },
  {
    num: 83,
    title: "Találkozás az erdei lényekkel ",
    type: "normal",
    music: "bübü-talk",
    pic: "bübük.jpg",
    desc: `
      <p>
       Ahogy bolyongsz, egyszer csak furcsa hangokra leszel figyelmes. Először nem tudod megállapítani, hogy két kisgyerek gőgicsél vagy mesebeli lények gurguláznak. Aztán észreveszel két kis erdei lényt, akik az aljnövényzetből téged figyelnek. A nagyobbik (de ő is legfeljebb 30 cm magas) fából készült álarcot visel faág agancsokkal (vagy ez tényleg az arca?), a kisebbik olyan, mint egy kis fatönk szemmel és szájjal. Nem tűnnek ellenségesnek. Hogy reagálsz?
      </p>
    `,
    buttons: [
      {
        txt: "Jaj, de aranyos kis manók! Kik vagytok?",
        new: 116,
        cond: ">_lel_20",
      },
      {
        txt: "Pont két ilyen alátét kell nekem otthonra!",
        new: 89,
        cond: "<_lel_80",
      },
      {
        txt: "Nem törődsz velük, mész tovább",
        new: 89,
      },
    ],
  },
  {
    num: 84,
    title: "Erdei támadás",
    type: "fight",
    pic: "beast,4",
    nmepic: "beast.JPG",
    dungeon: true,
    level: 2,
    desc: `
      <p>
       Hirtelen vészjósló morgást hallasz a fák közül. Egy vadállat készül elfogyasztani téged!
      </p>
    `,
    buttons: [
      {
        txt: "Én vagyok itt a csúcsragadozó!",
      },
    ],
    pass: 57,
    fail: 57,
  },
  {
    num: 85,
    title: "Ismét Ügyes Frigyesnél",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        Valahogy visszakeveredtél Ügyes Frigyes kunyhójához. Éppen pipázgat, de amikor meghall, rögtön feléd fordul.
      </p>
      <p>
        - Hát szép jó napot ismét! Ne mondd, hogy kifogott rajtad egy böszmedve? Nekem kellett vele végeznem, miután bekukucskált a kunyhóba, te meg nem voltál sehol! Hol van a közös teherviselés? Ne hülyéskedj, <span class="name"></span>, én arra alapoztam a tervem, hogy Boti őreivel neked kell végezned! Ez így nem fog menni. Úgy látszik más hősre kell várnom...
      </p>
      `,
    change: [
      {
        id: "sup",
        crease: -1,
        rnd: 2,
      },
      {
        id: "hat",
        crease: -1,
        rnd: 4,
      },
    ],
    buttons: [
      {
        txt: "Megpróbálsz valami frappáns választ adni",
        new: 117,
      },
    ],
  },
  {
    num: 86,
    title: "Találkozás Ügyes Frigyessel",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        Ahogy bolyongsz, egyszer csak megmozdul alattad a talaj és lecsúszol egy völgybe. Ahogy feltápászkodsz, észreveszel egy hunyhót, amit eddig tökéletesen eltakart az erdő. Mellette egy fura traktorszerű gép van és egy bajszos, élénk tekintetű fickó, aki éppen pipázgat, amikor észrevesz téged. Pár pillanatig farkasszemet néztek, aztán széles mosolyra húzódik a szája és vidáman integetni kezd.
      </p>
      <p>
        - Áááá, ha jól látom, <span id="fullName"></span>, városunk hőse! Örülök, hogy betértél ide. Én Ügyes Frigyes vagyok, az ezermester. Mi járatban vagy erre? 
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: -1,
      },
    ],
    obj: ["M_Ügyes Frigyes"],
    buttons: [
      {
        txt: "Eltévedtem ebben a rohadt erdőben, hogy lehet hazajutni?",
        new: 120,
      },
      {
        txt: "Veled akartam beszélni a polgármester kinyírásáról.",
        new: 118,
        modi: `Ügyes Frigyes szeme elkerekedik, megpödri a bajszát, aztán nagy hangon így szól:
        </p>
        <p>
          - Te tényleg nem vagy semmi! Egyből a lényegre térsz. És tudtad is, hogy én is el akarom tenni láb alól azt a féreg Bitang Botit! A gondolataimban olvasol, te igazi hős! Ugye, Betyár? - azzal megpaskolja a furcsa munkagépet, aki erre helyeslően pöfög kettőt.
        `,
      },
    ],
  },
  {
    num: 87,
    title: "A városháza ostromának terve",
    type: "normal",
    music: "think2",
    pic: "gangmeet.jpg",
    desc: `
    <p>
      Elfogadjátok a városháza ostromáak a tervét. Szita Kálmán megígéri, hogy szerez elegendő fegyvert és másnap délután ismét találkoztok a Garázsban. Mindenki lelkesen indul haza. Holnapra véget ér a zsarnokság!
    </p>
    `,
    change: [
      {
        id: "hat",
        crease: 2,
        rnd: 3,
      },
    ],
    obj: ["D_ostrom"],
    buttons: [
      {
        txt: "Te is távozol",
        new: 27,
      },
    ],
  },
  {
    num: 88,
    title: "Az utcai támadás terve",
    type: "normal",
    music: "think2",
    pic: "gangmeet.jpg",
    desc: `
    <p>
      Elfogadjátok az utcai támadás tervét. Penge Menyhért szerint a polgármester holnap délután beszédet fog mondani a Branyiszkó-téren, már ott letámadhatjátok. Megbeszélitek, ki szerez megfelelő fegyvereket és másnap délben ismét találkoztok a Garázsban. Mindenki lelkesen indul haza. Holnapra véget ér a zsarnokság!
    </p>
    `,
    change: [
      {
        id: "hat",
        crease: 2,
        rnd: 3,
      },
    ],
    obj: ["D_utca-Gárda"],
    buttons: [
      {
        txt: "Te is távozol",
        new: 27,
      },
    ],
  },
  {
    num: 89,
    title: "Erdei Zsolt leápol",
    type: "normal",
    music: "bübü-beep",
    pic: "erdei.jpg",
    desc: `
    <p>
      Amint teszel pár lépést a lények elkezdenek fura sípoló hangot kiadni. Hirtelen megjelenik melletted egy ismerős alak. Az erdei boxoló! Ja ne...! De már késő! Mielőtt bármit tehetnél, egy iszonyat nagyot bemos neked, amitől messze repülsz a fák között... A fejedben még mindig a lények hangja visszhangzik...
    </p>
    `,
    change: [
      {
        id: "ero",
        crease: -10,
        rnd: 15,
      },
    ],
    buttons: [
      {
        txt: "Megpróbálsz felállni...",
        new: 57,
      },
    ],
  },
  {
    num: 90,
    title: "A <span class='part'></span> programja",
    type: "normal",
    music: "lightaction",
    pic: "gangmeet.jpg",
    desc: `
      <p>
      A tásaság nagyot koccint a <span class='part'></span> név elfogadására. Már kissé ittas állapotban láttok hozzá a program kidolgozásához. Elhangzanak azok is, amiket már a főtéren javasoltál és bedobnak újabb ötleteket is. Végül úgy döntötök, három fő területen fogtok egy-egy programmal kampányolni. Mik legyenek ezek?
      </p>
    `,
    select: [
      [
        { name: "Ingyen kakasnyalóka", val: 10 },
        { name: "Szuperképesség-fejlesztő tanfolyam", val: 15 },
        {
          name: "Törpehörcsög, hóbagoly vagy takarító robotnő",
          val: 5,
        },
        {
          name: "Ingyen bor, búza, békesség",
          val: 0,
        },
        {
          name: "Minden nap 50 ingyen spam",
          val: -20,
        },
      ],
      [
        { name: "Reklámmentes internet", val: 20 },
        { name: "A járványok szétmorzsolása", val: 15 },
        { name: "Az agymosással való leszámolás", val: -5 },
        { name: "Világbéke", val: -15 },
        { name: "Örök emlék a halottaknak", val: -10 },
      ],
      [
        { name: "Szociális otthon a városházából", val: 10 },
        { name: "Bitang Botond és emberei lógni fognak", val: 20 },
        { name: "Gizikének mosómedvét", val: 5 },
        { name: "Mi a szar legyen még?", val: 25 },
        { name: "Aggyá mék sört, Menyus!", val: -15 },
      ],
    ],
    wvar: "progi",
    sep: " - ",
    cvar: "sup",
    wc: true,
    submit: {
      txt: "Ez a nyerő program!",
      new: 92,
    },
  },
  {
    num: 91,
    title: "A nép csalódik benned",
    type: "normal",
    music: "slowguitar",
    pic: "booing.gif",
    desc: `
      <p>
        Nem sikerült kellőképpen lelkessé tenned a népet, ahhoz, hogy pártot tudjál alapítani. Elkezdenek elszállingózni és nemsokára üres lesz a tér.
      </p>
      `,
    buttons: [
      {
        txt: "Te is távozol, de a városban maradsz",
        new: 27,
        modi: "Szomorkáson járkálni kezdesz a városban...",
      },
      {
        txt: "Meg sem állsz az erdőig",
        new: 55,
      },
    ],
  },
  {
    num: 92,
    title: "A <span class='part'></span> programjának elfogadása",
    type: "normal",
    music: "masslaugh",
    pic: "gangmeet.jpg",
    desc: `
      <p>
       Nem volt éppen rövid menet véglegesíteni a programot a sok javaslat közepette, de végül sikerült elfogadnotok a <span class='part'></span> három pontját:
      </p>
      <ol id="pp"></ol>
      <p> 
       Örömmel koccintotok ismét egy nagyot majd még egy jó órán át isztok és röhögtök. Mire végre abbahagyjátok, már későre jár. Megegyeztek abban, hogy holnap ugyanitt pártgyűlést tartotok, addig Nyomdász Lajos kinyomtat egy csomó röplapot a pártprogrammal, Dr. Kotász pedig elkészíti a pártbejegyzés jogi dokumentumait, aztán majd hozzáláttok a kampányhoz.
      </p>
    `,
    change: [
      {
        id: "hat",
        crease: 2,
        rnd: 3,
      },
      {
        id: "ugy",
        crease: -1,
      },
      {
        id: "esz",
        crease: -1,
      },
    ],
    buttons: [
      {
        txt: "Hazamész",
        new: 46,
      },
    ],
  },
  {
    num: 93,
    title: "Oshinoko haditerve Szenyamuki nélkül",
    type: "normal",
    music: "oshinoko",
    pic: "oshinoko-face.JPG",
    desc: `
    <p>
      Oshinoko elgondolkodik. Közben Sakura észrevétlenül elvonul.
    <p>
      - Nem lesz könnyű, de megpróbáljuk. Ma Bitang Botond beszédet mond a Branyiszkó-téren. Ott könnyebb letámadni, mint a Városháza erődjében. Az emberei a modern fegyvereket könnyen kiszúrják, a legjobb lesz fúvócsővel végezni vele, miután elvegyültünk a tömegben. De számítani kell rá, hogy utána az egész bandája ellenünk fog támadni. Azzal nyerhetünk némi időt, hogy egyszerre öljük meg Botit és a korrupt rendőrfőnököt. A rendőrfőnök gyakran álruhában van, de én jól ismerem, mert már régóta megfigyelem. Én eintézem őt, te pedig intézd el Botit. Viszonylag közel kell menni hozzá, hogy biztos legyen a találat. Utána le fogják zárni a teret és egyenként engednek ki mindenkit. Ha rohannánk, nem jutnánk ki, csak magunkra vonnánk a figyelmet így amint végeztünk velük, ha nem vettek észre, eldobjuk a fúvócsövet és úgy viselkedünk, mint mindenki más a tömegben. Ha viszont észrevesznek, akkor menekülünk és minél több álrendőrt leszedünk. Ha eleget leszedünk, akár be is jelentheted a hatalomátvételt, ezt rád bízom. Téged szeret a nép. De ha sokan maradtak, biztosabb ha egyelőre csak élve kijutunk, aztán meglátjuk a folytatást. Ha Boti és a rendőrfőnők nincs többé, nagy előnyhöz jutunk. Viszont minden fegyveredet itt kell hagynod, ha nem akarod, hogy már az elején lebukjál, csak a fúvócsövet vihetjük.
    </p>
    <p>
      - Jó tervnek tűnik, de sokminden múlik azon, hogy észreveszik-e az elején a fúvócső használatát. Ennek esélyét mivel csökkenthetjük?
    </p>
    <p>
      - Azzal, hogy a fúvőcső így néz ki - mosolyodik el kissé esetlenül Oshinoko, és átnyújt neked egy doboz cigit. Kinyitod, de még mindig csak cigarettaszálakat látsz bennük. Kiveszed az egyiket. Oshinoko elveszi tőled, elővesz egy öngyújtót és a cigi végéhez érinti. Amikor lenyomja az öngyújtó gombját, abból egy kis tüske jön ki, és akkor veszed ászre, hogy a cigi belül üreges, amikor a tüskét egy gyakorlott mozdulattal belejuttatja. - Hagyomőnyos fegyver modern köntösben. Van még időnk, hogy gyakoroljuk a "cigigyújtás" mozdulatát. De vigyázz, mert a tüske tényleg mérgezett, nehogy hozzáérj a végéhez!
    </p>
    <p>
      Egy ideig gyakoroltok még és megbeszéltek néhány további részletet. Aztán eljön az idő az indulásra. A tárgyaidnál kicsit hezitálsz, hogy nem lenne-e jobb mégis magaddal vinni valamilyen fegyvert, hátha mégsem buksz le. Hogy döntesz?
    </p>
    `,
    change: [
      {
        id: "ugy",
        crease: 5,
        rnd: 2,
      },
    ],
    obj: ["D_utca-Oshinoko"],
    buttons: [
      {
        txt: "Magaddal viszed a tárgyaidat",
        new: 121,
        modi: "Oshinoko csak egy átfutó grimasszal fejezi ki nemtetszését, hogy nem hagyod itt a tárgyaidat, de nem az a vitatkozós fajta, így nem szól többet.",
      },
      {
        txt: "Inkább itt hagysz Oshinokonál mindent",
        new: 122,
      },
    ],
  },
  {
    num: 94,
    title: "Találkozás Szenyamukival",
    type: "normal",
    music: "oshinoko",
    pic: "szenyamuki-face.JPG",
    desc: `
    <p>
      Oshinoko bólint, azzal szó nélkül a ház oldalához megy, ahol megrángat háromszor egy lelógó vezetéket. Pár percig néz a ház falán túl valamit, majd megint bólint és hozzád fordul.
    <p>
      - Szenyamuki vár minket - mondja, aztán vált még pár szót Sakurával, akin látszik, hogy továbbra is aggódik, de próbál erősnek látszani. Végül int neked, hogy induljatok.
    </p>
    <p>
      Kifordultok a falon keresztül, aztán mentek össze-vissza az utcákon át, míg végül egy titkos ajtón át egy elhagyatott raktárépületbe értek. Itt egy sötét sarokban van egy alak. Oshinoko mond neki pár mondatot japánul, mire előrelép. A beszűrődő fényben megpillantod az arcát. Hasonlít Oshinokora, de gonoszabb és sötétebb, és egy sebhely is még visszataszítóbbá teszi. Megszólít.
    </p>
    <p>
      - Battle Beatle legyőzője... Ugyan miért kellene azt hinnem, hogy veled együtt le tudnánk győzni Bitang Botondot?
    </p>
    <p>
      - Ha mi hárman összefogunk, mindenkinél erősebbek vagyunk! Miért gondolod, hogy nem?
    </p>
    <p>
      Szenyamuki megvető pillantást vet rád.
    </p>
    <p>
      - A fivérem tud egyetsmást a harc terén. Bár nem annyit, mint én. De rólad semmit nem tudok. Ezen pedig csak egyféleképpen segíthetünk - szól, és hirtelen harci állásba vágja magát. Meg kell vele küzdened.
    </p>
    `,
    buttons: [
      {
        txt: "Előrántod a katanát",
        cond: "W_KATANA",
        new: 123,
      },
      {
        txt: "Több tiszteletet versz ebbe a Szenyába",
        new: 124,
      },
    ],
  },
  {
    num: 95,
    title: "Csevegés a kocsmárossal",
    type: "normal",
    music: "pubmusic",
    pic: "bodripapa.jpg",
    desc: `
      <p>
       Odafordulsz a nagydarab kocsmároshoz és elkezdtek társalogni.
      </p>
      <ul>
        <li>Jó ez a hely, hangulatos.</li>
        <li>Köszönjük a pozitív visszajelzést. Gyere máskor is, ha tetszik! Bodri papa szívesen lát mindig.</li>
        <li>Van törzsvásárlói kedvezmény is?</li>
        <li>Aki sokszor jár ide, azt megszeretjük és nehezebb szívvel verjük péppé, ha problémázna. Megfelel ez a kedvezményes konstrukció?</li>
        <li>Attól tartok, az én esetemben ez nem túl nagy érezhető előny. Engem egyébként is igen nehéz péppé verni, bármilyen hangulattal is csinálják.</li>
        <li>Ó, elnézést, ezt nem tudtam. Ez esetben a kidobófiú állást tudnám felajánlani, és akkor minden nap itt lehetnél.</li>
        <li>Hmmm, ezt az ajánlatot még meg kell beszélnem az ügynökömmel. Bár igazából ennél ambíciózusabb karrierterveim vannak.</li>
        <li>Sajnos nincs más üres pozíciónk jelenleg. Ettől függetlenül szívesen meghallgatom elképzeléseidet, hátha a jövőben tudunk segíteni.</li>
        <li>Én akarom uralni ezt a várost.</li>
        <li>Hmm, ez valóban ambíciózus! Elismerem, hogy ehhez a tervhez kissé hosszú út vezetne a kocsmai kidobófiúi állástól, bármennyire is jónevű a Kutya Veres Kasza. Ha gyorsabban akarsz haladni céljaid felé, javaslom, inkább Bitang Botit távolítsd el az útból. Jelenleg ugyanis övé ez a pozíció.</li>
        <li>Pontosan ez a tervem!</li>
        <li>Látom a szemeden, hogy nem viccelsz. Sokaknak tele van a tökük vele, jó lenne ha valaki tényleg félre tudná állítani! Ha komolyan gondolod, van is itt valaki, aki tudna ebben neked segíteni.</li>
      </ul>
      <p>
        Azzal a hátad mögé mutat.
      </p>
    `,
    change: [
      {
        id: "sup",
        crease: 2,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Megfordulsz",
        new: 97,
      },
    ],
  },
  {
    num: 96,
    title: "Bunyó a kidobóemberrel",
    type: "fight",
    pic: "barfight.gif",
    nmepic: "kidobo.jpg",
    att: 60,
    def: 50,
    speed: 4,
    hp: 70,
    desc: `
      <p>
        - Ez rossz húzás volt! - szól rád komoran a kocsma kidobóembere és megindul, hogy kihajítson a kocsmából. Amikor elindul a bunyó, a háttérben mások is elkezdik verni egymást. Ragadós a hangulat.
      </p>
    `,
    buttons: [
      {
        txt: "Úgyse tudsz kidobni!",
      },
    ],
    pass: 97,
    fail: 47,
  },
  {
    num: 97,
    title: "A kocsmai énekesnő",
    type: "normal",
    music: "pubsong",
    pic: "bogi.JPG",
    desc: `
      <p>
       Hirtelen felcsendül egy ének a kocsma oldalából. Mindenki varázsütésre abbahagy mindent, amit eddig csinált, ellhallgat és odanéz. Egy gyönyörű nő áll egy kis színpadon, mikrofonnal a kezében, mellette egy színesbörű fickó fehér frakkban, szintetizátorral. Te sem tudod kivonni magadat a furcsa varázs alól és elkezded hallgatni az éneket.
      </p>
      <p>
       Amikor az ének véget ér, mindenki lelkesen tapsol. Ellenállhatatlan kényszert érzel arra, hogy odamenj a nőhöz.
      </p>
    `,
    obj: ["M_Bogi"],
    buttons: [
      {
        txt: "Elkezdesz neki udvarolni",
        new: 125,
        cond: "férfi",
      },
      {
        txt: "Beszédbe elegyedsz vele",
        new: 126,
      },
    ],
  },
  {
    num: 98,
    title: "Beszélgetés a kocsmatöltelékekkel",
    type: "normal",
    music: "pubmusic",
    pic: "kocsmatöltelékek.jpg",
    desc: `
      <p>
        Letelepszel az asztalukhoz és már hozzák is az aranylóan habzó sört. Koccintanak veled, majd Pitypang vidáman elkiáltja magát, hogy "Fenékig!" Mindenki ledönti a meglévő sörét és te is így teszel. Ekkor hirtelen megfordul veled a világ és pár pillanatig fogalmad sincs, hol vagy, minden érzéked eltompul... Aztán lassan ismét hallod a hangokat, látod asztaltársaságod vigyorgó képeit, fokozatosan felfogod, hogy hozzád beszélnek. Kicsit hülyének érzed magad, mégis magabiztosnak.
      </p>
      <p>
        - Na, milyen volt az Ászok Ásza? - kérdezi valamelyik a három közül.
      </p>
      <p>
        - Bazibrutál... - szalad ki a szádon kedvenc szavad. Jót röhögnek ezen, és te is elkezdesz velük röhögni. Úgy érzed, nagyon megszertetted ezeket a gnómokat, mintha a legjobb barátaid lennének. El is mondod nekik rögtön, annyira túláradnak az érzelmeid:
      </p>
      <p>
        - Úgy szeretlek titeket! - és ők a füstös homályon át is látják a szemed sarkában megcsillanó örömkönnyeket. Már hajolsz is át az asztalon és a kebledre öleled mindhárom gnómot, akik meghatottan szipognak...
      </p>
      <p>
        Amikor már kezd a derekad sajogni a kissé természetellenes póztól, felegyenesedsz, de rögtön vissza is esel a helyedre. Látod, hogy mindhárom alak könnyekkel küszküdik. Talán soha életükben nem ölelte meg őket olyan nagy ember, mint te. Haverkodóan leveszed Pitypang sapkáját és megpaskolod kopaszodó fejét, amitől kislányos zavarba jön. Lesüti a szemét, pislog jobbra-balra, végül a legidősebbhez fordul:
      </p>
      <p>
        - Mátyus! Te mit szósz ehöz?
      </p>
      <p>
        - Mit szóljak, Pitypang? - feleli, mire bátorítóan meghúzgálod őszülő bajszát. Ez láthatóan jól esik neki, de nem segít azon, hogy szavakba is öntse érzelmeit. Ezért inkább oldalra fordul: - Szóljon Frédi, még meg sem szólalt!
      </p>
      <p>
        A harmadik fickó fúj egy nagyot, ijedten körbenéz és csapkod párat, mint kezdő matróz a süllyedő hajón, aztán egy szarvasbőgéshez hasonló hangot ad ki hosszan elnyújtva. Láthatóan nem a szavak embere, de azért várod, hogy hátha sikerül átalakítania artikulált emberi beszéddé azt, ami a torkán kijön, ám akkor hirtelen történik valami.
      </p>
    `,
    change: [
      {
        id: "ero",
        crease: 5,
        rnd: 5,
      },
      {
        id: "ugy",
        crease: -5,
        rnd: 5,
      },
      {
        id: "esz",
        crease: -5,
        rnd: 5,
      },
      {
        id: "lel",
        crease: 5,
        rnd: 5,
      },
      {
        id: "hat",
        crease: 5,
        rnd: 5,
      },
      {
        id: "sup",
        crease: 5,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Mi?",
        new: 97,
      },
    ],
  },
  {
    num: 99,
    title: "Csatlakoznak a kocsmatöltelékek",
    type: "normal",
    music: "pubmusic",
    pic: "vidámpub.jpg",
    desc: `
      <p>
        A kocsma népe melléd áll, élükön Mátyussal, Pitypanggal és Frédivel, akik először ismertek fel. Remek lázadó hangulat lett úrrá az egész Kutya Veres Kaszán, mindenki lelkesen iszik, káromkodik, ordibál, dicsér téged és szídja Botit, ám egyszer csak történik valami.
      </p>
    `,
    obj: ["J_Kocsmatöltelékek"],
    buttons: [
      {
        txt: "Micsoda?",
        new: 97,
      },
    ],
  },
  {
    num: 100,
    title: "Nem győzted meg a kocsmatöltelékeket",
    type: "normal",
    music: "pubmusic",
    pic: "szomorúpub.jpg",
    desc: `
      <p>
        Nem sikerül lázba hoznod a kocsma népét, akármit mondasz, unottan elfordulnak tőled az italuk felé. Vagy gyávák, vagy már csak laza kapcsolatuk van a valósággal, de te mindenképp csalódott vagy.
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: -1,
      },
    ],
    buttons: [
      {
        txt: "Elhagyod a kocsmát",
        new: 47,
      },
      {
        txt: "Vársz még egy kicsit, hátha történik valami",
        new: 97,
      },
    ],
  },
  {
    num: 101,
    title: "Az orvgyilkos legyőzése",
    type: "normal",
    music: "darkbackground",
    pic: "home.jpg",
    desc: `
      <p>
        Sikerül legyőznöd az orvgyilkost. Kifújod magad és átkutatod. Találsz nála egy fejlett katonai kést, egy kézigránátot és két flaskát, valamint egy belépőkártyát. Nem tudod hova jó, de elteszed azt is a többivel együtt. Ahogy a feje felé hajolsz, egy nagyon halk hangot hallasz a síri csendben. Amikor közelebb hajolsz, észreveszed a nő füle mögé rejtett apró kommunikációs eszközt. A saját füledhez tartod, hogy jobban halld. Valaki azt kérdezi, hogy mi történt, mivel csökkentek az életfunkciói a nőnek. Mit teszel?
      </p>
    `,
    obj: [
      "W_GYILOK",
      "W_KÉZIGRÁNÁT",
      "W_DIABOLIKUS SZTEROID",
      "W_NAGY ERŐITAL",
      "S_Belépőkártya",
    ],
    buttons: [
      {
        txt: "Megpróbálsz a nő hangját utánozva válaszolni, hogy minden rendben, elintézted magad",
        new: 127,
        cond: "nő",
      },
      {
        txt: "A saját hangodon válaszolsz, hogy kinyírtad az orvgyilkost és mindenki így jár, aki az utadba áll",
        new: 128,
      },
      {
        txt: "Kidobod az eszközt a hullával együtt",
        new: 74,
        modi: "Csendben becsomagolod a hullát egy nagy kukazsákba és leviszed a központi konténerbe. Senki nem látott meg a vaksötét éj közepén. Visszamész és próbálsz még aludni reggelig.",
      },
    ],
  },
  {
    num: 102,
    title: "Menekülés a halálba",
    type: "death",
    music: "bomb",
    stopmusic: true,
    pic: "explosion.gif",
    desc: `
      <p>
        Hiába menekülsz, az orvgyilkos azonnal utánad dob egy gránátot és az egész otthonoddal együtt küld át a másvilágra.
      </p>
      <p>Kalandod itt véget ért, de most már tudod, hogy meg kell védened az otthonodat a betolakodókkal szemben.</p>
    `,
  },
  {
    num: 103,
    title: "Edzés otthon",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p>
        Csinálsz jó pár erősítő és küzdő gyakorlatot, hogy felkészültebb fizikummal tudd végrehajtani terveidet.
      </p>
      `,
    change: [
      {
        id: "ugy",
        crease: 5,
        rnd: 15,
      },
      {
        id: "ero",
        crease: 5,
        rnd: 15,
      },
    ],
    buttons: [
      {
        txt: "Most már harcra kész vagy",
        new: 75,
      },
    ],
  },
  {
    num: 104,
    title: "Imádkozás otthon",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p>
        Eltöltesz egy teljes órát a Teremtő Atyával. A végén érzed, hogy megtisztult a lelked és az értelmed, biztonságban vagy, nem rendíthet meg a világ, megerősödött a hited. A hitednek a rád váró feladatokban is hasznát veheted majd.
      </p>
      `,
    change: [
      {
        id: "lel",
        crease: 10,
        rnd: 15,
      },
      {
        id: "hat",
        crease: 10,
        rnd: 10,
      },
      {
        id: "esz",
        crease: 5,
        rnd: 5,
      },
    ],
    obj: ["S_Hit"],
    buttons: [
      {
        txt: "Most már harcra kész vagy",
        new: 75,
      },
    ],
  },
  {
    num: 105,
    title: "Rejtvényfejtés otthon",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p>
        Megcsinálsz pár gondolkodásfejlesztő feladványt, amitől okosabbnak és magabiztosabbnak érzed magad.
      </p>
      `,
    change: [
      {
        id: "esz",
        crease: 10,
        rnd: 10,
      },
      {
        id: "hat",
        crease: 5,
        rnd: 5,
      },
    ],
    buttons: [
      {
        txt: "Most már harcra kész vagy",
        new: 75,
      },
    ],
  },
  {
    num: 106,
    title: "Telónyomkodás otthon",
    type: "normal",
    music: "calmusic",
    pic: "nappali.jpg",
    desc: `
      <p>
        Eltöltesz egy órát a neten lévő instant szennyben szörfözve és agyrohasztó szerencsén alapuló játékokkal játszva. Még csak számodra hasznos híreket sem olvastál, viszont sikeresen leépítetted magad.
      </p>
      `,
    change: [
      {
        id: "ugy",
        crease: -2,
        rnd: 3,
      },
      {
        id: "ero",
        crease: -2,
        rnd: 3,
      },
      {
        id: "lel",
        crease: -2,
        rnd: 3,
      },
      {
        id: "esz",
        crease: -2,
        rnd: 3,
      },
      {
        id: "hat",
        crease: -2,
        rnd: 3,
      },
    ],
    buttons: [
      {
        txt: "Most már harcra kész vagy",
        new: 75,
      },
    ],
  },
  {
    num: 107,
    title: "Ismét a <span class='name'></span> Gárdával",
    type: "normal",
    music: "lightaction",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Ismét összeültök a megbeszélt időpontban a Garázsban. Lelkesen üdvözlitek egymást. <span class="cond" data-cond="J_Oshinoko">Oshinoko is megjelent, de ezúttal csak csendesen meghúzódik egy sarokban.</span> Kérdezgetik egymástól, hogy hol van Szita Kálmán a fegyverekkel. Amint idáig juttok, egy teherautó áll meg a Garázs előtt. Kinéztek.
      </p>
      <p>
        Szita az, büszkén vigyorogva megy hátra és nyitja a csomagtartót. Közben int valakinek, hogy zárja be az udvar nagy kapuját. Mint a társaság vezetője, felmész vele a raktérbe és szétnézel. Van itt mindenféle fegyver ládákban vagy azok nélkül: gépfegyver, vadászpuska, konyhakés, csúzli, gyufa, kézigránát, bűzbomba, boxer, ostor, lángszóró, flex, harapófogó, petárda, csatabárd, de még pácélököl (bazooka) is, több rakétával. Szita nagyon büszke magára. Mivel nem ismered még annyira az embereidet, a legjobbnak azt tartod, ha rájuk bízod, hogy mindenki olyan fegyvert válasszon, amihez ért is.
      </p>
      <p>De előtte te választasz 2 fegyvert azok közül, ami tetszik:</p>
      `,
    select: [
      [
        { name: "Gépfegyver", val: "W_GÉPFEGYVER" },
        { name: "Vadászpuska", val: "W_VADÁSZPUSKA" },
        { name: "Páncélököl", val: "W_PÁNCÉLÖKÖL" },
        { name: "Csatabárd", val: "W_CSATABÁRD" },
        { name: "Lángszóró", val: "W_LÁNGSZÓRÓ" },
      ],
      [
        { name: "Kézigránát", val: "W_KÉZIGRÁNÁT" },
        { name: "Konyhakés", val: "W_KONYHAKÉS" },
        { name: "Csúzli", val: "W_CSÚZLI" },
        { name: "Ostor", val: "W_OSTOR" },
        { name: "Bűzbomba", val: "W_BŰZBOMBA" },
        { name: "Petárda", val: "W_PETÁRDA" },
      ],
    ],
    cvar: "obj",
    submit: {
      txt: "Válasszatok ti is!",
      new: 131,
    },
  },
  {
    num: 108,
    title: "Ismét a Garázsban",
    type: "normal",
    music: "lightaction",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Ismét összeültök a megbeszélt időpontban a Garázsban. Lelkesen üdvözlitek egymást. Oshinoko elővesz egy karton cigit. Egy páran rögtön kérnek is tőle, de ő leinti őket, hogy várjanak. Kivesz egy szálat az egyik dobozból, egy másikból egy öngyújtót. A cigit a szájába veszi és az öngyújtót a végéhez közelíti. Abból azonban nem láng jön ki, hanem egy apró tüske csúszik bele az üreges cigibe. Ebben a pillanatban lép be a szobába Döme, a patkány. Aki tényleg patkány. Egy pillanatra megáll és szaglászni kezd, majd villámgyorsan nyargalni kezd a hűtő felé. Oshinoko felé irányítja a cigit, fúj egyet, mire a tüske láthatatlan gyorsasággal belerepül a cigiből Dömébe. Ő összerándul, lép még kettőt, aztán megmerevedik és felfordul.
      </p>
      <p>
        A társaság döbbent némaságban figyeli az eseményeket. Végül Oshinoko töri meg a csendet:
      </p>
      <p>
        - A hagyományos fegyvereket hamar kiszúrnák az őrök, és a tér körül mesterlövészek is vannak. A ciginek álcázott fúvőcsövet viszont nem szúrják ki. Én leszedem a rendőrfőnököt, mert gyakran álruhában van, de én megismerem, <span class="name"></span> sanra bíznám a polgármestert. De nagyon fontos, hogy ha ezzel a kettővel végeztünk és nem vette észre senki, hogy ki fújt rájuk a csőből, akkor viselkedjünk teljesen természetesen, mint a tömeg többi tagja. Ha szerencsénk van, verekedés nélkül megússzuk. De ha mégis lebuknánk, mindenki üsse-vágja a rendőröket, ahogy tudja! Minél jobban elkeveredünk a tömegben, annál kisebb esély van arra, hogy a mesterlövészek leszednek. De még az is lehet, hogy a nép mellénk áll a két főgonosz halálát látván és <span class="name"></span> san bejelentheti, hogy átveszi a hatalmat. Meglátjuk majd, hogy alakul. A lényeg, hogy addig senki ne csináljon semmit, amíg mi ketten nem szedjük le a két főgonoszt. Most pedig megtanítom <span class="name"></span> sannak meg annak, aki még akarja, hogyan kell a legfeltünésmentesebben és leghatásosabban használni a fúvőcsövet.
      </p>
      <p>
        Jó pár ember jelentkezik, hogy ők is akarnak fúvócsövet használni, néhányan pedig bíznak saját erejükben. Egy órán át gyakoroltok, aztán már ideje indulni a Branyiszkó-térre.
      </p>
      `,
    change: [
      {
        id: "ugy",
        crease: 5,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Vesszen a zsarnok!",
        new: 135,
      },
    ],
  },
  {
    num: 109,
    title: "Fricivel a városban",
    type: "normal",
    music: "basicfun",
    pic: "movingtown.gif",
    desc: `
      <p>
        Frici a város szélén leparkol, aztán összehajtja Hugót (nagyon nem lepődsz már meg) és elteszi a zsebébe.
      </p>
      <p>
        - Innen gyalog megyünk, mert most mindenhol ott vannak Boti emberei, nem akarok gondot a Betyármobil miatt - szól Frici, azzal leszálltok és elindultok a Branyiszkó-tér felé.
      </p>
      <p>
        Ahogy sétáltok, egyszer csak találkoztok egy kisebb izgatott tömeggel. Egy kövér, borostás fazon atlétatrikóban és mackóalsóban magyaráz izgatottan az embereknek.
      </p>
      <p>
        - Higgyétek el, ez égi jel volt! Tíz éve már nem ittam, de az asszony miatt most megint a kezembe vettem a poharat! És amikor a számhoz emeltem, egyszerűen magától összetört! Egy angyal törhette össze! Nem térek vissza a piához, leteszem örökre! Az asszonynak is megbocsátok!
      </p>
      <p>
        - Ha angyal volt, akkor kicsi lehetett és az ablakon át repült be! - jegyzi meg valaki némi cinizmussal a tömegből, és a férfi mögötti ház ablakára mutat, amelyen egy kis lyuk van. Frici huncut mosollyal rádkacsint és halkan odasúgja neked:
      </p>
      <p>
        - Az angyalt Hugónak hívták és az erdőből repült ide... Na, de menjünk, mert dolgunk van! Nem is kell ennél beljebb mennünk.
      </p>
      <p>
        Elképedsz, hogy képes volt ilyen távolságból eltalálni egy poharat, ez a mesterlövész puska tényleg nem semmi! 
      </p>
      <p>
        Beléptek egy emeletes házba és felmentek a lépcsőn. A tetőre vezető vasajtó zárva van, de Frici elővesz egy tolvajkulcsot, kicsit babrál vele, mire kattan a zár. Lenyomja a kilincset, de továbbra sem mozdul az ajtó.
      </p>
      <p>
        - Nem nagyon használhatták ezt, biztos berozsdásodott! Lökjük be! - mondja, azzal nekiugrotok az ajtónak. Hatalmasat döng, de sikerül kinyitni. A zajra viszont megjelenik a lépcsőn egy füstszagú, bajszos, vastag keretes szemüveget viselő fickó és rátok kiált:
      </p>
      <p>
        - Mi az anyátok úristenit csináltok itt?!
      </p>
      <p>
        Mit teszel?
      </p>
      `,
    buttons: [
      {
        txt: "Kidumálod magad a helyzetből",
        new: 138,
      },
      {
        txt: "Leápolod a fickót",
        new: 139,
      },
    ],
  },
  {
    num: 110,
    title: "Akcióban a <span class='part'></span>",
    type: "normal",
    music: "lightaction",
    pic: "gangmeet.jpg",
    desc: `
      <p>
        Ismét összejön a társaság a szokott helyen. Nyomdász Lajos megérkezett több láda röplappal, plakáttal. Szétosztjátok és mindenki körberagasztja velük az egész várost.
      </p>
      <p>
        A nap végén megnézitek, mennyire változott a támogatásotok. Ez volt az az érték, ami az oldal tetején megjelent futószövegben, remélem, nem maradtál le róla. De a mai nap során Bitang Botond sem tétlenkedett: lelkesítő beszédet mondott a Branyiszkó-téren, amiben titeket is ócsárolt. Úgy tűnik, a jelen támogatottságotok még mindig túl kevés ahhoz, hogy a nép átálljon hozzátok. Valami konkrétabb dolgot is kellene tenni a népért.
      </p>
      <p>
        Mi legyen az?
      </p>
      `,
    Xchange: "kampány",
    buttons: [
      {
        txt: "Elárasztjátok az internetes médiát is a pártprogrammal",
        new: 142,
      },
      {
        txt: "Nyilvános beszédeket mondasz te is",
        new: 143,
      },
      {
        txt: "Elkapsz egy hírhedt bűnözőt",
        new: 146,
      },
      {
        txt: "Kincseket bányászol a népnek",
        new: 148,
      },
      {
        txt: "Megkeresed az elveszett tárgyaikat",
        new: 150,
      },
      {
        txt: "Elkíséred a veszélyes helyen élőket",
        new: 151,
      },
      {
        txt: "Imádkozol a sikerért",
        new: 153,
      },
    ],
  },
  {
    num: 111,
    type: "Ytrial",
    value: "S_Bübüszimat",
    pass: 156,
    fail: 157,
  },
  {
    num: 112,
    title: "A régi fagyigyárban",
    type: "normal",
    music: "gravenight",
    pic: "darkbogi.jpg",
    desc: `
      <p>
        A megbeszéltek szerint vársz naplementéig, aztán elindulsz a régi fagyigyárhoz. Ez egy elhagyatott egyszintes ipari épület a város külterületén, az ázsiai negyed mellett. Mire odaérsz, már beesteledett, csak a telihold meg néhány utolsó napjaival küszködő lámpa halovány fénye világítja meg utadat, Amikor belépsz az üresen tátongó épületbe, szétnézel, de senkit sem látsz. Fülelni kezdesz. Valahol halkan csepeg a víz tompa visszhanggal. Lehet bármi egy ilyen épületben. Aztán hirtelen lassan, nyikorogva kinyílik egy ajtó. Mögötte felvillan egy reflektor, de annak is elég gyenge a fénye. Az ajtón egy női alak lép be, de nem látod az arcát, mert mögüle jön a fény.
      </p>
      <p>
        Mit teszel?
      </p>
      `,
    buttons: [
      {
        txt: "Megvárod, mit csinál",
        new: 159,
      },
      {
        txt: "Üdvözlöd, mert ki más lehetne, mint Bogi",
        new: 160,
      },
      {
        txt: "Letepered",
        new: 161,
      },
    ],
  },
  {
    num: 113,
    title: "Piacolás",
    type: "dungeon",
    pic: "piac,10",
    music: "piac",
    desc: "<p>Sétálgatsz, bámészkodsz, vásárolgatsz a piacon...<p>",
    contBtn: "Tovább piacolsz",
    failBtn: {
      txt: "Inkább hazamész",
      new: 163,
    },
    passBtn: {
      txt: "Hazamész",
      new: 163,
    },
    passDesc: "<p>Eleget vásároltál.</p>",
    fight: 162,
    end: 15,
    find: [
      "W_SZEGECSES BŐRDZSEKI",
      "W_CSÚZLI",
      "W_ROZSDÁS BÖKŐ",
      "W_KONYHAKÉS",
      "W_FÜTYKÖS",
      "W_VADÁSZPUSKA",
      "W_OSTOR",
      "W_BŰZBOMBA",
      "W_PÁLINKÁS FLASKA",
      "W_PETÁRDA",
      "W_DIABOLIKUS SZTEROID",
      "W_KIS ERŐITAL",
      "W_NAGY ERŐITAL",
      "W_SÁRKÁNYVÉR",
      "W_KÉZIGRÁNÁT",
    ],
    findmany: 7,
  },
  {
    num: 114,
    title: "Szétoszlik a nép",
    type: "normal",
    music: "slowguitar",
    pic: "booing.gif",
    desc: `
      <p>
        Belátod, hogy elhamarkodott volt rögtön ide vezetned a népet, így megszégyenülten visszafordulsz. A nép csodálkozva néz rád. Próbálsz nekik valamit mondani, hogy ezzel őket is véded, de hiteledet vesztetted. Nemsokára üres lesz a városháza előtti tér.
      </p>
      `,
    change: [
      {
        id: "sup",
        crease: -10,
        rnd: 10,
      },
      {
        id: "hat",
        crease: -7,
        rnd: 8,
      },
    ],
    buttons: [
      {
        txt: "Távozol, de a városban maradsz",
        new: 27,
        modi: "Szomorkáson járkálni kezdesz a városban...",
      },
      {
        txt: "Kirohansz inkább az egész városból",
        new: 55,
      },
    ],
  },
  {
    num: 115,
    title: "Bitang Boti emberei megölnek",
    type: "death",
    music: "difshots",
    stopmusic: true,
    pic: "shot.jpg",
    desc: `
      <p id="modified"></p>
      <p>
        Rémülten rohanva próbálod menteni az életedet, de a szemed sarkából látod, hogy esnek el körülötted az agyonlőtt emberek. Hirtelen te is éles fájdalmat érzel a bal lapockádban... Majd a jobban... Elsőtétül a világ...
      </p>
      <p>Kalandod itt véget ért, de most már tudod, hogy többet kellett volna készülnöd a Botival való csatára, mert ő nem egy egyszerű polgármester.</p>
    `,
  },
  {
    num: 116,
    title: "Az erdei lények befogadnak",
    type: "normal",
    music: "bübük",
    pic: "bübük.jpg",
    desc: `
      <p>
       Barátságos közeledésedet a kis lények is barátságosan fogadják. Egymásra néznek, majd lassan melléd lépkednek és kissé félénken megtapogatnak. Ettől láthatóan megnyugodnbak, és élénken elkezdenek beszélgetni sajátos babanyelvükön. Ezután ismét rádnéznek és integetnek, hogy kövesd őket.
      </p>
      <p>
        Elindulsz utánuk. Keresztül-kasul mentek egy ideig a sűrű aljnövényzeten, majd egyszer csak egy tisztásra értek. Ott több hasonló falény ül körül egy náluk kb. hétszer nagyobb - azaz normál méretű - férfit. Rendkívül erős testalkatú, de jóképű és barátságos. Ő tűnik a lények bölcs vezérének. Mindnyájan felétek fordulnak.
      </p>
    `,
    buttons: [
      {
        txt: "Te jó ég, tudom, ki a vezetőjük!",
        new: 164,
      },
    ],
  },
  {
    num: 117,
    type: "Xtrial",
    value: "com",
    pass: 118,
    modi: `- Tudod, hogy van ez - mondod, miközben jelentőségteljesen Frici szemébe nézel, majd végignézel magadon, ismét rá nézel és vágsz egy kétértelmű grimaszt. Arra számítasz, hogy Frici, aki oly nagyra van az eszével, nem fogja azt mondani, hogy nem tudja. Frici fürkészően bámul rád egy ideig, aztán - vagy azért, mert tényleg nem akarta azt mondani, hogy nem tudja, vagy azért, mert tényleg olyan okos, hogy veled ellentétben megértette a célzásodat - végül együttérzően bólint:
        </p>
        <p>
        - Tudom. Én ne tudnám? Haajj... tudnék ám mesélni! Na de most fontosabb dolgunk van. Beszéljük meg akkor hogy tudjuk eltenni láb alól ezt a Bitangot! - amikor pedig ezt kimondja, a traktorja helyeslően pöfög kettőt.
        `,
    fail: 119,
  },
  {
    num: 118,
    title: "A Betyármobil",
    type: "normal",
    music: "traktor",
    pic: "betyármobil.JPG",
    desc: `
      <p id="modified"></p>  
      <p>
        - Na, először is, <span class="name"></span>, hadd mutassam be, hogy mire is képes hű társam, pontosabban most már a társunk, a Betyármobil! - szól Frici, azzal meghúz egy kart a traktoron, mire kinyílik egy csapóajtó az egyik oldalán. Frici megfog egy mellette heverő döglött bundás állatot (leginkább böszmedvének tűnik), beledobja a keletkezett résbe, aztán rácsukja a csapóajtót. A Betyármobil felbőg és nemsokára megnyílik két másik ajtó, az egyiken egy bundakabát, a másikon pedig több aranybarnára sült húspogácsa jön elő és sorakozik fel egy átlátszó csőben. Frici gyengéd szeretettel megpaskolja a járgányt.
      </p>
      <p>
        - Mindig tudja, miből mit lehet hasznosítani. És ez még nem minden! Most figyelj! - kiált büszkén, azzal felpattan a vezetőfülkébe.
      </p>
      <p>
        A Betyármobil ugrik egyet miközben megprödül a tengelye körül. Ezután Frici odavezeti egy fához, nyomkod pár gombot egy ideig, majd a gépből kijön két kar különféle megmunkáló fejekkel, elkezdik dolgozni a fát, repül a fűrészpor szerteszét, majd a végén megjelenik Dávid király faszobra a fa helyén. A fején még maradt is egy kis levél.
      </p>
      <p>
        Frici büszkén mosolyog, neked az állad is leesett és elismerően bólogatsz.
      </p>
      <p>
        - Ez csak egy kis bemutató volt, valójában még rengeteg mást is tud az én Betyárom, de most inkább együnk, amíg friss a böszmedvehús!
      </p>
      `,
    change: [
      {
        id: "esz",
        crease: 2,
        rnd: 3,
      },
      {
        id: "hat",
        crease: 1,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Rendben",
        new: 54,
      },
    ],
  },
  {
    num: 119,
    title: "Búcsú Fricitől",
    type: "normal",
    music: "forest",
    pic: "forest2.jpg",
    desc: `
      <p>
        Akárhogy magyarázkodsz, Frici csalódott benned. Ha egy böszmedvét se tudsz legyőzni, akkor nem szövetkezik veled Boti ellen, mert kudarcra van itélve a terv. Már csak annyit tehet érted, hogy megmondja, merre van a hazafelé vezető út. Letörten visszabotorkálsz a városba...
      </p>
      `,
    change: [
      {
        id: "hat",
        crease: -3,
        rnd: 3,
      },
      {
        id: "lel",
        crease: -1,
        rnd: 1,
      },
    ],
    buttons: [
      {
        txt: "Ez van.",
        new: 27,
      },
    ],
  },
  {
    num: 120,
    title: "Búcsú Fricitől",
    type: "normal",
    music: "forest",
    pic: "forest2.jpg",
    desc: `
      <p>
        - Valóban könnyen el lehet itt tévedni! De mondok egy tippet: kövesd a sárgfa kikericseket. Azok visszavezetnek a városba - mondja Frici, azzal megpödri a bajszát.
      </p>
      <p>
        Lehet, hogy még akart volna valami mondani, de neked már annyira eleged lett a kóválygásból, hogy azonnal elrohansz a kikericsek irányába. Ahogy követed őket, tényleg egyre ritkább lesz az erdő és végül megpillantod a várost. Észreveszed, hogy nemcsak te, hanem már a nap is jó nagy utat tett meg.
      </p>
      `,
    buttons: [
      {
        txt: "Végre megint a városban!",
        new: 27,
      },
    ],
  },
  {
    num: 121,
    title: "A Branyiszkó-téren",
    type: "normal",
    music: "epicsearch",
    pic: "kordon.jpg",
    desc: `
      <p id="modified"></p>  
      <p>
       Elindultok a Branyiszkó-tér felé. Már messziről meglátjátok a tömeget, és azt is, hogy nagy körben körül van zárva és Boti emberei mindenkit ellenőriznek, aki be akar lépni. Úgy látszik, Boti tényleg tart a tömegtől.
      </p>
    `,
    buttons: [
      {
        txt: "Ne baj, akkor is bejutsz",
        new: 185,
        cond: "!_S_Micuki",
      },
      {
        txt: "Micuki technikával belopózol a tömegbe",
        new: 186,
        cond: "S_Micuki",
      },
    ],
  },
  {
    num: 122,
    title: "Oshinokonál hagyod a fegyvereidet",
    type: "normal",
    music: "oshinoko",
    pic: "oshinoko-face.JPG",
    desc: `
      <p>
        Oshinoko átnézi a tárgyaidat és amit fegyvernek ítél, azt elzárja egy rejtett széfbe. Ezután int, hogy induljatok.
      </p>
    `,
    Xchange: "lefegyverzés",
    buttons: [
      {
        txt: "Menjünk!",
        new: 121,
      },
    ],
  },
  {
    num: 123,
    title: "Szenyamuki mellétek áll",
    type: "normal",
    music: "oshinoko",
    pic: "szenyamuki-face.JPG",
    desc: `
    <p>
      Amint előrántod a katanát, Szenyamuki szeme elkerekedik.
    </p>
    <p> - Dédapánk katanája! Hogy került ez hozzád?</p>
    <p> - Te is tudod, hogy csak egyféleképpen kerülhetett ez hozzá! - szól közbe Oshinoko.</p>
    <p> - Igen, kiálltam a Vanepuca próbát! Még mindig harcolni akarsz ellenem? - mondod keményen.</p>
    <p>
      Szenyamuki pár pillanatig hezitál, aztán flegmán megvonja a vállát.
    </p>
    <p> - Dédapánk szelleme ellen nem harcolok.</p>
    <p>
      OshinokovaL összenéztek. Ő bólint egyet. Már kezded érteni ennyiből is, hogy mit akar közölni: Szenyamuki átállt hozzátok!
    </p>
    `,
    buttons: [
      {
        txt: "Akkor beszéljük meg, hogy buktassuk meg Botiékat!",
        new: 189,
      },
    ],
  },
  {
    num: 124,
    title: "Harc Szenyamukival",
    type: "fight",
    pic: "dualfight.gif",
    nmepic: "szenyamuki-face.JPG",
    att: 120,
    def: 70,
    speed: 9,
    hp: 100,
    desc: `
      <p>
        - Nem muszáj ezt végigjátszanod! - kiált rád egy lehelletnyi aggodalommal a hangjában Oshinoko, de a harc már elkerülhetetlen.
      </p>
    `,
    buttons: [
      {
        txt: "Védd magad, te ferdeszemű!",
      },
    ],
    pass: 190,
    fail: 191,
  },
  {
    num: 125,
    type: "Xtrial",
    value: "love",
    pass: 192,
    fail: 126,
  },
  {
    num: 126,
    title: "Beszélgetés Bogival",
    type: "normal",
    music: "pubmusic",
    pic: "bogi_face.JPG",
    desc: `
      <p>
        Az énekesnő végigjáratja a szemét rajtad, ahogy közeledsz, majd megszólít:
      </p>
      <p>
      - Ha nem tévedek, <span id="fullName"></span>!
      </p>
      <p>
        - Így van! - vágod rá büszkén. Feléd nyújtja a kezét.
      </p>
      <p>
        - Bogi.
      </p>
      <p>
        Hmmm, valami furcsa ezzel a névvel. Valahogy nem erre számítottál.
      </p>
      <p>
        - Milyen Bogi?
      </p>
      <p>
        - Csak Bogi - válaszol titokzatosan. Aztán mosolyogva hozzáteszi: - Miért, te milyen <span class="name"></span> vagy?
      </p>
      <p>
        Te is elmosolyodsz. Legyen így. 
      </p>
        - És mi szél hozott erre? - kérdezi. Sokféle válasz kavarog a fejedben, de ahogy belenézel Bogi szemébe, olyan érzésed van, mintha hipnotizálna. Akaratlanul is feltör benned legbelső vágyad, ami azóta motoszkál benned, hogy felkeltél ma.
      <p>
        - Én vagyok a város hőse, itt az ideje, hogy átvegyem az irányítást!
      </p>
      <p>
        Bogi arcán elégedett mosoly suhan át egy pillanatra. Aztán megint titokzatos arckifejezésre vált.
      </p>
      <p>
        - A Kutya Veres Kasza tulajdonosával beszéltél?
      </p>
      <p>
        - Tulajdonképpen váltottunk pár szót...
      </p>
      <p>
        - Hogy hívják? - szegezi neked hirtelen a kérdést. Az arca keményre vált és csak rád összpontosít megint. - Pontosan válaszolj!
      </p>
      `,
    input: {
      label: "Írd be ide a kocsmáros pontos nevét:",
      max: 10,
      key: "Bodri papa",
    },
    pass: 193,
    fail: 194,
  },
  {
    num: 127,
    type: "Xtrial",
    value: "hang",
    pass: 129,
    fail: 130,
  },
  {
    num: 128,
    title: "Az orvgyilkos halálának közlése",
    type: "normal",
    music: "darkbackground",
    pic: "home.jpg",
    desc: `
      <p>
        Gondolod, a mikrofon sem lehet messze, így elkiáltod magad:
      </p>
      <p>
        - Hogy mi történt? Kinyírtam ezt az amatőr orvgyilkost! Gondolom, a legjobb embered volt. Nyugodtan küldd a többit is, mindenkivel végezni fogok! Így jár az, aki <span id="fullName"></span> útjába kerül!
      </p>
      <p>
        Hallgatózol, de úgy tűnik, a másik oldalon megszakították a beszélgetést. Mindegy, bárki is volt az, ez nem változtat azon, amit egy téged megöldi küldött bérgyilkos megbízójának mondanál. De minden bizonnyal Boti embere volt. Ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival.
      </p>
    `,
    obj: ["E_Boti üldöz"],
    change: [
      {
        id: "ugy",
        crease: 3,
        rnd: 2,
      },
      {
        id: "hat",
        crease: 3,
        rnd: 2,
      },
      {
        id: "ero",
        crease: 3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Kidobod a hullát is.",
        new: 74,
        modi: "Csendben becsomagolod a hullát egy nagy kukazsákba és leviszed a központi konténerbe. Senki nem látott meg a vaksötét éj közepén. Visszamész és próbálsz még aludni reggelig.",
      },
    ],
  },
  {
    num: 129,
    title: "A megbízó megtévesztése",
    type: "normal",
    music: "darkbackground",
    pic: "home.jpg",
    desc: `
      <p>
        Gondolod, a mikrofon sem lehet messze, így a nő hangját és stílusát utánozva elkezdesz beszélni.
      </p>  
      <p>
        - Volt egy kis verekedés, de már minden rendben. <span id="fullName"></span> halott.
      </p>
      <p>
        - Köszönjük. Fizetés a szokásos módon - jön a válasz a kütyüből. Még csak kódolt nyelvet sem használnak, nagyon magabiztosak. De te is örülsz, hogy sikerült őket átverned. Most azt hiszik, halott vagy. Emellett ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival, és megerősítette az önbizalmad.
      </p>
    `,
    obj: ["E_Boti halottnak hisz"],
    change: [
      {
        id: "ugy",
        crease: 3,
        rnd: 2,
      },
      {
        id: "hat",
        crease: 3,
        rnd: 2,
      },
      {
        id: "ero",
        crease: 3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Először is kidobod a hullát",
        new: 74,
        modi: "Csendben becsomagolod a hullát egy nagy kukazsákba és leviszed a központi konténerbe. Senki nem látott meg a vaksötét éj közepén. Visszamész és próbálsz még aludni reggelig.",
      },
    ],
  },
  {
    num: 130,
    title: "Nem sikerül megtéveszteni a megbízót",
    type: "normal",
    music: "darkbackground",
    pic: "home.jpg",
    desc: `
      <p>
        Amint elkezdesz beszélni, megszólal a hang a kütyüben:
      </p>
       - Ki beszél? Mi történt?
      <p>
      <p>
        Rájössz, hogy úgysem tudod megtéveszteni őket, fölösleges tovább erőlködnöd, így a rendes hangodon elkiáltod magad:
      </p>
        - Hogy mi történt? Kinyírtam ezt az amatőr orvgyilkost! Gondolom, a legjobb embered volt. Nyugodtan küldd a többit is, mindenkivel végezni fogok! Így jár az, aki <span id="fullName"></span> útjába kerül!
      </p>
      <p>
        Hallgatózol, de úgy tűnik, a másik oldalon megszakították a beszélgetést. Mindegy, bárki is volt az, ez nem változtat azon, amit egy téged megöldi küldött bérgyilkos megbízójának mondanál. De minden bizonnyal Boti embere volt. Ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival.
      </p>
    `,
    obj: ["E_Boti üldöz"],
    change: [
      {
        id: "hat",
        crease: -2,
        rnd: 1,
      },
    ],
    buttons: [
      {
        txt: "Kidobod a hullát is.",
        new: 74,
        modi: "Csendben becsomagolod a hullát egy nagy kukazsákba és leviszed a központi konténerbe. Senki nem látott meg a vaksötét éj közepén. Visszamész és próbálsz még aludni reggelig.",
      },
    ],
  },
  {
    num: 131,
    type: "Ytrial",
    value: "D_ostrom",
    pass: 136,
    fail: 137,
  },
  {
    num: 132,
    title: "Újra Fricinél",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        A sárga kikericseket követve visszajutsz Ügyes Frigyes rejtekhelyére. Sok földtúrást látsz a kunyhó körül, Frici pedig éppen Betyárt kalapálgatja. Amint meglát, lelkesen üdvözöl:
      </p>
      <p>
        - Szevasz <span class="name"></span>! Na, készen állsz a nagy akcióra? Betyárt elláttam földalatti ásó szerkókkal, meg ha valami értékes ásványi anyagot talál, abból készít is nekünk valamit. Nagyon szuper lett! A páncélját is megerősítettem, mert kemény földbe is áshatunk, de szerintem alkalmas lesz a feladat elvégzésére. Előtte viszont együnk egyet!
      </p>
      <p>
        Azzal megint előhozza az asztalt, székeket és némi ennivalót. Megint fasírt-szerű étel a fő fogás, de világosabb színű, mint múltkor.
      </p>
      <p>
        - Ez miből van? - kérdezed gyanakodva.
      </p>
      <p class="cond" data-cond="E_Boldi elzárása">
        - Eh, egy nyápic volt ez a Béna Boldizsár! Ma reggel holtan találtam. Legalább ennyi haszna legyen!
      </p>
      <p class="cond" data-cond="!E_Boldi elzárása">
        - Ki tudja? Mivel nem volt időm vadászni, automata feldolgozó üzemmódra állítottam Betyárt este. Az éjjel bármi belekerülhetett a csapdájába...
      </p>
      <p>
        Kissé meghökkensz, de aztán megvonod a vállad és tovább eszel, mert kell az energia.
      </p>
      <p>
        Amikor végeztetek, Frici elpakol, ellenőriz még pár dolgot Betyáron, aztán beszálltok, hogy megtámadjátok a föld alól a városházát.
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: 7,
        rnd: 5,
      },
      {
        id: "lel",
        crease: -3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Na, ássunk!",
        new: 134,
      },
    ],
  },
  {
    num: 133,
    title: "Újra Fricinél",
    type: "normal",
    music: "forest",
    pic: "kunyho.jpg",
    desc: `
      <p>
        A sárga kikericseket követve visszajutsz Ügyes Frigyes rejtekhelyére. Ő  éppen egy hosszúcsövű, távcsöves puskát csiszolgat. Amint meglát, lelkesen üdvözöl:
      </p>
      <p>
        - Szevasz <span class="name"></span>! Na, készen állsz a nagy akcióra? Nézd meg, milyen mesterlövész puskát csináltam! Hugónak neveztem el! - Pár percig átszellemült képpel nézi, majd hirtelen felkapja, belenéz a távcsőbe, körbenéz vele, majd elsüti. Csak egy nagyon halk kattanás hallatszik. Frici nagyon büszkének tűnik, de te értetlenül nézel rá.
      </p>
      <p>
        - Haha! Várd meg, amíg bemegyünk a városba! Előtte viszont együnk egyet!
      </p>  
      <p>
        Azzal megint előhozza az asztalt, székeket és némi ennivalót. Megint fasírt-szerű étel a fő fogás, de világosabb színű, mint múltkor.
      </p>
      <p>
        - Ez miből van? - kérdezed gyanakodva.
      </p>
      <p class="cond" data-cond="E_Boldi elzárása">
        - Eh, egy nyápic volt ez a Béna Boldizsár! Ma reggel holtan találtam. Legalább ennyi haszna legyen!
      </p>
      <p class="cond" data-cond="!E_Boldi elzárása">
        - Ki tudja? Mivel nem volt időm vadászni, automata feldolgozó üzemmódra állítottam Betyárt este. Az éjjel bármi belekerülhetett a csapdájába...
      </p>
      <p>
        Kissé meghökkensz, de aztán vállat vonsz és tovább eszel, mert kell az energia.
      </p>
      <p>
        Amikor végeztetek, Frici elpakol, ellenőriz még pár dolgot Hugón, aztán beszálltok a Betyármobilba és elindultok a város felé, ahol Boti ma délután  beszédet mond a Branyiszkó-téren.
      </p>
      `,
    change: [
      {
        id: "ero",
        crease: 7,
        rnd: 5,
      },
      {
        id: "lel",
        crease: -3,
        rnd: 2,
      },
    ],
    buttons: [
      {
        txt: "Vesszen a zsarnok!",
        new: 109,
      },
    ],
  },
  {
    num: 134,
    title: "A Városháza alatt",
    type: "dig",
    size: 17,
    level: 7,
    helper: "Frici",
    gems: ["Üzemanyag", "Kőszén", "Érc", "Gyémánt"],
    music: "underground",
    pic: "cave.gif",
    desc: `
      <p>
        Elindultok és Frici elkezd magyarázni:
      </p>
      <p>
        - Kiválaszthatod, hogy hol ássuk be magunkat, de jó messziről kell indulnunk. Pontosan én sem tudom, milyen talajban fogunk haladni, csak a közvetlen mellettünk lévőket látjuk és nyilván csak erre haladhatunk. Minél világosabb földben haladunk, annál kevesebb energiába kerül az ásás, de a sötétebb földek több és értékesebb ásványi anyagot rejtenek, amikből Betyár folyamatosan gyűjti a hasznosíthatókat az ásás közben, a végén pedig gyárthat belőle hasznos tárgyakat. Egyedül a kék sziklás talajjal nem tud megbirkózni, azt ki kell kerülnünk. Figyeld folyamatosan Betyár üzemanyag-szintjét, mert ha még van energiája, akkor mászklálhatunk ide-oda gyűjtögetni ásványokat, de a végén mindenképpen meg kell érkeznünk középre, mert ott tudjuk a raktárba felásni magunkat. Ha hamarabb elfogy az üzemanyagunk, akkor cseszhetjük... Készen állsz?
      </p>
    `,
    buttons: [
      {
        txt: "Igen, irány a föld belseje!",
      },
    ],
    pass: 195,
    fail: 196,
  },

  //*

  {
    num: 162,
    title: "Piaci bunyó",
    type: "fight",
    pic: "solofight.gif",
    nmepic: "cigus.jpg",
    dungeon: true,
    level: 1,
    desc: `
      <p>
       Ahogy sétálgatsz a piacon, egyszer csak egy indoeurópai csávó elkezd veled kötekedni.
      </p>
    `,
    buttons: [
      {
        txt: "Elmész te a jó durva halálba!",
      },
    ],
    pass: 113,
    fail: 113,
  },

  {
    num: 168,
    title: "Felajánlod a segítséged az embereknek",
    type: "normal",
    music: "happyGuitar",
    pic: "happymass.jpg",
    desc: `
      <p>
       Felajánlod, hogy továbbra is segítesz nekik, ha elmondják, mi a konkrét problémájuk. 
      </p>
      <p class="cond" data-cond="!H_Pirike">
       Egy Pirike nevű öregasszony azt szeretné, ha megkeresnéd az olvasószemüvegét.
      </p>
      <p class="cond" data-cond="H_Pirike, !H_Mari néni">
       Mari néni nagyon sír a kertben szétgurult láncszemei miatt.
      </p>
      <p class="cond" data-cond="!H_Jóska bá">
       Jóska bának a Bodri kutyája kóborolt el.
      </p>
      <p class="cond" data-cond="H_Jóska bá, !H_Lóri papa">
       Lóri papának az adóbevallását kellene elkészíteni.
      </p>
      <p class="cond" data-cond="!H_Az Öveges család">
       Övegeséknek lopják a tyúkjait.
      </p>
      <p class="cond" data-cond="H_Az Öveges család, !H_Brünhilda">
       Brünhildát a részeges fiújától kellene megszabadítani.
      </p>
      <p class="cond" data-cond="!H_Csongika">
       Csongikát - a szomszédaid gyerekét - el kellene hozni az óvodából.
      </p>
      <p class="cond" data-cond="H_Csongika, !H_Yendela hercegnő">
       A messzi öreg király kéri, hogy Yendela hercegnőt kísérje el egy hős a Bazizord-rónán át a Csillám-ligetbe. 
      </p>
      <p class="cond" data-cond="H_Mari néni, H_Lóri papa, H_Brünhilda, H_Yendela hercegnő">
       Úgy tűnik, már mindenkin segítettél, akinek ma gondja volt. 
      </p>
      <p>
       Kinek segítesz?
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: 1,
      },
    ],
    buttons: [
      {
        txt: "Pirikének",
        new: 169,
        cond: "!H_Pirike",
      },
      {
        txt: "Mari néninek",
        new: 170,
        cond: "H_Pirike, !H_Mari néni",
      },
      {
        txt: "Jóska bának",
        new: 171,
        cond: "!H_Jóska bá",
      },
      {
        txt: "Lóri papának",
        new: 172,
        cond: "H_Jóska bá, !H_Lóri papa",
      },
      {
        txt: "Az Öveges családnak",
        new: 173,
        cond: "!H_Az Öveges család",
      },
      {
        txt: "Brünhildának",
        new: 174,
        cond: "H_Az Öveges család, !H_Brünhilda",
      },
      {
        txt: "Csongikának",
        new: 175,
        cond: "!H_Csongika",
      },
      {
        txt: "Yendela hercegnőnek",
        new: 176,
        cond: "H_Csongika, !H_Yendela hercegnő",
      },
      {
        txt: "Senkinek, ennyi volt mára.",
        new: 177,
      },
    ],
  },
  {
    num: 169,
    title: "Pirike kertjében",
    type: "mine",
    size: 4,
    akna: 2,
    kincs: 1,
    music: "lightmonkey",
    pic: "pirike.png",
    treasure: "glasses.jpg",
    desc: `
      <p>
        - Köszönöm szépen, aranyom, maga nagyon rendes ember! - mondja meghatottan Pirike. Olyan hangja van, mint egy kotkodáló tyúknak. Beléd karol és elvisz a házához. Útközben elmeséli, hogy milyen nagy rajongója a szerelmes regényeknek és mennyit sír mindig rajtuk, de mióta elvesztette az olvasó szemüvegét, depressziós lett, mert nem tud sírni rajtuk. Pedig az volt az egyetlen öröme, hogy lucskossá sírta a párnáját.
      </p>
      <p>
        Megesik rajta a szíved. Amikor megérkeztek, megmutatja a kertjét. Olyan kicsi, hogy még egy vagány óvodásnak is nehezére esne triciklivel megfordulni benne. Gondolod, ez gyerekjáték lesz. Gondolod. Mert aztán kotkodáló hangján Pirike elmondja, hogy az az égetnivaló kisunokája, a Bence két bombát is elásott a szemüveggel együtt a kertben a múlt hétvégén, Pityuka keresztelője után. Azóta nem mer kimenni Pirike a kertbe. De az ásót szívesen neked adja. Nagyon szeretne még sokat sírni a romantikus regényeken, ezért inkább a szemüveget ásd ki, mint a bombákat, ha lehet. Vegyes érzelmekkel veszed át az ásót. De mégis te vagy a helység hőse, ki más tudna Pirikén segíteni?
      </p>
      <p><i>
        Addig áshatsz, amennyi erőd van. A kertben egy szemüveg és <span id="akna"></span> bomba van. Ha bombát ásol ki, az ügyességedtől függ, hogy mennyit sebesülsz. Ha üres mezőn ásol, az első szám megmutatja, van-e a szomszédos mezőkön szemüveg (1), a második a bombák számát mutatja meg. Próbáld meg megtalálni a szemüveget, de ha már nincs merszed tovább keresni a bombák miatt, fel is adhatod.
      </i></p>
    `,
    help: "H_Pirike",
    buttons: [
      {
        txt: "Hát jó...",
      },
    ],
    pass: 178,
    med: 179,
    fail: 180,
  },
  {
    num: 170,
    title: "Mari néni kertje",
    type: "mine",
    size: 6,
    akna: 3,
    kincs: 10,
    music: "country",
    pic: "grannygarden.jpg",
    treasure: "pearl.png",
    desc: `
      <p>
        - Jaj de jó, aranyoskám, hogy segítesz! - szól boldogan Mari néni és kedvesen megpaskolja az arcod. Aztán elvezet a házához, ahol egy hatalmas nagy kert van. Rendezettnek éppen nem mondható, inkább össze-vissza nő rajta tök, paszuly, gaz, gomba, kakukkfű, articsóka, ginzeng stb. Nem véletlen, hogy az öreglánynak segítség kell.
      </p>
      <p>
        - Na, angyalom, abban kérném a segítséged, mert már az én derekam nem bírja, de a te fiatal csontjaid... Hej, ha láttál volna lánykoromban... megnyalta mindenki a szája szélét utánam... Volt az Iván, na az nagy frász volt ám! Na de hol is hagytam abba? Ja igen! Kilencszázötvenhétben találtunk egy bombát a kertben. Hogy hogy került oda, azt senki sem tudja. De levitte a Kálmán fél karját! Azóta olyan furán kapálta a retket... Mintha csugulyázna... Na, de miért is mondtam ezt? Ja, tudom. Szóval. A minap, amikor a macska olyan panaszosan nyávogott, kimentem a kertbe, mert már nem bírtam hallgatni, és ahogy sétáltam, egy dög bögöly megcsípte itt a nyakamat, ni! Hirtelen odakapok, hát nem elszakadt a gyöngysorom, amit még a Menyus adott nekem, eszem a lelkét! Úgy szétgurultak a gyöngyök, a Bodri meg, hallod, fogta magát és elkaparta őket! Azt hitte az a lökött jószág, hogy kutyagumi... az én gyöngyeimre! Az a vén eb már nem is lát! Pedig olyan jó volt az a Menyus...! Mindig olyan szépen kanalazta a dödöllét, hogy öröm volt nézni, már attól jóllakott az ember! Hogy mosolygott közben! Na de a gyöngyök. Hajolgatni már nem tudok, hát előhoztam az ásót. Erre átszól a szomszéd, az a szép szemű Árpi, hogy Marikám, te ne ássál, mert megint beleásol egy bombába, aztán mi lesz velem, ha itt felrobbansz nekem? Rögtön a szívemhez kaptam, el is dobtam az ásót! Bodri felnyekkent - azóta sántít. Én meg csak beszaladtam a szépszobába és sírtam-ríttam, hogy nekem már sosem lesz meg a gyöngysor, amit az én Gézukámtól kaptam. Vagy a Menyustól? Ja, lehet, hogy tőle. Kérlek szépen, keresd meg a gyöngyöket. Adok egy ásót. Csak arra vigyázz, hogy nehogy valami bombába ássál nekem! Na itt van, nesze! Addig én megkopasztom a tikot és főzök egy jó levest.
      </p>
      <p><i>
        A kertben összesen <span id="kincs"></span> gyöngy és <span id="akna"></span> bomba van. Ha üres mezőn ásol, az első szám a szomszédos mezőkön lévő gyöngyök, a második a bombák számát mutatja meg. Próbálj meg minél több gyöngyöt megtalálni és életben maradni!
      </i></p>
    `,
    help: "H_Mari néni",
    buttons: [
      {
        txt: "Nosza!",
      },
    ],
    pass: 178,
    med: 179,
    fail: 180,
  },
  {
    num: 171,
    title: "Bodri kutya keresése",
    type: "pursuit",
    level: 1,
    music: "search",
    pic: "movingtown.gif",
    goalpic: "bodri.jpg",
    desc: `
      <p>
        A mogorva, füstös szagú Jóska bá odalép hozzád, és mutat egy képet egy felmosórongyról. Miközben élénken magyaráz arról, hogy Bodri volt a mindene öreg napjaira, mennyit hemperegtek együtt a hóban, sárban, díványon, kergették az egereket és éjszakai pillangókat, rájössz, hogy a képen egy pulikutyát látsz. Megesik az öregen a szíved, elkezded kérdezgetni, mikor és hol látta utoljára, és elkezditek követni a nyomokat. Remélhetőleg a szimatod nem hagy cserben téged sem.
      </p>
      <p>
        Írd be a megjelenő matematikai műveletek eredményét!
      </p>
      <p><i>
        Minél gyorsabban válaszolsz, illetve minél több az Eszed és az Ügyességed, annál jobban értelmezed a nyomokat és annál közelebb kerülsz Bodri kutya megtalálásához. De csak annyi időd van megtalálni, amennyi az Erődből telik, mivel közben szaladtok is a kutya nyomában.
      </i></p>
    `,
    help: "H_Jóska bá",
    buttons: [
      {
        txt: "Gyere, Bodri kutyám!",
      },
    ],
    pass: 178,
    fail: 180,
  },
  {
    num: 172,
    title: "Lóri papa adóbevallása",
    type: "pursuit",
    level: 6,
    music: "nightstalker",
    pic: "SZJA.jpg",
    goalpic: "NAV.png",
    desc: `
      <p>
        Lóri papa egy fontoskodó, de udvarias, magas, szikár, horgas orrú tata. Elvisz az otthonába, felrakja a kávét főni, aztán elmondja, hogy eléggé meggyűlt a baja az adóbevallással, mert nem tudja, mit kezdjen azzal a jövedelemmel, amit saját festményei eladása után készpénzben odaadott több tucat fiatal nőnek, akiknek még egy rendes ruhájuk sem volt, úgy álltak fagyoskodva minden éjjel a sarkokon meg a tereken, de nem arra fordították az összeget legtöbben, hogy meleg ruhát vásároljanak maguknak, hanem  gyógynövényes cigit meg megfázás elleni orrport vettek belőle maguknak, de közben kiderült, hogy más is adott nekik éjjel pénzt, aminek 50%-át visszaadták cserébe Lóri papának, aki a felét különféle jótékony intézményeknek és szektáknak adta, a másik felét szerencsejátékon vesztette el vagy éppen duplázta meg, majd abból... máűr a fene se tudja követni, de nemcsak az SZJA a kérdéses, hanem hogy akkor most ki hogyan mikor miből fizeti meg azt a rohadt ÁFA-t és ebből mennyi a TB meg a rezsielszámolás és a beadási határidő 1 percen belül lejár!
      </p>
      <p>
        Megérted az öreget, ez tényleg nem könnyű. Hozzá is látsz buzgón.
      </p>
    `,
    help: "H_Lóri papa",
    buttons: [
      {
        txt: "Ne aggódjon, összedobok egy NAVszerű bevallást!",
      },
    ],
    pass: 178,
    fail: 180,
  },
  {
    num: 173,
    title: "Övegesék tyúkjai",
    type: "fight",
    pic: "tyúkok.jpg",
    nmepic: "fox.gif",
    att: 30,
    def: 15,
    speed: 4,
    hp: 35,
    desc: `
      <p>
        A hangerőben egymást túllicitáló Öveges házaspár élénken gesztikulálva meséli el, hogy valaki rendszeresen lopja a tyúkjaikat az udvarukból. Csak az a baj, hogy mindig akkor, amikor ők nincsenek otthon vagy alszanak, így nem tudnak mit csinálni. A Kázmér gyerekük meg tök süket, az nem hall semmit sosem.
      </p>
      <p>
        Megesik a szíved a szerencsétleneken, megígéred, hogy segítesz nekik. Elkísérnek az otthonukba, ami egy régimódi parasztház nagy udvarral. Az udvaron vagy egy kutyaól, rögtön megkérdezed, vajon a kutyájuk tudja-e, hogy mi a feladata, de kiderül, hogy szegény Pintyike már rég meghalt. Valószínűleg ilyen névvel nehezére eshetett őrző-védő feladatot ellátnia még akkor is, amikor egyébként tök jól életben volt. Jobb ötlet híján felajánlod, hogy bemászol te a kutyaólba, hogy lesből csapj le a tolvajra. Ők addig elmehetnek otthonról, hogy azt higgye a gazfickó, nincsenek itthon. Mielőtt elmennek, Öveges bácsi neked adja a régi vadászpuskáját. Használhatta volna ő is, de hát mikor, amikor nincs itt a bűncselekmény elkövetésének idejében?
      </p>
      <p>
        Miután elmentek, bemászol a kutyaólba a puskával és csendesen vársz. Nem kell sokat várni. Nemsokára kaparászásra leszel figyelmes a kerítés aljában. Aztán meglátod a ravasz - rókát! Ő tehát a tolvaj!
      </p>
      <p><i>
        A harcban mindenki a sebessége ritmusában támad a másikra, de  neked külön rá kell nyomni a mindig máshol megjelenő Támadás gombra! A sebzés a támadó Támadás értékétől és a védő Védelem értékétől függ (nálad ezek az értékek az általános jellemzőidből vannak átszámítva). Túl nagy különbség esetén kritikus sebzést is be lehet vinni, ami csökkenti az ellenfél képességeit vagy a te esetedben elveszítheted az éppen használt fegyvert. Csak egy fegyvert használhatsz egyszerre, és erre külön rá kell kattintani. Ha nem használsz, akkor puszta kézzel küzdesz (de nem is veszítheted el a fegyveredet). Fegyvert lehet lerakni vagy másra is váltani, de egy harc alatt csak korlátozott mértékben. Ha nem akarsz tovább harcolni, fel is adhatod és elmenekülhetsz, de akkor az ellenfél búcsúzóul még ejt rajtad egy nagyobb sebzést. Sok sikert!
      </i></p>
    `,
    obj: ["W_VADÁSZPUSKA"],
    help: "H_Az Öveges család",
    buttons: [
      {
        txt: "Na gyere, te tolvaj állat!",
      },
    ],
    pass: 178,
    fail: 180,
  },
  {
    num: 174,
    title: "Brünhilda agresszív fiúja",
    type: "fight",
    pic: "dualfight_real.gif",
    nmepic: "kidobo.jpg",
    att: 70,
    def: 40,
    speed: 7,
    hp: 70,
    desc: `
      <p>
        A tépett vörös hajú, szeplős, zöld szemű Brünhilda szívfacsaró zokogás közepette meséli el, hogy van egy fiúja, aki kidobófiú egy kocsmában, és a sok munkahelyi stresszt mindig rajta vezeti le otthon. Hol a kirángatja a ruháit a szekrényből, leteperi őket és kihajítja az ajtón, hol az anyjától kapott vázát kezdi hörögve fojtogatni, ma reggel pedig, amikor hazajött az esti műszakból, nem engedte meg neki, hogy megigya a kakaóját, hanem leverte az asztalról és közölte, hogy "Eleget ittál! Fizess és húzz el innen!" Ő ezt már nem bírja tovább.
      </p>
      <p>
        Ez a szívedbe markol! Pontosan tudod, milyen az, amikor már egy kakaót sem lehet nyugodtan meginni. Az végképp betesz az embernek! Megkéred Brünhildát, hogy azonnal vezessen a lakására. Amikor megérkeztek, ott horkol hangosan az ágyon. Megfogod és kidobod az utcára. Hadd tudja meg a kidobófiú, miylen , amikor akasztják a hóhért. Meglepetten tápászkodik fel, de szakmai rutinjának köszönhetően azonnal harcképes lesz.
      </p>
    `,
    help: "H_Brünhilda",
    buttons: [
      {
        txt: "Mi volt ez a kakaóval?!",
      },
    ],
    pass: 178,
    fail: 180,
  },
  {
    num: 175,
    title: "Csongika hazakísérése",
    type: "dungeon",
    pic: "movingtown.gif",
    music: "toymusic",
    desc: "<p>Vidáman sétálgattok Csongikával az utcán.<p>",
    contBtn: "Mentek tovább hazafelé",
    failBtn: {
      txt: "Menjen most már egyedül haza Csongika",
      new: 180,
    },
    passBtn: {
      txt: "Szia Csongika!",
      new: 178,
    },
    passDesc: "<p>Sikerült épségben hazavinned Csongikát.</p>",
    fight: 183,
    end: 7,
    find: ["W_CSÚZLI", "W_CSATABÁRD", "W_BŰZBOMBA", "W_GUMIBOGYÓ", "W_PETÁRDA"],
    findmany: 5,
    help: "H_Csongika",
  },
  {
    num: 176,
    title: "Yendela hercegnő kísérése a Bazizord-rónán át",
    type: "dungeon",
    pic: "yendela,6",
    music: "yendela",
    desc: "<p>Vándoroltok a zord tájon a csodaszép Yendela hercegnővel. A kietlen tájon a halál lehellete érződik. Néha távoli morgás, vonítás üti meg a fületeket, de egyébként fájdalmas csend vesz körül.<p>",
    contBtn: "Mentek tovább",
    failBtn: {
      txt: "Én ezt már unom, menj tovább egyedül!",
      new: 180,
    },
    passBtn: {
      txt: "Na végre!",
      new: 178,
    },
    passDesc:
      "<p>Yendela hercegnő egyszercsak felkiált:</p><p>- Érzem a Csillám-liget illatát! Siessünk, már nincs sok hátra!</p><p>És valóban: egy gyönyörű, csillámló liget, vagy inkább oázis kezd egyre közeledni felétek. Úgy tűnik, utatok a végére ért, épségben elkísérted a hercegnőt.</p>",
    fight: 184,
    end: 20,
    find: [
      "W_CSATABÁRD",
      "W_OSTOR",
      "W_ROZSDÁS BÖKŐ",
      "W_PÁNCÉL",
      "W_LÁNGPALLOS",
      "W_KIS ERŐITAL",
      "W_NAGY ERŐITAL",
      "W_SÁRKÁNYVÉR",
      "W_VARÁZSPOR",
    ],
    findmany: 5,
    help: "H_Yendela hercegnő",
  },
  {
    num: 177,
    title: "A segítségnyújtás után",
    type: "normal",
    music: "basicmusic",
    pic: "starttown.jpg",
    desc: `
      <p class="cond" data-cond=">_sup_50">
       Jó sok ember van még a téren, és mind arról beszélnek, hogy milyen segítőkész vagy. A megszerzett népszerűséget előnyödre is tudnád fordítani, úgy érzed, hősként te is ennél nagyobb tettekre vagy hivatott.
      </p>
      <p class="cond" data-cond="<_sup_51">
       Sajnos nem nagyon sikerült segíteni a népnek. Csalódott vagy ők is, meg egy kicsit te is.
      </p>
      <p>
       Mit teszel?
      </p>
    `,
    obj: ["E_help"],
    buttons: [
      {
        txt: "Pártot alapítasz és indulsz az önkormányzati választáson",
        new: 181,
        cond: ">_sup_100",
      },
      {
        txt: "Szervezel egy bandát, hogy puccsot hajts végre",
        new: 182,
        cond: ">_sup_50",
      },
      {
        txt: "Elbúcsúzol és sétálsz egyet a város utcáin",
        new: 27,
      },
      {
        txt: "Elbúcsúzol és sétálsz egyet a város melletti erdőben",
        new: 55,
      },
    ],
  },
  {
    num: 178,
    title: "Sikeres segítségnyújtás",
    type: "normal",
    music: "midepic",
    pic: "s-welldone.jpg",
    desc: `
      <p>
        <span id="modified"></span> nagyon boldog, hogy segítettél. Hálája jeléül vendégül lát minden jóval. Azt is megígéri, hogy elterjeszti jó híredet az emberek között. Te is boldog vagy, hogy segítettél.
      </p>  
      <p>
       Végül érzékeny búcsút vesztek és elindulsz vissza a főtérre.
      </p>
    `,
    change: [
      {
        id: "ero",
        crease: 5,
        rnd: 7,
      },
      {
        id: "lel",
        crease: 2,
      },
      {
        id: "sup",
        crease: 2,
      },
    ],
    buttons: [
      {
        txt: "Szeretnél még másoknak is segíteni",
        new: 168,
      },
      {
        txt: "Eleget segítettél már",
        new: 177,
      },
    ],
  },
  {
    num: 179,
    title: "Nem sikerült, de megpróbáltad",
    type: "normal",
    music: "slowguitar",
    pic: "s-soso.png",
    desc: `
      <p>
        <span id="modified"></span> kissé csalódott, de azért értékeli, hogy legalább megpróbáltál segíteni. Isztok együtt egy italt, aztán elbúcsúztok.
      </p>  
      <p>
       Elindulsz vissza a főtérre.
      </p>
    `,
    change: [
      {
        id: "ero",
        crease: 2,
        rnd: 3,
      },
      {
        id: "lel",
        crease: 1,
      },
      {
        id: "sup",
        crease: 1,
      },
    ],
    buttons: [
      {
        txt: "Szeretnél még másoknak is segíteni",
        new: 168,
      },
      {
        txt: "Eleget segítettél már",
        new: 177,
      },
    ],
  },
  {
    num: 180,
    title: "Sikertelen segítségnyújtás",
    type: "normal",
    music: "slowguitar",
    pic: "s-bad.png",
    desc: `
      <p>
       <span id="modified"></span> mérges és csalódott, hogy cserben hagytad. Utatok itt elvált és érzed, hogy nem fogja jó híredet kelteni.
      </p>  
      <p>
       Elindulsz vissza a főtérre.
      </p>
    `,
    change: [
      {
        id: "lel",
        crease: -3,
        rnd: 3,
      },
      {
        id: "sup",
        crease: -10,
        rnd: 10,
      },
      {
        id: "hat",
        crease: -1,
      },
    ],
    buttons: [
      {
        txt: "Szeretnél még másoknak segíteni",
        new: 168,
      },
      {
        txt: "Eleget segítettél már",
        new: 177,
      },
    ],
  },
  {
    num: 181,
    title: "A párt alapításának ötlete",
    type: "normal",
    music: "democracy",
    pic: "lelkesnép.gif",
    desc: `
      <p>
        A sok segítséggel nagy népszerűségre tettél szert, és erzed, hogy ennél jóval többet is tehetnél a népért, így bejelented, hogy indulsz az önkormányzati választáson. Tudod, hogy a jelenlegi polgármestert, Bitang Botondot, sokan nem szeretik, mert zsarnokoskodik a népen és a rendőrségből saját maffia-szervezetet hozott létre.
      </p>
      <p>
        Elkezdesz hát rögtönözni egy beszédet, és ígérgetni nekik mindenfélét: ingyen kakasnyalóka, reklámmentes internet, a járványok szétmorzsolása, "Minden háztartásba törpehörcsög, hóbagoly vagy takarító robotnő!" program, az önkormányzat által finanszírozott szuperképesség-fejlesztő tanfolyam valamint az agymosással való végső leszámolás. Perpill ezek jutottak eszedbe, de érzed, hogy ez még csak a kezdet.
      </p>
      `,
    change: [
      {
        id: "hat",
        crease: 5,
        rnd: 5,
      },
    ],
    obj: ["D_választás"],
    buttons: [
      {
        txt: "Na, mit szóltok?",
        new: 65,
      },
    ],
  },
  {
    num: 182,
    title: "A banda alapításának ötlete",
    type: "normal",
    music: "lightaction",
    pic: "lelkesnép.gif",
    desc: `
      <p>
        Úgy érzed, jóval többet is tehetnél a népért és a vezérükké válhatnál. Tudod, hogy a jelenlegi polgármestert, Bitang Botondot, sokan nem szeretik, mert zsarnokoskodik a népen és a rendőrségből saját maffia-szervezetet hozott létre. Felveted a gondolatot, hogy egy másik szervezetet hozol létre, amivel harcolhatnátok Botiék zsarnoksága ellen.
      </p>
      `,
    change: [
      {
        id: "hat",
        crease: 4,
        rnd: 4,
      },
    ],
    obj: ["D_puccs"],
    buttons: [
      {
        txt: "Na, mit szóltok?",
        new: 41,
      },
    ],
  },
  {
    num: 183,
    title: "Megjelent egy cukrosbácsi",
    type: "fight",
    pic: "cukrosbácsi.jpg",
    nmepic: "cukrosbácsi.jpg",
    dungeon: true,
    level: 1,
    desc: `
      <p>
       Egyszercsak odamegy Csongikához egy idegen és különféle édességekkel próbálja elcsábítani. Egyből felismered: ez egy cukros bácsi!
      </p>
    `,
    buttons: [
      {
        txt: "Tirhulj innen, te pedofil!",
      },
    ],
    pass: 175,
    fail: 180,
  },
  {
    num: 184,
    title: "Támadás ért a Bazizord-rónán",
    type: "fight",
    pic: "csontik.JPG",
    nmepic: "csontik.JPG",
    dungeon: true,
    level: 3,
    desc: `
      <p>
       Amint néhány porlepte csontmaradvány mellett haladtok el, a csontok hirtelen megelevenednek, összeforrnak és csontváz-harcosok emelkednek fel, hogy végezzenek veletek.
      </p>
    `,
    buttons: [
      {
        txt: "Megvédem a hercegnőt!",
      },
    ],
    pass: 176,
    fail: 180,
  },

  {
    num: 195,
    title: "Fegyvergyártás betyárral",
    type: "kotyvaszt",
    music: "epicsearch",
    pic: "betyarküche.JPG",
    prodtxt:
      "Batyár felbúg, kattog, majd a végén a következő tárgy jön ki belőle:",
    desc: `
      <p>
       - Na, itt vagyunk a raktárszoba alatt! - kiált lelkesen Frici. - Mielőtt felmegyünk, gyáártsunk le néhány cuccot a megszerzett ásványokból! Egy dolog a fontos: nem muszáj egyszerre az összes ásványt belerakni, mert Betyár mindig csak egy dolgot csinál a kapott összes mennyiségből. Ha tudsz néhány receptet, az megkönnyíti a dolgunkat, de ha nem, akkor is valamit csinál belőlük Betyár. Legfeljebb nem tudjuk semmire használni. De egy klicsit nehéz belegyömöszölni Betyárba a dolgokat, inkább kattints kétszer a GYÁRTÁS gombra, ha először nem csinálna semmit!
      </p>
    `,
    cont: 197,
  },
];

//Fegyveres utcai támadás: jelt adnak, vársz: mesterlövész leszed, nem: harc
//135 Akkor is, ha Gárda nélkül mész Oshinoko házából a térre!
//136-7: "Elrakod a két fegyvert és a maradékot pedig pillanatok alatt szétkapkodja a többi bandatag. (Oshinoko?) Készen álltok a harcra."
//Erdeiék: ha nő, recruit: szerelmes lesz belé, bübszimat, csont nélkül vége másnap; ha férfi vagy fail recruit, próbák, kiállja: join, Bübüszimat csak opció bármely esetben
