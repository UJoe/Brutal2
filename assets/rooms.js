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
    value: "Lélek",
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
        modi: "Hatalom",
      },
      {
        txt: "Elkezded őket ütlegelni",
        new: 11,
        modi: "Erő",
      },
      {
        txt: "Ravaszan ráveszed őket, hogy engedelmeskedjenek",
        new: 11,
        modi: "Ész",
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
       Mindenki az erősödő hangok irányába néz. Nemsokára egy rendőrautó-konvoly közepén megjelenik maga a város polgármestere: Bitang Botond. Megállnak a tér közepén és Bitang Botond állig felfegyverzett testőrei gyűrűjében kiszáll a kocsiból. Először végigmér téged. Neház megállapítani, mit gondol rólad. Aztán így szól:
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
      },
      {
        txt: "Eltaposlak a talpnyalóiddal együtt téged is, te gyáva féreg!",
        new: 20,
      },
      {
        txt: "Indulsz a következő önkormányzati választáson",
        new: 12,
        modi: "- Hmmm, meglátjuk... Sok szerencsét! Szükséged lesz rá - szól kurtál Boti, azzal int a testőreinek és a konvoly szirénázva eltávozik a főtérről. De sejted, hogy nem ennyi lesz a vele való küzdelem.",
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
        <p id="extra"></p>
        <p>
         Ünnepélyes arckifejezéssel a néphez fordulsz:
        </p>
        <p>
         - Én hiszek a demokratikus intézményekben és a választás tisztaságában! Indulok a polgármesteri választásokon közös szebb jövőnk érdekében!
        </p>
        <p>
          Az emberek közül néhányan tapsolnak és helyeselnek, mások szkeptikusan állnak. Hosszú út áll előtted, de talán meg tudod győzni a népet, hogy rád szavazzon, és így törvényes vezetőjükké válhatsz. Ehhez azonban a jelenlegi polgármestert, Bitang Botondt is le kell győznöd.
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
    buttons: [
      {
        txt: "Ígérsz fűt-fát",
        new: 21,
      },
      {
        txt: "Megkérdezed, miben tudnál nekik segíteni",
        new: 100,
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
    obj: ["X_Béna Boldizsár", "M_Oshinoko"],
    desc: `
      <p id="extra"></p>
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
        - Jó lesz így! Szeretnél velem jönni, kedves <span id="name"></span>, hogy megmutassam, hová viszem?
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
        - Szolgálatodra, <span id="name"></span> san! Oshinoko vagyok, a jakuza. Ez pedig Béna Boldizsár volt, Bitang Botond polgármesterünk kémje.
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
    music: "ravewin",
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
        id: "ugy",
        crease: 3,
        rnd: 2,
      },
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
        <p id="extra"></p>
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
    num: 47,
    title: "Bolyongás az utcákon",
    type: "dungeon",
    pic: "darkstreet.jpg",
    music: "darkbackground",
    desc: "<p>Bolyongsz a sötét utcákon, hátha találsz valamit...<p>",
    exit: {
      txt: "Inkább hazamész",
      new: 46,
    },
    fight: 48,
    end: 20,
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
    num: 111,
    title: "Mari néni kertje",
    type: "mine",
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
      <p>
        Addig áshatsz, amennyi erőd van. A kertben összesen <span id="kincs"></span> gyöngy és <span id="akna"></span> bomba van. Ha bombát ásol ki, az ügyességedtől függ, hogy mennyit sebesülsz. Ha üres mezőn ásol, az első szám a szomszédos mezőkön lévő gyöngyök, a második a bombák számát mutatja meg. Próbálj meg minél több gyöngyöt megtalálni!
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
];

//21: Ész próba: hatalom változás
//25: kirabolod, levágod a fejét, megölöd, mész tovább
