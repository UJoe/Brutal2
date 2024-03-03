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
       Besétálsz egészen a főtérig. Ott mindig vannak jó páran, és bármi történik, hamar elterjed a híre.
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
        Az emberek először zavartan néznek rád, de elszánt, kemény arcodból kiolvassák, hogy nem viccelsz. Tanácstalanul néznek egymásra. Nemrég szabadultak meg a technokrata varázsló Battle Beetle zsarnokságától - csak azért, hogy egy újabb despota irányítsa az életüket?
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
        <li>Miről beszél? Az elfogadásról? Jó ember az ilyen, ne bántsátok...</li>
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
       Az emberek elmosolyodnak. Egy középkorú hölgy előrelép és igy szól hozzád:
      </p>
      <p>
       - Nemrég szabadultunk fel neked köszönhetően Battle Beetle zsarnokságától, és nem akarunk ismét egy zsarnok alatt élni. A mostani polgármesterünk olyan, amilyen, de azt tudjuk, hogy te jó ember vagy. Inkább éljünk békésen és segítsük egymást.
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
      <i><p>
        Írd be a megjelenő matematikai műveletek eredményét!
      </p>
      <p>
        Minél gyorsabban válaszolsz, illetve minél több az Eszed és az Ügyességed, annál közelebb kerülsz a csirkefogóhoz. Annyi időd van rá, amennyi az Erődből telik.
      </p></i>
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
       Hosszú perceken át farkasszemet nézel a tömeggel. Ők nem tudják, mi lesz most velük, te meg még nem igazán találtad ki, hogyan vedd át a hatalmat. Amikor végre eszedbe jut valami és szólnál, közeledő szirénázás üti meg a füledet.
      </p>
      <p>
       Mindenki az erősödő hangok irányába néz. Nemsokára egy rendőrautó-konvoly közepén megjelenik maga a város polgármestere: Bitang Botond. Megállnak a tér közepén és Botond állig felfegyverzett testőrei gyűrűjében kiszáll a kocsiból. Először végigmér téged. Nehéz megállapítani, mit gondol rólad. Aztán így szól:
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
				modi: "- Hmmm, meglátjuk... Sok szerencsét! Szükséged lesz rá - szól kurtán Boti, azzal int a testőreinek és a konvoly szirénázva eltávozik a főtérről. De sejted, hogy nem lesz egyszerű a vele való küzdelem.",
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
		obj: ["X_Béna Boldizsár", "E_Boldi kivégzése", "M_Oshinoko", "W_PETÁRDA"],
		desc: `
      <p id="modified"></p>
      <p>
        - Végezzétek ki! - adod ki a kegyetlen parancsot. Megfagy a levegő.
      </p>
      <p>
        Először senki sem mozdul. De aztán előjön a tömegből egy keménykötésű, sebhelyes ázsiai. Meghajol előtted, aztán előránt egy katanát, odaugrik a reszkető, vánszorgó Boldihoz és egy csatakiáltással levágja az orrát. Halkan elmorog egy japán káromkodást, majd újra nekirugaszkodik és ezúttal a fejét vágja le. Boldi teste eldől és a kabátzsebéből kiesik egy petárda.
      </p>
      <p>
        A tömegben többen felszisszennek és elfordítják a fejüket. De néhány keményebb kötésű ember kíváncsian szemléli az eseményeket. Odalépsz és elrakod a petárdát, mert még jól jöhet, majd felemeled Boldi fejét. Két nő elájul. Nem törődsz velük. Ránézel a körülötted állókra és emelt hangon így szólsz hozzájuk:
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
        - Oshinoko vagyok. Régi jakuza-család sarja. Apánk halála után utaztam ide megélhetést keresve.
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
				crease: 1,
				rnd: 4,
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
      <p><i>
        A támadásod, védelmed és sebességed a pontjaidtól, illetve az aktuálisan használt tárgyadtól függ (ha van), amit egy ideig változtathatsz, de csak egy lehet aktív. Az ellenfél saját sebessége szerint támad rád, te pedig rögtön nyomd meg a Támadás gombot, ha tudod. Mindketten vihettek be kritikusabb támadásokat is, ha elég nagy az aktuális támadás és az ellenfél védelme közti különbség.
			</i></p>
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
        - Szolgálatodra: Ügyes Frigyes vagyok, az ezermester. Én elzárom úgy, hogy a kutya sem találja meg ezt a haramiát! - mondja, azzal az ingujjából előhúz egy drótkötelet és azzal pillanatok alatt körbetekeri Boldit. A drót végéből csinál egy foggantyút, a maradékot pedig foggal kettérágja. Mindenki tátott szájjal lesi. Frici ezután nézegeti egy kicsit a riadt Boldit, hümmög párat, majd az egyik zsebéből elővesz fél pár görkorcsolyát, ráerősíti Boldi összekötözött lábaira, aztán kipróbálja, hogy mennyire tudja húzni-vonni Boldit így a foggantyúval. Végül elégedetten csettint egyet.
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
       - Bitang Botondnak vesznie kell! Ő és a bandája már évtizedek óta szívják a város lakóinak vérét. Battle Beetle egy szerencselovag varázsló volt, de Bitang Botond sokkal rosszabb: egy maffiózó. Azóta szerettem volna veled találkozni, hogy végeztél Battle Beetle-lel és a Big Bugokkal. Benned látom azt a tüzet, ami csak az igazi hősökben lobog! Ha összefogunk, legyőzhetjük őt! A kardom téged szolgál.
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
      <p><i>
        A támadásod, védelmed és sebességed a pontjaidtól, illetve az aktuálisan használt tárgyadtól függ (ha van), amit egy ideig változtathatsz, de csak egy lehet aktív. Az ellenfél saját sebessége szerint támad rád, te pedig rögtön nyomd meg a Támadás gombot, ha tudod. Mindketten vihettek be kritikusabb támadásokat is, ha elég nagy az aktuális támadás és az ellenfél védelme közti különbség.
				</i></p>
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
       Boldi összerogyik. A nép hirtelen üdvrigalgásba tör ki, és magával ragad a hangulatuk. Mindenhonnan azt hallod, hogy te vagy a hős, aki az összes ellenségükkel leszámol. Érzed, hogy most fontos döntést kell meghoznod, de a nép melletted áll.
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
		obj: ["X_Béna Boldizsár"],
		buttons: [
			{
				txt: "Közlöd, hogy a következő, akivel leszámolsz, a polgármester lesz",
				new: 32,
			},
			{
				txt: "Bejelented, hogy indulsz a következő önkormányzati választáson",
				new: 12,
				modi: "A mozdulatlan Béna Boldit egy rendszerető öregasszony kidobja egy kukába.",
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
        Valami ősi barbár ösztönnek engedelmeskedve elkezded enni legyőzött ellenfeled, hogy az ereje beléd szálljon. Közben találsz egy kést is a zsebében, azzal még gyorsabban haladsz, mint foggal és körömmel. Valamennyit talán hatott rád a civilizáció, akármilyen brutális a világ.
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
				rnd: 10,
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
        - Oké, legalább elütöd az időt valamivel, amíg én elintézem Boldit - kurjant vidáman Frici és egy dugóhúzóra emlékeztető tárgyat dob ki a kunyhóból. Valami jobbra számítottál, de ha megvizsgálod (feléviszed az egeret), akkor azért látszik, hogy egy kicsit odatesz az ellenfélnek. Ne felejts el rákattintani a harcban, ha használni is akarod!
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
      <p><i>
        A támadásod, védelmed és sebességed a pontjaidtól, illetve az aktuálisan használt tárgyadtól függ (ha van), amit egy ideig változtathatsz, de csak egy lehet aktív. Az ellenfél saját sebessége szerint támad rád, te pedig rögtön nyomd meg a Támadás gombot, ha tudod. Mindketten vihettek be kritikusabb támadásokat is, ha elég nagy az aktuális támadás és az ellenfél védelme közti különbség.
			</i></p>
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
        Azzal meghúz egy kart a traktoron - amiről megtudtad, hogy Betyármobilnak hívják -, mire kinyílik egy csapóajtó az egyik oldalán. Frici megfogja a böszmedvét, belegyömöszöli a keletkezett résbe, aztán rácsukja a csapóajtót. A betyármobil felbőg és nemsokára megnyílik két másik ajtó, az egyiken egy bundakabát, a másikon pedig több aranybarnára sült húspogácsa jön elő és sorakozik fel egy átlátszó csőben. Frici gyengéd szeretettel megpaskolja a járgányt.
      </p>
      <p>
        - Mindig tudja, miből mit lehet hasznosítani. És ez még nem minden! Most figyelj! - kiált büszkén, azzal felpattan a vezetőfülkébe.
      </p>
      <p>
        A Betyármobil ugrik egyet miközben megprödül a tengelye körül. Ezután Frici odavezeti egy fához, nyomkod pár gombot egy ideig, majd a gépből kijön két kar különféle megmunkáló fejekkel, elkezdik dolgozni a fát, repül a fűrészpor szerteszét, majd a végén megjelenik Dávid király faszobra a fa helyén. A fején még maradt is egy kis levél.
      </p>
      <p>
        Frici büszkén mosolyog, neked az állad is leesett és elismerően csettintesz.
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
		pic: "forest1.jpg",
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
		pic: "oshinoko-face.jpg",
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
      - Dédapám vanepuca próbáját. Beállsz shiko-dachiban egy izzó parázs fölé. Fél órán keresztül felváltva ütlek-váglak én, hízeleg az asszonyom és szemtelenkedik veled a gyerekem. Annyi a feladatod, hogy bármi történik, semmi nem billent ki a shiko-dachiból és némán tűrsz mindent. Nagy testi és lelki erő kell, hogy kibírd! Nem először csináljuk ezt. És eddig még nem talált új gazdára a kard. Készen állsz a vanepuca próbára?"
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
        Egész éjjel gyakoroltok. Nemcsak testileg-lelkileg edz meg, hanem megtanítja neked a családja által használt titkos micuki orgyilkos technikát, amivel képes vagy mások számára alig érzékelhető árnyékká válni, miközben a te érzékeid kiélesednek.
      </p>
      <p>
        Már közeledik a hajnal, amikor abbahagyjátok. Oshinok felajánlja, hogy pihenj meg nála, aztán ha felébredsz,  megbeszélitek a további haditervet.
      </p>
      <p>
        Mivel hulla fáradt vagy, megköszönöd a felajánlást. Sakura - akit először géshának néztél, de kiderült, hogy Oshinoko felesége - elkészíti a fekhelyedet, ahol mély, békés álomba szenderülsz...
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
        Belépsz a legközelebbi zajos, füstös kocsmába, ami a "Kutya Veres Kasza" nevet viseli büszkén. A társadalom szélére csúszott büdös, koszos alakok próbálnak - többnyire sikeresen - eljutni itt az öntudatlanság mámoros ködjébe. A sok üres tekintet között néha látsz egy-két fenyegető vagy kíváncsi tekintetet, de értelmet nem sokat. Igen, ez szülővárosod kellemes, otthonos milliője. Mosolyogva mély lélegzetet veszel, hogy minél jobban magadba szívd...
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
				modi: "A ragyás képű, 150 kilós kocsmáros fogatlan szája szélesre húzódik.</p><p>- Hehe! Bodri papát akarod kihajítani a saját kocsmájából? Tetszel nekem, kölyök! Itt a grogod!",
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
				txt: "Egy bögre kakaót kérek.",
				new: 67,
				modi: "A ragyás képű, 150 kilós kocsmáros szemében könnyek jelennek meg, némán bólint, és kikeveri neked a kakaót. Részvéttel átnyújtja, majd megértően a szemedbe néz.</p><p>- Bodri papának mindent elmondhatsz! Ami a Kutya Veres Kaszában történik, az a Kutya Veres Kaszában marad.",
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
				crease: -7,
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
        A hangulat mindenkit magával ragad, mert érzik, hogy rátermett vezetőre találtak benned, aki megdöntheti a zsarnok Boti hatalmát. De kell egy haditerv, hogy biztosabban célt érjetek. Így végül elküldöd a maradék népet és elvonulsz Oshinokoval és a <span class="name"></span> Gárdával megbeszélni a tervet.
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
      <p><i>
        Írd be a megjelenő matematikai műveletek eredményét minél gyorsabban, hogy kijuss, mielőtt elfogy az erőd! A haladás mértéke az eszedtől és ügyességedtől is függ.
			</i></p>
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
        Frici bemegy a kunyhóba és nemsokára előhoz egy aktatáska-szerű tárgyat. Amint kinyitja, az egy asztallá és két székké alakul át. Büszke mosollyal rádkacsint. Aztán térül-fordul párat a kunyhó mélye és az asztal között és némi csalódással nyugtázod, hogy teljesen normális tárgyakkal tér vissza: egy üveg bor két pohárral, két tányér evőeszközökkel, egy kiló kenyér és egy üveg kovászos uborka kerül az asztalra. Végül kiszedi Betyármobilból a még mindig meleg húspogácsákat és szétosztja kettőtök tányérján. Bort is tölt, megkínál uborkával és kenyérrel, majd elkezdtek falatozni. Nem is rossz a böszmedvehús, a fűszerezése is jól el van találva. Tényleg ügyes ez a Betyármobil, minden falat után egyre nagyobb tisztelettel pillantasz rá. Amikor már elmúlt az éhségetek, Frici jelentőségteljesen hátradől, megpödri a bajszát és így szól:
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
				cond: ">_esz_30, E_Boldi elzárása"
			},
		],
	},
	{
		num: 55,
		title: "Bolyongás az erdőben",
		type: "normal",
		music: "forest",
		pic: "forest1.jpg",
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
		find: ["W_CSÚZLI", "W_FÜTYKÖS", "W_ROZSDÁS BÖKŐ", "W_GUMIBOGYÓ", "W_KIS ERŐITAL", "W_PÁLINKÁS FLASKA"],
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
        <li>Vagy mi lenne, ha az utcán ütnénk rajta? Tudom, hogy mindenhova követi a konvoly, de talán mégis egyszerűbb, mint abba az erődbe bejutni.</li>
        <li>Amúgy ez a Boti hol lakik?</li>
        <li>Ezt se tudod, Lüke Aladár? A városházán!</li>
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
        <li>Vagy mi lenne, ha az utcán ütnénk rajta? Tudom, hogy mindenhova követi a konvoly, de talán mégis egyszerűbb, mint abba az erődbe bejutni.</li>
        <li>Amúgy ez a Boti hol lakik?</li>
        <li>Ezt se tudod, Lüke Aladár? A városházán!</li>
        <li>Vagy zsaroljuk meg valamivel, fiúk! Nem jó ötlet?</li>
        <li>Nem emlékszel Szabó Winnetou esetére, Hajtogató Huba? Ő is megzsarolta Botit, már nem emlékszem mivel, de az egész családját kiirtották, a tehenét eladták a cirkusznak, a földjét meg sóval és paprikával szórták fel!</li>
        <li>Ja, én emlékszem, pedig elég agyafúrt volt az a Winnetou.</li>
        <li>Akármit csinálunk, fegyver kell hozzá! Szita Kálmán tud szerezni, ugye, Szita?</li>
        <li>Persze, bármit, ami csak kell!</li>
        <li>Ha van elég fegyverünk, akkor eléggé ütőképes csapat vagyunk! Azt kellene eldönteni, hogy a városházán támadjuk meg vagy az utcán?</li>
        <li>
        Bármelyiket is választjuk, egy dolog fontos - szól végül Oshinoko. Úgy tűnik, a szavának olyan tekintélye van, hogy rögtön mindenki elhallgat és rá szegeződik minden tekintet. - Ha nyíltan támadunk, még fegyverekkel is rosszak az esélyeink. Láttam az embereit, ha könnyen félre lehetne őket állítani, már megtettem volna én is egymagam. Az én javaslatom a következő. Nemsokára indulnak az önkormányzati választások. Sok helyen fog emiatt kampányolni. Egy olyan helyszínen kell rajta ütnünk, ahol nagyobb civil tömeggel érintkezik, de kevésbé védhető a helyszín. El kell vegyülnünk a tömegben annyian, amennyi őrt egyszerre semlegesíteni tudunk. Nem lőfegyverrel, mert azzal könnyen lebukhatunk, hanem hagyományos fegyverekkel, például fúvócsővel. Aztán végezni kell Botival is meg a rendőrfőnökkel, Borbély Bélával is. Hiába nyírjuk ki őt, a Béla vezette álrendőrökkel meggyűlhet a bajunk. De ha Béla feje is hull, akkor még törvényesen is felszámoltathatjuk azt a bűnszervezetet, amit létrehozott.
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
        Remegő lábakkal feltápászkodsz, teszel pár tétova lépést, majd inkább 5 centis lépésekre váltasz és úgy követed Oshinokot a házba. A felesége és gyereke már várnak bent. Mindketten büszke mosollyal meghajolnak előtted. Lassan kezded felfogni te is, hogy tényleg valami emberfeletti dolgot vittél véghez. Oshinoko odalép a kandallóhoz, ami felett egy titkos rekeszt kinyit és kiveszi belőle a valóban mesterien megmunkált katanát. Büszkén morogva forgatja és nézegeti egy ideig, de aztán feléd fordul és meghajolva két kézzel átnyújtja.
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
       Keményen beleállsz a shiko-dachiba. Oshinoko ordítozva elkezd csépelni, de te csak állsz, mint egy szikla. Bár altestednél kezd egyre elviselhetetlenebb lenni a hőség. Aztán jön a felesége mindenféle trükkel elterelve a figyelmedet, győzködve, hogy nem kell ezt a próbát csinálnod, inkább játszatok valami vidámabbat. De te csak a katanára gondolsz és méltóságteljesen átnézel a feje felett. Úgyis tudod, hogy nem gondolja komolyan, csak szerepet játszik. Márcsak azért is, mert egyre furcsább szagod lesz, ahogy pörkölődsz, biztos szánalmas látvány lehetsz. Az utolsó harmadban jön a kölyök. Egy tenyérbemászó képű kis taknyos, aki hihetetlen szemtelenül elhord mindenfélének, csúfolja, hogy hogy állsz, hogy elhányja magát a szagodtól és egyébként is látszik, hogy mindjárt összecsinálod magad, de ha koszos lesz a padló, veled nyalatja fel, és azzal le is köp. Ez az utóbbi gesztus az egyre elviselhetetlenebb elgémberedéssel és az égető érzéssel együtt végleg betett nálad. Mégiscsak te vagy a város hőse, nem kell mindent elviselned egy kardért. A lábad ugyan nem mozog, de a köpés miatt amúgyis közlebb húzódott gyerek pont karnyújtásnyira van tőled, így egy hatalmas pofont keversz le neki. A gyerek edzve lehet ehhez, mert az utolsó pillanatban elhajol, így csak meglegyinted. De ez csak mégjobban felbőszít és - mint Loja, a nagy lajhár harcos, akinek harci technikáját egy 6 órás vágatlan dokumentumfilmben volt szerencsétlenséged megfigyelni - megpróbálod elkapni. De sajnos elmarad a remélt jutalom, mert amint kimozdulsz a shiko-dachiból, Oshinoko rögtön ott terem, elkapja a karod és olyan szigorú tekintettel ordít rád egy japán szótagot, amitől ismét kényelmesebbnek érzed visszamerevedni.
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
        Valaki bedobja rögtön, hogy tartsatok egy alakuló gyűlést nála. El is vonul a lelkes csapat. Útközben több névjavaslat is elhangzik, így amikor megérkeztek és helyet foglaltok egy nagy étkezőasztal körül, első körben a párt nevéről indítotok szavazást. 
      <p><i>
        A javaslatokra kattintva válaszd ki, melyik név tetszik a legjobban!
			</i></p>
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
				{ name: "Magyar", val: -1 },
				{ name: "Globális", val: -2 },
				{ name: "Kozmikus", val: 5 },
				{ name: "Misztikus", val: 4 },
				{ name: "Végtelen", val: 2 },
				{ name: "Titkos", val: 1 },
				{ name: "Becsületes", val: 3 },
			],
			[
				{ name: "Brutalista", val: 5 },
				{ name: "Böszme", val: 4 },
				{ name: "Zöld", val: -5 },
				{ name: "Vörös", val: -4 },
				{ name: "Antidemokratikus", val: -2 },
				{ name: "Kemény", val: 2 },
				{ name: "Hős", val: 4 },
				{ name: "Szelíden Virágzó", val: -5 },
				{ name: "Bitangirtó", val: 5 },
				{ name: "Gyökerű", val: 0 },
				{ name: "Király", val: 1 },
				{ name: "Rendcsináló", val: 3 },
				{ name: "Gitáros", val: 5 },
				{ name: "Tolvaj", val: -3 },
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
       Oshinokora és Sakurára a ház bejáratában ülve találsz rá. Olyan élénken beszélgetnek, hogy észre sem vesznek először. Oshinoko megfontoltan, de keményen beszél, ez nála normális. Sakura szavait nem érted, de aggódónak tűnik, bár ő is próbál kemény maradni. De az egész jelenetből érződik kettőjük szoros, meghitt kapcsolata.
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
				txt: "Meggyőztél. Fontos az egészség, ezért távozom.",
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
       Ahogy közeledsz feléjük, elhallgatnak és növekvő áhitattal követik lépteidet. Megállsz felettük. Egy ideig némán pislogva nézitek egymást, aztán a legidősebbnek tűnő lecsúszott alak - biztos az alfahím - borízű hangon megszólal:
      </p>
      <p>
       - Te vagy á hős, ki legyőszte Bedől... Betlit?
      </p>
      <p>
       - Ha Battle Beetle-re gondolsz, akkor igen - feleled kapásból. Felesleges lenne titkolni. A legkisebb gnóm rögtön kikerekedett szemmel elkiáltja magát, miközben úgy oldalba löki a harmadik tagot, hogy az kilöttyinti a sörét. De láthatóan nem foglalkozik vele.
      </p>
      <p>
        - Hű, Frédi! Asztakutya! Látod, megmontam! Húha, most micsinájunk? Rendeljünk neki a legjob sörbű! BODRIII!!! - Ez utóbbit dobhártyaszaggató hangon ordítja. Először azt hiszed, a kutyája kapta el közben a tökét az asztal alatt, de nem! A pultos rögtön visszaordít neki.
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
       Éjjel, amikor mélyen alszol, Bitang Boti legjobb orgyilkosa belopózik az otthonodba. Nesztelenül az ágyadhoz lép és leszúr. Belédnyilall a fájdalom, de már nem tudsz az elvérzés ellen semmit tenni, így inkább tovább alszol - örökké...
      </p>
      <p>
       Kalandod itt véget ért, de most már tudod, hogy csendben ki kellett volna iktatnod a polgármester besúgóját.
      </p>
    `,
	},
	{
		num: 73,
		title: "Harc Bitang Boti orgyilkosával",
		type: "fight",
		pic: "orvgyilkos.gif",
		nmepic: "orvgyilkos.gif",
		att: 75,
		def: 40,
		speed: 7,
		hp: 50,
		desc: `
      <p>
       Éjjel, amikor mélyen alszol, Bitang Boti legjobb orgyilkosa belopózik az otthonodba. Nesztelenül az ágyad mellé lép, de ekkor valahogy megérzed a jelenlétét. Kinyitod a szemed és a homályban meglátod a vörösen izzó szemű sötét, nőies alakot. Azonnal kiugrasz az ágy másik oldalára. Épp időben, mert a beszűrődő holdfényben megvillan a tőre pengéje, amivel épp lesújtott rád - de már nem talált el.
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
				cond: "J_Erdei Zsolt",
			},
			{
				txt: "A régi fagyigyárba Bogihoz",
				new: 112,
				cond: "E_Bogi kavar",
			},
			{
				txt: "A piacra",
				new: 113,
				cond: "!J_Gárda, !J_Párt, !J_Erdei Zsolt, !J_Oshinoko, !J_Ügyes Frigyes",
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
        A lelkes nép már útközben elkezd különféle szlogeneket ordibálni.
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
        A biztonsági őrök vezetője beszél pár mondatot a gallérmikrofonjába - de nem érted, mert elnyomja az ordító tömeg hangja, majd bólint egyet, mire harci alakzatba rendeződnek az őrök.
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
        - Amíg eljutunk oda, addig is gyűjthetünk a földből pár hasznos anyagot, amiből fegyvereket tud készíteni Betyár. Ásványkicsekben gazdag hely felé építették a Városházát, mindenre gondoltak. A server-szobából nyílik egy vészhelyzeti alagút a biztonsági központba. Ott felmászunk, meglepetésszerűen megjelenünk és kiiktatjuk az őröket, ha vannak. Itt számítok harci képességeidre. Ezután ezen a titkos menekülő-folyosón keresztül tudunk eljutni Boti rezidenciájára. Ott már nem lesz más, csak ő. Ha jól csináljuk, észre sem vesz senki. Miután elintéztük Botit, ugyanitt visszamegyünk Betyárhoz és hazajövünk ünnepelni. Régóta agyalok már ezen a terven, csak eddig még nem találtam olyan útvonalat, ahol nem találkozunk őrökkel. De ezen az útvonalon van a legkevesebb. Csak én egy ezermester-feltaláló vagyok, nem harcos. De ketten meg tudjuk csinálni! Mit szólsz?
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
		title: "A belépőkártya megszerzése",
		type: "normal",
		music: "think1",
		pic: "frici.JPG",
		desc: `
      <p>
       - Dehogy van! Azt egyből visszaveszik, amint lejár a szerződés. De ismernek is arcról az őrök minden ott dolgozót, mert nem sokan járnak oda. Még ha lenne is egy kártyánk, azzal se a főbejáraton kellene bemennünk - mondja Frici. Aztán pár pillanatig hallgattok, majd felkapjátok a fejeteket és egyszerre mondjátok:
      </p>
			<p>
				- Boldi!!!
			</p>
			<p>
				Beléptek a kunyhóba, ami tele van zsúfolva mindenféle furcsa tárggyal. Frici megmotozza a megkötözött, kétségbeesve nyögdécselő Boldit, és nemsokára megtalálja a belépőkártyáját.
			</p>
			<p>
				- Ez az! Ezt most kölcsönvesszük, pajtikám! - mondja vigyorogva, aztán kimentek. - Na, akkor mi legyen? A kártya jól jöhet akkor is, ha beássuk megunkat az épületbe. Vagy marad a kevésbé macerás mesterlövész-támadás.
			</p>
		`,
		obj: ["E_belépőkártya"],
		buttons: [
			{
				txt: "Legyen a beásás! Ha már van kártyánk, szétnéznék bent.",
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
      Amint teszel pár lépést, a lények elkezdenek fura sípoló hangot kiadni. Hirtelen megjelenik melletted egy ismerős alak. Az erdei boxoló! Jaj, ne...! De már késő! Mielőtt bármit tehetnél, egy iszonyat nagyot bemos neked, amitől messze repülsz a fák között... A fejedben még mindig a lények hangja visszhangzik...
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
      A tásaság nagyot koccint a <span class='part'></span> név elfogadására. Már kissé ittas állapotban láttok hozzá a program kidolgozásához. Elhangzanak azok is, amiket már a Fő-téren javasoltál és bedobnak újabb ötleteket is. Végül úgy döntötök, három fő területen fogtok egy-egy programmal kampányolni. Mik legyenek ezek?
      </p>
    `,
		select: [
			[
				{ name: "Ingyen kakasnyalóka", val: 10 },
				{ name: "Szuperképesség-fejlesztő tanfolyam", val: 15 },
				{
					name: "Törpehörcsög, hóbagoly vagy takarító robotnő",
					val: 12,
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
				{ name: "Az agymosással való leszámolás", val: 5 },
				{ name: "Világbéke", val: -15 },
				{ name: "Örök emlék a halottaknak", val: -5 },
			],
			[
				{ name: "Szociális otthon a városházából", val: 10 },
				{ name: "Bitang Botond és emberei lógni fognak", val: 20 },
				{ name: "Gizikének mosómedvét", val: 5 },
				{ name: "Mi a szar legyen még?", val: -15 },
				{ name: "Aggyá mék sört, Menyus!", val: 15 },
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
		title: "Oshinoko haditerve",
		type: "normal",
		music: "oshinoko",
		pic: "oshinoko-face.jpg",
		desc: `
    <p>
      Oshinoko elgondolkodik. Közben Sakura észrevétlenül elvonul.
    <p>
      - Nem lesz könnyű, de megpróbáljuk. Tehát: ma Bitang Botond beszédet mond a Branyiszkó-téren. Ott könnyebb letámadni, mint például a Városháza erődjében. Az emberei a modern fegyvereket könnyen kiszúrják, a legjobb lesz fúvócsővel végezni vele, miután elvegyültünk a tömegben. De számítani kell rá, hogy utána az egész bandája ellenünk fog támadni. Azzal nyerhetünk némi időt, hogy egyszerre öljük meg Botit és a korrupt rendőrfőnököt. A rendőrfőnök gyakran álruhában van, de én jól ismerem, mert már régóta megfigyelem. Én elintézem őt, te pedig intézd el Botit. Viszonylag közel kell menni hozzá, hogy biztos legyen a találat. Utána le fogják zárni a teret és egyenként engednek ki mindenkit. Ha rohannánk, nem jutnánk ki, csak magunkra vonnánk a figyelmet így amint végeztünk velük, ha nem vettek észre, eldobjuk a fúvócsövet és úgy viselkedünk, mint mindenki más a tömegben. Ha viszont észrevesznek, akkor menekülünk és minél több álrendőrt leszedünk. Ha eleget leszedünk, akár be is jelentheted a hatalomátvételt, ezt rád bízom. Téged szeret a nép. De ha sokan maradtak, biztosabb ha egyelőre csak élve kijutunk, aztán meglátjuk a folytatást. Ha Boti és a rendőrfőnők nincs többé, nagy előnyhöz jutunk. Viszont minden fegyveredet itt kell hagynod, ha nem akarod, hogy már az elején lebukjál, csak a fúvócsövet vihetjük.
    </p>
    <p>
      - Jó tervnek tűnik, de sokminden múlik azon, hogy észreveszik-e az elején a fúvócső használatát. Ennek esélyét mivel csökkenthetjük?
    </p>
    <p>
      - Azzal, hogy a fúvőcső így néz ki - mosolyodik el kissé esetlenül Oshinoko, és átnyújt neked egy doboz cigit. Kinyitod, de még mindig csak cigarettaszálakat látsz bennük. Kiveszed az egyiket. Oshinoko elveszi tőled, elővesz egy öngyújtót és a cigi végéhez érinti. Amikor lenyomja az öngyújtó gombját, abból a láng alatt egy kis tüske jön ki, és akkor veszed ászre, hogy a cigi belül üreges, amikor a tüskét egy gyakorlott mozdulattal belejuttatja. - Hagyományos fegyver modern köntösben. Van még időnk, hogy gyakoroljuk a "cigigyújtás" mozdulatát. De vigyázz, mert a tüske tényleg mérgezett, nehogy hozzáérj a végéhez!
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
		music: "gravenight",
		pic: "szenyamuki-face.jpg",
		desc: `
    <p>
      Oshinoko bólint, azzal szó nélkül a ház oldalához megy, ahol megrángat háromszor egy lelógó vezetéket. Pár percig néz a ház falán túl valamit, majd megint bólint és hozzád fordul.
    <p>
      - Szenyamuki vár minket - mondja, aztán vált még pár szót Sakurával, akin látszik, hogy továbbra is aggódik, de próbál erősnek látszani. Végül int neked, hogy induljatok.
    </p>
    <p>
      Kifordultok a falon keresztül, aztán két sarokkal arrébb egy titkos ajtón át egy elhagyatott raktárépületbe értek. Itt egy sötét sarokban van egy alak. Oshinoko mond neki pár mondatot japánul, mire előrelép. A beszűrődő fényben megpillantod az arcát. Hasonlít Oshinokora, de gonoszabb és sötétebb, és egy sebhely is még visszataszítóbbá teszi. Megszólít.
    </p>
    <p>
      - Battle Beetle legyőzője... Ugyan miért kellene azt hinnem, hogy veled együtt le tudnánk győzni Bitang Botondot?
    </p>
    <p>
      - Ha mi hárman összefogunk, mindenkinél erősebbek vagyunk! Miért gondolod, hogy nem?
    </p>
    <p>
      Szenyamuki megvető pillantást vet rád.
    </p>
    <p>
      - A fivérem tud egyetsmást a harc terén, bár nem annyit, mint én. De rólad semmit nem tudok. Ezen pedig csak egyféleképpen segíthetünk - szól, és hirtelen harci állásba vágja magát. Meg kell vele küzdened.
    </p>
    `,
		obj: ["M_Szenyamuki"],
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
        <li>Hmm, ez valóban ambíciózus! Elismerem, hogy ehhez a tervhez kissé hosszú út vezetne a kocsmai kidobófiúi állástól, bármennyire is jónevű a Kutya Veres Kasza. Ha gyorsabban akarsz haladni céljaid felé, javaslom, inkább Bitang Botit távolítsd el az útból. Jelenleg ugyanis övé a polgármesteri pozíció.</li>
        <li>Pontosan ez a tervem!</li>
        <li>Hmmm... Látom a szemeden, hogy nem viccelsz. Sokaknak tele van a tökük vele, jó lenne ha valaki tényleg félre tudná állítani! Ha komolyan gondolod, van is itt valaki, aki tudna ebben neked segíteni.</li>
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
       Hirtelen felcsendül egy ének a kocsma oldalából. Mindenki varázsütésre abbahagy mindent, amit eddig csinált, elhallgat és odanéz. Egy gyönyörű nő áll egy kis színpadon, mikrofonnal a kezében, mellette egy színesbörű fickó fehér frakkban, szintetizátorral. Te sem tudod kivonni magadat a furcsa varázs alól és elkezded hallgatni az éneket.
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
        - Bazibrutál... - szalad ki a szádon kedvenc szavad. Jót röhögnek ezen, és te is elkezdesz velük röhögni. Úgy érzed, nagyon megszeretted ezeket a gnómokat, mintha a legjobb barátaid lennének. El is mondod nekik rögtön, annyira túláradnak az érzelmeid:
      </p>
      <p>
        - Úgy szeretlek titeket! - és ők a füstös homályon át is látják a szemed sarkában megcsillanó örömkönnyeket. Már hajolsz is át az asztalon és a kebledre öleled mindhárom gnómot, akik meghatottan szipognak...
      </p>
      <p>
        Amikor már kezd a derekad sajogni a kissé természetellenes póztól, felegyenesedsz, de rögtön vissza is esel a helyedre. Látod, hogy mindhárom alak könnyekkel küszködik. Talán soha életükben nem ölelte meg őket olyan nagy ember, mint te. Haverkodóan leveszed Pitypang sapkáját és megpaskolod kopaszodó fejét, amitől kislányos zavarba jön. Lesüti a szemét, pislog jobbra-balra, elpirulva pukedlizik egyet, végül a legidősebb társához fordul:
      </p>
      <p>
        - Mátyus! Te mit szósz ehöz?
      </p>
      <p>
        - Mit szóljak, Pitypang? - feleli az, mire bátorítóan meghúzgálod őszülő bajszát és nevetve megfricskázod az orrát. Ez láthatóan jól esik neki, de nem segít azon, hogy szavakba is öntse érzelmeit. Ezért inkább oldalra fordul: - Szóljon Frédi, még meg sem szólalt!
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
		obj: ["J_Kocsmatöltelékek"],
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
		title: "Az orgyilkos legyőzése",
		type: "normal",
		music: "darkbackground",
		pic: "home.jpg",
		desc: `
      <p>
        Sikerül legyőznöd az orgyilkost. Kifújod magad és átkutatod. Találsz nála egy fejlett katonai kést, egy kézigránátot és két flaskát. Ahogy a feje felé hajolsz, egy nagyon halk hangot hallasz a síri csendben. Amikor közelebb hajolsz, észreveszed a nő füle mögé rejtett apró kommunikációs eszközt. A saját füledhez tartod, hogy jobban halld. Valaki azt kérdezi, hogy mi történt, mivel csökkentek az életfunkciói a nőnek. Mit teszel?
      </p>
    `,
		obj: ["W_GYILOK", "W_KÉZIGRÁNÁT", "W_DIABOLIKUS SZTEROID", "W_NAGY ERŐITAL"],
		buttons: [
			{
				txt: "Megpróbálsz a nő hangját utánozva válaszolni, hogy minden rendben, elintézted magad",
				new: 127,
				cond: "nő",
			},
			{
				txt: "A saját hangodon válaszolsz, hogy kinyírtad az orgyilkost és mindenki így jár, aki az utadba áll",
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
        Hiába menekülsz, az orgyilkos azonnal utánad dob egy gránátot és az egész otthonoddal együtt küld át a másvilágra.
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
        Eltöltesz egy órát a neten lévő instant szennyben szörfözve és agyrohasztó, szerencsén alapuló, végtelenített játékokkal játszva. Még csak számodra hasznos híreket sem olvastál, viszont sikeresen leépítetted magad.
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
				txt: "Na jó, valami értelmeset is csinálhatnék...",
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
        Ismét összeültök a megbeszélt időpontban a Garázsban. Lelkesen üdvözlitek egymást. Oshinoko elővesz egy karton cigit. Egy páran rögtön kérnek is tőle, de ő leinti őket, hogy várjanak. Kivesz egy szálat az egyik dobozból, egy másikból egy öngyújtót. A cigit a szájába veszi és az öngyújtót a végéhez közelíti. Abból a fellobbanó láng alatt egy apró tüske csúszik bele az üreges cigibe. Ebben a pillanatban lép be a szobába Döme, a patkány. Aki tényleg patkány. Egy pillanatra megáll és szaglászni kezd, majd villámgyorsan nyargalni kezd a hűtő felé. Oshinoko felé irányítja a cigit, fúj egyet, mire a tüske láthatatlan gyorsasággal belerepül a cigiből Dömébe. Ő összerándul, lép még kettőt, aztán megmerevedik és felfordul.
      </p>
      <p>
        A társaság döbbent némaságban figyeli az eseményeket. Végül Oshinoko töri meg a csendet:
      </p>
      <p>
        - A hagyományos fegyvereket hamar kiszúrnák az őrök, és a tér körül mesterlövészek is vannak. A ciginek álcázott fúvőcsövet viszont nem szúrják ki. Én leszedem a rendőrfőnököt, mert gyakran álruhában van, de én megismerem, <span class="name"></span> sanra bíznám a polgármestert. De nagyon fontos, hogy ha ezzel a kettővel végeztünk és nem vette észre senki, hogy ki fújt rájuk a csőből, akkor viselkedjünk teljesen természetesen, mint a tömeg többi tagja. Ha szerencsénk van, verekedés nélkül megússzuk. De ha mégis lebuknánk, mindenki üsse-vágja a rendőröket, ahogy tudja! Minél jobban elkeveredünk a tömegben, annál kisebb esély van arra, hogy a mesterlövészek leszednek. De még az is lehet, hogy a nép mellénk áll a két főgonosz halálát látván és <span class="name"></span> san bejelentheti, hogy átveszi a hatalmat. Meglátjuk majd, hogy alakul. A lényeg, hogy addig senki ne csináljon semmit, amíg mi ketten nem szedjük le a két főgonoszt. Most pedig megtanítom <span class="name"></span> sannak meg annak, aki még akarja, hogyan kell a legfeltünésmentesebben és leghatásosabban használni a fúvócsövet.
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
				new: 121,
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
        - Nem nagyon használhatták ezt, biztos berozsdásodott! Lökjük be! - mondja, azzal nekiugrotok az ajtónak. Hatalmasat döng, de sikerül kinyitni. A zajra viszont megjelenik a lépcsőn egy füstszagú munkaruhát viselő szemüveges fickó és rátok kiált:
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
				txt: "Móresre tanítod a fickót",
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
				cond: "!E_kampánymédia"
			},
			{
				txt: "Nyilvános beszédeket mondasz te is",
				new: 143,
				cond: "!E_kampánybeszéd"
			},
			{
				txt: "Elkapsz egy hírhedt bűnözőt",
				new: 146,
				cond: "!E_Büdös Berci üldözése"
			},
			{
				txt: "Kincseket bányászol a népnek",
				new: 148,
				cond: "!E_kampánybányászat"
			},
			{
				txt: "Megkeresed az elkóborolt birkáikat",
				new: 150,
				cond: "!E_birkakeresés"
			},
			{
				txt: "Hazakíséred az erdőszélen lakó gyerekeket",
				new: 151,
				cond: "!H_Jancsi és Juliska"
			},
			{
				txt: "Segítesz a városszéli lakóknak legyőzni a hegyi óriásokat",
				new: 208,
				cond: "!H_Városszéli pórnép"
			},
			{
				txt: "Imádkozol a sikerért",
				new: 153,
				cond: "!E_kampányima"
			},
			{
				txt: "Elég volt ennyi, lássuk az eredményeket!",
				new: 201,
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
				modi: "Vársz, de semmi nem történik. Aztán a női alak oldalra néz. Talán mond is valamit, de nem hallod ilyen távolságból. Ekkor hirtelen egy sötét alak ugrik rád oldalról. Ez csapda!!! Meg kell vele küzdened életre-halálra, mert nem tudsz innen elmenekülni sem, mivel ő lát téged, de te nem látod őt!",
			},
			{
				txt: "Üdvözlöd, mert ki más lehetne, mint Bogi",
				new: 160,
			},
			{
				txt: "Letepered",
				new: 159,
				modi: "Gondolod, akár Bogi az, akár nem, mindkét esetben jó, ha letepered. Így elindulsz futva felé. Ahogy közeledsz, a nő hirtelen kinéz oldalra és kiált valamit egy számodra ismeretlen nyelven. A következő pillanatban felbotlasz valamiben, ami egy lábnak tűnik. Csodálkozva fordulsz hátra a földről. Ezek szerint nem kettesben vagytok. Csapda is lehet ez az egész!</p><p>- Csak ne olyan hevesen! Keres probléma? Megtalál! - mordul rád egy mély, rekedt hang erős szláv akcentussal a sötétből, és egy nagydarab fickó körvonalai rajzolódnak ki. Talpra ugrasz, hogy megküzdj vele. Belátod, hogy nem tudsz elmenekülni sem, mert ő lát téged, te viszont nem nagyon látod őt.",
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
		end: 25,
		find: [
			"W_PROTONÁGYÚ",
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
			"W_VARÁZSPOR",
			"W_ROBI",
		],
		findmany: 8,
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
				crease: -15,
				rnd: 15,
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
        Rémülten rohanva próbálod menteni az életedet, miközben a szemed sarkából látod, hogy esnek el körülötted az agyonlőtt emberek. Hirtelen te is éles fájdalmat érzel a bal lapockádban... Majd a jobban... Elsőtétül a világ...
      </p>
      <p>Kalandod itt véget ért.</p>
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
		modi: `- Tudod, hogy van ez - mondod, miközben jelentőségteljesen Frici szemébe nézel, majd végignézel magadon, ismét ránézel és vágsz egy kétértelmű grimaszt. Arra számítasz, hogy Frici, aki oly nagyra van az eszével, nem fogja azt mondani, hogy nem tudja. Frici fürkészően bámul rád egy ideig, aztán - vagy azért, mert tényleg nem akarta azt mondani, hogy nem tudja, vagy azért, mert tényleg olyan okos, hogy veled ellentétben megértette a célzásodat - végül együttérzően bólint:
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
		title:
			"Oshinokoval<span class='cond' data-cond='J_Gárda'> és a <span class='name'></span> Gárdával</span> a Branyiszkó téren",
		type: "normal",
		music: "actionIncrease",
		pic: "kordon.jpg",
		desc: `
      <p id="modified"></p>  
      <p>
       Elindultok a Branyiszkó-tér felé. Oshinoko némán lépdel melletted. Már messziről meglátjátok a tömeget, és azt is, hogy nagy körben körül van zárva és Boti emberei mindenkit ellenőriznek, aki be akar lépni. Úgy látszik, Boti tényleg tart a tömegtől.
      </p>
    `,
		buttons: [
			{
				txt: "Nem baj, akkor is bejutsz",
				new: 135,
				cond: "!S_Micuki",
			},
			{
				txt: "Micuki technikával belopózol a tömegbe",
				new: 186,
				cond: "S_Micuki",
				modi: "A Micuki technikával lopakodó üzemmódra kapcsolsz, és gond nélkül átjutsz az őrökön.",
			},
		],
	},
	{
		num: 122,
		title: "Oshinokonál hagyod a fegyvereidet",
		type: "normal",
		music: "oshinoko",
		pic: "oshinoko-face.jpg",
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
		music: "gravenight",
		pic: "szenyamuki-face.jpg",
		desc: `
    <p>
      Amint előrántod a katanát, Szenyamuki szeme elkerekedik.
    </p>
    <p> - Dédapánk katanája! Hogy került ez hozzád?</p>
    <p> - Te is tudod, hogy csak egyféleképpen kerülhetett hozzá! - szól közbe Oshinoko.</p>
    <p> - Igen, kiálltam a Vanepuca próbát! Még mindig harcolni akarsz ellenem? - mondod keményen.</p>
    <p>
      Szenyamuki pár pillanatig hezitál, aztán flegmán megvonja a vállát.
    </p>
    <p> - Dédapánk szelleme ellen nem harcolok.</p>
    <p>
      Oshinokoval összenéztek. Ő bólint egyet. Már kezded érteni ennyiből is, hogy mit akar közölni: Szenyamuki átállt hozzátok!
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
		nmepic: "szenyamuki-face.jpg",
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
		title: "Az orgyilkos halálának közlése",
		type: "normal",
		music: "darkbackground",
		pic: "home.jpg",
		desc: `
      <p>
        Gondolod, a mikrofon sem lehet messze, így elkiáltod magad:
      </p>
      <p>
        - Hogy mi történt? Kinyírtam ezt az amatőr orgyilkost! Gondolom, a legjobb embered volt. Nyugodtan küldd a többit is, mindenkivel végezni fogok! Így jár az, aki <span id="fullName"></span> útjába kerül!
      </p>
      <p>
        Hallgatózol, de úgy tűnik, a másik oldalon megszakították a beszélgetést. Mindegy, bárki is volt az, ez nem változtat azon, amit egy téged megölni küldött bérgyilkos megbízójának mondanál. De minden bizonnyal Boti embere volt. Ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival.
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
        - Köszönjük. Fizetés a szokásos módon - jön a válasz a kütyüből. Még csak kódolt nyelvet sem használnak, nagyon magabiztosak. De te is örülsz, hogy sikerült őket átverned. Most azt hiszik, halott vagy. Emellett ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival, és magabiztosabbá is tett.
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
        - Hogy mi történt? Kinyírtam ezt az amatőr orgyilkost! Gondolom, a legjobb embered volt. Nyugodtan küldd a többit is, mindenkivel végezni fogok! Így jár az, aki <span id="fullName"></span> útjába kerül!
      </p>
      <p>
        Hallgatózol, de úgy tűnik, a másik oldalon megszakították a beszélgetést. Mindegy, bárki is volt az, ez nem változtat azon, amit egy téged megölni küldött bérgyilkos megbízójának mondanál. De minden bizonnyal Boti embere volt. Ez az éjjeli kaland csak megerősítette benned, hogy tényleg végezni kell Botival.
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
        - Szevasz <span class="name"></span>! Na, készen állsz a nagy akcióra? Betyárt elláttam földalatti ásó szerkókkal, meg ha valami értékes ásványi anyagot talál, abból készít is nekünk valamit. Nagyon szuper lett! A páncélját is megerősítettem, mert kemény földbe is áshatunk. Szerintem alkalmas lesz a feladat elvégzésére. Előtte viszont együnk egyet!
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
        Amikor végeztetek, Frici elpakol, ellenőriz még pár dolgot Hugón, aztán beszálltok a Betyármobilba és elindultok a város felé, ahol Boti ma délután beszédet mond a Branyiszkó-téren.
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
	{
		num: 135,
		type: "Xtrial",
		value: "secu",
		pass: 186,
		fail: 185,
	},
	{
		num: 136,
		title: "A városháza megostromlása a <span class='name'></span> Gárdával",
		type: "finalwar",
		friends: "gárda",
		enemies: "városháza",
		opts: "J_Oshinoko, J_Ügyes Frigyes",
		music: "finalwar",
		pic: "townhall.JPG",
		desc: `
      <p>
        Elrakod a két fegyvert, a maradékot pedig pillanatok alatt szétkapkodja a többi bandatag. Egy óriási csatakiáltással nyugtázzátok megnövelt tűzerőtöket és elindultok a Városháza felé.
      </p>
      <p>
        Amikor elérkeztek a Városháza előtti parkhoz, látjátok, hogy az őrök már vártak titeket és felsorakoztak a túloldalon. Nincs mese, meg kell velük küzdenetek!
      </p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
				A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki, de aki mellette áll, az iszik belőle és visszanyer egy kevés erőt. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy saját döntését az ember a váratlan események ellenére is. Az emberek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      <p>
        Jó szórakozást!
      </p>
      </i>
    `,
		buttons: [
			{
				txt: "Harcra fel, győzni kell",
			},
		],
		pass: 202,
		fail: 203,
	},
	{
		num: 137,
		title: "Mesterlövészek kereszttüzében",
		type: "pursuit",
		level: 10,
		music: "gangwar",
		pic: "sniper.gif",
		goalpic: "exit.png",
		obj: ["X_Gárda"],
		desc: `
      <p>
        Elrakod a két fegyvert, a maradékot pedig pillanatok alatt szétkapkodja a többi bandatag. Egy óriási csatakiáltással nyugtázzátok megnövelt tűzerőtöket és elindultok a Branyiszkó-tér felé.
      </p>
      <p>
        Amint befordultok abba az utcába, amelynek a végén a tér van, hirtelen az egyik gárdista felnyög és összeesik. Mindenki ledöbben. Egy másik azonnal felismeri a helyzetet és elordítja magát.
      </p>
      <p>
        - Mesterlövészek!
      </p>
      <p>
        Nem lehetett nehéz kiszúrniuk a közeledő fegyveres bandát. Felnézel, de az utcát mindenhol magas házak veszik körül, amelyekben bárhol rejtőzhetnek a mesterlövészek. Hiába vagytok felfegyverkezve, könnyű célpontok vagytok. Az embereid egymás után esnek el, a következő akár te is lehetsz. Ennek fele se tréfa. Elordítod magad:
      </p>
    `,
		buttons: [
			{
				txt: "Meneküljünk!",
			},
		],
		pass: 211,
		fail: 115,
	},
	{
		num: 138,
		type: "Xtrial",
		value: "com",
		pass: 140,
		fail: 141,
	},
	{
		num: 139,
		title: "Harc a házmesterrel",
		type: "fight",
		pic: "hazmester.jpg",
		nmepic: "hazmester.jpg",
		att: 40,
		def: 20,
		speed: 4,
		hp: 50,
		desc: `
      <p>
        - Isten nevét hiába ne vedd! - idézed a parancsolatot, és lekeversz a fickónak egy oltári pedagógiai pofont. Az kissé meglepődik, de ez kevés ahhoz, hogy elszálljon a haragja. Sőt, az inkább növekedni látszik.
      </p>
      <p>
        - Ti valami szektások vagytok?! Hát én meg a házmester és nem kérünk ebből a hitből! Takarodjatok innen!
      </p>
      <p>
        - Felőlem lehetsz a császár is, akkor is feletted áll a valódi Úr, akit tisztelned kell, te pökhendi pogány! - vágsz vissza.
      </p>
      <p>
        - Ebben a házban senki nem áll felettem! - feleli tajtékzó öntudatossággal. Fricire nézel. Láthatóan tetszik neki a műsor, mert vigyorog, mint a tejbetök.
      </p>
      <p>
        - Verj bele némi alázatot, hogy helyreálljon az értékrendje!
      </p>
    `,
		buttons: [
			{
				txt: "Rendben, Frici! Én is úgy látom, a szép szó itt nem használ.",
			},
		],
		pass: 206,
		fail: 207,
	},
	{
		num: 140,
		title: "A házmester visszamegy",
		type: "normal",
		music: "basicfun",
		pic: "hazmester.jpg",
		desc: `
      <p>
        - Az önkormányzattól jöttünk az Közösségi Ajándék Karbantartás Akció, röviden KAKA keretében - mondod vidáman hirtelen. - Egyelőre a beszorult tetőajtót javítottuk meg. Meglepetésnek akartuk szánni, de ha már Ön így rajtakapott minket, megmondhatja, mit kellene még megjavítanunk.
      </p>
      <p>
        A mogorva házmester egy ideig néz, de aztán győz benne az ingyenes karbantartás hasznának értéke.
      </p>
      <p>
        - Hát, éppenséggel, ha már a kakát emlegette... a szennyvízelvezetésünk akadozik, valami dugulás lehet a csőben.
      </p>
      <p>
        - Ne aggódjon, a kollégám semmi perc alatt megoldja! - kurjantasz vidáman és biztatóan hátbaveregeted Fricit. Ő egy ezredmásodperce dühösen megvillantja feléd a szemét, mégiscsak szennyvízről van szó, de aztán belátja, hogy a szerep végigjátszása a legbiztosabb módja annak, hogy ne bukjatok le. Lementek a házmester után a pincébe, ahonnan egy aknatető vezet le a ház vízhálózatának csöveihez. A házmester kinyitja és lemásztok egymás után. Frici a fülét az egyik csőhöz tapasztja, megkopogtatja, aztán egy torz fintorral nyugtázza, hogy tényleg valami baj van. Mászkál egy ideig ide-oda, tekerget különféle elzárókat, majd megáll és fülel egy ideig. A néma csendben halljátok, hogy az egyik lakó fent elordítja magát: "Miért nem jön már megint víz ebből a durva csapból?!" Frici elégedetten bólint és kinyit egy nyílást annak a csőnek az oldalán, amit legelőször meghallgatott. Abból egy kevés koszos víz folyik a padlóra egy nagy adag orrfacsaró bűz kíséretében. Frici ekkor elővesz egy furcsa szerszámot, aminek állítható fejei és karjai vannak és belenyúl vele a csőbe. Pár percig turkál benne dühösen grimaszolva, majd kihúzza a szerszámot, aminek a végén egy döglött papagáj van.
      </p>
      <p>
        - Valamelyik lehúzta a budin a papagáját! - vonja le bosszúsan a következtetést, majd a házmester felé nyújtja a tetemet. - Van még valami gond?! 
      </p>
      <p>
        - Nem, nem, teljesen rendben vagyunk, köszönöm szépen! - mondja a házmester. Frici elégedetten visszazárja a nyílást, tekerget még egyet a rendszeren, majd mindhárman felmentek. Frici kidobja a kommunális kukába a papagájt, te pedig vidáman kezet nyújtasz a polgármesternek.
      </p>
      <p>
        - Örömmel segítettünk! Reméljük, Bitang Botondra fognak szavazni a lakók!
      </p>
      <p>
        A házmester megígéri, hogy így lesz és visszamegy a lakásába. Amikor végre kettesben maradtok, Frici halkan hozzád fordul:
      </p>
      <p>
        - Rendben, hogy ne keltsünk feltűnést, de muszáj volt ezt a szavazós nyalizást a végére raknod?
      </p>
      <p>
        - Így tökéletes az alibink! Amúgy sincs jelentősége, mert mindjárt meghal a polgármester, nem?
      </p>
      <p>
        - De... Na jó, muszáj visszamennünk, mert ennek a háznak a tetejéről van a legjobb rálátás a térre azok közül az épületek közül, amit Boti mesterlövészei valószínűleg már nem figyelnek.
      </p>
      <p>
        - Rendben, osonjunk vissza halkan! - szólsz végül.
      </p>
    `,
		change: [
			{
				id: "lel",
				crease: 3,
				rnd: 2,
			},
			{
				id: "esz",
				crease: 3,
			},
		],
		buttons: [
			{
				txt: "Visszalópództok a tetőre",
				new: 206,
			},
		],
	},
	{
		num: 141,
		title: "A házmester nem tágít",
		type: "normal",
		music: "basicfun",
		pic: "hazmester.jpg",
		desc: `
      <p>
        - Mi csak cigizni szerettünk volna a tetőn. Tudja, hogy van ez - mondod ártatlan képpel a füstszagú fickónak.
      </p>
      <p>
        - Mit kellene tudnom ezen? Én se megyek fel a tetőre, ha bagzani akarok, erre van az erkély!
      </p>
      <p>
        Erre gondolhattál volna, mivel nem úgy tűnt az ajtó, mint ami napi használatban van. Vetsz egy oldalpillantást Fricire, de ő is rosszallóan csóválja a fejét. Ismét a házmester szólal meg reszelős hangján.
      </p>
      <p>
        - Mi az istenre vártok még?! Húzzatok innen vagy hívom a rendőrséget!
      </p>
    `,
		change: [
			{
				id: "esz",
				crease: -3,
				rnd: 2,
			},
		],
		buttons: [
			{
				txt: "Nana!",
				new: 139,
			},
		],
	},
	{
		num: 142,
		title: "A <span class='part'></span> programja meghódítja a médiát",
		type: "normal",
		music: "democracy",
		pic: "ecampaign.png",
		desc: `
      <p>
        Összedobtok egy jó propagandaanyagot a <span class='part'></span> programjáról és elárasztjátok vele az internetes reklámfelületeket és az egész médiát. Ez a fent átfutó értékkel növelte tovább a támogatásotokat. 
      </p>
      <p>
        De vajon elég lesz-e ez, hogy megnyerjétek az önkormányzati választást és átvehesd az uralmat a város felett?
      </p>
      `,
		Xchange: "kampány",
		obj: ["E_kampánymédia"],
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 143,
		type: "Xtrial",
		value: "recruit",
		pass: 144,
		fail: 145,
	},
	{
		num: 144,
		title: "Sikeres politikai beszédeket tartasz",
		type: "normal",
		music: "democracy",
		pic: "speaker.png",
		desc: `
      <p>
        A következő napokban több helyen is tartasz sikeres beszédeket, amivel nagyban növelni tudtad a <span class='part'></span> szavazótáborát.
      </p>
      <p>
        De vajon elég lesz-e ez, hogy megnyerjétek az önkormányzati választást és átvehesd az uralmat a város felett?
      </p>
      `,
		change: [
			{
				id: "esz",
				crease: 3,
				rnd: 2,
			},
			{
				id: "hat",
				crease: 3,
				rnd: 2,
			},
			{
				id: "sup",
				crease: 30,
				rnd: 40,
			},
		],
		Xchange: "kampány",
		obj: ["E_kampánybeszéd"],
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 145,
		title: "Politikai ellenfeled hatásosabb beszédeket tartott",
		type: "normal",
		music: "democracy",
		pic: "speaker.png",
		desc: `
      <p>
        A következő napokban te és Bitang Botond is több helyen tart kampánybeszédeket. Boti beszédeire azonban sokkal többen mennek el, mint a tiédre, úgy tűnik, a népet hatásosabban maga mellé tudta állítani. 
      </p>
      `,
		change: [
			{
				id: "esz",
				crease: -1,
			},
			{
				id: "hat",
				crease: -5,
				rnd: 5,
			},
			{
				id: "sup",
				crease: -15,
				rnd: 20,
			},
		],
		obj: ["E_kampánybeszéd"],
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 146,
		title: "Büdös Berci üldözése",
		type: "pursuit",
		level: 10,
		music: "longmixed",
		pic: "runner.gif",
		goalpic: "berci.jpg",
		desc: `
      <p>
        Némi kutatás és tanakodás után úgy látjátok, hogy Büdös Berci az a bűnöző, akitől a nép leginkább meg akar szabadulni. Szinte mindenkit zaklatott már: átveri a nyugdíjasokat, molesztálja a gyerekeket, játékgépeket hackel meg, elcsábítja és kirabolja a nőket, megöli a férfiakat, kínozza az állatokat és még adót sem fizet. Csak az a baj, hogy nagyon nehéz a nyomára akadni, így még az se biztos, hogy mindezeket ő követte el. De büdösnek büdös, úgyhogy mindenki örülne, ha végre valaki eltemetné.
      </p>
      <p>
        Hozzálátsz a nyomozáshoz. Vajon vagy-e elég eszes, ügyes és kitartó, hogy a nyomára akadj? Elvezet-e hozzá a szimatod?
      </p>
    `,
		buttons: [
			{
				txt: "Ki érezte utoljára szagát és hol?",
			},
		],
		pass: 147,
		fail: 200,
	},
	{
		num: 147,
		title: "Harc Büdös Bercivel",
		type: "fight",
		pic: "dualfight_real.gif",
		nmepic: "berci.jpg",
		att: 90,
		def: 45,
		speed: 7,
		hp: 80,
		desc: `
      <p>
        Nyomozásod gyümölcse beérett. Sikerült eljutni Berci rejtekhelyére. Vársz rá egy ideig, aztán amikor hazajön, elébe toppansz.
      </p>
      <p>
        - Most véged van! - kiáltasz rá vészjóslóan, de rögtön meg is szédülsz, mert az enyészet bűzhödt lehellete lengi körül Bercit. - Te tényleg egy szar ember vagy! - állapítod meg elfúló hangon és friss levegő után kapkodsz - hiába. Kétségbeesésed egyre nő, ahogy érzed, hogy kezdesz elgyengülni és a szemedet is könnyek öntik el...
      </p>
      <p>
        Berci látja, hogy szuperképessége, a szaga most is a segítségére sietett. Nem számolt azonban azzal, hogy egy nála nagyobb ősi erő, a szél ezúttal téged támogat ebben az eposzi párbajban. Hirtelen fordul a szél és Berci felé kezd fújni. Nagyot szívsz a friss fuvallatból, a fejed és a látásod ismét kitisztul, és érzed az oxigén szétáradó erejét a tagjaidban.
      </p>
    `,
		modi: "Berci összeroskad és nem mozdul többet. Csak erre vártál! Szólsz a telefonon a <span class='part'></span> második emberének, hogy a küldetésed sikeresen teljesítve van.</p><p>Egy percet sem kell várni és már jönnek is a lelkes párttagok kamerákkal és felveszik, ahogy Bercit berakjátok egy zsákba és elássátok mélyen a földbe. Közben egyre nő körülöttetek a tömeg, embereid lelkesen dicsérnek téged, te pedig szerényen mosolyogva mondod, hogy kötelességednek tekinted elbánni mindenkivel, aki zavarja a város békéjét és fejlődését. A nép a bűz megszünésével párhuzamosan egyre lelkesebben gratulál neked és éltet téged és pártodat!",
		obj: ["E_Büdös Berci üldözése"],
		buttons: [
			{
				txt: "Ütött az órád, te görény!",
			},
		],
		pass: 198,
		fail: 200,
	},
	{
		num: 148,
		title: "Kincskeresés Gizikével",
		type: "dig",
		size: 9,
		level: 5,
		helper: "Gizike",
		gems: ["Üzemanyag", "Agyag", "Vasérc", "Kőolaj"],
		music: "epicsearch",
		pic: "cave.gif",
		desc: `
      <p>
        Gizike, a <span class="part"></span> titkárnője dobja be az ötletet, hogy a nagybátyjának van egy alagútásó gépe, amivel szokott a Kincses-bányában ásni. Ezt akár ti is megtehetnétek, felajánlva a népnek a kibányászott nemesfémeket.
      </p>
      <p>
        Jó ötletnek tartod, így rögvest elindultok a Kincses-bánya felé, ahol Tódor úrfi - Gizikének a koszos képével együtt is békés méltóságot árasztó nagybátyja - gyorsan elmagyarázza, mi vár rátok lent - mivel Gizike annyira lelkes, hogy ő akar veled menni a föld gyomrába. A hegy széléről kell eljutnotok a közepéig, de bármerre mehettek, az a lényeg, hogy minél több és értékesebb ásványkincseket gyűjtsetek. Minél világosabb földben haladtok, annál kevesebb energiába kerül az ásás, de a sötétebb földek több és értékesebb ásványkincset rejtenek. Egyedül a kék sziklás talajjal nem tud a gép megbirkózni, azt ki kell kerülnötök. Figyeld folyamatosan az üzemanyag-szintet, mert ha nem éritek el a hegy közepén lévő teherliftet, akkor nem tudjátok felhozni a begyűjtött ásványokat. Jó szerencsét a bányásznak!
      </p>
    `,
		buttons: [
			{
				txt: "Köszönjük, Tódor úrfi! Gyere, Gizikém!",
			},
		],
		obj: ["E_kampánybányászat"],
		pass: 149,
		fail: 200,
	},
	{
		num: 149,
		title: "Kincsadományozás",
		type: "normal",
		music: "country",
		pic: "gold.gif",
		desc: `
      <p>
       A talált kincseket szétszórod a nép között, ami a fent jelzett értékkel növelte a <span class="part"></span> támogatottságát. Úgy érzitek, jó úton haladtok.
      </p>
		`,
		Xchange: "treasure",
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 150,
		title: "Nyájkeresés",
		type: "mine",
		size: 9,
		akna: 5,
		kincs: 15,
		music: "happyFutyi",
		pic: "yendela3.jpg",
		treasure: "bari.jpg",
		desc: `
      <p>
        Több juhász - köztük a híres Vidróczki Márton is - jelezte, hogy amikor Battle Beetle elvarázsolta a várost, a birkáik megkergültek és széjjel rohantak. Azóta sem sikerült őket összeszedni. Széles a mező, ahol keresni kell őket, és sajnos van a talajban néhány, még a második világháború idején elásott akna is, úgyhogy óvatosan keresgélj. De nagyon bíznak benned! Nagy a terep, de te vidáman, fütyörészve fogsz neki a keresésnek.
      </p>
      <p><i>
        Addig keresgélj, amennyi erőd van. A területen összesen <span id="kincs"></span> kincset érő bárány és <span id="akna"></span> akna van. Ha aknára lépsz, az ügyességedtől függ, hogy mennyit sebesülsz. Ha üres mezőn keresel, az első szám a szomszédos mezőkön lévő bárányok, a második az aknák számát mutatja meg. Próbálj meg minél több bárányt megtalálni!
      </p></i>
    `,
		buttons: [
			{
				txt: "Hol vagytok, barikák?",
			},
		],
		obj: ["E_birkakeresés"],
		modi: "Sikerült az összes csörgő-morgó elcsatangolt birkát összeterelned. Boldogan adod át a gazdáiknak, Vidróczki is boldogan pödri meg a bajszát és elismerésképpen átnyújt egy míves markolatú mordályt. Megígéri azt is, hogy az általa ellenőrzött területen mindenki rád fog szavazni.",
		pass: 198,
		med: 199,
		fail: 200,
	},
	{
		num: 151,
		title: "Jancsi és Juliska hazakísérése",
		type: "dungeon",
		pic: "forest,5",
		music: "forest",
		desc: "<p>Kíséred Jancsit és Juliskát az iskola után a város melletti erdő veszélyesebb részén át.<p>",
		contBtn: "Gyertek tovább!",
		failBtn: {
			txt: "Innen már egyedül is hazataláltok!",
			new: 200,
		},
		passBtn: {
			txt: "Jónapot kivánok! Épségben hazahoztam a gyerekeket.",
			new: 198,
		},
		modi: `Nagyon örülnek a szülők! Bár nem túl gazdagok, megvendégelnek mindenféle finom és tápláló étellel, itallal, és megígérik, hogy a róluk szóló mese innentől úgy fog véget érni, hogy "Boldogan éltek, amíg a <span id ='fullName'></span> mellé tették az X-et a szavazócédulán".`,
		passDesc:
			"<p>Hosszas vándorlás után végül kiértek az erdőből. A gyerekek szülei már vártak rátok. Jancsi és Juliska örömmel rohannak feléjük.</p>",
		fight: 152,
		end: 22,
		find: [
			"W_PROTONÁGYÚ",
			"W_CSATABÁRD",
			"W_OSTOR",
			"W_ROZSDÁS BÖKŐ",
			"W_VADÁSZPUSKA",
			"W_PÁNCÉL",
			"W_ROBI",
			"W_FÜTYKÖS",
			"W_SÁRKÁNYVÉR",
			"W_KONYHAKÉS",
			"W_GUMIBOGYÓ",
			"W_KIS ERŐITAL",
			"W_VARÁZSPOR",
			"W_PÁLINKÁS FLASKA",
		],
		findmany: 10,
		obj: "H_Jancsi és Juliska"
	},
	{
		num: 152,
		title: "Támad a vasorrú bába",
		type: "fight",
		pic: "banya.jpg",
		nmepic: "banya.jpg",
		dungeon: true,
		level: 4,
		desc: `
      <p>
       Megjelenik egy fa mögül egy vasorrű bába, és elkezdi mézeskaláccsal csalogatni a gyerekeket. Közbe kell lépned!
      </p>
    `,
		buttons: [
			{
				txt: "Mikor tűnsz már el, vén szipirtyó?!",
			},
		],
		pass: 151,
		fail: 200,
	},
	{
		num: 153,
		type: "Xtrial",
		value: "ima",
		pass: 154,
		fail: 155,
	},
	{
		num: 154,
		title: "A hited növelte a támogatást",
		type: "normal",
		music: "heaven",
		pic: "godsmile.PNG",
		desc: `
			<p>
				Addig imádkozol, amíg nem tölti el a lelked Isten békeje. Tudod, hogy Isten segíteni fogja a <span class="part"></span> jövőjét, és bármi történjen, az jó lesz nektek és a polgároknak. 
			</p>
		`,
		change: [
			{
				id: "sup",
				crease: 250,
				rnd: 250,
			},
			{
				id: "hat",
				crease: 5,
				rnd: 5,
			},
			{
				id: "lel",
				crease: 10,
				rnd: 5,
			},
		],
		obj: ["E_kampányima"],
		buttons: [
			{
				txt: "Azért teszel is még valamit a népért.",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 155,
		title: "Nem tudsz hinni a sikerben",
		type: "normal",
		music: "sad",
		pic: "godnosmile.PNG",
		desc: `
			<p>
				Úgy teszel, mintha imádkoznál, de valójában nem hiszed, hogy bármi haszna van annak, amit csinálsz. A szíved mélyén erős kételyeid vannak azzal kapcsolatban, hogy a <span class="part"></span> hatalomra jut-e és ha igen, akkor ennek lesz-e bármi haszna. Hiába mondasz kívül mást, legbelül valójában azt szeretnéd, ha elbuknátok a választást.
			</p>
		`,
		change: [
			{
				id: "sup",
				crease: -250,
				rnd: 250,
			},
			{
				id: "hat",
				crease: -5,
				rnd: 5,
			},
			{
				id: "lel",
				crease: -10,
				rnd: 5,
			},
		],
		obj: ["E_kampányima"],
		buttons: [
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 156,
		title: "Ismét Erdei Zsoltéknál",
		type: "normal",
		music: "forest",
		pic: "erdei.jpg",
		desc: `
			<p>
				Az ismerős apró jelekre <span class="cond" data-cond="S_Bübüszimat">és Bübüszimatodra </span>támaszkodva sikerül visszajutnod a rejtőzködő életmódot folytató bübükhöz és Erdei Zsolthoz.
			</p>
			<p>
				Zsolt már várt rád. Mosolyogva üdvözöl.
			</p>
			<p>
				- Felkészítettem a bübüket a harcra. Itt az ideje, hogy elmossuk Bitang Botond uralmát és egyesítsük az erdőt a várossal!
			</p>
			<p>Ennyit mond. Ebből megérted, hogy valóban a tettek ideje jött el.</p>
		`,
		buttons: [
			{
				txt: "Induljunk!",
				new: 214,
				cond: "!E_love Zsolt",
			},
			{
				txt: "Induljunk!",
				new: 213,
				cond: "E_love Zsolt",
			},
		],
	},
	{
		num: 157,
		title: "Erdeiék keresése",
		type: "pursuit",
		level: 6,
		music: "forest",
		pic: "forest,5",
		goalpic: "erdei.jpg",
		desc: `
      <p>
        Megpróbálod emlékezetedre és az apró jelekre támaszkodva ismét megtalálni Erdei Zsoltot és a bübüket. Nem könnyű, mert eléggé jól rejtőzködnek.
      </p>
    `,
		buttons: [
			{
				txt: "Nem baj, gondolkodjunk!",
			},
		],
		pass: 156,
		fail: 158,
	},
	{
		num: 158,
		title: "Sikertelen keresés",
		type: "normal",
		music: "forest",
		pic: "forest,5",
		desc: `
			<p>
				Hiába minden igyekezeted, nem sikerül visszatalálnod Erdeiékhez. Végül már eleged van a bolyongásból és inkább hazamész...
			</p>
			<p>
				Mikor otthon végre kifújod magad, szétnézel. Úgy látod, nem ártana venni pár dolgot.
			</p>
			`,
		change: [
			{
				id: "ero",
				crease: -5,
				rnd: 2,
			},
			{
				id: "lel",
				crease: -3,
				rnd: 1,
			},
		],
		buttons: [
			{
				txt: "Irány a piac!",
				new: 113,
			},
		],
	},
	{
		num: 159,
		title: "Letámadnak a fagyigyárban",
		type: "fight",
		pic: "sötétalak.jpg",
		nmepic: "mugger.jpg",
		att: 90,
		def: 20,
		speed: 3,
		hp: 90,
		desc: `
      <p id="modified"></p> 
		`,
		buttons: [
			{
				txt: "Rohadj meg!",
			},
		],
		death: true,
		pass: 161,
	},
	{
		num: 160,
		title: "Bogi háttere",
		type: "normal",
		music: "gravenight",
		pic: "darkbogi-face.jpg",
		desc: `
      <p>
        - Te vagy az, Bogi? - kérdezed és teszel néhány lépést felé. Ő egy kicsit arrébb lép, így félig ráesik a fény az arcára. Nem vagy benne biztos, de talán ő az. Még közelebb mész. Amikor egész közel vagy, már biztos vagy benne, hogy ő az. Halkan megszólít:
      </p>
      <p>
        - Nincs sok időnk, <span class="name"></span>, így gyors leszek. Boti titkos szeretője vagyok! <span class="cond" data-cond="E_love Bogi">- láthatóan gyorsan akarta ezt kimondani, de erős érzelmek dúlnak benne. Te is meglepődsz és haragot érzel. - </span>De utálom őt! Egy undorító féreg! De nem tudok tőle szabadulni, mert mindenütt ott vannak az emberei - itt tart egy kis szünetet, fürkészően nézve szavai hatását. Érzed, hogy csak egyféleképpen tudsz válaszolni...
      <p>
			<p>
				- Megszabadítalak tőle! - Bogi arcán megkönnyebbült mosoly suhan át. - De úgy emlékszem, tegnap azt mondtad, hogy segítesz nekem.
			</p>
			<p>
				- Így van! - suttogja és közelebb lép hozzád. Már szólásra nyílik az ajka, de hirtelen nesz hallatszik oldalról és mindketten odafordultok. A sötétben nem látszik semmi. Bogira nézel, de nem tudod biztosan megállapítani az arcáról, hogy mi történik. Valaki viszont megragadja a vállad.
			</p>
      `,
		buttons: [
			{
				txt: "Mi a szösz?!",
				new: 159,
				modi: "- Elég beszélget! - mordul rád egy mély, rekedt hang erős szláv akcentussal. Ahogy megpördülsz, egy nagydarab fickó körvonalai bontakoznak ki a sötétségben. Lehet, hogy az egész csapda volt? Mindenestre meg kell vele küzdened, ráadásul a számodra ismeretlen terepen el sem tudsz előle menekülni, mert láthatóan ő jól lát téged, te viszont nem nagyon látod őt!",
			},
		],
	},
	{
		num: 161,
		title: "Bogi vallatása",
		type: "normal",
		music: "gravenight",
		pic: "darkbogi-face.jpg",
		desc: `
				<p>
					Miután sikerült legyűrnöd a támadót, gyorsan magadhoz veszed a nála levő tárgyakat, majd Bogihoz ugrasz és megragadod.
				</p>
				<p>
					- Mi volt ez? És ki volt ez?!
				<p>
				<p>
					Bogi annyira reszket, hogy önkénelenül is engedsz a szorításon. 
				</p>
				<p>
					- Ne haragudj! Azt hittem, titokban ide tudok jönni, de ezeket nem lehet lerázni. Barom Borisz, Boti embere, követett, elkapott és kényszerített, hogy mondjam el, hova jövök. Mondtam, hogy csak fagyizni, de tudta, hogy a fagyigyár már nem működik és innentől gyanús lett neki a dolog. Rájött, hogy valakivel találkozni akarok. Mivel kíváncsi volt, hogy kivel, mondta, hogy jöjjek tovább. Ezután szerintem felismert téged és valamiért meg akart ölni. 
				</p>
				<p>
					Elgondolkodsz. Sok barom akart már megölni téged, ez igaz, és valószínűleg Boti is meghallhatta már, hogy a vezetői székére pályázol. De mi van akkor, ha Bogi mégsem mond igazat? Ha direkt ő hozta el Boriszt, hogy végezzen veled és ez az egész csak csapda volt? Ha mégis teljesen Boti embere Bogi? Végülis, neki is B-vel kezdődik a neve... Bár a vezetéknevét nem tudod... Ez egy őrület!
				</p>
				<p class="cond" data-cond="E_love Bogi">
				 Bogi mintha olvasna a gondolataidban, könnyes szemmel elkezd neked könyörögni: 
				</p>
				<p class="cond" data-cond="E_love Bogi">
				 - Tudom, hogy most azt hiszed, mi van, ha az egész csak egy csapda volt és Boti embere vagyok én is. Elárulom neked azt, amit senki sem tud: valójában Wakana Ootaki vagyok, a Kalafina együttes egykori énekesnője, a Bogi csak felvett név - azzal elővesz egy kendőt és elkezdi törölni az arcáról a sminket. Még ebben a félhomályban is látod, milyen döbbenetes változáson megy át. Tényleg Wakana az, gyerekkorod kedvence! Könnyes szemmel, szenvedélyesen folytatja: - Ezt senki nem tudja! A neoszamurájok lázadása után menekültem ide, és mivel nehéz volt új életet kezdeni, örültem, amikor felkarolt Bodri papa, majd Boti. Bodri papa rendes fickó, teljesen korrekt üzleti kapcsolatunk van, de Boti fertelmes! Szabadulni akarok tőle! És... és szeretlek! Téged szeretlek, tiszta szívemből, amióta csak megláttalak! Kérlek, higgyél nekem és ments meg!
				</p>
				`,
		obj: ["W_PÁLINKÁS FLASKA", "W_NAGY ERŐITAL", "W_KÉZIGRÁNÁT", "W_GYILOK"],
		buttons: [
			{
				txt: "Hiszel neki",
				new: 216,
			},
			{
				txt: "Nem hiszel neki",
				new: 217,
			},
		],
	},
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
		num: 163,
		type: "Xtrial",
		value: "piacután",
		fail: 218,
		pass: 219,
	},
	{
		num: 164,
		type: "Ytrial",
		value: "nő",
		pass: 165,
		fail: 167,
	},
	{
		num: 165,
		type: "Xtrial",
		value: "love",
		pass: 166,
		fail: 167,
	},
	{
		num: 166,
		title: "Zsolt beléd zúg",
		type: "normal",
		music: "love",
		pic: "erdei.jpg",
		desc: `
      <p>
       Felismered, hogy az az erdei boxoló a manók vezére, akivel akkor találkoztál, amikor a Brutal Ballt kerested az erdőben! Most viszont egyáltalán nincs bunyós kedvében. Sőt! Amint meglát, rögtön felpattan a farönkről, ahol eddig ült, és nagyra nyílt szemmel és szájjal mosolyogva eléd siet. Félreérthetetlenül látod, hogy  első látásra beléd szeretett.
      </p>
      <p>
       - Üdvözöllek! - mondja, és kishíján elcsuklik a hangja ebben az egy szóban. Tovább mosolyog és könnyedén meghajol előtted. - Erdei Zsolt vagyok.
      </p>
			<p>
				Erdei Zsolt, aki az erdőben él és boxoló! Ez jó! - gondolod magadban, mire önkéntelenül is elmosolyodsz. Udvariasan előre nyújtod a kezed és bemutatkozol a teljes neveden:
			</p>
			<p>
				- <span id="fullName"></span>.
			</p>
			<p>
				Ő megfogja a kezed. Érzed, hogy érdes, kemény kéz, mégis finoman tartja a tiédet. Azon veszed észre magad, hogy neked is egyre jobban tetszik a fickó. Érezhetően eszméletlenül erős, mégis milyen gyengéd veled...
			</p>
			<p>
				- Örülök, hogy találkoztunk! - mondja és hosszasan a szemedbe néz. A kezedet továbbra sem engedi el. Láthatóan teljesen elmerült benned... De aztán hirtelen magához tér, elengedi a kezed, körülnéz és szól a manóknak: - Vendégünk van!
			</p>
			<p>
				A manók ránéznek, majd egymásra, gurguláznak egy kicsit a saját nyelvükön, ami aztán vidám vinnyogásba megy át és szerte-széjjel szaladnak az erdőbe. Megint kibuggyan belőled a nevetés.
			</p>
		`,
		obj: ["E_love Zsolt", "M_Erdei Zsolt"],
		buttons: [
			{
				txt: "Ti értitek egymást? Egyáltalán kik ezek?",
				new: 220,
			},
		],
	},
	{
		num: 167,
		title: "Találkozás Erdei Zsolttal",
		type: "normal",
		music: "bübük",
		pic: "erdei.jpg",
		desc: `
      <p>
       Felismered, hogy az az erdei boxoló a manók vezére, akivel akkor találkoztál, amikor a Brutal Ballt kerested az erdőben! Felkészülsz arra az esetre, ha adna egy akkora pofont, amitől elszállsz, de ő most csak feláll és udvariasan kezet nyújt neked.
			</p>
			<p>
				- Erdei Zsolt.
		 	</p>
		 	<p>
			 Erdei Zsolt, aki az erdőben él és boxoló! Ez jó! - gondolod magadban. Kezet ráztok és te is bemutatkzol a teljes neveden:
		 	</p>
		 	<p>
			 - <span id="fullName"></span>.
		 	</p>
			<p>
				- Örülök, hogy találkoztunk! - mondja, majd körülnéz és szól a manóknak: - Vendégünk van!
			</p>
			<p>
				A manók ránéznek, majd egymásra, gurguláznak egy kicsit a saját nyelvükön, ami aztán vidám vinnyogásba megy át és szerte-széjjel szaladnak az erdőbe.
			</p>
		`,
		obj: ["M_Erdei Zsolt"],
		buttons: [
			{
				txt: "Ti értitek egymást? Egyáltalán kik ezek?",
				new: 220,
			},
		],
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
        - Köszönöm szépen, aranyom, maga nagyon rendes ember! - mondja meghatottan Pirike. Olyan hangja van, mint egy kotkodáló tyúknak. Beléd karol és elvisz a házához. Útközben elmeséli, hogy milyen nagy rajongója a szerelmes regényeknek és mennyit sír mindig rajtuk, de mióta elvesztette az olvasószemüvegét, depressziós lett, mert nem tud sírni rajtuk. Pedig az volt az egyetlen öröme, hogy lucskossá sírta a párnáját.
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
        A kertben összesen <span id="kincs"></span> gyöngy és <span id="akna"></span> bomba van. Próbálj meg minél több gyöngyöt megtalálni és életben maradni!
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
      <p><i>
        Írd be a megjelenő matematikai műveletek eredményét!
      </p>
      <p>
        Minél gyorsabban válaszolsz, illetve minél több az Eszed és az Ügyességed, annál jobban értelmezed a nyomokat és annál közelebb kerülsz Bodri kutya megtalálásához. De csak annyi időd van megtalálni, amennyi az Erődből telik, mivel közben szaladtok is a kutya nyomában.
      </p></i>
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
        Lóri papa egy fontoskodó, de udvarias, magas, szikár, horgas orrú tata. Elvisz az otthonába, felrakja a kávét főni, aztán elmondja, hogy eléggé meggyűlt a baja az adóbevallással, mert nem tudja, mit kezdjen azzal a jövedelemmel, amit saját festményei eladása után készpénzben odaadott több tucat fiatal nőnek, akiknek még egy rendes ruhájuk sem volt, úgy álltak fagyoskodva minden éjjel a sarkokon meg a tereken, de nem arra fordították az összeget legtöbben, hogy meleg ruhát vásároljanak maguknak, hanem  gyógynövényes cigit meg megfázás elleni orrport vettek belőle maguknak, de közben kiderült, hogy más is adott nekik éjjel pénzt, aminek 50%-át visszaadták cserébe Lóri papának, aki a felét különféle jótékony intézményeknek és szektáknak adta, a másik felét szerencsejátékon vesztette el vagy éppen duplázta meg, majd abból... már a fene se tudja követni, de nemcsak az SZJA a kérdéses, hanem hogy akkor most ki hogyan mikor miből fizeti meg azt a rohadt ÁFA-t, amit valahogy vissza is kellene igényelni, és mennyi a TB meg a rezsielszámolás és a beadási határidő 1 percen belül lejár!
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
        A tépett vörös hajú, szeplős, zöld szemű Brünhilda szívfacsaró zokogás közepette meséli el, hogy van egy fiúja, aki kidobófiú egy kocsmában, és a sok munkahelyi stresszt mindig rajta vezeti le otthon. Hol kirángatja a ruháit a szekrényből, leteperi őket és kihajítja az ajtón, hol az anyjától kapott vázát kezdi hörögve fojtogatni, ma reggel pedig, amikor hazajött az esti műszakból, nem engedte meg neki, hogy megigya a kakaóját, hanem leverte az asztalról és közölte, hogy "Eleget ittál! Fizess és húzz el innen!" Ő ezt már nem bírja tovább.
      </p>
      <p>
        Ez a szívedbe markol! Pontosan tudod, milyen az, amikor már egy kakaót sem lehet nyugodtan meginni. Az végképp betesz az embernek! Megkéred Brünhildát, hogy azonnal vezessen a lakására. Amikor megérkeztek, ott horkol hangosan az ágyon a fickó. Megfogod és kidobod az utcára. Hadd tudja meg a kidobófiú, milyen, amikor akasztják a hóhért. Meglepetten tápászkodik fel, de szakmai rutinjának köszönhetően azonnal harcképes lesz.
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
			txt: "Menjen most már egyedül haza Csongika!",
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
				id: "ugy",
				crease: 1,
				rnd: 2,
			},
			{
				id: "esz",
				crease: 1,
				rnd: 2,
			},
			{
				id: "lel",
				crease: 3,
			},
			{
				id: "sup",
				crease: 3,
				rnd: 2
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
		num: 185,
		title: "Elkapnak a Branyiszkó téren",
		type: "normal",
		music: "actionIncrease",
		pic: "kordon.jpg",
		desc: `
      <p id="modified"></p>  
      <p>
       Körülvesz három őr. Mit teszel?
      </p>
    `,
		buttons: [
			{
				txt: "Megpróbáltok Oshinokoval elmenekülni",
				new: 187,
				cond: "J_Oshinoko, !J_Gárda",
			},
			{
				txt: "Támadó parancsot adsz ki a Gárdának",
				new: 188,
				cond: "J_Gárda",
			},
		],
	},
	{
		num: 186,
		title: "Merénylet a Branyiszkó-téren",
		type: "normal",
		music: "actionIncrease",
		pic: "speaker.png",
		desc: `
      <p id="modified"></p>  
      <p>
       Elvegyülsz a tömegben úgy, hogy Oshinokoval szemmel tudjátok tartani egymást. Egy apró szemrándítással jelzi, hogy elfoglalta a helyét és  készen áll. Te is hasonlóan jelzel vissza neki. Látod, hogy előveszi az ál-cigarettás dobozt. Te is úgy teszel. Belerakod az álcázott öngyújtóból a halálos tüskét a fúvócsőbe. Az ál-cigit a szónokoló Bitang Botond felé irányítod. Egyre jobban izgulsz és fogalmad sincs, miről beszél. Megpróbálsz megnyugodni, mert a remegő végű fúvócsővel nehéz jól célozni. Veszel egy nagy levegőt, mintha csak letüdőznéd a cigit (szerencsére úgy van kialalkítva, hogy a te irányodba nem jöhet ki a tüske). Amint teljesen megtelik a tüdőd, a tömeg elejéről egy elhaló kiáltást hallasz és összeesik egy bőrszerkós hippi. Rögtön kapcsolsz: Oshinoko leszedte az álruhában lévő rendőrfőnököt. Azonnal lőnöd kell neked is!
      </p>
    `,
		buttons: [
			{
				txt: "Phu!",
				new: 221,
			},
		],
	},
	{
		num: 187,
		title: "A füstben",
		type: "normal",
		music: "actionIncrease",
		pic: "smoke.gif",
		desc: `
      <p>
      	Oshinokoval egymásra néztek. Nem kell semmit mondanotok, tudjátok, hogy mit kell tenni. Oshinoko bólint, elővesz a zsebéből egy csomag rágót és fapofával elkezdi rágni. A gutaütés kerülget: ezek szerint mégis kellene valamit mondani neki, mert nem látja, milyen szorult helyzetben vagytok!!! Vagy valami miatt megorrolt rád és most magadra hagy???!! Az őrök megindulnak, hogy leteperjenek, te megpróbálsz kitörni Oshinoko felé, ekkor viszont a japán a földre köpi a rágót, mire sűrű füst csap fel belőle és beborítja az egész teret. Megkönnyebbülsz: ezek szerint ez is egy trükkös fegyver volt: rágónak álcázott füstbomba! Ez a jakuza tényleg érti a dolgát! A tömeg viszont elkezd visítozni...
      </p>
			<p>
				- Azt hittem magamra hagysz! - ordítod, amikor a füstben támolyogva meglátod Oshinoko arcát. Legnagyobb meglepedésedre viszont a hátad mögül szólal meg Oshinoko:
			</p>
			<p>
				- Ne sértegess!
			</p>
			<p>
				Meglepve nézed, ki áll akkor előtted...
				<span class="cond" data-cond="M_Szenyamuki, !J_Szenyamuki">Felismered: ez Szenyamuki, Oshinoko ikertestvére!</span>
				<span class="cond" data-cond="J_Szenyamuki">Most jössz rá, hogy Szenyamukiba botlottál az előbb! Annyira hasonlítanak, pláne a füstben!</span>
			</p>
			<p>
				Ekkor hirtelen megjelenik közvetlenül mellettetek az igazi Oshinoko és megszólítja hasonmását:
			</p>
			<p>
				- Fivérem, Szenyamuki! Segítesz nekünk?
			</p>
    `,
		obj: ["M_Szenyamuki"],
		buttons: [
			{
				txt: "Megígérted!",
				new: 224,
				cond: "J_Szenyamuki",
			},
			{
				txt: "Ez az! Segítesz?",
				new: 225,
				cond: "!J_Szenyamuki",
			},
		],
	},
	{
		num: 188,
		title: "Tömegbunyó a Branyiszkó-téren",
		type: "finalwar",
		friends: "gárda",
		enemies: "böszörményi",
		opts: "J_Oshinoko, J_Szenyamuki, X_Szenyamuki",
		music: "finalwar",
		pic: "streetfight.gif",
		desc: `
      <p>
				Mivel látod, hogy innen már nem tudsz egyszerűen lelépni, nem marad más hátra, mint...
      </p>
			<p>
				- ELŐREEE!!! - adod ki ordítva a parancsot, mire a Gárda tagjai előrántják a fegyvereket. Az őrök is azonnal harci alakzatba rendeződnek. A tömeg ordítva menekül, pillanatok alatt eluralkodik a káosz a téren...
			</p>
			<p class="cond" data-cond="!X_Szenyamuki">
				- A fivérem, Szenyamuki is itt van! - súgja oda neked gyorsan Oshinoko, miközben támadóállást vesz fel. Észreveszed te is, és 
				<span class="cond" data-cond="J_Szenyamuki">megkönnyebbülten nyugtázod, hogy mellétek áll a csatában.</span>
				<span class="cond" data-cond="!J_Szenyamuki">csalódottan konstatálod, hogy sajnos az ellenség sorait erősíti.</span>
			</p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
				A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki, de aki mellette áll, az iszik belőle és visszanyer egy kevés erőt. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy saját döntését az ember a váratlan események ellenére is. Az emberek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      <p>
        Jó szórakozást!
      </p>
      </i>
    `,
		buttons: [
			{
				txt: "Harcra fel, győzni kell",
			},
		],
		pass: 226,
		fail: 203,
	},
	{
		num: 189,
		title: "Tanácskozás Szenyamukival",
		type: "normal",
		music: "gravenight",
		pic: "szenyamuki-face.jpg",
		desc: `
			<p>
				- Nekem vissza kell mennem Bitang Botondhoz, mert többek között az ő testőrségéhez is tartozom - kezdi elgondolkodva Szenyamuki. - Ma délután beszédet mond a Branyiszkó-téren. Oda is visz testőrséget, de kevesebbet, mint amennyien a Városházán őrzik. Ne hagyományos fegyverekkel intézzétek el, hanem inkább csendesebb módszerekkel. Bárhogy is alakul, én ott leszek és segítelek titeket, ha kell. 
			</p>
			<p>
				- Köszönjük! De tulajdonképpen miért nem ölöd meg te, ha már úgyis velünk vagy? - teszed fel a számodra praktikusnak tűnő kérdést.
			</p>
			<p> 
				- Mert ez nem az én küldetésem! Vagy megbíztok vele, de az nagyon sok pénzbe fog kerülni, vagy legyen elég annyi, hogy segítek nektek ha gond lenne.
			</p>
			<p>
				- Jó lesz így! - szól közbe Oshinoko. Végül is, jobban ismeri a testvérét és anyagi igényeit, így ráhagyod. Szenyamuki biccent egyet és egy szempillantás alatt eltűnik a sötétben.
			</p>
			<p>
				- Hidd el, <span class='name'></span> san, ez a legtöbb, amit elérhettünk. És ez nagy eredmény! Menjünk haza, hogy kidolgozzuk jobban a haditervet! - mondja Oshinoko. Biccentesz és elindultok a titkos átjárókon át visszafelé.
			</p>
			<p>
				Oshinoko az úton végig némán a gondolataiba temetkezik, de nem tart sokáig az út. Amikor beléptek a házba, Sakura ismét teával és egy kis süteménnyel fogad. Letelepedtek elfogyasztani.
			</p>
    `,
		obj: ["J_Szenyamuki"],
		change: [
			{
				id: "ero",
				crease: 8,
				rnd: 7,
			},
			{
				id: "hat",
				crease: 5,
				rnd: 5,
			},
		],
		buttons: [
			{
				txt: "Mi tehát a terved, Oshinoko san?",
				new: 93,
			},
		],
	},
	{
		num: 190,
		title: "Szenyamuki legyőzése",
		type: "normal",
		music: "gravenight",
		pic: "szenyamuki-face.jpg",
		desc: `
			<p>
				Amikor Szenyamuki összeesik, te pedig odaugrasz mellé, hogy végezz vele, hirtelen Oshinoko elkapja a karodat, de olyan erővel, mint ha vasbilincsbe zárnák.
			</p>
			<p>
				- Elég! Ha megölöd a fivérem, hogy segít minket?! - majd a földön fekvő alélt testvéréhez fordul: - Szenyamuki! <span class="name"></span> san már bizonyított! Legyen itt vége a harcnak!
			</p>
			<p> 
				Szenyamuki nem mozdul. Oshinoko elengedi a karod, ráordít valamit japánul a testvérére és belerúg. Szenyamuki szeme kinyílik és rátok néz. Aztán megrázza magát és feláll. Nem semmik ezek a tesók!
			</p>
			<p>
				- Rendben. Győztél! - mondja kurtán Szenyamuki.
			</p>
		`,
		change: [
			{
				id: "ugy",
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
				txt: "És ennek fényében mik az új tervek?",
				new: 189,
			},
		],
	},
	{
		num: 191,
		title: "Vereség Szenyamukitól",
		type: "normal",
		music: "gravenight",
		pic: "szenyamuki-face.jpg",
		desc: `
			<p>
				Iszonyatosan erős harcos Szenyamuki, és mivel Oshinoko is mondta, hogy nem kell végig csinálni a harcot, ha nem akarod, te is úgy látod, hogy fölösleges itt most meghalnod a keze által. Jelzed, hogy feladod a harcot és elfogadod a győzelmét. Szenyamuki megáll és így szól:
			</p>
			<p>
				- Tudtam, hogy nem vagytok elegendők a feladatra. Remélem, ezt most már te is belátod.
			</p>
			<p> 
				- És akkor uralkodjon egy zsarnok a városon?!
			</p>
			<p>
				Szenyamuki flegmán vállat von. Oshinoko int neked, hogy hagyjad. Amikor visszanézel, Szenyamuki már eltűnt. 
			</p>
			<p>
				- Szenyamuki ilyen, <span class='name'></span> san - mondja beletörődve Oshinoko. - De egyetértek veled, hogy vesznie kell Botinak! Talán Szenyamuki nélkül is tudunk győzni. De remélem nem kerülök vele össze a harcmezőn... Menjünk haza, és dolgozzunk ki egy haditervet!
			</p>
			<p>
				Biccentesz és elindultok a titkos átjárókon át visszafelé. Oshinoko az úton végig némán a gondolataiba temetkezik, de nem tart sokáig az út. Amikor beléptek a házba, Sakura ismét teával és egy kis süteménnyel fogad. Letelepedtek elfogyasztani.
			</p>
    `,
		change: [
			{
				id: "hat",
				crease: -3,
				rnd: 3,
			},
		],
		buttons: [
			{
				txt: "Mi tegyünk akkor?",
				new: 93,
			},
		],
	},
	{
		num: 192,
		title: "Szerelem első látásra",
		type: "normal",
		music: "love",
		pic: "bogi_face.JPG",
		desc: `
      <p>
        Ahogy az énekesnő elé lépsz, neki rögtön kitágul a szeme és a szája és egy kicsit el is pirul.
      </p>
      <p>
      - <span id="fullName"></span>? - kérdezi kicsit elrévedve.
      </p>
      <p>
        - Így van! - válaszolod mély, búgó hangon. Sármosan elmosolyodosz, hátra fésülöd a hajad és kidülleszted befeszített mellizmodat. Látszik, hogy egyre nagyobb hatást gyakorolsz rá. De az igazat megvallva, neked is egyre jobban tetszik a csinos énekesnő. Lazán a szintetizátorra könyökölsz, a színesbörű fickó mondana valamit, de Bogi egy szemvillantással leinti. Te szerény mosollyal folytatod: - Én mentettem meg a várost Battle Beetle-től. Ezek szerint a hírnevem megelőzött.
      </p>
			<p>A nő elismerően megnyalja a szája szélét, majd kecsesen előre nyújtja a kezét:
        - Örülök, hogy megismertelek. Bogi.
      </p>
      <p>
        Te udvariasan megfogod a puha kezét, előrehajolsz és kezet csókolsz neki. Egyre kevésbé hallod és látod már a kocsmát körülöttetek, már csak Bogi létezik számodra. Van benne valami megmagyarázhatatlanul varázslatos, ami rabul ejt. Így teljesen őszintén tudod mondani: - Én is nagyon örülök, hogy megismertelek.
      </p>
      <p>
        - Én nem gondoltam... szóval, hallottam a híredet, de így élőben találkozni veled... egyszerűen... le vagyok nyűgözve! - hebegi zavartan, majd a végén teljesen elpirul és már csak zavartan mosolyog és pislog.
      </p>
      <p>
        Egy percig te is csak nézed hangtalanul. Hihetetlenül gyönyörű és bájos, amikor zavartan mosolyog! De aztán kínosan kezdi érezni magát, így megpróbál gyorsan feltenni egy semlegesebb kérdést: - És mi járatban vagy erre? Újabb küldetés a láthatáron vagy csak beugrottál?
      </p>
      <p>
        - Éppenséggel... - gondolkodsz el, de aztán valahogy úgy érzed, erre csak egyféleképpen válaszolhatsz, mert ez van legbelül benned, és Boginak valahogy nem lehet hazudni: - Azt tervezem, hogy átveszem az uralmat a város felett. Elég volt Bitang Botond polgármester önkényuralmából, jobb élet jár nektek! Mi haszna volt Battle Beetle-t és bandáját legyőzni, ha még mindig nem szabad a város? Akkor nyugszom meg, ha már mindenki boldogan élhet itt! Erre születtem!
      </p>
				Amíg beszélsz, Bogi arcán az érzelmek teljes hadserege vonul át. Látszik, hogy a szavaid nagy belső küzdelmet indítottak el benne, ahol neki muszáj súlyos döntéseket meghozni. Amikor végetért ars poetica beszéded, egy ideig még mindig gondolkodik, majd arcán határozott eltökéltség jelenik meg. Egészen közel hajol hozzád, és a füledbe súg.
			<p>
        - Segítek neked! Most nem beszélhetünk, de mindent elmondok. Holnap napnyugta után gyere a régi fagyigyárhoz!
      </p>
			<P>
				- Rendben! - súgod vissza. Bogi még egyszer zavartan rád mosolyog, majd eltűnik.
			</P>
			<p>
				Úgy gondolod, te is végeztél, így távozol a kocsmából.
			</p>
      `,
		obj: ["E_Bogi kavar"],
		buttons: [
			{
				txt: "Irány haza!",
				new: 46,
			},
		],
	},
	{
		num: 193,
		title: "Bogi segít neked",
		type: "normal",
		music: "pubmusic",
		pic: "bogi_face.JPG",
		desc: `
      <p>
        - Helyes válasz! - bólint Bogi. Majd egy ideig fürkészően néz téged. Végül közel hajol hozzád és suttogva így szól:
      </p>
      <p>
        - Segítek neked! Most nem beszélhetünk, de mindent elmondok. Holnap napnyugta után gyere a régi fagyigyárhoz!
      </p>
			<P>
				- Rendben! - súgod vissza. Bogi még egyszer zavartan rád mosolyog, majd eltűnik.
			</P>
			<p>
				Úgy gondolod, te is végeztél, így távozol a kocsmából.
			</p>
      `,
		obj: ["E_Bogi kavar"],
		buttons: [
			{
				txt: "Irány haza!",
				new: 46,
			},
		],
	},
	{
		num: 194,
		title: "Bogi nem segít",
		type: "normal",
		music: "pubmusic",
		pic: "bogi_face.JPG",
		desc: `
      <p>
        Bogi csalódottan megrázza a fejét, majd így szól: - Tegyél le a terveidről! Így könnyen meghalhatsz...
      </p>
      <p>
				Mielőtt még bármit mondanál, eltűnik egy hátsó ajtón. Láthatóan nem fog segíteni. Úgy gondolod, végeztél itt, így távozol a kocsmából.
			</p>
      `,
		buttons: [
			{
				txt: "Irány haza!",
				new: 46,
			},
		],
	},
	{
		num: 195,
		title: "Fegyvergyártás Betyárral",
		type: "kotyvaszt",
		music: "epicsearch",
		pic: "betyarküche.JPG",
		prodtxt: "Betyár felbúg, kattog, majd a végén a következő tárgy jön ki belőle:",
		desc: `
      <p>
       - Na, itt vagyunk a raktárszoba alatt! - kiált lelkesen Frici. - Mielőtt felmegyünk, gyáártsunk le néhány cuccot a megszerzett ásványokból! Egy dolog a fontos: nem muszáj egyszerre az összes ásványt belerakni, mert Betyár mindig csak egy dolgot csinál a kapott összes mennyiségből. Ha tudsz néhány receptet, az megkönnyíti a dolgunkat, de ha nem, akkor is valamit csinál belőlük Betyár. Legfeljebb nem tudjuk semmire használni. A GYÁRTÁS gomb néha akadozik, ha először nem csinálna semmit, nyomd meg megint!
      </p>
    `,
		cont: 197,
	},
	{
		num: 196,
		title: "Nem sikerült a föld alól bejutni",
		type: "normal",
		music: "darkbackground",
		pic: "dirt2.jpg",
		desc: `
			<p>
				Leveszed a kezed Betyár kormányáról és Fricire nézel: - Bocs.
			</p>
			<p>
				- A rohadt életit! Egész éjjel ezen dolgoztam, és most kudarcot vallottunk! - ordítja dühösen Frici és belerúg egy nagyot Betyárba. Ő méltatlankodva morog egyet. Frici feléd fordul: - Csalódtam benned!
			</p>
			<p>
				Te is érzed, hogy nem úgy sikerült ez az akció, ahogy kellett volna. De per pillanat nincs jobb ötleted, így széttárod a kezed, megfordulsz és megkeresed a kivezető utat.
			</p>
			<p>
				Mikor újra a szabad ég alatt vagy, átgondolod, merre folytasd ez után a kudarc után az utadat. A hasad korgása segít: enned kellene valamit.
			</p>
			`,
		change: [
			{
				id: "lel",
				crease: -3,
				rnd: 1,
			},
			{
				id: "hat",
				crease: -8,
				rnd: 5,
			},
		],
		buttons: [
			{
				txt: "Eh, irány a piac!",
				new: 113,
			},
		],
	},
	{
		num: 197,
		title: "A server szobában",
		type: "normal",
		music: "raveaction",
		pic: "server.jpg",
		desc: `
      <p>
       Frigyes számításai pontosak voltak. A Betyár által ütött lyukon átmászva a server-szoba melletti raktárban találjátok magatokat. Átgázoltok a poros kábelek, monitorok, nyomtatópatronok és printerek között, majd akadálytalanul beléptek az üres server-szobába. Kicsit hűvös van, de ez nem tántorít el. A server-szoba ajtaja természetesen zárva van. A server konzolja pedig jelszót kér. Mit teszel?
      </p>
    `,
		buttons: [
			{
				txt: "Megpróbálod beírni a jelszót",
				new: 229,
			},
			{
				txt: "Feltöröd a rendszert",
				new: 230,
				cond: "=_name_Q, >_esz_70",
				modi: "Rutinosan lefuttatsz egy jelszófeltörő-algoritmust, ami mindig bejön és várod az eredményt. A kijelzőn felvillan egy üdvözlő felirat. Bejutottál a rendszerbe! Nem kell sokat keresgélned, hogy rájöjj, melyik ajtókat kell feloldanod ahhoz, hogy bejuss Botihoz. Sőt magát Botit és az őrök tartózkodását is látod. Egy ideig megfigyeled a mozgásukat, aztán amint szabad lesz az útvonal, azonnal elindultok Fricivel.",
			},
			{
				txt: "Használjátok a Bolditól szerzett belépőkártyát",
				new: 230,
				cond: "E_belépőkártya",
				modi: "Előveszitek a kártyát és a leolvasóhoz érintitek. A led zöldre vált, egy kattintást hallotok és már nyitjátok is az ajtót. Egymásra kacsintotok. Ez könnyű volt! Elindultok megkeresni Botit.",
			},
		],
	},
	{
		num: 198,
		title: "Sikeres kampányakció",
		type: "normal",
		music: "midepic",
		pic: "happymass.jpg",
		desc: `
      <p id="modified"></p>  
      <p>
       A <span class="part"></span> sikeres kampányakcióját megünneplitek az emberekkel. Egyre többen érzik úgy, hogy érdemes rátok szavazni Boti helyett. Kérdés, hogy elég lesz-e ez a győzelemhez?
      </p>
    `,
		Xchange: "kampányhelp",
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 199,
		title: "Félig sikeres kampányakció",
		type: "normal",
		music: "slowguitar",
		pic: "happymass.jpg",
		desc: `
      <p>
       Bár nem sikerült az összes birkát megtalálnod, a nép azért értékeli az igyekezetedet. A <span class="part"></span> szerzett így is jó pár új szavazót. Kérdés, hogy elég lesz-e ez a győzelemhez?
      </p>
    `,
		Xchange: "kampány",
		buttons: [
			{
				txt: "Teszel még valamit a népért!",
				new: 110,
				cond: "<_sup_1500"
			},
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 200,
		title: "Sikertelen kampányakció",
		type: "normal",
		music: "darkbackground",
		pic: "shockedmass.gif",
		desc: `
      <p>
       A nép csalódott benned, mert nem tudtál segíteni nekik. Csúfosan távozol. A <span class="part"></span> elveszített jó pár szavazót. Kérdés, hogy tudtok-e így is győzni?
      </p>
    `,
		change: [
			{
				id: "hat",
				crease: -10,
				rnd: 15,
			},
			{
				id: "sup",
				crease: -100,
				rnd: 150,
			},
		],
		buttons: [
			{
				txt: "Lássuk az eredményeket!",
				new: 201,
			},
		],
	},
	{
		num: 201,
		title: "A polgármesteri választás",
		type: "normal",
		music: "democracy",
		pic: "szavaz.png",
		desc: `
      <p>
       Eljött a polgármesteri választás napja. A kisváros népe szorgosan járul a szavazóurnákhoz. A <span class="part"></span> összegyűlik a Rónai Művelődési Központ színháztermében, ahol nagy monitorokkal, riporterek gyűrűjében és egyre gyülekező lelkes rajongóitok előtt követitek nyomon, hogy vajon több szavazotot kapsz-e te és a pártod, mint Bitang Botond és bandája. Vajon mi lesz az eredmény a nap végén?
      </p>
    `,
		buttons: [
			{
				txt: "Ne borzold tovább az idegeimet, lássuk most már tényleg a végeredményt!",
				new: 204,
			},
		],
	},
	{
		num: 202,
		title: "Bevettétek a Városházát",
		type: "normal",
		music: "epicloop",
		pic: "happymass.jpg",
		desc: `
      	<p>
					Embereid sikeresen leverték a városháza őreit. Győztes sereged üdvrivalgása után egy gyors halottszemlét tartasz.
				</p>  
				<p id="casualties"></p>
				<p>
        	A teljes győzelemhez viszont meg kell még találni magát Bitang Botondot. Maradék embereddel bevonulsz a Városházába, hogy megtaláld őt az irodai rész útvesztőiben.
      	</p>
      `,
		obj: ["E_a Városháza bevétele"],
		change: [
			{
				id: "hat",
				crease: 20,
				rnd: 10,
			},
			{
				id: "sup",
				crease: 20,
				rnd: 30,
			},
		],
		buttons: [
			{
				txt: "Keressük meg ezt a bitangot!",
				new: 209,
			},
		],
	},
	{
		num: 203,
		title: "A <span class='name'></span> Gárda szétverése",
		type: "normal",
		music: "darkbackground",
		pic: "deadfield.jpg",
		desc: `
     	<p>
				A <span class='name'></span> Gárdát sajnos szétverték Bitang Botond őrei.
			</p>  
			<p id="casualties"></p>
			<p>
				De nincs időd sokat sajnálkozni, mert téged magadat is üldözőbe vettek a megmaradt őrök. Rohannod kell az életedért!
			</p>
		`,
		obj: ["X_Gárda"],
		change: [
			{
				id: "hat",
				crease: -20,
				rnd: 10,
			},
			{
				id: "sup",
				crease: -40,
				rnd: 30,
			},
		],
		buttons: [
			{
				txt: "Ujjujujj!!",
				new: 210,
			},
		],
	},
	{
		num: 204,
		type: "Xtrial",
		value: "választás",
		pass: 205,
		fail: 231,
	},
	{
		num: 205,
		title: "A <span class='part'></span> átveszi a hatalmat a város felett",
		type: "normal",
		music: "happyDance",
		pic: "happymass.jpg",
		desc: `
      	<p>
					Amint meglátjátok a végső eredményt, hatalmas üdvrivalgásba tör ki mindenki a teremben. Felbontjátok az előre behűtött pezsgőket, vidáman koccintotok, majd kivonultok az utcára.
				</p>  
				<p>
        	Az utcán hatalmas tömeg vár titeket, mindenhol örömmámorban úszó és téged éljenző embereket láttok. Megállsz és a tömegbe dobod a pezsgődet. Mindenki ráveti magát, hogy a kétszeres hősük után igyon belőle. Te pedig ünnepélyes, örömteli arccal belekezdesz a beszédedbe.
      	</p>
				<p>
					- Győztünk! - hatalmas őrjöngés, tüzijátékokat lőnek fel. Vársz egy kicsit, hogy kiörüljék magukat, aztán intesz, hogy szeretnéd folytatni.- Nem csak mi, a <span class="part"></span>, hanem mi, az egész város, benne ti is, akiknek köszönhetjük győzelmünket! Köszönjük, hogy támogattatok szavazataitokkal minket, most pedig a <span class="part"></span> hozzáfog, hogy megvalósítsa ígéreteit.
				</p>
				<ol id="pp"></ol>
				<p>
					Mindegyik pont után hatalmas örömújjongásba tör ki a nép. Vársz sok percet, amíg végre kicsit elhalkulnak, majd emelt hangon folytatod:
				</p>
				<p>
					- És ezen kívül még sok másban is egy szebb jövőt fogunk elhozni a városnak. Hiszen véget ért a zsarnokság. Először Battle Beetle és bandájának körmönfont zsarnokságának vetettem véget, most pedig közösen megállítottuk Bitang Botond és bandájának nyílt zsarnokságát! Foglaljuk tehát el méltó helyünket és űzzük el a csúfosan vereséget szenvedett bitangot! Irány a Városháza!
				</p>
				<p>
					A tömeg lelkesen megindul veled. A Városházánál már vár titeket Bitang Botond és testőrserege. Egy pillanatra megfordul benned a gondolat, hogy mi van, ha most a tömegbe lőnek, de szerencsére nem ez történik. Botond odamegy hozzád. Az arca meggyötörtnek tűnik, de azért próbál diplomatikus kifejezést magára erőltetni. Kezet ráztok.
				</p>
				<p>
					- Gratulálok! Tisztességes küzdelemben győztél. Elismerem, hogy te vagy a város hőse, a nép téged akar vezetőnek. Elvonulunk mindnyájan egy másik városba. Átadom neked a várost és a Városházát. Holnapra a technikusok elintézik a belépést és tiéd lesz itt minden - mondja, de utána az arcán egy furcsa, titokzatos kifejezés jelenik meg, és közelebb hajol hozzád. Suttogva mondja, hogy csak te halld.
				</p>
			`,
		change: [
			{
				id: "hat",
				crease: 100,
			},
		],
		buttons: [
			{
				txt: "Mit mond?",
				new: 232,
			},
		],
	},
	{
		num: 206,
		title: "Fricivel a háztetőn",
		type: "normal",
		music: "actionIncrease",
		pic: "snipers.JPG",
		desc: `
      <p>
       Miután sikeresen kiiktattátok a házmestert, elhelyezkedtek a tető szélén. Frici odaad neked egy távcsövet, hogy te is lásd, amit ő lát, aztán lehasal és a párkányra támasztja Hugót. Te is belenézel a távcsőbe. Megkeresed a Branyiszkó-teret és mégjobban ráközelítesz. Egy emelvényen mond beszédet Bitang Botond. Lélegzetvisszafojtva nézed. Aztán egy halk kattanás és a polgármester hanyatt vágódik.
      </p>
      <p>
       - Fejlövés, nem éli túl. Most viszont húzzunk, mert ha profik, bemérhettek! - mondja Boti, azzal futni kezd a lépcsőház felé. Követed.
      </p>
			<p>
				Amikor az utcára kiléptek, Frici normál lépéstempóra kapcsol és elkezd mesélni arról, milyen jó bablevest evett egyszer Annuska éttermében. Hugót már a lépcsőházban a kabátja mélyére rejtette. Profi a fickó. Te is felveszed az álcát és mindenféle kajáról beszéltek, amíg szép nyugodt tempóban el nem éritek Betyárt. Senki nem állított meg. Bepattantok, és Frici azonnal indít.
			</p>
			<p>
				- Sietnünk kell, mert biztosan hajtóvadászat kezdődik és a várost is lezárják mindjárt, de innen hamar kijutunk! - mondja gyorsan és már húztok is az erdő felé. Eszes fickó, mindent jól tervezett el. Amikor már a hegyi utakon robogtok, ismét megszólal: 
			</p>
			<p>
			- Oké, <span class="name"></span>, én teljesítettem a rám eső részt, Bitang Botond halott. Hogy tervezed ezután a hatalomátvételt?
			</p>
			<p>
				- Holnap bemegyünk a Fő-térre és meglátjuk, milyen a hangulat. A városnak vezető kell, és erre én vagyok a legalkalmasabb. Már kétszer mentettem meg őket egy zsarnoktól. Másodszor a te segítségeddel, így téged is szeretni fognak. Csak kell egy jó beszéd és nyert ügyünk van.
			</p>
			<p>
				Nem nagyon tervezted meg ennek a részleteit, de magabiztos vagy. Csak nem olyan hülye a nép, hogy a szabadítóját elveti. Bár pontosan nem tudod, milyen ellenállással kell szembenézned.
			</p>
			<p>
				Nemsokára megérkeztek Frici titkos erdei kunyhójába. Belépsz, de alig tudsz megmozdulni, mert roskadásig tele van mindenféle furcsa tárggyal. Frici egy üllőn gyors vacsorát rögtönöz, azt követően pedig az egyik szekrényt eldőlti, aminek a hátsó fele egy teljesen jó ágy, amin ketten is elfértek. Mivel nincs más lehetőség, itt tértek nyugovóra.
			</p>
    `,
		obj: ["X_Boti"],
		change: [
			{
				id: "ero",
				crease: 4,
				rnd: 1,
			},
			{
				id: "sup",
				crease: 10,
				rnd: 30,
			},
		],
		buttons: [
			{
				txt: "Jó éjt!",
				new: 234,
			},
		],
	},
	{
		num: 207,
		title: "Frici helyetted végzi el a munkát",
		type: "normal",
		music: "actionIncrease",
		pic: "frici.JPG",
		desc: `
      <p>
       Látván gyáva megfutamodásod, Frici előkap egy kalapácsot és szakszerűen a földbe kalapálja a házmestert, majd a biztonság kedvéért egy harapófogóval kihúzza a nyelvét és egy irdatlan nagy csavart fúr át a koponyáján, amivel rögzíti a padlón.
      </p>
      <p>
       - Mindent nekem kell csinálnom?! - kérdezi sértődötten. És jogosan. 
      </p>
			<p>
				- Na, azért én kezdtem el, te csak befejezted! De most ne ezen vitatkozzunk, hanem szedjük le Botit!
			</p>
			<p>
				- Szedjük?!
			</p>
		`,
		change: [
			{
				id: "hat",
				crease: -10,
				rnd: 15,
			},
			{
				id: "sup",
				crease: -10,
				rnd: 10,
			},
		],
		buttons: [
			{
				txt: "Hagyjuk már az érzelmes részleteket, akció!",
				new: 206,
			},
		],
	},
	{
		num: 208,
		title: "Harc az óriásokkal",
		type: "finalwar",
		friends: "pórnép",
		enemies: "óriások",
		music: "fight8",
		pic: "giants.jpg",
		desc: `
      <p>
				A város széli hegyekben él két félelmetes óriás, aki gyakran terrorizálja az ott élőket, mivel durván visszaélnek erőfölényükkel, ha emberhúst szeretnének enni. Ha legyőznétek őket, nagyon hálás lenne az itt élő nép, és a híred még az egész világon is elterjedne. Az egyetlen probléma az, hogy az itt élő egyszerű parasztoknak és favágóknak nincs túl ütőképes fegyverarzenálja: vasvilla, kasza, botok, íjak, fejszék. Amikor viszont megtudták, hogy hadba viszed a népet, csatlakozott még a szomszéd kerületből Bütyök Mityu, a verőlegény, Hosszúfarkú Gyík, a hagyományörző indián harcos és Skywalker Lukács, a 12-szeres bokorugró bajnok. 
      </p>
			<p>
				Amint nézegeteg gyülevész seregedet, és azon gondolkodsz, hogy honnan tudnál egy kommandós osztagot vagy legalább komolyabb fegyvereket szerezni, egy vérfagyasztó ordítást hallasz. A hegy felé nézel, ahol mozogni kezdenek a fák, majd kétoldalra kidőlnek és megjelenik két iszonyatos nagy zord óriás alakja.
			</p>
			<p>
				- Jönnek! Az óriások!!! - kiáltja falfehéren a nép, és az asszonyok és gyerekek visítva menekülnek. Nincs mese, azonnal hadba kell vonulnod azzal, amid van!
			</p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
        A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy döntését az egység a váratlan események ellenére is. Az egységek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      </i>
    `,
		modi: "Amikor a második óriás is döngve elterül a földön és többé nem mozdul, a nép eufórikus üdvrivalgásba tör ki! Megmaradt fáradt harcosaid a vállukra emelnek és úgy visznek be a városba.</p><p>- Győztünk! Nem fognak többé terrorizálni az óriások! Végük van! Éljen <span id='fullName'></span>, a vezérünk!",
		buttons: [
			{
				txt: "Jól van, emberek, nyírjuk ki az óriásokat!!!",
			},
		],
		pass: 198,
		fail: 200,
		obj: ["H_Városszéli pórnép"]
	},
	{
		num: 209,
		title: "Boti keresése a Városházán",
		type: "dungeon",
		pic: "corridor.gif",
		music: "raveaction",
		desc: "<p>Járkálsz keresztül-kasul a Városháza elegáns folyosóin és szobáin át. MIndenképpen meg kell találni Bitang Botit!<p>",
		contBtn: "Tovább keresel",
		passBtn: {
			txt: "Megvagy!",
			new: 235,
		},
		passDesc: "<p>Az egyik zárt szoba ajtaját berúgva üres szobába lépsz be. Valami gyanús. Ahogy fülelsz, halk zihálást hallasz az egyik szekrényből. Odalépsz és felrántod az ajtaját. Boti az, teljesen halálra rémülve!</p>",
		fight: 212,
		end: 20,
		find: [
			"W_SZEGECSES BŐRDZSEKI",
			"W_GYILOK",
			"W_PÁNCÉL",
			"W_GÉPFEGYVER",
			"W_OSTOR",
			"W_SÁRKÁNYVÉR",
			"W_ROBI",
			"W_PETÁRDA",
			"W_KÉZIGRÁNÁT",
			"W_KIS ERŐITAL",
			"W_NAGY ERŐITAL",
			"W_DIABOLIKUS SZTEROID",
			"W_KONYHAKÉS",
			"W_PÁLINKÁS FLASKA",
		],
		findmany: 7,
	},
	{
		num: 210,
		title: "Üldözés a sereged kudarca után",
		type: "pursuit",
		level: 10,
		music: "darkbackground",
		pic: "deadfield.jpg",
		goalpic: "exit.png",
		desc: `
			<p>
				Az embereid kudarcot vallottak! Már csak te maradtál, így a megmaradt ellenségek össztüzet zúdítanak rád. Próbálj meg valahogy kijutni!
			</p>  
		`,
		buttons: [
			{
				txt: "Jááááj!!!",
			},
		],
		pass: 211,
		fail: 115,
	},
	{
		num: 211,
		title: "Sikeresen elmenekülsz",
		type: "normal",
		music: "basicmusic",
		pic: "starttown.jpg",
		desc: `
			<p>
				Sikerül leráznod a támadóidat, de tudod, hogy innentől bujkálás és menekülés lesz az életed. Hacsak nem sikerül titokban szervezkedve megdönteni Boti uralmát.
			</p>
			<p>
				Akárhogy is folytatod tovább, úgy gondolod, hasznos lehet, ha beszerzel pár dolgot.
			</p>
			`,
		change: [
			{
				id: "ero",
				crease: -5,
				rnd: 2,
			},
			{
				id: "lel",
				crease: -3,
				rnd: 1,
			},
			{
				id: "hat",
				crease: -7,
				rnd: 3,
			},
		],
		obj: ["E_Boti üldöz"],
		buttons: [
			{
				txt: "Irány a piac!",
				new: 113,
			},
		],
	},
	{
		num: 212,
		title: "Harc a Városháza megmaradt őrével",
		type: "fight",
		pic: "kidobo.jpg",
		nmepic: "kidobo.jpg",
		dungeon: true,
		level: 3,
		desc: `
      <p>
       Egy megmaradt őrbe botlasz bele.
      </p>
    `,
		buttons: [
			{
				txt: "Állj félre az utamból!",
			},
		],
		pass: 209,
		fail: 209,
	},
	{
		num: 213,
		title: "Győzelem Erdeiékkel",
		type: "normal",
		music: "kismadár",
		pic: "erdei.jpg",
		desc: `
      	<p>
					- Hát akkor vegyük át a hatalmat, szerelmem! - szól Zsolt, majd a bübük felé fordul: - Zene!
				</p>  
				<p>
        	Nem tudod honnan, de elindul egy ismert sláger, ami valahogyan érzed, hogy Zsolthoz kötődik. Ő mosolyogva, határozott, döngő léptekkel elindul a város felé. A lények lelkesen követik. Végigmentek az utcákon egyenesen a Városházához. Itt az őrök nektek szegezik a fegyvert, de Zsolt csak nevet egy nagyot, és szól, hogy indul a meccs!
      	</p>
				<p>
					Ami ezután történik, azt nehéz felfogni és leírni. Zsolt pillanatok alatt hatalmas ütésekkel szétveri az egész őrséget. Hihetetlenül nagy ívben repkednek szét az emberek, ilyet eddig csak a DC univerzumról szóló filmekben láttál! Az összetört, földet ért emberekre a bübük vetik rá magukat és ágaikkal megfojtják őket vagy egyszerűen eltörik a gerincüket. Félelmetes, mire képesek ezek az aranyos, vidám, mesebeli lények. A távolabb álló őrök első döbbenetükből magukhoz térve tüzet nyitnak Zsoltra és a bübükre, de Zsolt kemény izmairól lapos kis konfettikként pattannak le a golyók. A bübük kemény bőre (kérge?) szintén áthatolhatatlannak tűnik. De nem is vagy benne biztos, hogy eltalálják-e őket, mert nagyon gyorsan mozognak, kicsik és könnyen beolvadnak a környezetbe. Zsolt közben ide-oda szökell és osztja iszonyatos ütéseit. Időd sincs felfogni nagyon, hogy mi történik, mire egyszercsak azt veszed észre, hogy nincs több őr a városháza körül. Zsolt huncutul rád kacsint, majd feltépi a hatalmas kaput és félredobja.
				</p>
				<p>
					- Keressük meg a Bitangot! - adja ki az utasítást Zsolt, majd mosolyogva feléd fordul: - Várj meg itt, mindjárt hozzuk!
				</p>
				<p>
					Ezután mind berohannak a nagy épületbe. Félúton elfojtott kiáltások, nagy puffanások hallatszanak, időnként pedig biztonsági őrök zuhannak ki a bezárt ablakokon keresztül nagy csörömpöléssel. Nem kell sokáig várnod, nemsokára megjelenik ismét Zsolt és mögötte egyre több bübü. Zsolt kezében Bitang Botond van, akit labdaként dobál, dekázik vele vagy súlyzó gyanánt a vállára rak és csinál pár guggolást - miközben folyamatosan közeledik feléd. Végül hanyagul eléd dobja a földre a több testi és lelki sebtől vérző, remegő zsarnokot.
				</p>
				<p>
					- Könyörüljetek rajtam! Minden megadok, amit csak kértek! Nem is értem, mi ez az egész... - hebegi Boti. Zsolt megelőz a válasszal:
				</p>
				<p>
					- Nem érted?! Te és a gengszter bandád évek óta élősködik a városon. Romokban az oktatás, az egészségügy és legális, tiszta boxmeccseket sem lehetett tartani! Hogyan lehetne így utánpótlást nevelni, ha minden meccset megbundáztál, hogy a te embereid nyerjenek! Nincs egy meg nem vett bíró ebben a városban! Az illegális meccseken meg csak a drog és a teljesítményfokozó megy, szabályok nélkül! Ki kellett mennem az erdőbe, hogy farönköket dobálva és köveket ütve fejlesszem az ütőerőmet ekkorára! Csak természetes módon, erdei étrenden élve el lehet érni ilyen erőt, ha elhiszed, hogy képes vagy rá! Na de minek, ha nem tudok tisztességes meccseken további bajnoki öveket szerezni? Hát maradtam az erdőben és védelmeztem azt. Hogy ne jöjjön be legalább oda az a szenny és rothadás, ami belőled árad! A Gyehenna bűzhödt lehelete lehet olyan, mint a tiéd! - mondja egyre jobban átszellemülve, majd rád néz elérzékenyült arccal és folytatja: - De akkor jött <span id="fullName"></span>, egy igazi hős, egy tiszta nő! Ő győzött meg arról, hogy ki kell lépnem az erdő nyújtotta komfortzónából, és meg kell tisztítani tőled és toxikus kipárolgásodtól a várost! Vissza kell hozni a tiszta sportot az emberek életébe, aminél nincs jobb jellemfejlesztő! A sport megtanít győzni és veszíteni, a sport mindenre megtanít!
				</p>
					Mindenki e nagyívű költői szónoklat hatása alá kerülve hallgat pár percig. Aztán úgy érzed, illene neked is megszólalni.
				<p>
					- Igen, pontosan így gondolom én is, ahogyan Zsolt kiválóan összefoglalta. Plusz még annyit tennék hozzá, hogy a sporton kívül minden más területet is fejleszteni fogok a magam részéről, hogy az emberek végre méltó körülmények között éljenek itt, és szabadon kibontakozhassanak! Te pedig útban vagy! - kiáltasz fel, azzal lerúgod a nyakáról Boti fejét. Zsolt teljesítménye tényleg motiválóan hatott a tiédre is, remek edző lesz belőle! Ő elismerően csettint egyet.
				</p>
				<p>
					Ekkor mindenki hatalmas örömújjongásba tör ki. Most látod, hogy nagy tömeg gyűlt körétek, és most ők is kitörő lelkesedéssel fogadják a fordulatot és titkeket éljeneznek. Az őrjöngő tömeg meghitt gyűrűjében Zsolt feléd fordul és felteszi a kérdést:
				</p>
				<p>
					- Leszel a feleségem?
				</p>
			`,
		obj: ["X_Boti"],
		change: [
			{
				id: "hat",
				crease: 100,
			},
		],
		buttons: [
			{
				txt: "Igen",
				new: 236,
			},
			{
				txt: "Nem",
				new: 237,
				modi: "Válaszodat hallva Zsolt elkomorult arccal lehorgasztja a fejét. Megsajnálod szegényt, és mivel nem akarod elrontani az ünnepi hangulatot, rögtön megfogod a kezét és mosolyogva így szólsz: - De szívesen alapítok veled egy sportegyesületet!</p>Zsolt arca felderül. Vagy kielégíti ez a válasz is, vagy új lehetőséget lát benne arra, hogy mégis meghódítson. Meglátjátok majd, mit hoz a jövő, de most inkább ünneplitek a győzelmet.<p>"
			},
		],
	},
	{
		num: 214,
		title: "A városháza megostromlása Eredeiékkel",
		type: "finalwar",
		friends: "erdeiék",
		enemies: "városháza",
		music: "kismadár",
		pic: "townhall.JPG",
		desc: `
			<p>
				- Hát akkor vegyük át a hatalmat! - szól Zsolt, majd a bübük felé fordul: - Zene!
			</p>  
			<p>
				Nem tudod honnan, de elindul egy ismert sláger, ami valahogyan érzed, hogy Zsolthoz kötődik. Ő mosolyogva, határozott, döngő léptekkel elindul a város felé. A lények lelkesen követik. Végigmentek az utcákon egyenesen a Városházához. Itt az őrök nektek szegezik a fegyvert, de Zsolt csak nevet egy nagyot, és szól, hogy indul a meccs!
			</p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
        A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy döntését az egység a váratlan események ellenére is. Az egységek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      <p>
        Jó szórakozást!
      </p>
      </i>
    `,
		buttons: [
			{
				txt: "Kapjátok el őket!",
			},
		],
		pass: 215,
		fail: 210,
	},
	{
		num: 215,
		title: "Győzelem Erdeiékkel",
		type: "normal",
		music: "kismadár",
		pic: "erdei.jpg",
		desc: `
      	<p>
					Leaíratatlan csatának voltáűl tanúja! Miközben Zsolt hatalmas ütésekkel verte szét az őröket, a bübük tökéletesen rejtőzködve támadtak rájuk. Vagy Zsolt körül repkedtek az emebrek, vagy hirtelen más őrök hullottak el láthatóan a semmitől. Időd sem volt felfogni nagyon, hogy mi történik, mire egyszercsak azt veszed észre, hogy nincs több őr a városháza körül. Zsolt rád kacsint, majd feltépi a hatalmas kaput és félredobja.
				</p>
				<p>
					- Keressük meg a Bitangot! - adja ki az utasítást, majd feléd fordul: - Várj meg itt, mindjárt hozzuk!
				</p>
				<p>
					Ezután mind berohannak a nagy épületbe. Félúton elfojtott kiáltások, nagy puffanások hallatszanak, időnként pedig biztonsági őrök zuhannak ki a bezárt ablakokon keresztül nagy csörömpöléssel. Nem kell sokáig várnod, nemsokára megjelenik ismét Zsolt és mögötte egyre több bübü. Zsolt kezében Bitang Botond van, akit labdaként dobál, dekázik vele vagy súlyzó gyanánt a vállára rak és csinál pár guggolást - miközben folyamatosan közeledik feléd. Végül hanyagul eléd dobja a földre a több testi és lelki sebtől vérző, remegő zsarnokot.
				</p>
				<p>
					- Könyörüljetek rajtam! Minden megadok, amit csak kértek! Nem is értem, mi ez az egész... - hebegi Boti. Zsolt megelőz a válasszal:
				</p>
				<p>
					- Nem érted?! Te és a gengszter bandád évek óta élősködik a városon. Romokban az oktatás, az egészségügy és legális, tiszta boxmeccseket sem lehetett tartani! Hogyan lehetne így utánpótlást nevelni, ha minden meccset megbundáztál, hogy a te embereid nyerjenek! Nincs egy meg nem vett bíró ebben a városban! Az illegális meccseken meg csak a drog és a teljesítményfokozó megy, szabályok nélkül! Ki kellett mennem az erdőbe, hogy farönköket dobálva és köveket ütve fejlesszem az ütőerőmet ekkorára! Csak természetes módon, erdei étrenden élve el lehet érni ilyen erőt, ha elhiszed, hogy képes vagy rá! Na de minek, ha nem tudok tisztességes meccseken további bajnoki öveket szerezni? Hát maradtam az erdőben és védelmeztem azt. Hogy ne jöjjön be legalább oda az a szenny és rothadás, ami belőled árad! A Gyehenna bűzhödt lehelete lehet olyan, mint a tiéd! - mondja egyre jobban átszellemülve a költői ihlettől, majd rád néz és folytatja: - De akkor jött <span id="fullName"></span>! Ő győzött meg arról, hogy ki kell lépnem az erdő nyújtotta komfortzónából, és meg kell tisztítani tőled és toxikus kipárolgásodtól a várost! Vissza kell hozni a tiszta sportot az emberek életébe, aminél nincs jobb jellemfejlesztő! A sport megtanít győzni és veszíteni, a sport mindenre megtanít!
				</p>
					Mindenki e nagyívű szónoklat hatása alá kerülve hallgat pár percig. Aztán úgy érzed, illene neked is megszólalni.
				<p>
					- Igen, pontosan így gondolom én is, ahogyan Zsolt kiválóan összefoglalta. Plusz még annyit tennék hozzá, hogy a sporton kívül minden más területet is fejleszteni fogok a magam részéről, hogy az emberek végre méltó körülmények között éljenek itt, és szabadon kibontakozhassanak! Te pedig útban vagy! - kiáltasz fel, azzal lerúgod a nyakáról Boti fejét. Zsolt teljesítménye tényleg motiválóan hatott a tiédre is, remek edző lesz belőle! Ő elismerően csettint egyet.
				</p>
				<p>
					Ekkor mindenki hatalmas örömújjongásba tör ki. Most látod, hogy nagy tömeg gyűlt körétek, és most ők is kitörő lelkesedéssel fogadják a fordulatot és titkeket éljeneznek.
				</p>
			`,
		obj: ["X_Boti"],
		change: [
			{
				id: "hat",
				crease: 100,
			},
		],
		buttons: [
			{
				txt: "Itt az idő elfoglalni a Városházát!",
				new: 237,
				modi: "Megköszönöd Zsoltnak és a bübüknek a segítséget. Zsoltnak megígéred, hogy ő lesz a sportért felelős alpolgármester és a bübük mindig boldogan fognak élni. Ezután elindulsz, hogy elfoglald városvezető pozíciódat.<p>"
			},
		],
	},
	{
		num: 216,
		title: "Bogi terve",
		type: "normal",
		music: "gravenight",
		pic: "darkbogi-face.jpg",
		desc: `
      <p>
        - Rendben, hiszek neked - mondod végül neki. Bogi könnyei örömkönnyekké változnak. Megölel és a füledbe súgja: - Köszönöm! Tudtam, hogy egy igazi hős vagy! Nem fogod megbánni, hogy hittél nekem!
      </p>
      <p>
        - Én is remélem. És mi lenne a terved? - kérdezed. Bogi letörli az arcát, aztán halkan válaszol:
      <p>
				- Én most visszamegyek Botihoz, mert a ma estét velem akarja tölteni. Ráveszem, hogy jöjjön ki velem a Feneketlen-tóhoz. Csak egy kocsival megyünk és csak a sofőr lesz vele. Van a tó mellett egy csónakház. Rejtőzz el ott és én odacsalom. Ott elintézheted. Ha most elindulsz, még előttünk oda fogsz érni. De most mennem kell, mielőtt gyanút fogna. Boriszt is keresni kezdheti. Siessünk! 
      </p>
			`,
		obj: ["J_Bogi"],
		change: [
			{
				id: "lel",
				crease: 15,
				rnd: 5,
			},
			{
				id: "esz",
				crease: 5,
			},
		],
		buttons: [
			{
				txt: "Rendben, menjünk!",
				new: 233,
			},
		],
	},
	{
		num: 217,
		title: "Szakítás Bogival",
		type: "normal",
		music: "gravenight",
		pic: "darkstreet.jpg",
		desc: `
      <p>
        - Sajnálom, nem tudok benned megbízni! - mondod csalódottan, de határozottan. Bogi szemébe könnyek szöknek. Megragadja a karod és elkezd könyörögni, de te elrántod a kezed és elfordulsz tőle. Túl gyanús itt minden! Lehet, hogy lesz még alkalmad leszámolni Botival, de nem így.
      </p>
      <p>
        Kilépsz az épületből magad mögöd hagyva Bogit és hazafelé veszed az utad. Este átgondolod, hogy vajon jól döntöttél-e Bogival kapcsolatban, de végül lezárod úgy, hogy túl sok volt a bizonytalanság ebben a történetben. És lehet, hogy azóta Boti megtudta Bogitól a terved és most kerestetni fog. Így kicsit nyugtalanul térsz nyugovóra.
      <p>
				Az éjjel mégis eseménytelenül zajlik. Miközben azon gondolkodsz, mi legyen most a terved, átvedd-e még mindig a hatalmat a város felett vagy éld az egyszerű hősök életét, észreveszed, hogy kevés már otthon a kajád. Gondolod, elmész a piacra.
      </p>
			`,
		obj: ["E_szakítás Bogival", "E_Boti üldöz"],
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 5,
			},
			{
				id: "esz",
				crease: -1,
			},
			{
				id: "ero",
				crease: 5,
				rnd: 5,
			},
		],
		buttons: [
			{
				txt: "Induljunk!",
				new: 113,
			},
		],
	},
	{
		num: 218,
		title: "Boti emberei elkapnak útban hazafelé",
		type: "fight",
		pic: "gangcars.jpg",
		nmepic: "szekus.jpg",
		att: 100,
		def: 50,
		speed: 8,
		hp: 200,
		desc: `
      <p>
			 Ahogy sétálsz hazafelé, hirtelen két rendőrautó áll meg csikorgó fékekkel előtted és mögötted. Ösztönösen keresed a menekülési útvonalat, de nem találod. Előre megtervezték a rajtaütés színhelyét. Ezek Bitang Botond emberei! Ki is ugrik belőle több álrendőr, és az egyik így szól:
      </p>
			<p>
				- Lám, lám, <span id="fullName"></span>! A vakmerő hős, aki keresztbe akar tenni Bitang polgármester urunknak! Sajnos ezt nem engedhetjük, ezért meg kell ölnünk téged!
			</p>
			<p>
				Kemény harcnak nézel elébe, mert sokan vannak és nem tudsz elmenekülni sem!
			</p>
    `,
		buttons: [
			{
				txt: "Pedig most nem is vettem kakaót...",
			},
		],
		pass: 219,
		death: true,
		modi: "Kifújod magad a nagy csata után. Ezt most megnyerted, de tudod, hogy nem lesz nyugtod mostantól. Lecseréled más névre az irataidat, új online profilt alkotsz, új frizurát csináltatsz és elköltözöl a város egyik csendesebb helyére."
	},
	{
		num: 219,
		title: "Szürke hétköznapok",
		type: "normal",
		music: "slowguitar",
		pic: "starttown.jpg",
		desc: `
      <p id="modified"></p>  
      <p>
       Visszahúzódva éled tovább csendes hétköznapjaidat. Eleinte még fáj, ha látod, hogy Boti emberei bántalmaznak másokat, később már szenvtelenül elfordulsz. Egy kiégett hős lettél, akit az emberek is már egyre inkább elfelejtenek...
      </p>
      <p>
       Egy napon viszont váratlan események ráznak fel letargiádból. Egyre erősödő hangokat hallasz az utcán. Az emberek izgatottan kiabálnak, egyre több új hangot hallasz. Kimész, hogy megnézd, mi történik.
      </p>
      <p>
       Egyre növekvő tömeg gyűlik össze az utcán és egy irányba kezdenek tartani. Mielőtt bármit csinálnál, megragadnak téged is:
      </p>
      <ul>
			<li>
				Gyere velünk! Bitang Botond földönkívüliekkel akarja elvenni azt a keveset, ami megmaradt nekünk: a munkánkat és a szabad akaratunkat. Fellázadt a város!
			</li>
			<li>
				Elsöpörjük a zsarnokot! 
			</li>
			<li>
				Ezek az UFO-k kiszívják az agyadat! 
			</li>
			<li>
				Képesek a végbélen át eltávolítani az ember szemöldökét! Akár mind a kettőt egyszerre!
			</li>
			<li>
				Én azt hallottam, hogy levizelik a lelkedet! Semmi sem szent nekik! 
			</li>
			<li>
				A fingjuk rákkeltő! Már tanítják rá Boti embereit is! 
			</li>
			<li>
				Munkát akarunk! Szabadságot akarunk! Vesszen a zsarnok! Irány a Városháza!
			</li>
			</ul>
			<p>
				Magával ragadnak az események, sodródzs a tömeggel. Hirtelen valaki elkiáltja magát:
			</p>
			<ul><li>
				Nézzétek! <span id="fullName"></span>! Ő mentett meg minket Battle Beetle-től!
			</li></ul>
			<p>
				Ez egy lavinát indít el. Egyre többen ismernek fel és te is egyre több régi ismerőst látsz meg a tömegben. Mindenki benned látja a szabadulás útját, ami újból lángra lobbantja harci véredet. Mire eléritek a Városházát, már a dühös tömeg vezetője vagy.
			</p>
    `,
		change: [
			{
				id: "hat",
				crease: 15,
				rnd: 10,
			},
			{
				id: "sup",
				crease: 150,
				rnd: 100
			},
			{
				id: "lel",
				crease: -1,
			},
		],
		buttons: [
			{
				txt: "Egye fene, tegyünk még egy végső próbát!",
				new: 238,
			},
		],
	},
	{
		num: 220,
		title: "A bübük",
		type: "normal",
		music: "bübük",
		pic: "bübük.jpg",
		desc: `
      <p>
				- Valójában nem tudom kik ezek - válaszol Zsolt nevetve. - Én csak bübüknek hívom őket, ők meg a vezérüknek tartanak. Nem mindig értem őket, de ők valahogy mindig kitalálják, mit akarok. De nem is a szavak számítanak itt az erdőben, hanem a tettek. Már nem is tudom, mikor költöztem ki az erdőbe, amikor elegem lett abból, ami a városban van. Bitang Botond, Battle Beetle... Minden állatot csak elszomorítanak, akik oda tévedtek. És tiszta sport sincs azóta, csak a bunda! Kifordítom, béfordítom, mégis bunda a bunda! Elegem lett! Kijöttem ide élni. A bübük befogadtak, én pedig a védelmezőjükké váltam. Vittem némi szervezettséget az életükbe, ők pedig sokmindenre megtanítottak az erdei életből. A leghasznosabb talán az a képesség volt, amit én csak bübüszimatnak hívok.
			</p>
			<p>
				- Bübüszimat? Az mi? - kérdezed érdeklődéssel.
		 	</p>
		 	<p>
			  - Egyfajta érzék, amivel előre ki lehet szimatolni a veszélyt. Én például megérzem, hogy hol jön betolakodó a mi területünkre. Meg akarod tanulni? - teszi fel hirtelen a kérdést Zsolt. Erre viszont a bübük elkezdenek hevesen sípolni és ugrálni. - Haha! Igazuk van! Ezt a képességet csak annak adják át, aki már bizonyított! 
		 	</p>
		 	<p>
			 	- És mit kell bizonyítani?
		 	</p>
			<p>
				- Gyere velem! - kacsint titokzatosan Zsolt, majd levezet egy völgyben egy barlang bejáratához. A bübük lelkesen követnek titeket. - Ide kell bemenni és eljutni a barlang közepéig, miközben gyűjtögetsz nekünk mindenféle hasznos ásványt!
			</p>
			<p>
				- Nincs saját bányászotok? - szalad ki a szádon a gyanakvó kérdés. Zsolt felnevet.
			</p>
			<p>
				- A bübük sajnos fizikailag alkalmatlanok a berregő csákány használatára, mással pedig nem tudjuk kiszedni a földből az ásványkincseket! - mondja, azzal átnyújt neked egy fura munkagépet, ami leginkább György úrra, a lumbágós hangyászsünre emlékeztet, akit egyszer láttál egy dokumentumfilmben. - Egyszerű a használata: odanyomod a falhoz és megnyomod ezt a gombot. A szűrő lepergeti a földet, a tartályban meg megmarad a kemény ásvány. Ha ez a lámpa világít, akkor megtelt a tartály, ürítsd ki a zsákodba! Ennyi. Én sajnos azért nem bányászhatok, mert én vagyok az erdő ura, őriznem kell a rendet, így nincs időm barlangokban rohangászni... Ha kész vagy, a barlang közepén találsz egy nagy kosarat. Azzal fel tudunk húzni a gyűjtött kincseiddel együtt! 
			</p>
			<p>
				- Nem lehetne, hogy eleve oda eresszetek le?
			</p>
			<p>
				- Nem - mondja Zsolt, legyintve egyet a kezével. A keletkezett légáramlattól elveszíted az egyensúlyod és legurulsz egyenesen a barlang mélyébe...
				</p>
		`,
		change: [
			{
				id: "ero",
				crease: -5,
				rnd: 5,
			},
		],
		buttons: [
			{
				txt: "Remélem, megérte ez a zuhanás!",
				new: 239,
			},
		],
	},
	{
		num: 221,
		type: "trial",
		value: "ugy",
		pass: 222,
		fail: 223,
	},
	{
		num: 222,
		title: "Megölted Bitang Botondot",
		type: "normal",
		music: "actionIncrease",
		pic: "panicrowd.jpg",
		desc: `
      <p>
				Amint kifújod a mérges tüskét, Botond torkán akad a szó, hátra esik és elterül. Sikerült! A zsarnok halott!
			</p>
      <p>
       A tömegben kitör a pánik. Különösen azok ijednek meg, akik látták a rendőrfőnököt és Botit is elterülni egymás után. Elkezdenbek sikoltozni és menekülni, bár néhány kemény fickó csak kíváncsian és egykedvűen várja a fejleményeket és az esetleges magyarázatot. Oshinokora nézel, de ő is téged néz. Neked kell döntened, mi legyen.
      </p>
    `,
		obj: ["X_Boti"],
		buttons: [
			{
				txt: "Nyíltan átveszed a hatalmat",
				new: 227,
			},
			{
				txt: "Inkább most csak csendben lelépsz",
				new: 245,
			},
		],
	},
	{
		num: 223,
		title: "Meghiúsult a merénylet",
		type: "death",
		music: "crowdshout",
		stopmusic: true,
		pic: "booing.gif",
		desc: `
      <p>
				Sajnos a kezed a kritikus pillanatban beremeg, így az előtted álló öregasszonyt lövöd le. Az egy halk nyögéssel összeesik.
			</p>
      <p>
				- Gyilkos!!! - ordítja valaki és a tömeg egyből neked támad hatalmas ütésekkel. Oshinoko próbál áttörni rajtuk, de már nem látod, hogy sikerül-e nekik, mert vér borítja be a szemed és az önbíráskodó tömeg pillanatok alatt meglincsel...
			</p>
    `,
	},
	{
		num: 224,
		title: "Szenyamuki segít a füstben",
		type: "normal",
		music: "actionIncrease",
		pic: "smoke.gif",
		desc: `
      <p>
				Szenyamuki bólint és int, hogy menjetek utána. Szorosan követitek a sűrű füstben. Körülöttetek visítozó emberek elmosódott körvonalai úsznak el. Egyszer csak Szenyamuki szól, hogy álljatok meg, azzal eltűnik.
			</p>
      <p>
       Oshinokoval egymásra néztek. Talán már nem is a téren vagytok, hanem egy mellékutcában, de a füst nagyon sűrű it is. Nemsokára Szenyamuki hangját halljátok egy kissé messzebbről.
      </p>
			<p>
				- Jöjjön polgármester úr, kivezetem biztonságban!
			</p>
			<p>
				- És eddig hol a francban voltál?! - dörren rá egy mély hang. Nem Botié, hanem valaki másé.
			</p>
			<p>
				- Senki nem beszélhet velem így! - mondja önérzetesen Szenyamuki, aztán egy suhintást hallotok és valaki nyögve a földre zuhan mellettetek.
			</p>
			<p>
				- Mit csináltál?! Megölted a Borbélyt! Normális vagy?! - hallatszik ezúttal Boti rikácsoló hangja. Oshinoko melletted azonnal kapcsol, hogy a fivére miben mesterkedik. Megindul a hang irányába és te követed. Szenyamuki és Boti körvonalai rajzolódnak ki előttetek. A két fivér egymásra kacsint. Aztán Szenyamuki Botihoz fordul.
			</p>
			<p>
				- Bár beszólt nekem, engem köt a szerződésem. Így nem én fogom magát kinyírni. - mondja flegmán, azzal odadobja elétek Botit.
			</p>
			<p>
				Oshinokoval teljes összhangban mutattok be egymás után halálos fogásokat a zsarnokon. Pár pillanat múlva már élettelenül fekszik előttetek. Oshinoko hamis mosollyal a fivérére néz:
			</p>
			<p>
				- Mióta fontos neked a szerződés?
			</p>
			<p>
				- Nem akartalak titeket megfosztani az élvezettől... Na jó, most hogy a rendőrfőnök és a polgármester is halott, javaslom, vonuljunk vissza. Biztonságosabb lenne a ma éjszakát a városon kívül töltenetek. Amit tudok, elrendezek, de biztosan hajtóvadászatot rendez a megmaradt banda a gyilkosok elkapására. Holnap meg átveheted a hatalmat, <span class="name"></span>.
			</p>
    `,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 5,
			},
			{
				id: "hat",
				crease: 5,
			},
		],
		buttons: [
			{
				txt: "Nem, én most veszem át a hatalmat!",
				new: 227,
			},
			{
				txt: "Rendben, lelépek Oshinokoval az erdőbe",
				new: 245,
			},
		],
	},
	{
		num: 225,
		title: "Harc a füstben",
		type: "fog",
		music: "actionIncrease",
		pic: "smoke.gif",
		desc: `
      <p>
        - Sajnálom, nem harcolok a vesztes oldalon! - mondja pökhendi grimasszal Szenyamuki. Oshinoko ordít egyet japánul és nekiugrik. Mindketten eltűnnek a füstben. Gondolkodsz, mi lenne a legjobb. Talán a füst kapóra jön és meg tudod ölni Botit észrevétlenül benne. Elindulsz, hogy megkeresd.
      </p>
      <p>
        A következő képernyőn különféle alakok fognak előbukkanni a ködből. Próbálj meg rájönni, ki Boti, és leginkább őt üsd meg, amíg látod. Ha polgárokat ütsz meg, csökken a támogatásod és a lélek pontod. Szenyamuki és a biztonsági őrök téged ütnek meg, ha nem ütöd meg őket előbb. Szenyamuki sokkal nagyobbat üt. A két testvér egymást is támadja, így próbáld meg Oshinokot életben tartani. A harcnak akkor van vége, ha valamelyik kulcsfigura meghal.
      </p>
    `,
		buttons: [
			{
				txt: "Nosza!",
			},
		],
		oshinoko: 253,
		szenyamuki: 254,
		boti: 255,
	},
	{
		num: 226,
		title: "Bitang Botond üldözése",
		type: "pursuit",
		level: 9,
		music: "longmixed",
		pic: "runner.gif",
		goalpic: "boti.jpg",
		desc: `
      <p>
        A győztes harc után gyorsan felméred a kárt.
      </p>
			<p id="casualties"></p>
      <p>
        De nincs időd sokat mélázni, mert látod, hogy közben Boti meglógott a térről. Elkezditek keresni.
      </p>
      <p><i>
        A nyomokat a megjelenő műveletek megoldásával fedezed fel. Minél gyorsabban válaszolsz, illetve minél több az Eszed és az Ügyességed, annál közelebb kerülsz Botihoz. Annyi időd van rá, amennyi az Erődből telik.</i>
      </p>
    `,
		change: [
			{
				id: "sup",
				crease: 150,
				rnd: 100,
			},
			{
				id: "hat",
				crease: 10,
			},
		],
		buttons: [
			{
				txt: "Ne hagyjuk meglógni!",
			},
		],
		pass: 232,
		modi: "A nyomokat követve sikerül elkapnotok Botit. Mindketten ki vagytok dögölve, de melletted ott állnak az embereid, Boti viszont egy szál egyedül maradt. Lihegve könyörögni kezd:</p><p>- Jól van, te nyertél! Szólok, hogy adják át neked a városházát! Aztán eltűnök innen örökre...</p><p>Eléggé megtörtnek látszik ahhoz, hogy trükközzön, és mivel ki is vagy fulladva te is, úgy döntesz, megkíméled az életét. Boti megköszöni, majd közelebb hajol hozzád és suttogva mondja, hogy csak te halld:",
		fail: 228,
	},
	{
		num: 227,
		type: "trial",
		value: "sup",
		pass: 246,
		fail: 247,
	},
	{
		num: 228,
		title: "Bitang Botond meglógott",
		type: "normal",
		music: "slowguitar",
		pic: "darkstreet.jpg",
		desc: `
			<p>
				Hiába minden igyekezetetek, nem sikerül megtalálnotok Botit. Végül már leszáll az éj és mindenki baromi fáradt. Gondoljátok, ha van egy kis esze, még az is lehet, hogy elmenekült a városból és többé nem tér vissza. Végül te is hazamész.
			</p>
			<p>
				Mikor másnap felébredsz, gondolkodsz, mi lehetne most a következő lépés.
			</p>
			`,
		change: [
			{
				id: "sup",
				crease: -10,
				rnd: 40,
			},
			{
				id: "hat",
				crease: -1,
				rnd: 5,
			},
		],
		buttons: [
			{
				txt: "Visszamész a főtérre és bejelented, hogy átveszed a hatalmat",
				new: 227,
			},
			{
				txt: "Elmész a piacra, mert kaját mindenképp venned kell",
				new: 113,
			},
		],
	},
	{
		num: 229,
		title: "Belépés a Városháza rendszerébe",
		type: "normal",
		music: "raveaction",
		pic: "server.jpg",
		desc: `
      <p>
       Elkezded pötyögni a jelszót.
      </p>
    `,
		input: {
			label: "De mit pötyögsz?",
			max: 28,
			key: "85bz4ruiewghwnoiuhjro7önxhek",
		},
		pass: 230,
		fail: 252,
		modi: "A kijelzőn felvillan egy üdvözlő felirat. Bejutottál a rendszerbe! Nem kell sokat keresgélned, hogy rájöjj, melyik ajtókat kell feloldanod ahhoz, hogy bejuss Botihoz. Sőt magát Botit és az őrök tartózkodását is látod. Egy ideig megfigyeled a mozgásukat, aztán amint szabad lesz az útvonal, azonnal elindultok Fricivel."
	},
	{
		num: 230,
		title: "Sikeres bejutás",
		type: "normal",
		music: "raveaction",
		pic: "server.jpg",
		desc: `
			<p id="modified"></p>
			<p>
				Szerencsétek van! Anélkül bejuttok Boti szobájáig a menekülő-alagúton át, hogy találkoznátok őrökkel. Benyittok.
			</p>
    `,
		buttons: [
			{
				txt: "Jó napot kívánok!",
				new: 256,
			},
		],
	},
	{
		num: 231,
		title: "Elbuktátok a választást",
		type: "normal",
		music: "slowguitar",
		pic: "s-bad.png",
		desc: `
			<p>
       Sajnos Bitang Botond pártja nyert. A <span class="part"></span> csalódott. Talán a névválasztás nem volt szerencsés? Vagy a program nem volt túl vonzó? A kampány volt gyenge? 
      </p>
			<p>
				Rövid beszéddel elköszöntök az összegyűlt hívektől, aztán hazamentek. Még nem tudod biztosan, hogy akarsz-e legközelebb is indulni, vagy elég volt ennyi a politikából.
			</p>
    `,
		change: [
			{
				id: "sup",
				crease: -20,
				rnd: 50,
			},
			{
				id: "hat",
				crease: -10,
				rnd: 20,
			},
			{
				id: "lel",
				crease: -2,
				rnd: 3,
			},
		],
		buttons: [
			{
				txt: "Ezek nem érdemelnek meg engem!",
				new: 219,
			},
		],
	},
	{
		num: 232,
		title: "Boti utolsó szavai",
		type: "normal",
		music: "darkmystic",
		pic: "boti.jpg",
		desc: `
			<p id="modified"></p>
			<p>
       - Egy valamit nem árt, ha tudsz, ha átveszed a hatalmat. Szerinted Battle Beetle és a Big Bugok ebből a világból származtak? Nem gyanakodtál arra, hogy földönkívüliek? Battle Beetle az ő ügynökök volt. Most, hogy eltetted őket láb alól, már útban vannak az idegenek. Lehet, hogy holnap ideérkeznek. És akkor itt kő kövön nem marad. 
      </p>
			<p>- Kik ezek az idegenek? - teszed fel némi aggodalommal a kérdést. De Boti most távolabb lép, széles mosollyal kezet ráz veled és hangosan így szól:
			</p>
			<p>
				- Sok sikert a város vezetéséhez!
			</p>
		`,
		buttons: [
			{
				txt: "Eh, ezzel a mesével ráér később is foglalkozni!",
				new: 237,
				modi: "Nem nagyon törődsz már vesztes, összetört ellenfeleddel, inkább örülsz a győzelemnek. Rég vártál már erre és végre sikerült, te lettél a város vezetője!"
			},
		],
	},
	{
		num: 233,
		title: "A Feneketlen-tónál",
		type: "normal",
		music: "storm",
		pic: "nightrain.gif",
		desc: `
			<p>
       Bogi eltűnik, te pedig elindulsz a Feneketlen-tóhoz. Sőtét éjjel van. Amikor odaérsz a tóhoz, nem nagyon látsz mást. Az eső elkezd szemerkélni. Gyorsan megkeresed a csónak-házat. Amikor az ajtóhoz érsz, látod, hogy csak rá van téve a lakat, de nincs bezárva. Leszeded és belépsz.
      </p>
			<p>
				Nincs bent senki, csak pár csónak, evezők és kötelek. Nem nehéz elrejtőzni. Miközben vársz, az eső egyre erősebb lesz. Aztán kintről fény szűrődik be, és hallod is az érkező kocsi motorzúgását. Nyílik az ajtó.
			</p>
			<p>
				- Gyorsan, gyorsan, mert elázunk! - hallod meg Bogi hangját. Aztán már vágódik is ki az ajtó és belépnek. A lélegzetedet is visszafojtod. Két egymásra tett csónak közötti vékony résen át látod, hogy Bitang Botond és Bogi egymáshoz közel siet be. Csak a derekukat látod, de jó közel van egymáshoz. Felváltva ütődik neki hol Bogi, hol Boti a csónakoknak, aztán megállapodnak. Érzed, hogy izzik körülöttük a levegő. Mi van, ha ezek mégis szerelmesek egymásba és ez megint egy csapda? De a sofőrt nem látod sehol. Sem mást kettőjükön kívül. Ekkor Bogi megszólal:
			</p>
			<p>
				- Várj még!
			</p>
			<p>
				- Mégis mire?
			</p>
			<p>
				- Egy kis meglepetés! - mondja Bogi, azzal látod, hogy megfogja Botit és a csónak vége felé löki. Fél karnyújtásnyira kerül tőled Boti, megérted, hogy Bogi ezzel neked jelzett.
			</p>
		`,
		buttons: [
			{
				txt: "Akció!",
				new: 257,
			},
		],
	},
	{
		num: 234,
		title: "Éjjeli harc az erdőben",
		type: "finalwar",
		friends: "vadállatok",
		enemies: "éjjeliműszak",
		opts: "J_Oshinoko, J_Ügyes Frigyes",
		music: "gangwar",
		pic: "nightrain.gif",
		desc: `
      <p>
				Amint elaludnál, furcsa zaj ver fel. Telihold van és az eső is elkezdett esni. Szétnézel és elemlámpák fénye villódzik a fák között. <span class="ally"></span> is felébred. 
      </p>
			<p>
				- Ezek az álrendőrök! Keresik Boti gyilkosát! Erősítést kell hívnom! - mondja halkan, de határozottan <span class="ally"></span>, azzal előkap egy furcsa körte alakú tárgyat. Megfújja, mire az egy alig hallható magas hangot ad ki. <span class="ally"></span> csendben fülel és nézelődik, majd végül bólint: - Jönnek!
			</p>
			<p>
				- Kik? - kérdezed, mert hiába mereszted a szemed, senkit nem látsz, csak a közeledő pásztázó fényeket.
			</p>
			<p>
				- Az erdei vadak! - monjda <span class="ally"></span>, majd rögtön egy kiáltást hallasz és - alig hiszed el, hogy jól látod! - az egyik fa az ágával hatalmasat üt az egyik támadóra, aki ettől nagyot repül. Majd megvillan mögötte egy gonosz szempár, egy félelmetres morgást hallasz és kegyetlen bírkózásba kezd az ember valami bestiális lénnyel.
			</p>
			<p>
				- Én segítem őket, te meg ezekkel segíts! - mondja <span class="ally"></span> és ad két gránátot meg egy zacskót furcsa porral.
			</p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
        A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy döntését az egység a váratlan események ellenére is. Az egységek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      <p>
        Jó szórakozást!
      </p>
      </i>
    `,
		obj: ["W_KÉZIGRÁNÁT", "W_KÉZIGRÁNÁT", "W_VARÁZSPOR"],
		buttons: [
			{
				txt: "Induljon a harc!",
			},
		],
		pass: 248,
		fail: 250,
	},
	{
		num: 235,
		title: "Boti megtalálása a Városházán",
		type: "normal",
		music: "raveaction",
		pic: "boti.jpg",
		desc: `
			<p>
       Botira végül egy zárt szoba ajtajának berúgása után találsz rá egy szekrényben. Gyanús volt, hogy ki van hányva belőle minden ruha a földre. Ilyen amatőrt!
      </p>
			<p>
				Kirángatod. Egyáltalán nem nagylegény így egyedül. Annyira reszket a félelemtől, hogy szinte már megsajnálod. Próbál többször is úrrá lenni köhögésekkel remegő hangján, ahogy könyörögni kezd neked:
			</p>
			<p>
				- Jól van, te győztél! Elismerem. Átadom a városháza belépési jogosultságait. Csak kíméld meg az életem! Eltűnök a megmaradt embereimmel együtt. Keresünk egy másik távoli várost. Nem láttok minket többé. Tiéd a győzelem!
			</p>
			<p>
				Úgy érzed, ez is elég. Nem vagy te egy véreskezű gyilkos, elég neked, ha legyőzöd a gonoszt és helyreállítod a rendet. Meg egyébként is már elfáradtál. Meg talán tényleg szükség lesz technikai okokból a jogosultságok átvételére még Botira. Így beleegyezel, hogy nem ölöd meg. Boti felsóhajt és kicsit összeszedi magát. Közben többen is bejöttek a szobába. Ezért odahajol hozzád, és halkan suttogja, hogy csak te halld:
			</p>
		`,
		buttons: [
			{
				txt: "Mit?",
				new: 232,
			},
		],
	},
	{
		num: 236,
		title: "Házasság Zsolttal",
		type: "normal",
		music: "love",
		pic: "erdei.jpg",
		desc: `
      <p>
       - Köszönöm, <span class="name"></span>, szerelmem! - mondja elérzékenyülten Zsolt, azzal megölel. A nép még hangosabb üdvrivalgásba tör ki, dobálják a kalapjaikat, nadrágjaikat, kártyapaklijaikat. Bodri papa, a kocsmáros, ingyen csapra ver egy egész hordó Ászok Ászát (bár utána pénzt kér azoktól, akik isznak is). De téged ez már nem érdekel.Érzed, ahogy egyszerre dobban a szívetek Zsolttal, mélyen egymás szemébe néztek és megcsókoljátok egymást... Repülsz, repülsz a fellegekbe...
      </p>
      <p>
       Az esküvőt az erdei tisztáson tartjátok meg, a bübük és számos ember kíséretében. Sőt, még pár mozgó fa is rád kacsint. Hogy mik élnek itt az erdőben! De mivel te lettél a város elöljárója, a Városházát is elfoglaljátok. Ott is együtt vagytok. Megtervezitek a sportéletet, csak olyan beruházásokat hagysz jóvá, ami nem árt az erdőnek, de használ az embereknek. Ünnepelt pár vagytok, az egész város szeret titeket. A hősnő és a legyőzhetetlen erdei boxoló!
      </p>
			<p>
				Így élitek életeteket - közel fél éven át. Akkor viszont történik valami...
			</p>
    `,
		change: [
			{
				id: "lel",
				crease: 20,
				rnd: 10,
			},
			{
				id: "hat",
				crease: 30,
				rnd: 20,
			},
			{
				id: "sup",
				crease: 300,
				rnd: 200,
			},
		],
		buttons: [
			{
				txt: "Jaj, ne történjen semmi, legyen itt vége!",
				new: 300,
			},
			{
				txt: "Jöjjön a Bazibrutál 3. része!",
				new: 301,
			},
			{
				txt: "Szórakoznék így a végén egy kicsit a stábbal",
				new: 269,
				cond: ">_sup_1000"
			},
		],
	},
	{
		num: 237,
		title: "A Városháza elfoglalása",
		type: "normal",
		music: "happyDance",
		pic: "townhall.JPG",
		desc: `
			<p id="modified"></p>
			<p>
       Miután elfoglaltátok a Városházát, hozzálátsz egy új világ megalkotásához. <span class="ally"></span> segítségével - akit rögtön megtettél alpolgármesternek - kiűzítek Boti<span class="cond" data-cond="!X_Boti">t és</span> megmaradt embereit a városból. Kétszer is véget vetettél a zsarnokságnak, az egész nép téged ünnepel! Számos hasznos intézkedést vezetsz be, amitől az emberek jobban és boldogabban élnek, és rend uralkodik az egész városban. Mindenki szeret téged. Még az állatok és intelligens növényi életformák is.
      <p>
      <p class="cond" data-cond="E_love Bogi">
				Összeházasodtál Bogival is, akit innentől fogva <span class="name"></span>né Wakanának hívnak. A sok közös küzdelem örökre összekovácsolt titeket. Már alig várjátok, hogy gyereketek is szülessen, akiből majd szintén egy igazi hőst faragtok. Vagy akár jöhet egy egész hőscsapat is...
			</p>
			<p>
				Így éled boldog életed - közel fél éven át. Akkor viszont történik valami...
			</p>
    `,
		change: [
			{
				id: "lel",
				crease: 20,
				rnd: 10,
			},
			{
				id: "hat",
				crease: 30,
				rnd: 20,
			},
			{
				id: "sup",
				crease: 300,
				rnd: 200,
			},
		],
		buttons: [
			{
				txt: "Jaj, ne történjen semmi, legyen itt vége!",
				new: 300,
			},
			{
				txt: "Jöjjön a Bazibrutál 3. része!",
				new: 301,
			},
			{
				txt: "Szórakoznék így a végén egy kicsit a stábbal",
				new: 269,
				cond: ">_sup_1000"
			},
		],
	},
	{
		num: 238,
		title: "A végső felkelés",
		type: "finalwar",
		friends: "finalfriends",
		enemies: "finalnmes",
		opts: "J_Oshinoko, J_Szenyamuki, X_Szenyamuki, J_Ügyes Frigyes, J_Kocsmatöltelékek, J_Erdei Zsolt, J_Bogi, X_Bogi",
		music: "finalwar",
		pic: "townhall.JPG",
		desc: `
      <p>
				- Roham!!! - adod ki a tömegnek a parancsot és véres összecsapás veszi kezdetét a zsarnok embereivel.
      </p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
        A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosság azt mutatja, hogy mennyire követi az eredeti parancsot vagy döntését az egység a váratlan események ellenére is. Az egységek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
      </p>
      <p>
        Jó szórakozást!
      </p>
      </i>
    `,
		buttons: [
			{
				txt: "Harcra fel, győzni kell",
			},
		],
		pass: 202,
		fail: 263,
	},
	{
		num: 239,
		title: "Az erdei barlangban",
		type: "dig",
		size: 15,
		level: 6,
		gems: ["Energia", "Bronz", "Ezüst", "Arany"],
		music: "underground2",
		pic: "cave.gif",
		desc: `
      <p>
        Feltápászkodsz és körülnézel. Gyér fény világítja be fentről a barlangot, bár úgy látod, beljebb remegve ég néhány fáklya. Kipróbálod a berregő csákányt. Tényleg berreg, alul kijön belőle a föld és a tartályban valami koppan. Kinyitod és látod, hogy egy nemesfém-rög! Lehet, hogy egy hihetetlenül értékes barlangba kerültél. A berregő csákány használata ugyan elvesz némi energiát, de legalább tudsz folyamatosan gyűjtögetni, miközben keresed a barlang közepét, ahonnan állítólag majd felhúznak.
      </p>
			<p><i>
        Először válassz ki egy szélső mezőt, ahonnan indulsz. Utána a billentyűzet nyilaival tudod irányítani, hogy merre mész tovább. Minél világosabb földben haladsz, annál kevesebb energiába kerül az ásás, de a sötétebb földek több és értékesebb ásványokat rejtenek. A kék sziklás talajban nem tudsz haladni, azt ki kell kerülnöd. Figyeld folyamatosan az Energia-szintedet, mert amíg van elég, addig mászklálhatsz ide-oda gyűjtögetve ásványokat, de a végén mindenképpen meg kell érkezned középre, mert ott tudnak felhúzni. Készen állsz?
			</i></p>
    `,
		buttons: [
			{
				txt: "Igen, mindig is bányász szerettem volna lenni!",
			},
		],
		pass: 240,
		fail: 241,
	},
	{
		num: 240,
		title: "Sikeres erdei barlangászat",
		type: "kotyvaszt",
		music: "bübük",
		pic: "bübük.jpg",
		prodtxt: "Beletöltitek a kincseket a kohóba, amiből alul a következő tárgy jön ki:",
		desc: `
      <p>
				Már egy jó ideje mész és berregsz, amikor végre megpillantasz egy nagy kosarat, amit egy vastag kötél tart. Felnézel és tényleg a szabad ég felé vezet. Beszállsz, megrángatod a kötelet és felordítasz, hogy hőzzanak fel.
			</p>
			<p>
				A kosár megmozdul és te elindulsz felfelé. Amikor végre megérkezel a felszínre, látod, hogy bübük lelkes, gurgulázó tömege vesz körül. Zsolt segít kiszállni, elnézést kér, hogy lelökött, nem így akarta, csak legyinteni akart egyet, de örül, hogy épségben, kincsekkel megrakodva visszatértél. Ezután begyűjtik a kincseket, és pár bübü már hoz is egy kerekeken guruló mobilkohót. Zsolt elkezd magyarázni:
			</p>
			<p>
       - Köszönjük szépen, nagy segítség ez nekünk! Rögtön be is olvasztjuk a megszerzett kincseket. Ez a kohó, amit mi csak Leninkének hívunk, mindig csinál a berakott anyagokból valamit, nagyon szuper! Ügyes Frigyes, a város ezermestere készítette nekünk, aki szintén kijön néha az erdőbe. Mivel te szerezted meg az ásványokat, rád bízzuk, hogy mennyit olvasszunk be. Egy dolog a fontos: nem muszáj egyszerre az összes ásványt belerakni, mert Leninke mindig csak egy dolgot csinál a kapott összes mennyiségből. Ha tudsz néhány receptet, az megkönnyíti a dolgunkat, de ha nem, akkor is valamit csinál belőlük Leninke. Legfeljebb nem tudjuk semmire használni. A GYÁRTÁS gomb sajnos már néha akad, olyankor kétszer is meg kell nyomni!
      </p>
    `,
		Xchange: "treasure",
		cont: 264,
	},
	{
		num: 241,
		type: "Ytrial",
		value: "E_love Zsolt",
		pass: 242,
		fail: 243,
	},
	{
		num: 242,
		title: "Zsolt szíve megesik rajtad",
		type: "normal",
		music: "love",
		pic: "erdei.jpg",
		desc: `
      <p>
       Eleged lesz az egész ásásból, ott hagyod az egész kincset. Megpróbálsz visszajutni oda, ahonnan jöttél, de lehetetlen visszamászni. Elkezdesz kiabálni. Nem kell sokáig várni, Zsolt mintha megérezte volna, hogy baj van, megjelenik felül, aztán egy szökelléssel döngve leugrik melléd.
      </p>
      <p>
       - Itt vagyok, ne aggódj! Látom, nem sikerült teljesítened a küldetést, de nem baj. Szerencsére én vagyok itt a főnök. Gyere! - mondja kedves hangon, aztán az egyik karjával átkarol, felemel, a másikkal pedig  elkezd felfelé mászni veled. Teljesen lenyűgöznek a képességei! A szükségesnél talán szorosabban kapaszkodsz belé...
      </p>
			<p>
				Amikor felértek, gyengéden letesz a puha pázsitra, aztán a bübükhöz fordul.
			</p>
			<p>
				- Bár <span id="fullName"></span> nem jutott el a kincsekkel a kosárig, azért így is sokat fáradozott, hogy segítsen nekünk. Jutalomból megtanítjuk neki a Bübüszimatot!
			</p>
			<p>
				A bübük megrökönyödve egymásra néznek, aztán az egyik, aki talán 1 centivel magasabb, mint a többi, Zsolt elé lép és elkezd morogva gőgicsélni, mint valami csecsemő, akinek mindig 5 centivel hátrébb rakják a játszószőnyegen a cumit, hogy mászásra ösztönözzék.
			</p>
			<p>
				Zsolt egy ideig hallgatja, aztán amikor rájön, mi a gond, teleszívja a tüdejét, amivel akkorára dagad, mint két egymás nyakában ülő pankrátor. A bübü hirtelen abbahagyja a beszédet, majd vinnyogva a tömeg közepe felé nyargal. A többi bübü is láthatóan belenyugszik ezután Zsolt döntésébe.
			</p>
		`,
		change: [
			{
				id: "hat",
				crease: -1,
				rnd: 1,
			},
			{
				id: "lel",
				crease: -1,
			},
		],
		buttons: [
			{
				txt: "Jöjjön az új képesség!",
				new: 264,
			},
		],
	},
	{
		num: 243,
		title: "Elbuktad Erdeiék próbáját",
		type: "normal",
		music: "bübük",
		pic: "erdei.jpg",
		desc: `
      <p>
       Eleged lesz az egész ásásból, ott hagyod az egész kincset. Megpróbálsz visszajutni oda, ahonnan jöttél, de lehetetlen visszamászni. Elkezdesz kiabálni. Jó sokára hallanak meg. Zsolt feje jelenik meg felül és ledob neked egy kötélhágcsót. Felmászol rajta.
      </p>
      <p>
       - Sajnos nem álltad ki a próbát. Csalódtunk benned, <span class="name"></span>. Egy igazi hős nem ilyen! Kérlek, hagyd el a területünket! - mondja Zsolt határozottan. Látod, hogy ő is és az összes bübü ellened fordult. Jobbnak látod távozni...
      </p>
			<p>
				Bolyongsz egy ideig, és már késő este van, amikor kijutsz az erdőből. Nincs már semmi máshoz kedved, csak hazamenni.
			</p>
		`,
		change: [
			{
				id: "hat",
				crease: -3,
				rnd: 4,
			},
			{
				id: "lel",
				crease: -3,
				rnd: 2,
			},
			{
				id: "ero",
				crease: -3,
				rnd: 6,
			},
		],
		buttons: [
			{
				txt: "Édes otthon!",
				new: 46,
			},
		],
	},
	{
		num: 244,
		title: "Harc a Városháza folyosóin",
		type: "dungeon",
		pic: "corridor.gif",
		music: "raveaction",
		desc: `
			<p>
				Rohantok Fricivel a folyosókon Boti szobáját keresve.
			</p>
			`,
		contBtn: "Tovább keresel",
		passBtn: {
			txt: "Megvagy!",
			new: 256,
		},
		passDesc: "<p>Az egyik zárt szoba ajtaját berúgva üres szobába lépsz be. Valami gyanús, mert az egyik szekrény előtt halomban állnak a ruhák. A szekrény mellé lépve halk zihálást hallasz belülről. Az amatőr! - gondolod és felrántod a szekrényajtót. Boti az, teljesen halálra rémülve!</p>",
		fight: 251,
		end: 15,
		find: [
			"W_GYILOK",
			"W_GÉPFEGYVER",
			"W_OSTOR",
			"W_ROBI",
			"W_PETÁRDA",
			"W_KÉZIGRÁNÁT",
			"W_KIS ERŐITAL",
			"W_NAGY ERŐITAL",
			"W_KONYHAKÉS",
			"W_PÁLINKÁS FLASKA",
		],
		findmany: 3,
	},
	{
		num: 245,
		title: "Csendes menekülés Oshinokoval",
		type: "normal",
		music: "oshinoko",
		pic: "darkstreet.jpg",
		desc: `
      <p>
       Szép nyugodt léptekkel elindultok Oshinokoval. Szerencsére senki nem állít meg titeket.
      </p>
			<p class="cond" data-cond="raktár">
				Csak egy gyors esemény történik útközben. Oshinoko befordul egy lakatlan mellékutcába, ahol egy kapualjban Khi Csivel, Oshinoko fiával találkoztok. Egy zsák van nála, benne a fegyvereiddel, amit leraktál Oshinokonál. Megköszönöd nekik, hogy nem felejtették el. Oshinoko még mond valamit japánul Khi Csinek, aki nem túl boldogan, de bólint egyet, azzal eltűnik.
			</p>
			<p class="cond" data-cond="raktár">
				- Nem biztonságos most a házunkba se visszamenni, ezért szóltam előre Khi Csinek, hogy hozza el a fegyvereidet ide. De most jussunk ki minél előbb a városból, holnap meg meglátjuk, hogy tudod átvenni a hatalmat - mondja Oshinoko, azzal tovább mentek.
			</p>
      <p>
       Sikeresen kijuttok a városból, mielőtt lezárnák azt. Mire eléritek az erdő sűrűjét, már leszáll az éj. Elérkeztek egy fákkal és bokrokkal sűrűn körülvett helyre.
      </p>
      <p>
       - Itt szoktam néha meditálni. Itt senki nem zavar, és van hely kettőnknek is aludni a pázsiton. Ehetsz is egy kicsit! - mondja Oshinoko és a bokrokon növő erdei gyümölcsökre mutat. Fáradt testednek jót tesz az eledel. Nem beszéltek már sokat utána, hanem lefekszetek és elalszotok.
      </p>
    `,
		buttons: [
			{
				txt: "Zzzz...",
				new: 234,
			},
		],
		Xchange: "felfegyverzés",
		change: [
			{
				id: "ero",
				crease: 7,
				rnd: 5,
			},
		],
	},
	{
		num: 246,
		title: "Sikeres hatalomátvétel",
		type: "normal",
		music: "epiclift",
		pic: "happymass.jpg",
		desc: `
     	<p>
       A nép felé fordulsz és elkezdesz szónokolni:
      </p>
      <p>
       - Polgártársaim! Én voltam az, aki megszabadított Battle Beetle és a Big Bugok fogságából! De utána sajnos láttam, hogy egy másik zsarnok uralkodik felettetek: Bitang Botond, a polgármester! Rendőröknek nevezett gengszterekkel sanyargatott titeket. <span class="cond" data-cond="E_bizonyítékok">Bizonyítékom van rá, hogy a rendőrfönök valójában egy körözött bűnöző volt és idegen lények ügynöke! Ezeket az idegen lényeket akarták a városra küldeni Battle Beetle megbosszulása miatt! Nálam vannak a bizonyítékok!</span> De ennek a zsarnokságnak most vége! Ha szeretnétek engem polgármesternek, elhozom nektek a szebb jövőt. Én nem ellenetek fogok harcolni, hanem azokkal, akik titeket fenyegetnek! Ahogy eddig is tettem!
      </p>
			<p>
				A nép hatalmas üdvrivalgásba tör ki. Mindenhonnan kiáltozzák, hogy téged akarnak polgármesternek, és vesszenek Boti megmaradt emberei! Felemelnek a tömeg felé és megindultok a Városháza felé.
			</p>
			`,
		change: [
			{
				id: "hat",
				crease: 15,
				rnd: 10
			},
		],
		buttons: [
			{
				txt: "Bevesszük a Városházát!",
				new: 237,
				modi: "Mikor megérkeztek a Városházához, furcsa módon nem találtok előtte egy őrt sem. Úgy tűnik, megértették Boti emberei, hogy itt a vég és inkább elhagyták az épületet. Betöritek a kaput. Akárhova mentek, nem találkoztok senkivel. Harc nélkül bevetted a néppel a Városházát!",
			},
		],
	},
	{
		num: 247,
		title: "A nép - enyhén szólva - nem támogat",
		type: "death",
		music: "crowdshout",
		stopmusic: false,
		pic: "booing.gif",
		desc: `
      <p>
				- Emberek! Bitang Botond egy zsarnok volt! - kezded a szónoklatot, de meglepedésedre rögtön neked támadnak az emberek.
			</p>
      <p>
				- Milyen zsarnok? Miről beszélsz te?! És egyáltalán ki vagy te? Megölted a polgármestert?! Gyilkos!!! - ordítják egyre többen majd ütlegelni kezdenek. Próbálsz védekezni és ismét hozzájuk szólni, hogy megállítsd ezt az őrületet, de a nép egyetlen feldühödött hatalmas vadállatként ver téged. Nemsokára vérbe borul a szemed és elsötétül előtted a világ...
			</p>
    `,
	},
	{
		num: 248,
		title: "Az éjjeli felfedezések",
		type: "normal",
		music: "darkbackground",
		pic: "bizonyíték.JPG",
		desc: `
        <p>
					Kifújod magad a harc után és szétnézel - amennyire látsz.
				</p>
				<p id="casualties"></p>
				<p>
         A megidézett vadállatok és vadnövények úgy tűnik, eltűntek. Viszont látsz pár hullát a közeledben. Az egyiknek mintha valami iratcsomag lógna ki széttépett kabárja alól. Ez érdekes lehet. Előveszed, de nem nagyon látsz a sötétben. Egy zseblámpa még világít nem messze tőled a földön. Felveszed és megvilágítod az írásokat. TOP SECRET felirat van az első lapon. Egyre érdekesebb...
        </p>
        <p>
         Beleolvasol és egy egyre durvább történet áll össze benne. Számos akta van benne Borbély Béláról, aki Boti rendőrfőnöke volt, de valójában elég hosszú bűnlajstroma van. Tulajdonképpen egy bérgyilkos. De találsz több bizonyítékot is más rendőrök bűntetett előéletéről. Lehet, hogy az egyik rendőrnek feltámadt a lelkiismerete és ő gyűjtötte össze ezeket a bizonyítékokat, csak pechjére éppen kivezényelték az erdőbe, ahol szomorú sorsra jutott?
        </p>
        <p>
          De olvasol tovább, mert a java még hátra van! Számos email és egyéb dokumentum, feljegyzés van arról, hogyan tárgyalt Borbély Béla vagy Bitang Botond földönkívüli lényekkel. Battle Beetle is egy volt közülük, gyakorlatilag ő is a polgármester embere volt, akit őrült kísérletekkel bízott meg. De még ennél is durvábbak azok a dokumentumok, amik arról szólnak, hogyan készítenek elő egy földönkívüli inváziót a város ellen! Őrület az egész, ezt meg kell tudnia a városnak!
        </p>
        <p>
					Összecsomagolod az írásokat, elteszed jó helyre, aztán próbálsz még reggelig aludni ideiglenes szállásodon.
        </p>
      `,
		change: [
			{
				id: "hat",
				crease: 5,
				rnd: 10,
			},
		],
		obj: ["E_bizonyítékok"],
		buttons: [
			{
				txt: "Reggel leleplezem az egész összeesküvést!",
				new: 249,
			},
		],
	},
	{
		num: 249,
		title: "Ismét a Fő-téren",
		type: "normal",
		music: "basicmusic",
		pic: "starttown.jpg",
		desc: `
        <p>
					Az események után gyakorlatilag álomba ájulod magad. Amikor reggel kinyitod a szemed, nem mondani, hogy kipihenten ébrednél. <span class="ally"></span> ül melletted, szintén elgyötört arccal. Ha azért van itt, hogy erkölcsi támogatást nyújtson, úgy tűnik, azt most nem nagyon fog. Így inkább belegondolsz, mit kell ma megtenned és egyből eltökélt leszel.
				</p>
				<p>
					- Át kell vennünk a hatalmat! Irány a Fő-tér! - mondod. <span class="ally"></span> némán követ.
				</p>
				<p>
         A városba nem gond bejutni, de kifelé tényleg őrzik még a fő helyeken a kivezető utakat. Az arcotokat igyekeztek eltakarni, amíg be nem értek a Fő-térre. Most is jó pár ember gyülekezik a téren és élénken beszélgetnek arról, mi történhetett Botonddal. <i>Mit teszel?</i>
        </p>
      `,
		buttons: [
			{
				txt: "Beszédet intézel hozzájuk",
				cond: "!E_bizonyítékok",
				new: 227,
			},
			{
				txt: "Előveszed a tegnap éjjel megszerzett aktákat",
				cond: "E_bizonyítékok",
				new: 246,
			},
		],
	},
	{
		num: 250,
		title: "Éjjeli menekülés",
		type: "pursuit",
		level: 3,
		music: "storm",
		pic: "nightrain.gif",
		goalpic: "exit.png",
		desc: `
     	<p>
				Szétnézel a sötétben, hogy megvan-e még a társad.
			</p>  
			<p id="casualties"></p>
			<p>
				A megmaradt ellenségek téged vesznek üldözőbe. Rohanni kezdesz! Abban reménykedsz, hogy sikerül őket leráznod a sötétben és találsz egy helyet, ahol reggelig kihúzod. Az eső meg csak nem akar elállni.
			</p>
		`,
		change: [
			{
				id: "hat",
				crease: -5,
				rnd: 10,
			},
			{
				id: "ero",
				crease: -3,
				rnd: 2,
			},
		],
		buttons: [
			{
				txt: "Ritka ótvar ez az éjszaka!",
			},
		],
		pass: 249,
		fail: 265,
	},
	{
		num: 251,
		title: "Harc a Városháza őrével",
		type: "fight",
		pic: "kidobo.jpg",
		nmepic: "kidobo.jpg",
		dungeon: true,
		level: 5,
		desc: `
      <p>
       Egy őrbe botlasz bele.
      </p>
    `,
		buttons: [
			{
				txt: "Állj félre az utamból!",
			},
		],
		pass: 244,
		fail: 244,
	},
	{
		num: 252,
		title: "Nem sikerült megadni a jelszót",
		type: "normal",
		music: "raveaction",
		pic: "server.jpg",
		desc: `
      <p>
				Nem sikerült beütni a jelszót, és úgy túnik, nincs is több próbálkozási lehetőségetek, mert egyből megszólal egy riasztó. Nemsokára kiáltozások és lépések zaját halljátok. Fricivel egymásra néztek.
			<p>
			<p>
				- Ha már eddig eljutottunk, ne hátráljunk meg! Ha harc, legyen harc! - mondja Frici elszántan.
			</p>
			<p>
				Nem lenne hőshöz méltó, ha nem értenél vele egyet. Beugrasz a raktárba, felkapod a legsúlyosabb nyomtatót és teljes erődből az üvegajtóhoz vágod. Az csörömpölve szilánkokra törik. Kiugrotok rajta és elindultok megkeresni Botit.
			</p>
    `,
		buttons: [
			{
				txt: "Gyerünk!",
				new: 244,
			},
		],
	},
	{
		num: 253,
		title: "Mindketten meghaltok a füstben",
		type: "death",
		music: "suhint",
		stopmusic: true,
		pic: "deadninja.png",
		desc: `
      <p>
       A füstben hirtelen átesel egy fekvő testen. Amikor megnézed, ki volt az, döbbenten látod, hogy Oshinoko élete ért véget. De még jobban megdöbbensz, amikor a mellkasodól egy kard vége ugrik ki! Oshinoko gyilkosa - vélhetően Szenyamuki - veled is végzett! Elborul előtted a világ...
      </p>
    `,
	},
	{
		num: 254,
		title: "Szenyamuki és Boti meghal füstben",
		type: "normal",
		music: "actionIncrease",
		pic: "smoke.gif",
		desc: `
      <p>
				A füstben hirtelen átesel egy földön fekvő testen. Amikor megnézed, látod, hogy Szenyamuki az. Ekkor valaki megfogja a vállad.
			</p>
      <p>
        - Ez volt a sorsa! - hallod Oshinoko hangját. - Már régóta rossz úton járt. A rossz útnak pedig nincs jó vége...
      </p>
			<p>
				Elismerően bólintasz a japán bölcsességén. Ez rád is inspirálóan hat és egyből megvilágosodsz:
			</p>
			<p>
				- Ha az egyik domino eldől, mindig eldőlt egy másikat.
			</p>
			<p>
				- Nana, biztos, hogy mindig? - vonja fel egyik szemöldökét Oshinoko.
			</p>
			<p>
				- Ezen majd filózunk később! Most az a lényeg, hogy amíg eltakar minket a füst, keressük meg Botit és nyírjuk ki!
			</p>
			<p>
				Oshinoko bólint és elindultok szorosan egymás mellett. Pár civil ember félrelökése után hirtelen a tétován kóválygó, menekülni próbáló Botiba botlotok. Oshinokoval már nem kell egymásnak semmit mondanotok. Teljes összhangban mutattok be egymás után halálos fogásokat a zsarnokon. Pár pillanat múlva már élettelenül fekszik előttetek. Oshinoko egy bólintással konstatálja a helyzetet és feléd fordul:
			</p>
			<p>
				- Ez is megvan. Mi legyen most, <span class="name"></span> san?
			</p>
		`,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 5,
			},
			{
				id: "hat",
				crease: 5,
			},
		],
		buttons: [
			{
				txt: "Egyelőre lépjünk le innen!",
				new: 245,
			},
			{
				txt: "Ha eloszlik a füst, átveszem a hatalmat.",
				new: 227,
			},
		],
	},
	{
		num: 255,
		title: "Boti meghal füstben",
		type: "normal",
		music: "actionIncrease",
		pic: "smoke.gif",
		desc: `
      <p>
				Utolsó csapásoddal sikerült végre leterítened a zsarnokot! Pár kiélvezett pillanat után Oshinoko jelenik meg melletted. Egy bólintással konstatálja a helyzetet, majd feléd fordul:
			</p>
			<p>
				- Ez is megvan. Mi legyen most, <span class="name"></span> san?
			</p>
		`,
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 5,
			},
			{
				id: "hat",
				crease: 5,
				rnd: 5
			},
		],
		buttons: [
			{
				txt: "Egyelőre lépjünk le innen!",
				new: 245,
			},
			{
				txt: "Ha eloszlik a füst, átveszem a hatalmat.",
				new: 227,
			},
		],
	},
	{
		num: 256,
		title: "Boti szobájában",
		type: "normal",
		music: "raveaction",
		pic: "boti.jpg",
		desc: `
      <p>
				Amikor benyittok, Boti szemben ül veletek egy iróasztal mögött. Ijedtében falfehérré válik és kiejti a kezéből a Barbie-babákat. Frici azonnal bezárja az ajtót, te pedig ráveted magad Botira mielőtt esetleg megnyomna valami pánikgombot. Elkezdtek egymással birkózni. Szerencsére a szoba teljesen hangszigetelt Boti nyugalma érdekében, ezért nem zavarnak meg titeket. Boti hamarosan végleg megnyugszik a karjaid között. Élettelen testét arréb rúgod és megigazítod gyűrött ruhádat.
			</p>
      <p>
        - Nem akartál előbb pár drámai szót szólni hozzá, hogy tudja, miért ölöd meg? - kérdezi Frici. Elgondolkodsz. Lehajolsz és jól megrázod Botit. De tényleg meghalt.
      </p>
			<p>
				- Ezt már cseszhetjük! Gyenge nyápic voltál, Botika! Ezért nem kaptál most útravalót a másvilágra. Mi viszont így is végeztünk. Menjünk!
			</p>
			<p>
				Visszaosontok a menekülőalagúton át. Szerencsére nem találkoztok senkivel. Bevált Frici terve! Visszamásztok Betyárba, kimentek az ásott útvonalon át, aztán beomlasztjátok a bejáratot, ha esetleg utánatok akarna valaki jönni belülről.
			</p>
			<p>
				Aztán nagy pacsit adtok egymásnak, visszamentek a kunyhóba, megisztok egy egész üveg ürmös bort, jót mulattok, röhögtök, majd békés nyugovóra tértek egy ággyá alakuló lehajtott szekrényen.
			</p>
		`,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 5,
			},
			{
				id: "hat",
				crease: 5,
			},
		],
		buttons: [
			{
				txt: "Jó éjt!",
				new: 234,
			},
		],
	},
	{
		num: 257,
		type: "Xtrial",
		value: "assassin",
		pass: 258,
		fail: 259,
	},
	{
		num: 258,
		title: "Akcióban",
		type: "normal",
		music: "raveaction",
		pic: "nightrain.gif",
		desc: `
      <p>
       Hirtelen ötlettől vezérelve felkapsz egy hajókötelet, villámgyorsan Boti nyakára tekered és addig szorítod, amíg a zsarnok el nem ernyed. Ekkor a biztonság kedvéért mégegyet húzol rajta, majd lassan lefekteted Boti ekkor már élettelen testét. Fülelsz, de nincs mozgás, a sofőr nem hallott meg. Bogira kacsintasz és csendben így szólsz:
      </p>
      <p>
       - Amikor azt mondtad, hogy "egy kis meglepetés", erre gondoltál? Gondolom, egy kicsit tényleg meglepődött Boti!
      </p>
			<p>
				Bogi önkéntelenül elneveti magát. Ami nemcsak azért nem baj, mert szereted, ha a poénjaidon nevetnek, hanem azért is, mert a nevetés kevésbé gyanús, mint a hirtelen beállt néma csend. Tovább viszed ezt a szálat:
			</p>
			<p>
				- Az lenne a legkevésbé gyanús, ha mi folytatnánk azt, amit Botival elkezdtetek! - mondod huncut mosollyal.
			</p>
			<p class="cond" data-cond="E_love Bogi">
				Bogi szeme tágra nyílik. Ő is jónak találja a javaslatot. Közelebb lép hozzád és búgó hangon a füledbe súgja:
			</p>
			<p class="cond" data-cond="E_love Bogi">
				- Én hősöm! Nem tudod, milyen hatalmas rossztól mentettél meg! Örökké hálás leszek neked! Bármit megadok, amit csak akarsz... - azzal lassan közelebb hajol majd megcsókol. Elönt téged is a szerelem érzése, átöleled a gyönyörű nőt és szenvedélyesen visszacsókolod. Megszűnik számotokra az egész brutális világ és csak egymás létezik számotokra. Teljesen összegabalyodtok...
			</p>
			<p class="cond" data-cond="!E_love Bogi">
				Bogi arcán fájdalmas arckifejezés jelenik meg, majd így szól:
			</p>
			<p class="cond" data-cond="férfi, !E_love Bogi">
				- Nézd, nagyon hálás vagyok neked, amiért megmentettél, el se hiszed, milyen hatalmas tehertől szabadítottál meg, de kérlek ne élj vissza a helyzettel! Egyébként is mindenképpen meg kell szabadulnunk a sofőrtől!
			</p>
			<p class="cond" data-cond="nő">
				- <span class="name"></span>, én a férfiakat szeretem! Nagyon hálás vagyok neked, amiért megmentettél, el se hiszed, milyen hatalmas tehertől szabadítottál meg, de remélem, ez a javaslatod csak vicc volt.
			</p>
			<p>
				Ekkor hirtelen kopognak az ajtón, majd a sofőr hangja hallatszik:
			</p>
			<p>
				- Elnézést, főnök! Az órám szerint valami baj van az egészségi állapotával. Vagy minden rendben?
			</p>
			<p>
				Bogi ijedten rád néz és suttogva mondja:
			</p>
			<p>
				- Boti egészségügyi jellemzőit figyeli egy karperec, ami továbbítja az adatokat a személyi testőreinek. A sofőr is az.
			</p>
			<p>
				Újabb ötletet kell kitalálnod. Letéped Boti felsőruháját, odasúgod Boginak, hogy mit mondjon, majd felkapsz egy evezőt és az ajtó mellé állsz.
			</p>
			<p>
				- Nem tudom, mi történt. Elkezdtem vetkőztetni Botit, mire annyira felizgult, hogy egyszer csak összeesett. Lehet, hogy infarktust kapott! - mondja Bogi a megbeszéltek szerint.
			</p>
			<p>
				A sofőr berúgja az ajtót és Boti felé hajol. Nem vesz észre téged. Te jó nagyot vágsz a tarkójára az evezővel. Összeesik, de aztán lassan megfordul. Kemény fából faragták. A pisztolyáért nyúl, de te rá vágsz a kezére az evezővel. Felnyög, de még mindig nem adja fel. Megpróbálja kirúgni a lábad. Szerencsére időben elugrasz, de már fogytán van a türelmed. Még egy nagyot vágsz a lapáttal a fejére, majd ráborítasz három csónakot a fickóra. Ennyi már csak elég lesz.
			</p>
			<p>
				- Biztosan balesetnek fogják gondolni - nézed tűnödve a műved. - Ez itt idejött, hogy felakassza magát egy hajókötéllel, a másik viszont le akarta szedni, ezért ráállt a csónakokra, de amikor kiakasztotta a kötelet, megcsúszott, beverte elöl és hátul is a fejét egy-egy evezőbe, aztán véletlenül három csónakot is magára húzott, amikor próbálta állásba kapaszkodni magát. Tiszta sor!
			</p>
			<p>
				Bogi megint elneveti magát.
			</p>
			<p>
				- Te tényleg haláli vagy! Én viszont nem szeretném, ha egy ilyen tanúvallomást kellene elmondanom a rendőrségnek, ha nem baj, úgyhogy inkább tűnjünk el!
			</p>
		`,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: -1,
				rnd: 2,
			},
		],
		buttons: [
			{
				txt: "Rendben!",
				new: 260,
			},
		],
	},
	{
		num: 259,
		title: "Harc a sofőrrel",
		type: "fight",
		pic: "kidobo.jpg",
		nmepic: "kidobo.jpg",
		att: 120,
		def: 45,
		speed: 5,
		hp: 110,
		desc: `
		<p>
			Mielőtt támadásba lendülnél, Boti észrevesz és elugrik. Kiordít a sofőrnek, mire az azonnal beront az ajtóval együtt. Kegyetlen marcona alak, aki az életét is odaadná a főnöke védelmezéséért, ezért nincs előle menekvés!
		</p>
	`,
		buttons: [
			{
				txt: "Ám legyen!",
			},
		],
		death: true,
		pass: 261,
	},
	{
		num: 260,
		title: "Az akta",
		type: "normal",
		music: "raveaction",
		pic: "bizonyíték.JPG",
		desc: `
        <p>
					Visszamentek Boti üressé vált kocsijához és beültök. Bogi foglalta el a sofőr helyét.
				</p>
				<p>
					- Most elviszlek egy barátomhoz! - mondja Bogi. <p class="cond" data-cond="E_love Bogi">Te nagyot nézel.</p>
				</p>
				<p class="cond" data-cond="E_love Bogi">
					- Ez komoly? Már épp akartam kérdezni, hogy hozzád vagy hozzám menjünk...
				</p>
				<p class="cond" data-cond="E_love Bogi">
					Bogi mosolyogva megsimogatja a karod.
				</p>
				<p class="cond" data-cond="E_love Bogi">
					- Ne aggódj, mindennek eljön az ideje! De most, hogy Boti meghalt, valamit nagyon fontos még az éjjel megszereznünk.
				</p>
				<p>
         Megvonod a vállad. Ez a nő csupa rejtély. Ennek ellenére egyre jobban kezdesz bízni benne, mert úgy tűnik, pontosan tudja, mit csinál.
        </p>
        <p>
         Nem mentek vissza a városba, hanem egy erdőszéli birtokra hajt Bogi. Amikor megálltok, lámpa gyullad az egyik ablakban. Megjelenik egy fickó körvonala, majd nyílik a távirányítású kapu.
        </p>
        <p>
          Behajtotok a kertbe, majd kiszálltok és felmentek a lépcsőn. Bent elhúzódik egy retesz, kulcs fordul a zárban és nyílik az ajtó. Egy fiatal, de megviselt arcú fickó áll előttetek.
        </p>
				<p>
					- Szia, Bogi! Kicsit megáztál! Ő, gondolom, <span id="fullName"></span>. Gyertek be!
				</p>
        <p>
					Bementek és kezet rázol a fickóval, aki McClone őrnagyként mutatkozik be, majd hellyel, törölközővel és teával kínál.
        </p>
				<p>
					Amint kicsit komfortosabban kezditek érezni magatokat, Bogi szólal meg:
				</p>
				<p>
					- Megvan az akta?
				</p>
				<p>
					- Meg. Az egész - mondja McClone, majd leül egy íróasztalhoz, matat egy kicsit (a halk hangokból ítélve egy széfet nyit ki), majd feláll és odavisz Boginak egy aktacsomagot. - Ebben elegendő bizonyíték van ahhoz, hogy az egész bandát felszámoljuk! Csak bennetek bízhatok.
				</p>
				<p>
					Érdeklődve közelebb ülsz Bogihoz és belenéztek a "TOP SECRET" feliratú aktába. Először számos dokumentum van benne Borbély Béláról, aki Boti rendőrfőnöke, de valójában elég hosszú bűnlajstroma van. Tulajdonképpen egy bérgyilkos. De találtok benne több bizonyítékot is más rendőrök bűntetett előéletéről. Ezután számos email és egyéb dokumentum, feljegyzés van arról, hogyan tárgyalt Borbély Béla vagy Bitang Botond földönkívüli lényekkel! Battle Beetle is egy volt közülük, gyakorlatilag ő is a polgármester embere volt, akit őrült kísérletekkel bízott meg. De még ennél is durvábbak azok a dokumentumok, amik arról szólnak, hogyan készítenek elő egy földönkívüli inváziót a város ellen! Őrület az egész, ezt meg kell tudnia a városnak! De már egyre fáradtabb vagy. A hosszú paksaméta végefelé kezd leragadozni a szemed. Házigazdátok így felajánlja, hogy aludjatok nála.
				</p>
			`,
		obj: ["E_bizonyítékok"],
		Xchange: "growlove",
		buttons: [
			{
				txt: "Köszönöm!",
				new: 249,
			},
		],
	},
	{
		num: 261,
		title: "Boti túszul ejti Bogit",
		type: "normal",
		music: "raveaction",
		pic: "túsz.JPG",
		desc: `
      <p>
       Sikerül végre legyűrnöd ezt a szadista gorillát. A verekedés közben mindenki kiugrott a szűk csónakházból. De nincs időd pihenni, mert rémülten veszed észre, hogy közben Boti túszul ejtette Bogit. Szorosan magához fogja és a fegyvert hol rá, hol rád szegezi. Nehéz a sötétben bármilyen trükkel próbálkozni. Boti gúnyos hangon megszólal: 
      </p>
      <p>
       - <span id="fullName"></span>, ha nem tévedek. Szóval veled szűrte össze a level Bogi ellenem. Mindkettőtökkel végeznem kellene. Kivel kezdjem?
      </p>
    `,
		buttons: [
			{
				txt: "Tévedés volt az egész, elmegyek!",
				new: 262,
				cond: "!E_love Bogi"
			},
			{
				txt: "Kezdd velem és Bogit hagyd életben!",
				new: 266,
				cond: "E_love Bogi"
			},
			{
				txt: "Villámgyorsasággal kimenekíted Bogit",
				new: 267,
				cond: "S_Villámgyorsaság, >_ugy_75"
			},
			{
				txt: "Imádkozol",
				new: 268,
				cond: "S_Hit"
			},
		],
	},
	{
		num: 262,
		title: "Lelépsz Bogitól",
		type: "normal",
		music: "raveaction",
		pic: "túsz.JPG",
		desc: `
      <p>
       Amint kimondod, már rohansz is a sötétbe. Nem hallasz pisztolylövést, így nem lőtt se utánad Boti, se Bogit nem lőtte le. Lehet, hogy mégis szeretik egymást és csak trükk volt az egész? Nem tudod, de abban biztos vagy, hogy most mindkettőjük ellensége lettél. Bár Bogi talán még értelmezhette úgy a helyzetet, hogy őt is akartad menteni, nemcsak magadat. Ki tudja? Mindenesetre egy ilyen kudarc után már nem tartod magad annyira nagy hősnek...
      </p>
    `,
		obj: ["E_Boti üldöz", "E_szakítás Bogival"],
		change: [
			{
				id: "lel",
				crease: -5,
				rnd: 10,
			},
			{
				id: "hat",
				crease: -10,
				rnd: 5
			},
			{
				id: "sup",
				crease: -10,
				rnd: 10
			},
		],
		buttons: [
			{
				txt: "Kellemetlen",
				new: 219,
			},
		],
	},
	{
		num: 263,
		title: "Végső bukás",
		type: "death",
		music: "difshots",
		stopmusic: false,
		pic: "shot.jpg",
		desc: `
      <p>
				Amikor látod, hogy a csatát elvesztettétek, megállsz. Igazából már nem is akarsz menekülni, mert minek? Minek éljed a szürke emberek életét örökös búbánatban és szégyenben? Inkább bukjál el úgy, ahogy egy hőshöz illik! Egy csatakiáltással egyenesen berohansz a tűzvonalba és megpróbálod még a maradék ellenséget leszedni.
			</p>
      <p>
				Az első lövés csak súrol, a második a lábadat éri és felbuksz. De nem érdekel, újra felállsz és sántikálva, de mész tovább. Könnyű célpont vagy, a következő lövés mellkason talál. Hátraesel, de még mindig érzed, hogy maradt benned egy kevés erő. Látod, hogy melletted egy gyerek néz. Legalább az ilyeneknek legyél példa. Összeszeded minden végső erődet és feltápászkodsz. Már mindenki téged néz.
			</p>
			<p>
				- Szabadság! - kiáltod. Vér jön fel a tüdődből. Eddig bírtad. Elveszíted az öntudatodat és végleg összeesel...
			</p>
    `,
	},
	{
		num: 264,
		title: "Szövetségkötés Erdeiékkel",
		type: "normal",
		music: "bübük",
		pic: "erdei.jpg",
		desc: `
      <p>
				Zsolt int egy bübünek, akinek a többieknél színesebb levelek nőnek a fejéről és egy apró kolibrifészek van a kezében. Megáll előtted és integet, hogy hajolj le. Így teszel. Ekkor a fészekben levő port az arcodra önti. Csípős-édeskés szag csap meg, ami nemsokára nagyon tömény mentolos illattá változik. Közben a bübük elkezdenek kántálni valamit a babanyelvükön. Hirtelen azt veszed észre, hogy minden érzéked kitisztul. Tűélessé válik a látásod, minden tárgy a környezetedben sokkal színesebbé és részletesebbé válik, a hangok is kitisztulnak, azt is meghallod, hogy valaki a füvön lép egyet a hátsó sorban és az erdő gazdag illatkavalkádja veszi át fokozatosan a mentolos illat helyét. Az eddiginél jóval több információ jut el hozzád a környezetedből, azt is biztosan tudod, mi rejtőzik a fák takarásában, mi fog hozzád közelíteni milyen irányból és mikor ér el. Elképesztő!
      </p>
      <p>
       	A sámán-bübü most abbahagyja a kántálást és megnéz téged alaposan. Majd atöbbiek felé fordul és visít egy nagyot. Az összes bübü vidám üdvrivalgásba tör ki. Zsolt odalép hozzád:
      </p>
			<p>
				- A tested befogadta a varázsszert. Most már tudod használni a Bübüszimatot! Olyan lettél, mint egy közülünk. Ünnepeljük meg szövetségkötésünket!
			</p>
			<p>
				Azzal kezdetét veszi egy nagy buli. Előkerül egy bübü-zenekar, akik mindenféle fából faragott hangszerrel őserdei zenét kezdenek játszani. Ahogy nézed a hangszereket fújó, fához hasonlító lényeket, más dimenziót kap a "fafúvós" kifejezés. A többi bübü körtáncba kezd, riszálják magukat, énekelnek. Zsoltot és téged is bevonnak a táncba. Aztán észreveszed, hogy más bübük mindenféle gyümölcsöt és fapohárban kínált színes italokat hoznak. Te is megkóstolsz párat, nincs rossz ízük, úgy tűnik, erdei gyümölcsökből készültek az italok is, de nem bonyolíthatták túl a receptet.
			</p>
			<p>
				A nagy bulinak a nap lemenetele kezd lassan véget vetni. Nagyon jól érezted magad, a szívedbve zártad örökre Erdei Zsoltot és a bübüket. Amikor leültök Zsolttal megpihenni, megkérdezi, hogy tehet-e érted még valamit. Elgondolkodsz. Majd lassan így szólsz:
			</p>
			<p>
				- Ha tényleg szövetségesek vagyunk, kérnék valamit. Nem magamnak, hanem az egész városnak és tulajdonképpen nektek is. Régóta élősködik már Bitang Botond polgármester a népen. Én már egyszer megmentettem a várost Battle Beetle zsarnokságától, és most addig nem tudok megnyugodni, amíg nem vetek véget az újabb zsarnokságnak is. Úgy érzem erre születtem. Tudnál, tudnátok segíteni abban, hogy elúzzük a városból a zsarnokot és gengsztereit? Tudom, hogy te is miattuk jöttél az erdőbe, de gondolj azokra az emberekre, akik ott maradtak és tovább szenvednek tőlük.
			</p>
			<p>
				Zsolt hosszú percekig gondolkodi. Vagy az egyik erjedt ital hatása alatt van, vagy tényleg sokmindent fontolgat válasza előtt. Végül ő is lassan, tagoltan, de határozottan szólal meg:
			</p>
			<p>
				- Rendben! Segítünk neked és a városnak. Igazad van. Nem a menekülés a mgoldás, hanem a győzelem. És hidd el, ezek a bübük félelmetes harcosok tudnak lenni, ha akarnak. És azért én is elég kemény vagyok. Megbeszélem velük! Gyere vissza holnap!
			</p>
			<p>
				Elbúszúzol tőlük. A Bübüszimattal nem gond kijutni az erdőből. Mire beérsz a városba, már késő éjjel van. Úgy döntesz, hazamész.
			</p>
		`,
		obj: ["S_Bübüszimat", "J_Erdei Zsolt"],
		change: [
			{
				id: "ugy",
				crease: 15,
				rnd: 10,
			},
			{
				id: "esz",
				crease: 10,
				rnd: 5
			},
			{
				id: "ero",
				crease: 10,
				rnd: 10
			},
			{
				id: "hat",
				crease: 5,
				rnd: 10
			},
			{
				id: "lel",
				crease: 5,
				rnd: 5
			},
			{
				id: "sup",
				crease: 150,
				rnd: 50
			},
		],
		buttons: [
			{
				txt: "Így van",
				new: 46,
			},
		],
	},
	{
		num: 265,
		title: "Lelőnek az erdőben",
		type: "death",
		music: "difshots",
		stopmusic: true,
		pic: "shot.jpg",
		desc: `
      <p>
				Sajnos hiába menekülsz, üldözőid gyorsak és jobban is látnak. Folyamatosan lövöldöznek rád, és az egyik végül eltalál. Iszonyű fájdalom hasít a lapockádba. A másik lövés már a tarkódat éri, így többé nem érzel semmit...
			</p>
    `,
	},
	{
		num: 266,
		title: "Bogi megment téged",
		type: "normal",
		music: "raveaction",
		pic: "túsz.JPG",
		desc: `
      <p>
       - Rendben! - mondja kárörvendőn Boti és rád szegezi a fegyvert. Fontolgatod, hogy próbálkozz most valami trükkel, vagy egyszerűen hozd meg ezt az áldozatot Bogiért, de Bogi rögtön dönt. Bizonyára meghatotta önfeláldozó gesztusod és hirtelen Boti karjába harap. Boti felordít és reflexből ellőki a nőt magától.
      </p>
			<p>
				- Te szuka! Halj meg te is! - ordítja Boti és Bogira emeli a fegyvert. Ez a te harci reflexeidet is aktivizálja. Azonnal oda ugrasz és Botira veted magad. Elég béna harcos a fickó, különösebb erőfeszítés nélkül megszerzed a fegyverét. Úgy döntesz, nem húzod tovább az időt és keresztüllövöd sötét szívét. Itt ért véget a zsarnok élete.
      </p>
			<p>
				Bogi ijedten zihál mögötted, majd amikor felfogta, hogy vége van Botinak, egy hatalmas, sipító "Köszönöm!" tör fel belőle és a nyakadba ugrik. Te is megöleled és nyugtatgatod. Abból látod, hogy valamelyest visszanyerte már önmagát, hogy egyszer csak megszólal:
			</p>
			<p>
				- Meghallhatta valaki a lövést! El kell tűnnünk!
			</p>
    `,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: 3,
				rnd: 4,
			},
		],
		buttons: [
			{
				txt: "Ésszerű javaslat",
				new: 260,
			},
		],
	},
	{
		num: 267,
		title: "Megmented Bogit",
		type: "normal",
		music: "raveaction",
		pic: "túsz.JPG",
		desc: `
      <p>
       Összpontosítasz. Lelki szemeid előtt pontosan eltervezed a mozdulatsort, amivel kiiktathatod Botit. Tudod, hogy gyorsabbnak kell lenned, mint ahogy ő meghúzza a ravaszt, mert nem leszel nehéz célpont. Kell egy kis elterelés is.
      </p>
			<p>
				- Rendben! Legyen úgy, hogy... mi a franc ez itt a földön? - mondod és  leguggolsz.
      </p>
			<p>
				- Csak semmi...! - szól Boti, de már nem tudja végig mondani. Egy jó adag földet kiszórsz oldalra, hogy a mozgás ösztönösen elvonja a figyelmét, és rögtön kilősz! Szinte repülsz felé alulról és egy hatalmas horogütéssel álcsúcson vágod.
			</p>
			<p>
				Boti döngve esik el. Agyrázkódást kaphatott. KO. De úgy döntesz, nem húzod tovább ezt a történetet bizonytalanságokkal. Felveszed a földről a fegyverét és fejbe lövöd. Itt ért véget a zsarnok élete.
			</p>
			<p>
				Bogi ijedten zihál mögötted, majd amikor felfogta, hogy vége van Botinak, egy hatalmas, sipító "Köszönöm!" tör fel belőle és a nyakadba ugrik. Te is megöleled és nyugtatgatod. Abból látod, hogy valamelyest visszanyerte már önmagát, hogy egyszer csak megszólal:
			</p>
			<p>
				- Meghallhatta valaki a lövést! El kell tűnnünk!
			</p>
    `,
		obj: ["X_Boti"],
		change: [
			{
				id: "ugy",
				crease: 5,
				rnd: 2,
			},
		],
		buttons: [
			{
				txt: "Ésszerű javaslat",
				new: 260,
			},
		],
	},
	{
		num: 268,
		title: "Megmented Bogit",
		type: "normal",
		music: "raveaction",
		pic: "túsz.JPG",
		desc: `
      <p>
       Belátod, hogy a helyzet megoldásához kevesek a képességeid. Pontosabban a hited menthet már csak meg. Isteni segítségért fohászkodsz.
      </p>
			<p>
				- Na, mi legyen? Döntsem el én? - kérdezi ekkor Boti. Még egy kérés az Úr felé, és most már érzed, hogy meghallgatta az imád. Megszólal valaki Boti mögött:
      </p>
			<p>
				- Elnézést, nem tudják megmondani, merre van a Branyiszkó-tér?
			</p>
			<p>
				Botit váratlanul érte a kérés, és elkövette azt a hibát, hogy ösztönösen megfordult. Ez azonnal aktiválta harci reflexeidet. Mintha ágyúból lőttek volna ki, úgy viharzol Boti felé. Egyik kezeddel elkapod a fegyverét, a másikkal a nyakát és rántod magaddal a földre, Bogitól minél messzebb.
			</p>
			<p>
				Nem egy nagy harcos Boti, könnyen megszerzed a fegyverét. Felugrasz és rá szegezed. Aztán elkezdesz gondolkodni, mert az idegen még mindig itt van. De te vagy <span id="fullName"></span>, így nem hazudtolod meg magad. Botira kiáltasz:
			</p>
			<p>
				- Nem hallottad, hogy kérdeztek? Süket vagy?! Merre van a Branyiszkó-tér?!
			</p>
			<p>
				Mindenki néma csendben van egy percig. Aztán Boti nyöszörögve megszólal:
			</p>
			<p>
				- Ez most tényleg komoly?
			</p>
			<p>
				- Rossz válasz! - mondod és agyonlövöd. - Így járnak az udvariatlan bunkók! - mondod, majd az idegen férfi felé fordulsz, és udvarias hangon így szólsz: - Menjen be abba az utcába a szobor mögött, amíg el nem éri a 7-es villamos megállóját. Szálljon fel rá! A Branyiszkó-tér a hmm... három, négy... ötödik megálló.
			</p>
			<p>
				- Köszönöm! - mondja zavartan a férfi és szaporán eliszkol.
			</p>
			<p>
				- Én is köszönöm, Istenem! - nézel fel boldogan a csillagos égre. - Nincs Nálad nagyobb zseni! Ennek az embernek az eltévedése nemcsak a mi életünket mentette meg, hanem az egész városét is! Mintha valahol olvastam volna, hogy Te a rosszból is tudsz jót kihozni...
			</p>
			<p>
				Ekkor Bogi lép melléd.
			</p>
			<p>
				- Én is csatlakozom a köszönetmondók sorába. Te tényleg nem vagy semmi, <span class="name"></span>! Ezzel együtt szerintem lépjünk most le, mielőtt még valakit idecsal a lövés hangja.
			</p>
    `,
		obj: ["X_Boti"],
		change: [
			{
				id: "lel",
				crease: 2,
				rnd: 5,
			},
		],
		change: [
			{
				id: "esz",
				crease: 1,
				rnd: 2,
			},
		],
		buttons: [
			{
				txt: "Ésszerű javaslat",
				new: 260,
			},
		],
	},
	{
		num: 269,
		title: "Vidámkodás a stábbal",
		type: "finalfun",
		pic: "battlepic.jpg",
		desc: `
      <p>
				A díszletek mögül előlép több ismert és ismeretlen alak, statiszta, dublőr, és gratulálnak neked a győzelemhez. Ennek örömére javaslod, hogy vidám barátságos meccsekkel szórakoztassátok egymást. Beleegyeznem, sőt, adnak is neked néhány hasznos kelléket.
			</p>
			<p><i>
				Válaszd ki, hogy melyik szereplőből mennyit akarsz egymásra ereszteni a két oldalon. Legalább 1 és legfeljebb összesen 12 szereplő lehet mindkét oldalon. Jó szórakozást!
			</i>
			</p>
			<table id="armselect"></table>
			<button class="btn" id="funstart">Induljon a meccs!</button>
		`,
		pass: 300,
		fail: 269,
	},
	{
		num: 300,
		title: "ITT A VÉGE A BAZIBRUTÁL II. RÉSZÉNEK",
		type: "end",
		music: "happyDance",
		pic: "fireworks.gif",
		desc: `
      <p id="end"></p>
    `,
	},

];
