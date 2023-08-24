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
      <p id="modified"></p>  
      <p>
       A <span id="fullName"></span>
			 Á <span class="name"></span>
       B <span class="ally"></span>
      </p>
      <p class="cond" data-cond="=_name_Q">
       C
      </p>
      <p>
       D <span class="part"></span> 
      </p>
			<ol id="pp"></ol>
      <p id="casualties"></p>
      <p><i>
       Mit teszel?
      </i></p>

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

	//normal + input
	{
		num: 126,
		title: "Beszélgetés Bogival",
		type: "normal",
		music: "pubmusic",
		pic: "bogi_face.JPG",
		desc: `
      <p>
       blabla
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

	//trial

	{
		num: 1,
		type: "trial",
		value: "hat",
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

	//digger
	{
		num: 134,
		title: "A Városháza alatt",
		type: "dig",
		size: 21,
		level: 9,
		helper: "Frici",
		gems: ["Üzemanyag", "Agyag", "Kvarc", "Gyémánt"],
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

	//kotyvasztó (digger után)
	{
		num: 195,
		title: "Fegyvergyártás betyárral",
		type: "kotyvaszt",
		music: "epicsearch",
		pic: "betyarküche.JPG",
		prodtxt: "Batyár felbúg, kattog, majd a végén a következő tárgy jön ki belőle:",
		desc: `
      <p>
       - Na, itt vagyunk a raktárszoba alatt! - kiált lelkesen Frici. - Mielőtt felmegyünk, gyáártsunk le néhány cuccot a megszerzett ásványokból! Egy dolog a fontos: nem muszáj egyszerre az összes ásványt belerakni, mert Betyár mindig csak egy dolgot csinál a kapott összes mennyiségből. Ha tudsz néhány receptet, az megkönnyíti a dolgunkat, de ha nem, akkor is valamit csinál belőlük Betyár. Legfeljebb nem tudjuk semmire használni. De egy klicsit nehéz belegyömöszölni Betyárba a dolgokat, inkább kattints kétszer a GYÁRTÁS gombra, ha először nem csinálna semmit!
      </p>
    `,
		cont: 197,
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
		passDesc: "<p>Eleget bolyongtál, elfáradtál. / Teljesítetted a küldetést.</p>",
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

	//finalwar

	{
		num: 136,
		title: "A városháza megostromlása a <span class='name'></span> Gárdával",
		type: "finalwar",
		friends: "gárda",
		enemies: "városháza",
		opts: "J_Oshinoko, J_Szenyamuki, X_Szenyamuki, Ügyes Frigyes",
		music: "finalwar",
		pic: "townhall.JPG",
		desc: `
      <p>
      </p>
      <i>
      <p>
        A következő képernyőn felülnézetben láthatod a harcmezőt. Tőle jobbra van a fő irányítógomb, amivel elindíthatod a csatát, elmenekülhetsz vagy továbbléphetsz a következő pályára a csata végén. Mellette a játék sebességét állíthatod. Ezalatt - ha vannak - a használható fegyvereid vannak. Ezeket akkor használhatod, ha a - képességeid alapján kalkulált - várakozási idő letelt. A kiválasztás után ki kell jelölnöd azt is, hol veted be a terepen. Figyeld az egérmutató formáját!
      </p>
      <p>
        A csata indítása után a harcosok önállóan harcolnak, de saját embereidre kattintva, tudsz nekik parancsot adni. Ha ismét arra az emberre kattintasz, akkor megáll. Ha egy üres mezőre, akkor átmegy oda, ha egy ellenségre vagy fára, akkor letámadja / megpróbálja kivágni. Vízre nem léphet senki. Aki alatt fehér vonal van, az veled van, aki alatt fekete, az ellenség. Ha először ellenfélre kattintasz, csak az adatait láthatod. A speciális képességeket automatikusan használják a harcosok. A céltudatosságazt mutatja, hogy mennyire követi az eredeti parancsot vagy döntését az egység a váratlan események ellenére is. Az egységek feletti zöld csík teljes, a sárga legalább egyharmadnyi, a piros ennél kisebb életerőt jelez. Amelyik szereplő korábban a szövetségesed lett, annak másfélszeres lesz minden kezdő értéke.
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

	//köd

	{
		num: 111,
		title: "Harc a füstben",
		type: "fog",
		music: "lightmonkey",
		pic: "grannygarden.jpg",
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
		oshinoko: 112,
		szenyamuki: 113,
		boti: 114,
	},
];
