function _load() {
	window.music = document.getElementById("music");
	window.sound = document.getElementById("sound");
	window.sound2 = document.getElementById("sound2");
	music.volume = 1;
	sound.volume = 1;
	sound2.volume = 1;
	music.loop = true;
	let main = document.getElementById("main");
	main.classList.remove("brighten");
	let modal = document.getElementById("modal");
	let footer = document.getElementById("footer");
	let header = document.getElementById("header");
	window.curmusic = "basicmusic";
	window.musicOn = true;
	window.soundOn = true;
	window.char = {};
	window.room = {};
	window.modi = false;
	window.steps = 0;
	window.dungeon = 0;
	window.isDying = false;
	window.loaded = false;
	window.part = " ";
	window.prg = 0;
	window.progi = " ";
	window.fegyverRaktár = [];
	window.skills = [
		{
			id: "ero",
			name: "Erő",
			upskill: "Bivalyerő",
		},
		{
			id: "ugy",
			name: "Ügyesség",
			upskill: "Villámgyorsaság",
		},
		{
			id: "esz",
			name: "Ész",
			upskill: "Pengeagy",
		},
		{
			id: "lel",
			name: "Lélek",
			upskill: "Hit",
		},
		{
			id: "hat",
			name: "Hatalom",
			upskill: "Vasakarat",
		},
		{
			id: "sup",
			name: "Támogatás",
			upskill: "",
		},
	];
	window.upSkill = (id) => `S_${skills[skills.findIndex((s) => s.id === id)].upskill}`;
	window.nameSkill = (id) => skills[skills.findIndex((s) => s.id === id)].name;
	window.rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
	window.shuffle = (arr) => {
		for (var i = arr.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	};
	window.timok = [];
	window.units = [];
	window.ffields = [];
	window.fwb = "";
	var timo;
	var timo1;
	var timo2;
	var timesIn;
	var timesOut;
	var dying;

	function clearTimers(hard = false) {
		clearInterval(timo);
		clearTimeout(timo);
		clearTimeout(timo1);
		clearInterval(timo2);
		if (hard)
			for (let t of timok) {
				clearInterval(t);
			}
	}

	startGame();

	function saveChar() {
		localStorage.setItem("charNum", char.num);
		localStorage.setItem("charName", char.name);
		localStorage.setItem("charEro", char.ero);
		localStorage.setItem("charUgy", char.ugy);
		localStorage.setItem("charEsz", char.esz);
		localStorage.setItem("charLel", char.lel);
		localStorage.setItem("charHat", char.hat);
		localStorage.setItem("charPic", char.pic);
		localStorage.setItem("charRoom", char.room);
		localStorage.setItem("charObjs", char.objs.join());
		localStorage.setItem("charSup", char.sup);
		localStorage.setItem("steps", steps);
		localStorage.setItem("part", part);
		localStorage.setItem("prg", prg);
		localStorage.setItem("progi", progi);
		localStorage.setItem("fegyveraktar", fegyverRaktár.join());
		if (isDying) {
			localStorage.setItem("isDying", "1");
		} else {
			localStorage.setItem("isDying", "");
		}
	}

	function loadChar() {
		char.num = Number(localStorage.getItem("charNum"));
		char.name = localStorage.getItem("charName");
		char.ero = Number(localStorage.getItem("charEro"));
		char.ugy = Number(localStorage.getItem("charUgy"));
		char.esz = Number(localStorage.getItem("charEsz"));
		char.lel = Number(localStorage.getItem("charLel"));
		char.hat = Number(localStorage.getItem("charHat"));
		char.pic = localStorage.getItem("charPic");
		char.room = Number(localStorage.getItem("charRoom"));
		char.objs = localStorage.getItem("charObjs").split(",");
		char.sup = Number(localStorage.getItem("charSup"));
		steps = Number(localStorage.getItem("steps"));
		isDying = Boolean(localStorage.getItem("isDying"));
		part = localStorage.getItem("part");
		prg = Number(localStorage.getItem("prg"));
		progi = localStorage.getItem("progi");
		modi = false;
		fegyverRaktár = localStorage.getItem("fegyveraktar").split(",");
	}

	function chooseChar(x) {
		let numera = Number(x.target.id.split("-")[1]);
		char = { ...chars[numera] };
		char.room = 151; //startroom
		char.objs = [];
		char.sup = 0;
		steps = 0;
		isDying = false;
		part = " ";
		window.prg = 0;
		window.progi = " ";
		modi = false;
		music.play();
		newRoom();
	}

	function continueChar() {
		loaded = true;
		music.play();
		newRoom();
	}

	function startGame() {
		let charString = "<table><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          <img
            class="charPic"
            id="img-${ch.num}"
            src="./img/chars/${ch.pic}.jpg"
            alt="${ch.name}"
          />
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td class="charName">
          ${ch.name}
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          Erő: ${ch.ero}
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          Ügyesség: ${ch.ugy}
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          Ész: ${ch.esz}
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          Lélek: ${ch.lel}
        </td>
      `;
		}
		charString += "</tr><tr>";
		for (let ch of window.chars) {
			charString += `
        <td>
          Hatalom: ${ch.hat}
        </td>
      `;
		}
		charString += "</tr></table>";

		document.getElementById("characters").innerHTML = charString;
		document.querySelectorAll("img").forEach((i) => {
			i.addEventListener("click", chooseChar);
		});

		if (localStorage.getItem("charName")) {
			loadChar();
			let num = rooms.findIndex((r) => r.num === char.room);
			footer.innerHTML = `
      <br><br>
      <p>
        Jaj, vagy várjál... Ha jól látom, Te vagy ${char.name}!
      </p>
      <p>
        Igen, igen, akinek az Ereje ${char.ero}, az Ügyessége ${char.ugy}, az Esze ${char.esz}, a Lelke ${char.lel} a Hatalma ${char.hat} a Támogatása pedig ${char.sup}!
      </p>
      <p>
        Egy igazi legenda! Hol is hagytad abba? Ja igen, itt:<br>
        <br>
        <span class="order">${rooms[num].title}</span>
      </p>
      <p>
        Na, kattints a fejedre, ha innen akarod folytatni!
      </p>
      <p>
        <img
          id="img-x"
          src="./img/chars/${char.pic}.jpg"
          alt="${char.name}"  
        />
      </p>
      `;
			document.getElementById("img-x").addEventListener("click", continueChar);
		} else footer.innerHTML = "";
	}

	function changeMusic() {
		let sBtn = document.getElementById("soundBtn");
		if (musicOn) {
			music.pause();
			sBtn.src = "./img/soundOn.png";
			musicOn = false;
			soundOn = true;
		} else {
			if (soundOn) {
				sBtn.src = "./img/soundOff.png";
				soundOn = false;
				soundOn = false;
				sound.volume = 0;
				sound2.volume = 0;
				document.querySelectorAll(".sounds").forEach((s) => (s.volume = 0));
			} else {
				music.play();
				sBtn.src = "./img/musicOn.png";
				musicOn = true;
				soundOn = true;
				sound.volume = 0;
				sound2.volume = 0;
				document.querySelectorAll(".sounds").forEach((s) => (s.volume = 1));
			}
		}
	}

	function message(text) {
		document.querySelector("body").style.overflow = "hidden";
		const m = document.getElementById("message");
		m.innerHTML = text;
		m.classList.remove("disappear");
		m.classList.add("pear");
		clearTimeout(timesIn);
		clearTimeout(timesOut);
		timesIn = setTimeout(() => {
			m.classList.remove("pear");
			m.classList.add("appear");
		}, 1);
		timesOut = setTimeout(() => {
			m.classList.remove("appear");
			m.classList.add("disappear");
			document.querySelector("body").style.overflow = "auto";
		}, text.length * 55 + 1200);
	}

	function saveGame() {
		saveChar();
		message("A játék sikeresen mentve.");
	}

	function loadGame() {
		document.getElementById("saveBtn").disabled = true;
		document.getElementById("loadBtn").disabled = true;
		loadChar();
		message("Oké, töltöm!");
		loaded = true;
		setTimeout(() => {
			main.classList.remove("brighten");
			if (isDying) {
				dying = setInterval(() => {
					changeVal("ero", -1);
				}, 20000);
			}
			if (musicOn) music.volume = 1;
			if (soundOn) {
				sound.volume = 1;
				sound2.volume = 1;
			}
			music.loop = true;
			newRoom();
		}, 4100);
	}

	function checkDeath() {
		if (char.ero < 1) {
			clearInterval(dying);
			clearTimers();
			document.querySelectorAll("button").forEach((i) => {
				i.disabled = true;
			});
			message("MEGHALTÁL!!!");
			music.pause();
			let soundEnd = sound.src.substr(-6);
			if (soundEnd !== "no.mp3") {
				sound.src = "./audio/no.mp3";
				sound.play();
			}
			setTimeout(() => {
				main.classList.add("darken");
				footer.classList.add("darken");
				modal.classList.add("darken");
			}, 1500);
			setTimeout(() => {
				modal.style.display = "none";
				let musicEnd = music.src.substr(-14);
				if (musicEnd !== "deathmusic.mp3") {
					music.src = "./audio/deathmusic.mp3";
					music.volume = 0.8;
					if (musicOn) music.play();
				}
				footer.innerHTML = "";
				main.classList.remove("darken");
				footer.classList.remove("darken");
				main.innerHTML = `
          <p>Nem bírtad tovább ezt a brutális világot...</p>
          <p>Azért nem annyira rossz eredmény ${steps} lépésen belül elérni a fenti pontokat.</p>
          <p id="tárgyak"></p>
          <p id="haverok"></p>
          <p id="hullák"></p>
          <p id="segítség"></p>
          <p id="képesség"></p>
          <p>De ha mégsem vagy elégedett az eredménnyel, az F5 tartogat egy időutazó varázslatot számodra.</p>
        `;
				if (localStorage.getItem("charName")) {
					main.innerHTML += "<p>Vagy a LOAD gombbal betöltheted a legutóbb elmentett állást.</p>";
					document.getElementById("loadBtn").disabled = false;
				}
				let tárgyak = getObj("W");
				if (tárgyak.length > 0) {
					let tárgyakStr = "Megszerezted az alábbi tárgyakat:<br><ul>";
					for (let tárgy of tárgyak) {
						tárgyakStr += "<li> " + tárgy.toLowerCase() + "</li>";
					}
					tárgyakStr += "</ul>";
					document.getElementById("tárgyak").innerHTML = tárgyakStr;
				}
				let haverok = getObj("J");
				if (haverok.length > 0) {
					let haverokStr = "Az alábbi emberek csatlakoztak hozzád:<br><ul>";
					for (let haver of haverok) {
						haverokStr += "<li> " + haver + "</li>";
					}
					haverokStr += "</ul>";
					document.getElementById("haverok").innerHTML = haverokStr;
				}
				let hullák = getObj("X");
				if (hullák.length > 0) {
					let hullákStr = "Végeztél az alábbi ellenségeiddel:<br><ul>";
					for (let hulla of hullák) {
						hullákStr += "<li> " + hulla + "</li>";
					}
					hullákStr += "</ul>";
					document.getElementById("hullák").innerHTML = hullákStr;
				}
				let segítség = getObj("H");
				if (segítség.length > 0) {
					let segítségStr = "A következő egyszerű embereknek segítettél (vagy próbáltál segíteni):<br><ul>";
					for (let segg of segítség) {
						segítségStr += "<li> " + segg + "</li>";
					}
					segítségStr += "</ul>";
					document.getElementById("segítség").innerHTML = segítségStr;
				}
				let képesség = getObj("S");
				if (képesség.length > 0) {
					let képességStr = "A következő képességeket szerezted meg:<br><ul>";
					for (let kép of képesség) {
						képességStr += "<li> " + kép + "</li>";
					}
					képességStr += "</ul>";
					document.getElementById("képesség").innerHTML = képességStr;
				}
				main.classList.add("brighten");
			}, 4500);
		}
		if (char.ugy < 1 || char.esz < 1 || char.lel < 1 || char.hat < 1) {
			if (isDying == false) {
				message("Kezdesz fokozatosan leépülni...");
				isDying = true;
				dying = setInterval(() => {
					changeVal("ero", -1);
				}, 20000);
			}
		} else {
			isDying = false;
			clearInterval(dying);
		}
	}

	function checkCond(cond) {
		let sn = char.name.split(",")[0];
		if (cond == "férfi") return sn == "Brezsnyev" || sn == "Sanyi" || sn == "Q";
		if (cond == "nő") return sn == "Lilike" || sn == "Gabi";
		let cc = true;
		let conds = cond.split(", ");
		for (let c of conds) {
			let op = c.charAt(0);
			if (op === "=" || op === "ł" || op === "<" || op === ">") {
				let key = c.split("_")[1];
				let val = c.split("_")[2];
				let ref = char[key];
				if (key === "name") ref = sn;
				if (
					(op === "=" && ref != val) ||
					(op === "ł" && ref == val) ||
					(op === ">" && ref <= val) ||
					(op === "<" && ref >= val)
				)
					cc = false;
			} else if (op === "!") {
				if (getObj(c.substring(1))) cc = false;
			} else {
				if (getObj(c) == false) cc = false;
			}
		}
		return cc;
	}

	function changeVal(id, val) {
		if (val === 0) return;
		if (val > 0) {
			klassz = "increase";
			if (id !== "sup") val = char[id] + val > 100 ? 100 - char[id] : val;
			char[id] += val;
			val = "+" + val;
		} else {
			if (char[id] < 1) {
				return;
			} else {
				val = char[id] + val < 0 ? -char[id] : val;
				char[id] += val;
				klassz = "decrease";
			}
		}
		let v = document.getElementById("val_" + id);
		v.innerHTML = val;
		v.classList.add(klassz);
		if (id !== "sup") {
			let newSkill = upSkill(id);
			if (char[id] >= 100 && !getObj(newSkill)) {
				char.objs.push(newSkill);
				message("Elsajátítottad a " + newSkill.split("_")[1] + " képességét");
			}
		}

		if (char.ero < 1) {
			clearInterval(dying);
			clearTimers();
			document.querySelectorAll("button").forEach((i) => {
				i.disabled = true;
			});
		}
		setTimeout(() => {
			v.classList.remove(klassz);
		}, 1000);
		setTimeout(() => {
			printVals();
		}, 2000);
	}

	function printVals() {
		document.getElementById("stats").innerHTML = `
    <div id="stats">
          Erő: <span class="stat" id="val_ero">${char.ero} </span>
          Ügyesség: <span class="stat" id="val_ugy">${char.ugy} </span>
          Ész: <span class="stat" id="val_esz">${char.esz} </span>
          Lélek: <span class="stat" id="val_lel">${char.lel} </span>
          Hatalom: <span class="stat" id="val_hat">${char.hat} </span>
          Támogatás: <span class="stat" id="val_sup">${char.sup} </span>
    </div>
    `;
		checkDeath();
	}

	function getObj(ob) {
		if (ob.length > 1) {
			return char.objs.indexOf(ob) > -1;
		}
		let obob = [];
		for (let o of char.objs) {
			if (o.charAt(0) === ob) {
				obob.push(o.split("_")[1]);
			}
		}
		return obob;
	}

	function getWeapons() {
		let fe = getObj("W");
		let feri = [];
		if (fe.length > 0) {
			for (let f of fe) {
				feri.push(weapons.find((w) => w.name === f));
			}
		}
		return feri;
	}

	function loseObj(oo, mes = true) {
		let i = char.objs.indexOf("W_" + oo);
		if (i > -1) {
			char.objs.splice(i, 1);
			if (mes) message("Elvesztetted a következő tárgyat: " + oo);
		}
	}

	//Új Helyszín
	window.newRoom = () => {
		clearTimers();
		room = {};
		let num = rooms.findIndex((r) => r.num === char.room);
		if (num === -1) {
			message("Ez még nincs kész, ezért lefagyok.");
			if (document.getElementById("saveBtn")) document.getElementById("saveBtn").disabled = true;
			return;
		}
		room = { ...rooms[num] };
		if (room.type === "Ytrial") {
			char.room = checkCond(room.value) ? room.pass : room.fail;
			num = rooms.findIndex((r) => r.num === char.room);
			if (num === -1) {
				message("Nem felelsz meg a feltételnek a továbbjutáshoz, ezért lefagyok.");
				return;
			}
			room = {};
			room = { ...rooms[num] };
		}
		steps++;
		footer.innerHTML = "";
		main.innerHTML = "";

		//header
		let musIcon = musicOn ? "./img/musicOn.png" : soundOn ? "./img/soundOn.png" : "./img/soundOff.png";
		header.innerHTML = `
      <div id="topMenu">
        <img class="thumb" src="./img/chars/${char.pic}.jpg">
        <div id="stats"></div>
        <button class="navBtn" id="saveBtn">SAVE</button>
        <button class="navBtn" id="loadBtn">LOAD</button>
        <img id='soundBtn' class="topBtns" src=${musIcon} alt="music">
      </div>
      <div id="message" class="disappear"></div> 
    `;
		printVals();
		document.getElementById("soundBtn").addEventListener("click", changeMusic);
		document.getElementById("saveBtn").addEventListener("click", saveGame);
		document.getElementById("loadBtn").addEventListener("click", loadGame);
		document.getElementById("loadBtn").disabled = localStorage.getItem("charName") == null;
		document.getElementById("saveBtn").disabled = false;

		if (room.help && !getObj(room.help)) char.objs.push(room.help);

		let nobject = false;

		//ROOMS
		//dungeon
		function dungeonRoom() {
			dungeon++;
			document.getElementById("saveBtn").disabled = true;
			if (room.help) modi = room.help.split("_")[1];
			if (dungeon >= room.end * (0.5 + Math.random()) || (room.num === 57 && steps > 50)) {
				room.desc = room.passDesc;
				room.buttons = [room.passBtn];
				nobject = " ";
				dungeon = 0;
				if (room.help) {
					let fi = rooms.findIndex((r) => r.num === room.fight);
					let bonus = 10 + Math.round(dungeon * 2 + rooms[fi].level * 8 + Math.random() * 10);
					changeVal("sup", bonus);
					changeVal("hat", 1 + Math.round(bonus / 15));
					changeVal("ugy", 1 + Math.round(bonus / 15));
					changeVal("lel", 1 + Math.round(bonus / 10));
					modi = room.help.split("_")[1];
				}
			} else {
				room.buttons = [
					{
						txt: room.contBtn,
						new: room.num,
					},
					room.failBtn,
				];
				let event = Math.random();
				if (event < 0.4 || dungeon == 1) {
					nobject = "<p>Semmi említésre méltó nem történik.</p>";
				} else if (event < 0.6) {
					let x = Math.floor(Math.random() * room.find.length);
					if (x >= room.findmany || (x < room.findmany && getObj(room.find[x]) == false)) {
						room.obj = [room.find[x]];
					} else {
						nobject = "<p>Semmi említésre méltó nem történik.</p>";
					}
				} else if (event < 0.8) {
					nobject = "<p>Találtál egy kis elemózsiát.</p>";
					changeVal("ero", Math.round(dungeon * 1.5 + Math.random() * 5));
				} else {
					let num = rooms.findIndex((r) => r.num === room.fight);
					room = {};
					room = { ...rooms[num] };
				}
			}
		}

		//trial
		function trialRoom() {
			document.getElementById("saveBtn").disabled = true;
			let result = "";
			let crease = 0;
			let id = modi ? modi : room.value;
			if (Math.random() * 105 < char[id] + getObj(upSkill(id)) * 20) {
				char.room = room.pass;
				crease = 1;
				result = "siker!";
			} else {
				char.room = room.fail;
				crease = -1;
				result = "bukás!";
			}
			changeVal(id, crease);

			music.volume = 0.25;
			message(nameSkill(id) + " próba: <span id='result'>" + result + "</span>");
			document.getElementById("result").style.color = result === "siker!" ? "green" : "red";
			setTimeout(() => {
				modi = false;
				newRoom();
			}, 6000);
		}

		//Xtrial
		function XtrialRoom() {
			document.getElementById("saveBtn").disabled = true;
			let basemes = "";
			let outcome = "";
			let result = "";
			let crease = 0;
			let changes = [];

			switch (room.value) {
				case "com":
					basemes = "A beszéded ";
					if (45 + Math.random() * 120 < char.esz + char.hat + char.sup / 3) {
						outcome = "pass";
						crease = 1;
						result = "lenyűgöző volt!";
						if (room.modi) modi = room.modi;
					} else {
						outcome = "fail";
						crease = -1;
						result = "inkább rontott a helyzeten.";
					}
					changes = ["hat", "esz", "sup"];
					break;

				case "recruit":
					basemes = "Személyed varázsa ";
					let kisugarzas =
						char.esz +
						char.hat +
						char.sup +
						char.lel +
						char.ero / 2 +
						char.ugy / 3 +
						getObj("S").length +
						getObj("H").length * 2;
					if (75 + Math.random() * 155 < kisugarzas) {
						outcome = "pass";
						crease = 1 + Math.round(kisugarzas / 15 + Math.random() * 10);
						result = "nagy hatást keltett.";
					} else {
						outcome = "fail";
						crease = -1 - Math.round(10 - kisugarzas / 60 + Math.random() * 3);
						result = "csalódást okozott.";
					}
					changes = ["sup"];
					break;

				case "vanepuca":
					basemes = "Az embert próbáló próbát ";
					if (
						((char.ero > 30 + Math.random() * 40 || getObj("S_Bivalyerő")) &&
							(char.lel / 2 + char.hat > 40 + Math.random() * 60 || getObj("S_Hit")) &&
							(char.esz + char.ugy > 20 + Math.random() * 20 || getObj("S_Pengeagy"))) ||
						getObj("S_Vasakarat")
					) {
						outcome = "pass";
						crease = 3;
						result = "sikerrel kiálltad!";
					} else {
						outcome = "fail";
						crease = -3;
						result = "csúfosan elbuktad!";
					}
					message("Az embert próbáló próbát <span id='result'>" + result + "</span>");
					changes = ["ugy", "esz"];
					changeVal("ero", crease * 4);
					changeVal("hat", crease * 3);
					changeVal("lel", crease * 2);
					break;

				case "night":
					basemes = "";
					if (
						checkCond("E_Boldi elzárása") ||
						checkCond("X_Béna Boldizsár, !E_Boldi kivégzése") ||
						checkCond("D_választás") ||
						checkCond("E_help")
					) {
						outcome = "pass";
						result = "Sikeresen elhárítottad ma a fő veszélyt.";
					} else {
						let x = char.lel + Math.random() * 100;
						if (x > 85 || checkCond("S_Bübüszimat") || checkCond("S_Hit")) {
							outcome = "mid";
							result = "Nem sikerült elhárítanod ma a fő veszélyt, de szerencséd van.";
						} else {
							outcome = "fail";
							result = "Nem sikerült a nap során elhárítanod a fő veszélyt.";
						}
					}
					break;

				case "ima":
					basemes = "";
					let hit = char.lel + getObj("S_Hit") * 50 - getObj("X").length * 2 - getObj("W").length;

					if (Math.random() * 120 < hit) {
						outcome = "pass";
						crease = 1 + Math.round((100 - char.lel) / 15 + Math.random() * 3);
						result = "Az imád meghallgatásra talált.";
					} else {
						outcome = "fail";
						crease = -1 - Math.round((100 - char.lel) / 20 + Math.random() * 2);
						result = "Nem tudsz hinni az imád meghallgatásában.";
					}
					changes = ["lel"];
					break;

				case "love":
					basemes = "";
					let appeal = false;
					if (checkCond("férfi")) {
						if (
							char.esz +
							char.hat +
							char.sup / 2 +
							char.lel / 2 +
							char.ero +
							char.ugy / 2 +
							getObj("H").length +
							getObj("S").length * 3 -
							getObj("X").length * 2 >
							100 + Math.random() * 250
						) {
							appeal = true;
							result = "Úgy tűnik, Bogi megkedvelt téged.";
						} else {
							result = "Bogi teljesen közömbös irántad.";
						}
					} else {
						if (
							char.esz / 2 +
							char.hat / 4 +
							char.sup / 2 +
							char.lel +
							char.ero / 4 +
							char.ugy / 2 +
							getObj("H").length +
							getObj("S").length * 3 -
							getObj("X").length * 2 >
							75 + Math.random() * 125
						) {
							appeal = true;
							result = "Úgy tűnik, az erdei manók vezére első látásra fülig szerelmes lett beléd.";
						} else {
							result = "Az erdei manók vezére teljesen közömbösnek tűnik irántad.";
						}
					}

					if (appeal) {
						outcome = "pass";
						changeVal("hat", 1 + Math.round(Math.random() * 9));
						changeVal("lel", 1 + Math.round(Math.random() * 5));
					} else {
						outcome = "fail";
						changeVal("hat", -1 - Math.round(Math.random() * 5));
					}
					break;

				case "hang":
					basemes = "Hangutánzásod ";
					let voice = char.ugy + char.esz + char.lel + Math.random() * 50;

					if (Math.random() * 250 < voice) {
						outcome = "pass";
						result = "sikeres volt!";
					} else {
						outcome = "fail";
						result = "elég gyatrára sikeredett.";
					}
					break;

				case "secu":
					basemes = "";
					if (getObj("W").length) {
						outcome = "fail";
						result = "Nem sikerül átjutnod az őrökön.";
						modi = "A biztonsági őr megállít, megvizsgál és egyből kiszúrja, hogy fegyver van nálad.";
					} else if (getObj("E_Boti üldöz")) {
						outcome = "fail";
						result = "Nem sikerül átjutnod az őrökön.";
						modi =
							"A biztonsági őr megállít. Egy ideig nézi a képed, majd beleszól a gallérmikrofonjába:</p><p>- Megvan <span class'name'></span>!";
					} else {
						outcome = "pass";
						result = "Sikeresen átjutotsz az őrökön.";
						modi =
							"A biztonsági őr megállít, megvizsgál, de semmi gyanúsat nem talál nálad. Int, hogy bemehetsz a térre.";
					}
					break;

				default:
					break;
			}

			char.room = room[outcome];
			let vol = outcome === "pass" ? 0.75 : outcome === "fail" ? 0.25 : 0.5;
			music.volume = vol;
			message(basemes + "<span id='result'>" + result + "</span>");
			document.getElementById("result").style.color =
				outcome === "pass" ? "green" : outcome === "fail" ? "red" : "blue";
			for (let cs of changes) {
				changeVal(cs, crease);
			}
			setTimeout(() => {
				newRoom();
			}, 5600);
		}

		//ADDS
		//obj
		function objAdd() {
			let fegyObj = [];
			for (let o of room.obj) {
				if (o.charAt(0) !== "W" && !getObj(o)) char.objs.push(o);
				if (o.charAt(0) === "W") {
					char.objs.push(o);
					fegyObj.push(weapons.find((w) => w.name === o.split("_")[1]));
				}
			}
			if (fegyObj.length > 0) {
				let plural = fegyObj.length > 1 ? "tárgyakkal" : "tárggyal";
				let objString = "<p class='rightScore'>A következő " + plural + " gazdagodtál: </p><p>";
				fegyObj.map((fegy, i) => {
					let titleString = `${fegy.name}&#10;${fegy.desc}&#10;Hatás:`;
					for (let ef of fegy.effect) {
						titleString += `&#10;- ${ef.val}: ${ef.ch}`;
					}
					objString += `
                <img class="weapon" id="w-${i}" title="${titleString}" src="./img/weapons/${fegy.pic}">
              `;
				});
				objString += "</p>";
				document.getElementById("pickup").innerHTML = objString;
			}
		}

		//select
		function selectAdd() {
			let selString = "<form><div>";
			let sels = room.select;
			let list = sels.length;
			let sub = room.submit;
			for (let i = 0; i < list; i++) {
				selString += `<select id="col${i}">`;
				for (let opt of sels[i]) {
					let name = opt.name;
					let val = opt.val;
					if (name == "name") name = char.name.split(",")[0];
					selString += `<option value="${val}">${name}</option>`;
				}
				selString += "</select>";
			}
			selString += `
        </div>
        <button type="submit" id="submit" class="btn">${sub.txt}</button>
        </form>
      `;
			document.getElementById("opart").innerHTML = selString;
			document.getElementById("submit").addEventListener("click", function (event) {
				event.preventDefault();
				let txt = "";
				let varc = 0;
				for (let l = 0; l < list; l++) {
					let o = document.getElementById("col" + l);
					let t = o.options[o.selectedIndex].text;
					if (room.wvar) txt += t + (l < list - 1 ? room.sep : "");
					if (room.cvar) {
						if (room.cvar === "obj") {
							char.objs.push(o.value);
						} else varc += Number(o.value);
					}
				}
				if (room.wvar) window[room.wvar] = txt;
				if (room.cvar && room.cvar != "obj") {
					changeVal(room.cvar, varc);
				}
				let num = rooms.findIndex((r) => r.num === sub.new);
				if (num === -1) {
					message("Ez még nincs kész.");
					return;
				} else {
					char.room = sub.new;
				}
				if (sub.modi) modi = sub.modi;
				if (room.cvar && room.cvar != "obj") {
					if (room.wc) prg = varc;
					message("Választásod pontértéke: " + varc);
					document.getElementById("submit").disabled = true;
					setTimeout(() => {
						newRoom();
					}, 4500);
				} else newRoom();
			});
		}

		//input
		function inputAdd() {
			let rip = room.input;
			let leng = 0;
			document.getElementById("opart").innerHTML = `
          <div id="inputDiv">
            <span id="iplab"><i>${rip.label} </i></span>
            <input type="text" id="tip" maxlength="${rip.max}">
            <div>A helyes válaszhoz szükséges hossz: <span id="len">${leng}</span> / <span>${rip.max}</span></div> 
          </div>
        `;
			let dip = document.getElementById("tip");
			dip.focus();
			dip.style.width = rip.max * 0.9 + "em";

			dip.addEventListener("change", function (event) {
				let answer = event.target.value;
				if (answer === rip.key) {
					char.room = room.pass;
				} else {
					char.room = room.fail;
				}
				modi = false;
				newRoom();
			});
			dip.addEventListener("input", function (event) {
				let answer = event.target.value;
				leng = answer.length;
				document.getElementById("len").innerHTML = leng;
			});
		}

		//kotyvasztó
		function kotyvassz() {
			let gemName = [];
			let gemNum = [];
			let gemIn = [];
			for (let i = 0; i < 3; i++) {
				gemName.push(modi[i]);
				gemNum.push(modi[i + 3]);
				gemIn.push(0);
			}
			modi = false;

			function kotyInput(e) {
				let val = Number(e.target.value);
				val = val > e.target.max ? Number(e.target.max) : val;
				val = val < e.target.min ? 0 : val;
				let numera = Number(e.target.id.split("-")[1]);
				gemIn[numera] = val;
				updateKotyvaszt(numera + 1);
			}

			function kotyButton(e) {
				let id = e.target.id.split("-");
				let numera = Number(id[2]);
				if (id[1] == "min") {
					gemIn[numera] = 0;
				} else {
					gemIn[numera] = gemNum[numera];
				}
				updateKotyvaszt(numera + 1);
			}

			function kotySubmit(e) {
				e.preventDefault();
				for (let x = 0; x < 3; x++) {
					gemNum[x] -= gemIn[x];
				}

				let reciName = "";
				for (let reci of receptek) {
					let reciHit = 0;
					for (let x = 0; x < 3; x++) {
						if (reci[gemName[x]] && reci[gemName[x]] == gemIn[x]) reciHit++;
					}
					if (reciHit === 3) {
						reciName = reci.name;
						break;
					}
				}
				if (reciName.length < 1) {
					let minimalArt = Math.round(
						(gemIn[0] + gemIn[1] * 3 + gemIn[2] * 9) / 300 + Math.random() / 5 - Math.random() / 3
					);
					if (minimalArt > 3) minimalArt = 3;
					let potrecik = weapons.filter((w) => w.recept);
					if (minimalArt > 0) {
						potrecik = potrecik.filter((p) => p.recept == minimalArt);
						reciName = rnd(potrecik).name;
					}
				}
				let fobjString = `<p class='rightScore'>${room.prodtxt}</p><p>`;
				if (reciName.length) {
					char.objs.push("W_" + reciName);
					let fegyverO = weapons.find((w) => w.name === reciName);
					let titleString = `${fegyverO.name}&#10;${fegyverO.desc}&#10;Hatás:`;
					for (let ef of fegyverO.effect) {
						titleString += `&#10;- ${ef.val}: ${ef.ch}`;
					}
					fobjString += `
                <img class="weapon" title="${titleString}" src="./img/weapons/${fegyverO.pic}">
              `;
				} else {
					let szirszar = [
						"WC-pumpa",
						"sötét trutymó",
						"óriási adag bizmutkása",
						"nagy büdös semmi",
						"szakadt alsógatya",
						"torz vigyorú kertitörpe",
						"felhúzható, csicsergő fémbölény",
						"művészi gyurmafigura",
						"TDK magnókazetta",
						"elem nélküli számológép",
						"WINDOWS update csomag",
						"vigyorgó gumikacsa",
					];
					fobjString += `Egy ${rnd(szirszar)}. Dühösen eldobod! `;
				}
				fobjString += "</p>";
				for (let x = 0; x < 3; x++) {
					gemIn[x] = 0;
				}

				updateKotyvaszt();
				document.getElementById("gyártmány").innerHTML = fobjString;

				let ossz = 0;
				for (let x = 0; x < 3; x++) {
					ossz += gemNum[x];
				}
				if (ossz < 1) {
					message("Elfogytak az ásványaid!");
					document.getElementById("submit").disabled = true;
					document.querySelectorAll("input").forEach((i) => {
						i.disabled = true;
					});
					document.querySelectorAll(".Mbtn").forEach((i) => {
						i.disabled = true;
					});
				}
			}

			function updateKotyvaszt(foka) {
				let storeStr = "";
				let cardStr = "";
				for (let i = 0; i < 3; i++) {
					storeStr += `${gemName[i]}: <span class="red">${gemNum[i]}</span>  `;
					cardStr += `
              <tr>
                <td>${gemName[i]}</td>
                <td><input id="in-${i}" type="number" tabindex="${i + 1}" min="0" max="${gemNum[i]}" value="${gemIn[i]
						}"></td>
                <td><input id="ir-${i}" type="range" min="0" max="${gemNum[i]}" value="${gemIn[i]}"></td>
                <td>
                  <button class="Mbtn" id="b-min-${i}">Min</button>
                  <button class="Mbtn" id="b-max-${i}">Max</button>
                </td>
              </tr>
            `;
				}
				document.getElementById("opart").innerHTML = `
          <div class="kotyHead">MARADÉK ÁSVÁNY:</div>
          <div id="kotyStore">${storeStr}</div>
          <form id="kotyFeed">
            <div class="kotyHead">BETÁPLÁLÁS:</div>
            <table>${cardStr}</table>
            <button type="submit" id="submit" tabindex="4" class="btn">GYÁRTÁS</button>
          </form>
          <div id="gyártmány"></div>
          <button id="eleg" class="btn">Elég volt ennyi</button>
        `;
				document.querySelectorAll("input").forEach((i) => i.addEventListener("change", kotyInput));
				document.querySelectorAll(".Mbtn").forEach((i) => i.addEventListener("click", kotyButton));
				document.getElementById("submit").addEventListener("click", kotySubmit);
				document.getElementById("eleg").addEventListener("click", function () {
					char.room = room.cont;
					modi = false;
					newRoom();
				});
				let fókusz = foka < 3 ? "in-" + foka : "submit";
				document.getElementById(fókusz).focus();
			}

			updateKotyvaszt(0);
		}
		//Xchange
		function xchangelj() {
			switch (room.Xchange) {
				case "sleep":
					let relax = Math.round(30 - steps);
					relax = relax < 1 ? 1 : relax;
					changeVal("ero", relax * 2);
					message("Sikerült " + relax + " órát aludnod.");
					break;

				case "kampány":
					let baseline = char.lel / 60 + char.esz / 50 + char.hat / 40 + char.sup / 30 + prg / 10 + 0.5 * Math.random();
					changeVal("hat", Math.floor(baseline));
					changeVal("sup", Math.round(baseline * 10));
					message("A támogatásod " + Math.round(baseline * 10) + " ponttal nőtt.");
					break;

				case "lefegyverzés":
					let messi = "Nem volt fegyvered.";
					for (let ii = 0; ii < char.objs.length; ii++) {
						let coco = char.objs[ii];
						if (coco.charAt(0) === "W") {
							messi = "Leraktad, ami fegyvered volt.";
							fegyverRaktár.push(coco);
							char.objs.splice(ii, 1);
							ii--;
						}
					}
					message(messi);
					break;

				case "felfegyverzés":
					let messzi = "Nem volt lerakva fegyvered.";
					if (fegyverRaktár.length > 0) {
						messzi = "Felvetted a korábban lerakott fegyvereidet.";
						for (let fr of fegyverRaktár) {
							char.objs.push(fr);
						}
						fegyverRaktár = [];
					}
					message(messzi);
					break;

				case "treasure":
					console.log("M: ", modi);
					let bl = prg + Math.round(Math.random() * (char.hat + char.sup) / 25);
					for (let i = 3; i < 6; i++) {
						bl += Math.round(modi[i] * (i - 2) / 1.5)
					}
					message("A szétosztott kincsek " + bl + " ponttal növelték a támogatásodat!");
					changeVal("sup", bl);
					break;

				default:
					break;
			}
		}

		//death
		function die() {
			document.querySelectorAll("button").forEach((i) => {
				i.disabled = true;
			});
			if (room.stopmusic) music.loop = false;
			let agony = Math.floor(char.ero / 4);
			for (let x = 1; x < 5; x++) {
				timo = setTimeout(() => {
					if (musicOn) music.volume = 1 - x * 0.2;
					if (x < 4) {
						sound.src = "./audio/hit" + x + ".mp3";
						sound.play();
						changeVal("ero", -agony);
					} else {
						sound.volume = 0;
						changeVal("ero", -char.ero);
					}
				}, x * room.desc.length * 9);
			}
		}

		//ROOMS triggers
		if (room.type === "dungeon") {
			dungeonRoom();
		} else {
			dungeon = 0;
		}

		if (room.type === "trial") {
			trialRoom();
		} else if (room.type === "Xtrial") {
			XtrialRoom();
		} else {
			//other rooms
			if (curmusic != room.music) {
				if (room.type === "fight") {
					let fm = "fight" + (1 + Math.floor(9 * Math.random()));
					music.src = "./audio/" + fm + ".mp3";
					curmusic = fm;
				} else {
					music.src = "./audio/" + room.music + ".mp3";
					curmusic = room.music;
				}
				if (musicOn) music.play();
			}
			music.volume = music.src.includes("think") ? 0.3 : 1;

			let pp = room.pic.split(",");
			if (pp.length > 1) {
				let r = Math.floor(1 + Math.random() * Number(pp[1]));
				room.pic = pp[0] + r + ".jpg";
			}

			function fwdesc() {
				let bonusT = "";
				let bt = 70;
				if (char.esz > bt) {
					bt = char.esz;
					bonusT = "esz";
				}
				if (char.ugy > bt) {
					bt = char.ugy;
					bonusT = "ugy";
				}
				if (char.ero > bt) {
					bt = char.ero;
					bonusT = "ero";
				}
				if (char.hat > bt) {
					bt = char.hat;
					bonusT = "hat";
				}
				if (char.lel > bt) {
					bt = char.lel;
					bonusT = "lel";
				}
				return bonusT;
			}

			if (room.type === "finalwar") {
				let bonusD = {
					esz: "TAKTIKA: Minden embered kap +20% Támadást.",
					ugy: "ELKERÜLÉS: Minden embered kap +20% Védelmet.",
					ero: "IZOMTÖMEG: Minden embered kap +20% HP-t.",
					hat: "ENGEDELMESSÉG: Önmagukhoz képest sokkal engedelmesebbek az embereid.",
					lel: "TÚLÉLÉS: Minden embered gyorsabban gyógyul, ha iszik.",
				};
				fwb = fwdesc();
				if (fwb !== "") {
					room.desc += `
						</p><p class="red">Kiváló képességeid az alábbi hatással vannak az embereidre:</p>
						<p class="yellow">${bonusD[fwb]}</p>
					`;
				}
			}

			main.innerHTML = `
				<img id="roomPic" src="./img/rooms/${room.pic}">
				<h2>${room.title}</h2>
				<div id="subMain">
				<p id="roomDesc">${room.desc}</p>
				<p id="pickup"></p>
				<div id="opart"></div>
				<div id="btns"></div>
				</div>
			`;

			if (document.getElementById("fullName")) document.getElementById("fullName").innerHTML = char.name;
			if (document.querySelector(".name")) {
				document.querySelectorAll(".name").forEach((n) => (n.innerHTML = char.name.split(",")[0]));
			}
			if (document.querySelector(".part")) {
				document.querySelectorAll(".part").forEach((p) => (p.innerHTML = part));
			}
			if (document.getElementById("modified") && modi) {
				document.getElementById("modified").innerHTML = modi;
				modi = false;
			}
			if (document.querySelector(".cond")) {
				document.querySelectorAll(".cond").forEach((c) => {
					let condi = c.getAttribute("data-cond");
					if (!checkCond(condi)) c.remove();
				});
			}
			if (document.getElementById("pp") && progi.length > 1) {
				let prgTxt = "";
				let prgArr = progi.split(" - ");
				for (let p of prgArr) {
					prgTxt += "<li>" + p + "</li>";
				}
				document.getElementById("pp").innerHTML = prgTxt;
			}

			if (document.getElementById("casualties")) {
				let cStr = "";
				if (modi.length < 1) {
					cStr = "Senki fontos nem vesztette el most az életét.";
				} else {
					let fd = [];
					let nd = [];
					for (let m of modi) {
						if (getObj("J_" + m)) {
							fd.push(m);
						} else {
							nd.push(m);
						}
					}
					if (fd.length > 0) {
						cStr += `
							Az alábbi barátaid pihentek meg örökre:
							<ul>
						`;
						for (let f of fd) {
							cStr += `<li> ${f}</li>`;
						}
						cStr += "</ul>";
					}
					if (nd.length > 0) {
						cStr += `
							Az alábbi fontos emberek haraptak itt fűbe:
							<ul>
						`;
						for (let f of nd) {
							cStr += `<li> ${f}</li>`;
						}
						cStr += "</ul>";
					}
				}
				document.getElementById("casualties").innerHTML = cStr;
			}

			if (document.getElementById("akna")) document.getElementById("akna").innerHTML = room.akna;
			if (document.getElementById("kincs")) document.getElementById("kincs").innerHTML = room.kincs;

			if (nobject) {
				document.getElementById("pickup").innerHTML = nobject;
			} else if (room.obj) {
				objAdd();
			}

			if (room.select) {
				selectAdd();
			}

			//input
			if (room.input) {
				inputAdd();
			}

			//kotyvasztó
			if (room.type === "kotyvaszt") {
				kotyvassz();
			}

			//Room tovább
			if (room.buttons) {
				let btnString = "";
				let btns = room.buttons;
				for (let i = 0; i < btns.length; i++) {
					let btn = btns[i];
					let bcc = true;
					if (btn.cond) {
						bcc = checkCond(btn.cond);
					}
					if (btn.cond == null || bcc) {
						btnString += `
              <button id="btn-${i}" class="btn">${btn.txt}</button>
            `;
					}
				}
				document.getElementById("btns").innerHTML = btnString;

				document.querySelectorAll(".btn").forEach((i) => i.addEventListener("click", pressBtn));
			}

			if (room.change && loaded == false) {
				for (let ch of room.change) {
					let chby = ch.crease;
					if (ch.rnd) {
						let xtra = parseInt(1 + Math.random() * ch.rnd);
						if (ch.crease < 0) xtra = -xtra;
						chby += xtra;
					}
					changeVal(ch.id, chby);
				}
			}

			if (room.Xchange && loaded == false) {
				xchangelj();
			}
			if (loaded) loaded = false;
			if (room.type === "death") {
				die();
			}
		}
	};

	//ROOM OPERATIONS
	//pursuit
	function pursuitAct() {
		let counter = char.ero;
		let pos = 5;
		if (modi) {
			message("A késlekedés miatt már csak hideg nyomon haladsz.");
		} else {
			modi = 1;
		}
		document.getElementById("subMain").innerHTML = `
          <div id="countCont">
            Szufla: <span id="countNo">${counter}</span>
          </div>
					<button id="exitBtn" title="Gyáva!">Feladom!</button>
					<br/> 
					<br/> 
          <div id="runnerCont">
            <img class="runners" id="charRunner" src="./img/chars/${char.pic}.jpg">
            <img class="runners" id="nmeRunner" src="./img/rooms/${room.goalpic}">
          </div>
          <div id="question"></div>
        `;
		document.getElementById("exitBtn").addEventListener("click", fleeP);
		let count = document.getElementById("countNo");
		timo = setInterval(() => {
			counter--;
			let szufla = (counter / char.ero) * 90;
			count.innerHTML = counter;
			count.style.width = szufla + "%";
			if (counter < 6) count.style.backgroundColor = "red";
			if (counter < 1) {
				clearInterval(timo);
				modi = false;
				char.room = room.fail;
				if (room.help) modi = room.help.split("_")[1];
				document.querySelector("input").disabled = true;
				newRoom();
			}
		}, 1000);

		function fleeP() {
			clearInterval(timo);
			char.room = room.fail;
			newRoom();
		}

		function checkEnd() {
			if (counter > 0 && pos < 85) newQuestion();
			else {
				if (counter < 1) {
					char.room = room.fail;
					document.querySelector("input").disabled = true;
					modi = false;
					if (room.help) modi = room.help.split("_")[1];
				} else {
					char.room = room.pass;
					changeVal("esz", room.level);
					if (room.modi) {
						modi = room.modi;
					} else {
						modi = false;
					}
					if (room.help) {
						let bonus = 10 + Math.round(room.level * 5 + Math.random() * 5 + counter / 5);
						changeVal("sup", bonus);
						changeVal("hat", 1);
						changeVal("lel", 1 + Math.round(bonus / 10));
						modi = room.help.split("_")[1];
					}
				}
				document.getElementById("question").innerHTML = "Siker!";
				clearInterval(timo);
				setTimeout(() => {
					newRoom();
				}, 1001);
			}
		}

		newQuestion();

		function newQuestion() {
			let a = parseInt(room.level * 2 + (Math.random() * (100 + room.level * modi * 5 - counter)) / 2);
			let b = parseInt(room.level + (Math.random() * (100 + room.level * modi * 3 - counter)) / 2);
			let c = parseInt(Math.random() * 3);
			let d = ["+", "-", "*"][c];
			let e = 0;
			let startTime = new Date().getTime();
			switch (d) {
				case "+":
					e = a + b;
					break;

				case "-":
					b = parseInt(b / 3);
					e = a - b;
					break;

				case "*":
					a = parseInt(a / 6);
					b = parseInt(b / 6);
					e = a * b;
					break;

				default:
					break;
			}
			console.log("HELYES: ", e);
			let y = "";
			document.getElementById("question").innerHTML = `
            ${a} ${d} ${b} = ?
            <input id="answer" type="number">
          `;
			let ia = document.getElementById("answer");
			ia.focus();
			ia.addEventListener("change", function (event) {
				let reaction = Math.round((new Date().getTime() - startTime) / 200);
				let answer = Number(event.target.value);
				let x = 0;
				if (answer == e) {
					x = 10 + Math.round(char.esz / 3 + char.ugy / 4 - reaction - room.level * modi);
					y = x > 0 ? "Jó válasz!" : "Jó, csak lassú.";
				} else {
					x -= Math.round((counter / 3 + reaction / 5) / 2 + room.level * modi);
					y = "Rossz válasz!";
				}
				pos += x;
				if (pos > 84) pos = 85;
				if (pos < 6) pos = 5;
				document.getElementById("charRunner").style.left = pos + "vw";
				footer.innerHTML = `
              <p>${y}</p>
            `;
				footer.classList.remove("disappear");
				footer.classList.add("appear");
				setTimeout(() => {
					footer.classList.remove("appear");
					footer.classList.add("disappear");
				}, 750);
				checkEnd();
			});
		}
	}

	//aknakereső
	function mineAct() {
		music.volume = 0.6;
		let s = room.size;
		var field = [];
		for (let x = 0; x < s; x++) {
			field.push([]);
			for (let y = 0; y < s; y++) {
				field[x].push([false, 0]);
			}
		}
		let numera = 0;
		do {
			let x = parseInt(Math.random() * s);
			let y = parseInt(Math.random() * s);
			if (field[x][y][1] === 0) {
				field[x][y][1] = 1;
				numera++;
			}
		} while (numera < room.kincs);
		numera = 0;
		do {
			let x = parseInt(Math.random() * s);
			let y = parseInt(Math.random() * s);
			if (field[x][y][1] === 0) {
				field[x][y][1] = 2;
				numera++;
			}
		} while (numera < room.akna);
		let digs = Math.round(char.ero / 2);
		//let pic = ["gyep.jpg", "pearl.png", "akna.png"]; pic[field[col][row][1]]
		let kincsHit = 0;
		let aknaHit = 0;
		let firstEnd = true;

		function updateMScore() {
			document.getElementById("scoresM").innerHTML = `
            <span class="score">Energia: <span class="red">${digs}</span></span> 
            <span class="score">Kincs: <span class="lime">${kincsHit}</span>/${room.kincs}</span> 
            <span class="score">Akna: <span class="lime">${aknaHit}</span>/${room.akna}</span>
          `;
			let finish = false;

			if (firstEnd) {
				if (kincsHit == room.kincs) {
					message("Minden kincset megtaláltál!");
					finish = true;
					let bonus =
						5 +
						Math.round(
							room.size * 2 +
							room.akna * 2.5 -
							room.kincs / 2 +
							Math.random() * 5 +
							(room.size * (room.size - 1) - digs) / 2 +
							kincsHit / 1.5 -
							aknaHit
						);
					changeVal("sup", bonus);
					changeVal("hat", 1);
					char.room = room.pass;
					if (room.help) {
						changeVal("lel", 1 + Math.round(bonus / 3));
					}
				} else if (digs < 1) {
					message("Nem bírod tovább, kidöglöttél!");
					finish = true;
					let bonus = Math.round(
						room.size * 1.5 +
						room.akna * 2 -
						room.kincs -
						Math.random() * 5 +
						Math.random() * 5 -
						(room.kincs - kincsHit) * 2 +
						kincsHit -
						aknaHit
					);
					changeVal("sup", bonus);
					changeVal("hat", -1);
					char.room = room.med;
				}
				if (finish) {
					if (room.help) modi = room.help.split("_")[1];
					firstEnd = false;
					document.querySelectorAll(".minefield").forEach((i) => i.removeEventListener("click", pressMine));
					document.getElementById("exitBtn").disabled = true;
					setTimeout(() => {
						newRoom();
					}, 4500);
				}
			}
		}

		function fleeM() {
			if (room.help) modi = room.help.split("_")[1];
			char.room = room.fail;
			newRoom();
		}

		document.getElementById("subMain").innerHTML = `
          <div id="subHeader">
            <span id="scoresM"></span>
            <button id="exitBtn" title="Gyáva!">Feladom!</button> 
          </div>
          <table id="garden"></table>
        `;
		let gardenStr = "<tr>";
		let name = char.name.split(",")[0];
		for (let row = 0; row < s; row++) {
			for (let col = 0; col < s; col++) {
				gardenStr += `
              <td class="minefieldCard" id="mfc-${col}-${row}"}> 
                <img
                    class="minefield"
                    id="mf-${col}-${row}"
                    src="./img/rooms/gyep.jpg"
                    title="Keress csak, ${name}!"
                />
              </td>
            `;
			}
			gardenStr += "</tr>";
		}
		document.getElementById("garden").innerHTML = gardenStr;
		updateMScore();
		document.querySelectorAll(".minefield").forEach((i) => i.addEventListener("click", pressMine));
		document.getElementById("exitBtn").addEventListener("click", fleeM);

		function pressMine(e) {
			let mineX = Number(e.target.id.split("-")[1]);
			let mineY = Number(e.target.id.split("-")[2]);
			if (field[mineX][mineY][0] === true) return;
			let nearAkna = 0;
			let nearKincs = 0;
			field[mineX][mineY][0] = true;
			switch (field[mineX][mineY][1]) {
				case 0:
					sound.src = "./audio/dig.mp3";
					sound.play();
					let startX = mineX > 0 ? -1 : 0;
					let startY = mineY > 0 ? -1 : 0;
					let endX = mineX < s - 1 ? 2 : 1;
					let endY = mineY < s - 1 ? 2 : 1;
					for (let surX = startX; surX < endX; surX++) {
						for (let surY = startY; surY < endY; surY++) {
							if (surX === 0 && surY === 0) {
								continue;
							}
							let xx = mineX + surX;
							let yy = mineY + surY;
							if (field[xx][yy][1] === 1) {
								nearKincs++;
							}
							if (field[xx][yy][1] === 2) {
								nearAkna++;
							}
						}
					}
					document.getElementById("mfc-" + mineX + "-" + mineY).innerHTML = `
                <span class="near">
                  <span class="kincsHits">${nearKincs}</span>
                  <span> / </span>
                  <span class="aknaHits">${nearAkna}</span>
                </span>
              `;
					break;

				case 1:
					sound.src = "./audio/pearl.mp3";
					sound.play();
					kincsHit++;
					document.getElementById("mf-" + mineX + "-" + mineY).src = "./img/rooms/" + room.treasure;
					document.getElementById("mf-" + mineX + "-" + mineY).title = "Drágaságom!";
					updateMScore();
					break;

				case 2:
					sound.src = "./audio/bomb.mp3";
					sound.play();
					aknaHit++;
					document.getElementById("mf-" + mineX + "-" + mineY).src = "./img/rooms/akna.png";
					document.getElementById("mf-" + mineX + "-" + mineY).title = "Ez jó nagyot szólt!";
					let loser = Math.floor(21 + Math.random() * (20 - char.ugy / 5) - char.ugy / 5);
					changeVal("ero", -loser);
					updateMScore();
					break;

				default:
					break;
			}
			digs--;
			updateMScore();
		}
	}

	//underground dig
	function digAct() {
		music.volume = 0.6;
		let sz = room.size;
		let ctr = Math.floor(sz / 2);
		let fields = [];
		for (let x = 0; x < sz; x++) {
			fields.push([]);
			for (let y = 0; y < sz; y++) {
				let r = Math.random();
				let z = r < 0.5 ? 0 : r < 0.8 ? 1 : 2;
				fields[x].push([0, z]);
			}
		}
		let rock = room.level + Math.random() * sz * room.level;
		let dangerRocks = 0;
		for (let i = 1; i < rock; i++) {
			let rx = 1 + parseInt(Math.random() * (sz - 2));
			let ry = 1 + parseInt(Math.random() * (sz - 2));
			if ((rx === ctr && (ry === ctr + 1 || ry === ctr - 1)) || (ry === ctr && (rx === ctr + 1 || rx === ctr - 1))) {
				dangerRocks++;
			}
			if (dangerRocks < 4) {
				fields[ry][rx][1] = 3;
			}
		}
		fields[ctr][ctr] = [2, 4];
		let fuel = 100;

		let gems = [0, 0, 0];
		let aX = false;
		let aY = false;
		let storyN = [0, 1, 2];
		let storyT = [
			"A mai napon különös rossz előérzetem támadt. Amint elkezdtem ásni, vészjósló hangokat hallottam a méyből. Ez vajon a titokzatos lény lehet, akiről a helyi leganadák szólnak? Valahogy úgy érzem, nincs kedvem már megtalálni. Mégis folytatom, mert már nem vagyok ura önmagamnak. Várjunk, mi ez???!!!",
			"A lényt még mindig nem találtam meg, de ez a föld tele van kincsekkel! Mi mindent lehet ezekből előállíatani, gazdag leszek, gyerekek, gazdag leszek! Már nem bántam meg, hogy belevágtam. Aki olvassa a naplómat, annak azt a tanácsot tudom adni, hogy",
			"Ma kezdtem el ásni az alagutat. Keményebb volt, mint gondoltam! Konkrét és átvitt értelemben is. Talán szert teszek némi ásványkicsre is, de igazából nem ez érdekel. Azt mondják, lakik a hegy gyomrában egy rejtélyes lény, aki"
		];

		document.getElementById("subMain").innerHTML = `
          <div id="subHeader">
            <span id="scoresM"></span>
            <button id="exitBtn" title="Utálom a sötétet!">Feladom!</button> 
          </div>
          <table id="garden"></table>
        `;

		function updateDScore() {
			let scoreStr = `<span class="score">${room.gems[0]}: <span class="red">${Math.round(fuel)}%</span></span>`;
			for (let i = 1; i < room.gems.length; i++) {
				scoreStr += `<span class="score">${room.gems[i]}: <span class="lime">${gems[i - 1]}</span></span>`;
			}
			document.getElementById("scoresM").innerHTML = scoreStr;

			if (fuel < 1) {
				let nrg = room.gems[0];
				message("Kifogyott a" + (/[öüóeuioőúaéáűí]/i.test(nrg.charAt(0)) ? "z " : " ") + nrg + "!");
				document.getElementById("exitBtn").disabled = true;
				document.removeEventListener("keyup", move);
				changeVal("sup", -5 - Math.round(Math.random() * 5));
				setTimeout(() => {
					char.room = room.fail;
					newRoom();
				}, 4000);
			}
		}

		function drawBoard() {
			let dirtStr = "<tr>";
			for (let row = 0; row < sz; row++) {
				for (let col = 0; col < sz; col++) {
					let fold = fields[row][col];
					let picstr = fold[0] > 0 ? "dirt" + fold[1] : "black";
					dirtStr +=
						fold[0] == 1
							? `<td class="dirtCard dim" id="mfc-${col}-${row}"}>`
							: `<td class="dirtCard" id="mfc-${col}-${row}"}>`;
					dirtStr += `
                  <img
                    class="dirt"
                    id="mf-${col}-${row}"
                    src="./img/rooms/${picstr}.jpg"
                    title="Vajon mi lehet itt?"
                  />
                </td>
              `;
				}
				dirtStr += "</tr>";
			}
			document.getElementById("garden").innerHTML = dirtStr;
		}

		updateDScore();
		drawBoard();
		message("Válassz ki egy kiindulási mezőt a pálya szélén!");

		function chooseStartD(e) {
			let dy = Number(e.target.id.split("-")[1]);
			let dx = Number(e.target.id.split("-")[2]);
			aY = dx;
			aX = dy;
			discover(dx, dy);
			message("Innentől a nyilakkal haladj tovább!");
			document.addEventListener("keyup", move);
		}

		function invalidMove() {
			message("Próbáld meg a játék szélét eltalálni!");
		}

		function discover(x, y) {
			let land = fields[x][y][1] + 1;
			if (fields[x][y][0] == 1) {
				sound.src = "./audio/machinemoves.mp3";
				sound.play();
				for (let i = 0; i < land; i++) {
					let anti = 5 - i;
					gems[i] += Math.round(Math.random() * anti);
					if (i > 0) gems[i - 1] += Math.round(Math.random() * anti);
					if (i > 1) gems[i - 2] += Math.round(Math.random() * anti);
					fuel -= Math.random() * i * 1.5;
				}
				if (Math.random() > 0.7 + land / 10 - room.level / 20) randomine(x, y);
			}
			fuel -= land * 0.5;
			fuel = fuel < 1 ? 0 : fuel;
			updateDScore();

			fields[x][y][0] = 2;
			if (x > 0 && fields[x - 1][y][0] == 0) fields[x - 1][y][0] = fields[x - 1][y][1] > 2 ? 2 : 1;
			if (y > 0 && fields[x][y - 1][0] == 0) fields[x][y - 1][0] = fields[x][y - 1][1] > 2 ? 2 : 1;
			if (x < sz - 1 && fields[x + 1][y][0] == 0) fields[x + 1][y][0] = fields[x + 1][y][1] > 2 ? 2 : 1;
			if (y < sz - 1 && fields[x][y + 1][0] == 0) fields[x][y + 1][0] = fields[x][y + 1][1] > 2 ? 2 : 1;
			drawBoard();
			document.getElementById(`mf-${y}-${x}`).classList.add("activePos");

			if (land == 5) endig();
		}

		function move(e) {
			let key = e.key;
			switch (key) {
				case "ArrowUp":
					if (aY == 0 || (aY > 0 && fields[aY - 1][aX][1] == 3)) {
						message("Erre nem mehetsz!");
					} else {
						aY--;
					}
					break;

				case "ArrowDown":
					if (aY == sz - 1 || (aY < sz - 1 && fields[aY + 1][aX][1] == 3)) {
						message("Erre nem mehetsz!");
					} else {
						aY++;
					}
					break;

				case "ArrowLeft":
					if (aX == 0 || (aX > 0 && fields[aY][aX - 1][1] == 3)) {
						message("Erre nem mehetsz!");
					} else {
						aX--;
					}
					break;

				case "ArrowRight":
					if (aX == sz - 1 || (aX < sz - 1 && fields[aY][aX + 1][1] == 3)) {
						message("Erre nem mehetsz!");
					} else {
						aX++;
					}
					break;

				default:
					break;
			}
			discover(aY, aX);
		}

		document.querySelectorAll(".dirt").forEach((i) => {
			let idA = i.id.split("-");
			if (idA[1] == 0 || idA[2] == 0 || idA[1] == sz - 1 || idA[2] == sz - 1) {
				i.addEventListener("click", chooseStartD);
			} else i.addEventListener("click", invalidMove);
		});
		document.getElementById("exitBtn").addEventListener("click", fleeM);

		function fleeM() {
			document.getElementById("exitBtn").disabled = true;
			document.removeEventListener("keyup", move);
			changeVal("sup", -10 - Math.round(Math.random() * 5));
			changeVal("hat", -5 - Math.round(Math.random() * 3));
			changeVal("lel", -3 - Math.round(Math.random()));
			char.room = room.fail;
			newRoom();
		}

		function randomine(xx, yy) {
			let rect = document.getElementById(`mf-${yy}-${xx}`).getBoundingClientRect();
			let x = Math.round((Math.random() * room.level) / 3);
			if (x < Math.random() * 3) x += Math.round(Math.random());

			switch (x) {
				case 0:
					let f = 15 - Math.round(Math.random() * room.level);
					if (f + fuel > 100) f = 1;
					00 - fuel;
					message(`Találtál kb. ${Math.round(f)}% ${room.gems[0]}ként hasznosítható ásványt.`);
					fuel += f;
					updateDScore();
					break;

				case 1:
					document.getElementById("exitBtn").disabled = true;
					document.removeEventListener("keyup", move);
					modal.style.left = rect.x + "px";
					modal.style.top = rect.y + "px";
					modal.style.width = rect.width + "px";
					modal.style.height = rect.height + "px";
					modal.style.backgroundColor = "darkslategray";
					modal.style.padding = "20px";
					setTimeout(() => {
						modal.style.transition = "all 1.5s";
						modal.style.left = "35vw";
						modal.style.top = "30vh";
						modal.style.width = "30vw";
						modal.style.height = "40vh";
						modal.style.minHeight = "fit-content";
						modal.style.border = "5px double lightblue";
						modal.style.borderRadius = "30px";
					}, 1);
					let filterecept = [];
					for (let r of receptek) {
						let keys = Object.keys(r);
						let test = false;
						for (let g of room.gems.slice(1)) {
							if (keys.includes(g)) test = true;
						}
						if (test) filterecept.push(r);
					}
					let rd = Math.floor((room.level / 2) * Math.random());
					rd = rd * Math.round(Math.random());
					let rp = filterecept.length + rd;
					let firka = "";
					if (rd < 1 && filterecept.length > 0) {
						let recept = filterecept[Math.floor(Math.random() * rp)];
						let ingredients = "";
						for (const [key, value] of Object.entries(recept)) {
							if (key != "name") ingredients += `<li>${value} ${key}</li>`;
						}
						firka = "<h5>" + recept.name + "</h5><ul>" + ingredients + "</ul>";
					} else {
						if (filterecept.length < 1) {
							rd = 1;
							if (storyN.length < 1) rd = 3 + Math.round(Math.random());
						}
						switch (rd) {
							case 1:
								let d = rnd(storyN);
								let datum = new Date();
								datum.setDate(datum.getDate() - d);
								datum = datum.toLocaleDateString();
								firka =
									`<h4>${datum}</h4>
									<div>${storyT[d]}</div>`;
								storyN.splice(storyN.indexOf(d), 1);
								break;

							case 2:
								firka = "<h3>Jelszó: 85bz4ruiewghwnoiuhjro7önxhek</h3>";
								break;

							case 3:
								firka = `
                      <h4>Jegyezd meg!!!</h4>
                      <ol>
                        <li>Ha van múlt idejű időhatározó, nem lehet Present Perfect!</li>
                        <li>JavaScriptben zárojelbe kell tenni a feltételt!</li>
                        <li>Isten a rosszból is tud jót előhozni!</li>
                      </ol>
                    `;
								break;

							default:
								firka = "<h3>Hülye, aki elolvassa!</h3>";
								break;
						}
					}

					function closeFecni() {
						rect = document.getElementById(`mf-${yy}-${xx}`).getBoundingClientRect();
						modal.innerHTML = "";
						modal.style.left = rect.x + "px";
						modal.style.top = rect.y + "px";
						modal.style.width = rect.width + "px";
						modal.style.minHeight = rect.height + "px";
						modal.style.height = rect.height + "px";
						modal.style.padding = "0";
						modal.style.margin = "0";
						document.removeEventListener("keyup", closeFecni);

						setTimeout(() => {
							modal.style.backgroundColor = "transparent";
							modal.style.border = "none";
							modal.style.left = "0";
							modal.style.top = "0";
							modal.style.width = "0";
							modal.style.height = "0";
							modal.style.transition = "none";
							document.getElementById("exitBtn").disabled = false;
							document.addEventListener("keyup", move);
						}, 1501);
					}

					setTimeout(() => {
						modal.innerHTML = `
                  <p>Ásás közben találsz egy papírfecnit. Megnézed, mi van rajta. Nem rakod el, mert eléggé koszos, de  ha fontosnak tartod, jegyezd le valahova.</p>
                  <div id="fecni">${firka}</div>
                  <button id="OKbtn">Nagyszerű!</button>
                `;
						document.getElementById("OKbtn").addEventListener("click", closeFecni);
						document.addEventListener("keyup", closeFecni);
					}, 1502);

					break;

				case 2:
					message(`Sérülés miatt elvesztettél néhány ásványt.`);
					gems[0] -= Math.round(Math.random() * room.level);
					gems[0] = gems[0] < 0 ? 0 : gems[0];
					gems[1] -= Math.round((Math.random() * room.level) / 2);
					gems[1] = gems[1] < 0 ? 0 : gems[1];
					gems[2] -= Math.round((Math.random() * room.level) / 4);
					gems[2] = gems[2] < 0 ? 0 : gems[2];
					updateDScore();
					break;

				//Hangman
				case 3:
					document.getElementById("exitBtn").disabled = true;
					document.removeEventListener("keyup", move);
					modal.style.left = rect.x + "px";
					modal.style.top = rect.y + "px";
					modal.style.width = rect.width + "px";
					modal.style.height = rect.width + "px";
					modal.style.backgroundColor = "darkslategray";
					modal.style.padding = "30px";
					setTimeout(() => {
						modal.style.transition = "all 1.5s";
						modal.style.left = "20vw";
						modal.style.top = "10vh";
						modal.style.width = "60vw";
						modal.style.height = "80vh";
						modal.style.minHeight = "fit-content";
						modal.style.border = "5px double lightblue";
						modal.style.borderRadius = "40px";
					}, 1);
					let allDesc = "";
					for (let d of rooms) {
						allDesc += d.desc + " ";
					}
					let szotar = [
						...new Set(
							allDesc
								.replace(/(<([^>]+)>)/gi, "")
								.replace(/\\n/g, "")
								.replace(/ +(?= )/g, "")
								.replace(/[\\.,\?\/#!$%\^&\*;:{}=\-_`~()<>]/g, "")
								.replace(/\s{2,}/g, " ")
								.toUpperCase()
								.split(" ")
								.filter((word) => word.length > 3 && word.length < 11)
						),
					];
					let szo = rnd(szotar);
					let szoArr = szo.split("");
					let joBetuk = [];
					let joBetukStr = "";
					let rosszBetuk = [];
					console.log("Helyes: ", szo);
					let helps = 0;

					function digHelp() {
						document.getElementById("helpBtn").disabled = true;
						if (helps > 12 - room.level + Math.random() * 7) {
							let r = Math.random();
							let m = "";
							if (r < 0.25) m = "- Kifogytam az ötletből, bocs.";
							else if (r < 0.5) m = "- Eleget segítettem, most már erőltesd meg magad te!";
							else if (r < 0.75) m = "- Rám jött a szarás, hagyjál!";
							else m = "- Engem már nem érdekel ez az egész, ha megdöglünk, hát megdöglünk!";
							helps += 2 + r * 2;
							message(m);
							return;
						}
						if (char.ero < 10 + Math.random() * 10) {
							message("- Leápolom a sebeidet!");
							changeVal("ero", 5 + Math.round(Math.random() * 7));
							helps++;
							return;
						}
						if (szo.length - joBetukStr.length < 3 && (Math.random() < char.lel / 100 || getObj("S_Hit"))) {
							message(`- Még ezt sem tudod? <span class="hilit">${szo}</span> !`);
							helps = 20;
							return;
						}
						if (rosszBetuk.length > 2 + Math.random() * 5 || joBetuk.length === 0) {
							let gyakorik =
								"aaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeellllllllllllllllllrrrrrrrrrrrrrrrrrttttttttttttttttkkkkkkkkkkkkkkkiiiiiiiiiiiiiiiááááááááááááááooooooooooooossssssssssssnnnnnnnnnnnéééééééééémmmmmmmmmzzzzzzzzdddddddbbbbbbbgggggggóóóóóóppppppvvvvvvuuuuuuffffffhhhhhööööőőőjjjyyyccíínnúúgcüű".toUpperCase();
							let betSug = "";
							let sikerult = false;
							for (let index = 0; index < 3; index++) {
								betSug = gyakorik.charAt(Math.floor(Math.random() * gyakorik.length));
								if (joBetuk.indexOf(betSug) == -1 && rosszBetuk.indexOf(betSug) == -1) {
									sikerult = true;
									break;
								}
							}
							if (!sikerult) {
								let maradek = szoArr.filter((b) => joBetuk.indexOf(b) == -1);
								betSug = rnd(maradek);
							}
							message(`- Próbálj meg egy <span class="hilit">${betSug}</span> betűt!`);
							helps++;
							return;
						}
						if (joBetuk.length > 0 && joBetuk.length < 5 && rosszBetuk.length > 0) {
							let joSug1 = rnd(joBetuk);
							let joSug2 = rnd(joBetuk);
							let rosszSug1 = rnd(rosszBetuk);
							let rosszSug2 = rnd(rosszBetuk);
							let xr = Math.floor(Math.random() * rosszBetuk.length);
							let szoSugArr = szotar.filter(
								(s) =>
									s.length === szo.length &&
									s.includes(joSug1) &&
									s.includes(joSug2) &&
									!s.includes(rosszSug1) &&
									!s.includes(rosszSug2) &&
									(joBetuk.indexOf(szoArr[0]) > -1 ? s.charAt(0) === szoArr[0] : 2 > 1) &&
									(joBetuk.indexOf(szoArr[1]) > -1 ? s.charAt(1) === szoArr[1] : 2 > 1) &&
									(joBetuk.indexOf(szoArr[szoArr.length - 1]) > -1
										? s.charAt(s.length - 1) === szoArr[szoArr.length - 1]
										: 2 > 1) &&
									(joBetuk.indexOf(szoArr[xr]) > -1 ? s.charAt(xr) === szoArr[xr] : 2 > 1)
							);
							let szoSug = rnd(szoSugArr);
							message(`- Nem tudom, talán <span class="hilit">${szoSug}</span>.`);
							helps += 2;
							return;
						}
						message("- Passz! Gondolkozz te, fog az menni!");
					}

					function szadi(mes) {
						message(mes);
						changeVal("ero", -2 - Math.floor(Math.random() * 6));
						sound.src = "./audio/zsibi.mp3";
						sound.play();
						setTimeout(() => {
							sound.src = "./audio/vihog" + (1 + Math.floor(Math.random() * 4)) + ".mp3";
							sound.play();
						}, 1100);
					}

					setTimeout(() => {
						modal.innerHTML = `
                  <img id="modalPic" src="./img/rooms/banya.jpg"></>
                  <p>Megjelenik előtted egy rusnya bánya-banya, és körülveszi a mezőt egy áthatolhatatlan erőtérrel. Reszelős hangon beszélni kezd:</p>
                  <p>- Hehehehe! Ha tovább akarsz menni, ahhoz ki kell találnod, hogy milyen szó van éppen a fejemben. De lehet ragozott szó is, biz' ám! Bármennyi betűt kérdezhetsz, de ha rossz betűt mondasz, megrázlak árammal, ha pedig rossz szót tippelsz, meghalsz!</p>
                  <div id="joLetters" class="modalLetters"></div>
                  <div id="vonalak" class="modalLetters"></div>
                  <div id="rosszLetters" class="modalLetters"></div>
                  <div id="modalConsole">
                    <span>Betű tipped?</span>
                    <input id="Ibetű" type="text" autofocus maxlength="1">
                    <br/>
                    <span>Szó tipped?</span>
                    <input id="Iszó" type="text" maxlength="${szo.length}">
                    <br/>
                  </div>
                `;
						if (room.helper) {
							document.getElementById("modalConsole").innerHTML += `
                  <button id="helpBtn">Segíts, ${room.helper}!</button>
                  `;
							document.getElementById("helpBtn").addEventListener("click", digHelp);
						}
						let megfejtes = document.getElementById("joLetters");
						let szarok = document.getElementById("rosszLetters");
						for (let s = 0; s < szoArr.length; s++) {
							megfejtes.innerHTML += `<span class="betu" id="joBet-${s}">&nbsp;</span>`;
							document.getElementById("vonalak").innerHTML += `<span class="betu">_</span>`;
						}

						function modalClose() {
							rect = document.getElementById(`mf-${yy}-${xx}`).getBoundingClientRect();
							sound.pause();
							sound.src = "./audio/magic2.mp3";
							sound.play();
							message("Igen, erre gondoltam, hihetetlen!");
							changeVal("ero", 1 + Math.round(Math.random() * 3));
							changeVal("esz", 1 + Math.round(Math.random() * 2));
							changeVal("hat", Math.round(Math.random()));
							document.getElementById("helpBtn").disabled = true;
							document.querySelectorAll("input").forEach((ip) => {
								ip.disabled = true;
							});
							setTimeout(() => {
								modal.innerHTML = "";
								modal.style.left = rect.x + "px";
								modal.style.top = rect.y + "px";
								modal.style.width = rect.width + "px";
								modal.style.height = rect.height + "px";
								modal.style.minHeight = rect.height + "px";
								modal.style.padding = "0";
								modal.style.margin = "0";
								sound.src = "./audio/surprised.mp3";
								sound.play();
							}, 2500);
							setTimeout(() => {
								modal.style.backgroundColor = "transparent";
								modal.style.border = "none";
								modal.style.left = "0";
								modal.style.top = "0";
								modal.style.width = "0";
								modal.style.height = "0";
								modal.style.transition = "none";
								document.getElementById("exitBtn").disabled = false;
								document.addEventListener("keyup", move);
							}, 4001);
						}

						document.getElementById("Ibetű").addEventListener("keyup", function (event) {
							document.getElementById("helpBtn").disabled = false;
							let ibet = event.target.value.toUpperCase();
							if (joBetuk.indexOf(ibet) > -1 || rosszBetuk.indexOf(ibet) > -1) {
								szadi("Ezt a betűt már kérdezted!");
							} else {
								let talalt = false;
								for (let b = 0; b < szoArr.length; b++) {
									if (szoArr[b] === ibet) {
										talalt = true;
										joBetukStr += ibet;
										if (joBetuk.indexOf(ibet) == -1) joBetuk.push(ibet);
										document.getElementById(`joBet-${b}`).innerHTML = ibet;
										if (joBetukStr.length === szoArr.length) modalClose();
										changeVal("esz", 1);
									}
								}
								if (talalt) {
									sound.src = "./audio/magic.mp3";
									sound.play();
								} else {
									rosszBetuk.push(ibet);
									szarok.innerHTML += `<span class="betu">${ibet}</span>`;
									szadi("Ilyen betű nincs benne!");
								}
							}
							document.getElementById("Ibetű").value = "";
						});

						document.getElementById("Iszó").addEventListener("change", function (event) {
							if (event.target.value.toUpperCase() === szo) {
								for (let b = 0; b < szoArr.length; b++) {
									document.getElementById(`joBet-${b}`).innerHTML = szoArr[b];
								}
								changeVal("esz", 5 + Math.round((Math.random() * szo.length) / 1.5));
								changeVal("hat", 3 + Math.round((Math.random() * szo.length) / 1.7));
								modalClose();
							} else {
								message("Nem nyert!");
								sound.src = "./audio/villamcsapas.mp3";
								sound.play();
								setTimeout(() => {
									sound.src = "./audio/vihog" + (1 + Math.floor(Math.random() * 4)) + ".mp3";
									sound.play();
									changeVal("ero", -100);
								}, 2000);
							}
						});
					}, 1502);
					break;

				default:
					break;
			}
		}

		function endig() {
			message("Megtaláltad a célt!");
			document.getElementById("exitBtn").disabled = true;
			document.removeEventListener("keyup", move);
			setTimeout(() => {
				char.room = room.pass;
				modi = room.gems.slice(1).concat(gems);
				console.log("MODI: ", modi);
				newRoom();
			}, 4000);
		}
	}

	//fight
	function fightAct() {
		music.volume = 0.7;
		let changeMax = 0;
		let gyilok = false;
		let gyilokUsed = -1;
		let fegyObj = getWeapons();
		let att = Math.round(
			char.ugy / 1.1 + char.esz / 2.8 + char.ero / 1.5 - char.lel / 1.2 + getObj("S").length + getObj("X").length * 2
		);
		att = att < 0 ? 0 : att > 150 ? 150 : att;
		let def = Math.round(char.ugy / 4 + char.hat / 7 + char.ero / 3 + char.esz / 6 - char.lel / 5);
		def = def < 0 ? 0 : def > 75 ? 75 : def;
		let speed =
			5000 -
			Math.round(
				char.ugy * 60 +
				char.esz * 5 +
				char.lel * 5 +
				char.hat * 5 +
				steps * 3 -
				char.ero * 10 +
				Math.random() * 500 +
				getObj("S_Villámgyorsaság") * 1000
			);
		speed = speed < 1000 ? 1000 : speed > 5000 ? 5000 : speed;
		if (room.dungeon) {
			var nmeAtt = Math.round(steps / 5 + dungeon * 5 + Math.random() * 25 * room.level);
			nmeAtt = nmeAtt > 150 ? 150 : nmeAtt;
			var nmeDef = Math.round(steps / 10 + dungeon * 2.5 + (Math.random() * 25 * room.level) / 2);
			nmeDef = nmeDef > 75 ? 75 : nmeDef;
			var nmeSpeed = 5000 - Math.round(room.level * 750 + steps / 1.5 + dungeon * 45 - Math.random() * 300);
			nmeSpeed = nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
			room.speed = Math.round((5000 - nmeSpeed) / 500);
			room.hp = dungeon * 7 * room.level + Math.round(Math.random() * 30);
			room.hp = room.hp > 100 ? 100 : room.hp;
		} else {
			var nmeAtt = room.att;
			var nmeDef = room.def;
			var nmeSpeed = 5000 - Math.round(room.speed * 500 + steps * 5 - Math.random() * 500);
			nmeSpeed = nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
		}

		let start = true;
		let orgNMEHP = room.hp;
		chrHit = "";
		nmeHit = "";
		let end = false;
		let firstchange = true;

		function updateFScore() {
			if (room.hp < 1) room.hp = "-";
			document.getElementById("scores").innerHTML = `
        <tr>
          <td class="center">
            <img class="thumb" src="./img/chars/${char.pic}.jpg"> 
          </td>
          <td class="center">
            <img class="thumb" src="./img/rooms/${room.nmepic}"> 
          </td>
        </tr>
        <tr>
          <td class="leftScore">
            Támadás: ${att}
          </td>  
          <td class="rightScore">
            Támadás: ${nmeAtt}
          </td>  
        </tr>
        <tr>
          <td class="leftScore">
            Védelem: ${def}
          </td>  
          <td class="rightScore">
            Védelem: ${nmeDef}
          </td>  
        </tr>
        <tr>
          <td class="leftScore">
            Sebesség: ${Math.round((5000 - speed) / 500)}
          </td>  
          <td class="rightScore">
            HP: ${room.hp}
          </td>  
        </tr>
        <tr>
          <td class="leftScore">
            Sérülés:
            <span class="seb" id="chrSeb">${chrHit}</span>
          </td>
          <td class="rightScore">
            Sérülés:
            <span class="seb" id="nmeSeb">${nmeHit}</span>
          </td>
        </tr>
      `;
			if (room.hp === "-") {
				char.room = room.pass;
				message("Ellenfeled nem bírta tovább.");
				end = true;
				clearTimeout(timo1);
				clearInterval(timo2);
				music.volume = 0.2;
				let soundEnd = sound2.src.substr(-7);
				if (soundEnd !== "die.mp3") {
					sound2.src = "./audio/die.mp3";
					sound2.play();
				}
				nmeF.classList.add("darken");
				document.getElementById("fightBtn").disabled = true;
				document.getElementById("exitBtn").disabled = true;
				if (room.dungeon && firstchange) {
					changeVal("ero", Math.round((Math.random() * (dungeon + room.level)) / 3));
				}
				if (firstchange) {
					firstchange = false;
					changeVal("ugy", Math.floor(nmeAtt / 30 + nmeDef / 20 + orgNMEHP / 25 + Math.random() * 3));
					changeVal("lel", -1);
					if (room.modi) modi = room.modi;
					if (room.help) {
						let bonus = 10 + Math.round(room.att / 10 + room.def / 7 + room.speed + Math.random() * 5);
						changeVal("sup", bonus);
						changeVal("lel", 1 + Math.round(bonus / 10));
						modi = room.help.split("_")[1];
					}
					setTimeout(() => {
						newRoom();
					}, 4500);
				}
			}
		}

		function updateWeapons() {
			let objString = "<p>";
			if (fegyObj.length > 0) {
				gyilok = true;
				document.getElementById("weapons").innerHTML = "<div>Fegyverek:</div>";
				fegyObj.map((fegy, i) => {
					let titleString = `${fegy.name}&#10;${fegy.desc}&#10;Hatás:`;
					for (let ef of fegy.effect) {
						titleString += `&#10;- ${ef.val}: ${ef.ch}`;
					}
					objString +=
						i == gyilokUsed
							? `
              <img class="weapon used" id="w-${i}" title="${titleString}" src="./img/weapons/${fegy.pic}">`
							: `<img class="weapon unused" id="w-${i}" title="${titleString}" src="./img/weapons/${fegy.pic}">`;
				});
				objString += "</p>";
				document.getElementById("weapons").innerHTML += objString;
				if (gyilok) {
					document.querySelectorAll(".weapon").forEach((i) => {
						i.addEventListener("click", chooseWeapon);
					});
				}
			} else {
				document.getElementById("weapons").innerHTML = "";
				gyilok = false;
			}
		}

		function changeW(szam, szorzo) {
			let fegy = fegyObj[szam];
			let effekt = fegy.effect;
			for (let eff of effekt) {
				switch (eff.val) {
					case "támadás":
						att += Number(eff.ch) * szorzo;
						att = att < 0 ? 0 : att > 150 ? 150 : att;
						break;
					case "ellenség támadás":
						nmeAtt += Number(eff.ch) * szorzo;
						nmeAtt = nmeAtt < 0 ? 0 : nmeAtt > 150 ? 150 : nmeAtt;
						break;
					case "védelem":
						def += Number(eff.ch) * szorzo;
						def = def < 0 ? 0 : def > 75 ? 75 : def;
						break;
					case "ellenség védelem":
						nmeDef += Number(eff.ch) * szorzo;
						nmeDef = nmeDef < 0 ? 0 : nmeDef > 75 ? 75 : nmeDef;
						break;
					case "erő":
						changeVal("ero", Number(eff.ch) * szorzo);
						if (szorzo == 1) moan(szam);
						loseObj(fegy.name);
						gyilokUsed = -1;
						fegyObj.splice(szam, 1);
						break;
					case "ellenség erő":
						room.hp += Number(eff.ch) * szorzo;
						if (szorzo == 1) moan(szam);
						loseObj(fegy.name);
						gyilokUsed = -1;
						fegyObj.splice(szam, 1);
						break;
					case "sebesség":
						let curSP = Math.round((5000 - speed) / 500);
						curSP += Number(eff.ch) * szorzo;
						if (curSP < 0) curSP = 1;
						if (curSP > 10) curSP = 10;
						speed = (10 - curSP) * 500;
						clearTimeout(timo1);
						attBtn.disabled = true;
						timo1 = setTimeout(() => {
							attBtn.style.left = 2 + Math.round(Math.random() * 80) + "vw";
							attBtn.disabled = false;
						}, speed);
						break;
					case "ellenség sebesség":
						let nmeSP = szorzo === 1 ? room.speed + Number(eff.ch) * szorzo : room.speed;
						nmeSpeed = 5000 - Math.round(nmeSP * 500 + steps * 5 - Math.random() * 500);
						nmeSpeed = nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
						clearInterval(timo2);
						timo2 = setInterval(() => nmeAttack(), nmeSpeed);
						break;

					default:
						break;
				}
			}
			updateFScore();
		}

		function chooseWeapon(e) {
			changeMax++;
			if (changeMax > 3 + char.ugy / 20 + char.esz / 40) {
				message("Nem tudsz többször fegyvert váltani!");
				return;
			}
			let f = e.target.id.split("-")[1];
			if (gyilokUsed == f) {
				gyilokUsed = -1;
				changeW(f, -1);
			} else {
				if (gyilokUsed > -1) {
					changeW(gyilokUsed, -1);
				}
				gyilokUsed = f;
				changeW(f, 1);
			}
			updateWeapons();
		}

		function moan(mivan, mélynyomó = false) {
			if (mivan > -1) {
				mélynyomó
					? (sound2.src = "./audio/" + fegyObj[mivan].sound + ".mp3")
					: (sound.src = "./audio/" + fegyObj[mivan].sound + ".mp3");
			} else {
				let x = Math.floor(1 + Math.random() * 21);
				mélynyomó ? (sound2.src = "./audio/hit" + x + ".mp3") : (sound.src = "./audio/hit" + x + ".mp3");
			}
			mélynyomó ? sound2.play() : sound.play();
		}

		function nmeAttack() {
			moan(-1, true);
			nmeF.style.left = 80 + "px";
			var seb = Math.round((nmeAtt - def) / 3 + Math.random() * 3 - Math.random() * 3);
			if (seb < 1) seb = 1;
			chrHit = " -" + seb;
			if (seb > 10 + Math.random() * 10) {
				let x = Math.random() * 12;
				switch (true) {
					case x < 3:
						att -= Math.floor(1 + (Math.random() * seb) / 1.2);
						att = att < 0 ? 0 : att;
						changeVal("ugy", -Math.floor(1 + (Math.random() * seb) / 3));
						break;

					case x < 6:
						def -= Math.floor(1 + (Math.random() * seb) / 1.5);
						def = def < 0 ? 0 : def;
						if (Math.random() < 1 / 3) {
							changeVal("esz", -Math.floor(1 + (Math.random() * seb) / 5));
						} else if (Math.random() < 2 / 3) {
							changeVal("hat", -Math.floor(1 + (Math.random() * seb) / 5));
						} else {
							changeVal("lel", -Math.floor(1 + (Math.random() * seb) / 5));
						}
						changeVal("ugy", -1);
						break;

					case x < 9:
						def -= def > 0 ? 1 : 0;
						att -= att > 0 ? 1 : 0;
						seb += 1;
						chrHit = " -" + seb;
						speed += Math.floor(500 + Math.random() * seb * 300);
						speed = speed > 5000 ? 5000 : speed;
						changeVal("ugy", -1);
						changeVal("esz", -1);
						changeVal("lel", -1);
						changeVal("hat", -1);
						break;

					default:
						if (gyilokUsed > -1) {
							changeW(gyilokUsed, -1);
							loseObj(fegyObj[gyilokUsed].name);
							fegyObj.splice(gyilokUsed, 1);
							gyilokUsed = -1;
							updateWeapons();
						} else {
							seb = seb * 2;
							chrHit = " -" + seb;
						}
						break;
				}
				chrHit += " &#9760;";
			}

			updateFScore();
			changeVal("ero", -seb);
			setTimeout(() => {
				nmeF.style.left = 210 + "px";
			}, 500);
			setTimeout(() => {
				chrHit = "";
				updateFScore();
			}, 1000);
		}

		function attack() {
			moan(gyilokUsed);
			attBtn.disabled = true;
			if (start) {
				clearInterval(timo2);
				start = false;
				timo2 = setInterval(() => nmeAttack(), nmeSpeed);
			}
			timo1 = setTimeout(() => {
				attBtn.style.left = 2 + Math.round(Math.random() * 80) + "vw";
				attBtn.disabled = false;
			}, speed);
			charF.style.left = 175 + "px";
			var seb = Math.round((att - nmeDef) / 3 + Math.random() * 3 - Math.random() * 3);
			if (seb < 1) seb = 1;
			nmeHit = " -" + seb;
			if (
				seb + char.esz / 20 >
				12 + Math.random() * 10 - getObj("S_Bivalyerő") * 2 - getObj("S_Villámgyorsaság" * 2 - getObj("S_Pengeagy" * 2))
			) {
				let x = Math.random() * 12;
				switch (true) {
					case x < 3:
						nmeAtt -= Math.floor(1 + (Math.random() * seb) / 1.1);
						nmeAtt = nmeAtt < 0 ? 0 : nmeAtt;
						break;

					case x < 6:
						nmeDef -= Math.floor(1 + (Math.random() * seb) / 1.4);
						nmeDef = nmeDef < 0 ? 0 : nmeDef;
						break;

					case x < 9:
						nmeDef -= nmeDef > 1 ? 2 : nmeDef;
						nmeAtt -= nmeAtt > 1 ? 2 : nmeAtt;
						seb += 1;
						nmeHit = " -" + seb;
						nmeSpeed += Math.floor(500 + Math.random() * seb * 350);
						nmeSpeed = nmeSpeed > 5000 ? 5000 : nmeSpeed;
						clearInterval(timo2);
						timo2 = setInterval(() => nmeAttack(), nmeSpeed);
						break;

					default:
						seb = seb * 2;
						nmeHit = " -" + seb;
						break;
				}
				nmeHit += " &#9760;";
			}
			room.hp -= seb;
			updateFScore();
			setTimeout(() => {
				charF.style.left = 50 + "px";
			}, 500);
			setTimeout(() => {
				nmeHit = "";
				updateFScore();
			}, 1000);
		}

		function fleeF() {
			var seb = Math.round((nmeAtt - def) / 1.2 - Math.random() * 10);
			seb = seb < 5 ? 5 : seb > 45 ? 45 : seb;
			chrHit = " -" + seb;
			updateFScore();
			moan(-1);
			message("Menekülés közben az ellenfél megsebzett.");
			changeVal("ero", -seb);
			clearTimeout(timo1);
			clearInterval(timo2);
			attBtn.disabled = true;
			xitBtn.disabled = true;
			end = true;
			if (char.ero > 0) {
				char.room = room.fail;
				if (room.modi) modi = room.modi;
				setTimeout(() => {
					if (room.help) {
						let bonus = 15 - Math.round(room.att / 20 + room.def / 20 + room.speed / 2 + Math.random() * 2);
						if (bonus < 1) bonus = 1;
						changeVal("sup", -bonus);
						changeVal("lel", -1 - Math.round(bonus / 5));
						modi = room.help.split("_")[1];
					}
					newRoom();
				}, 4500);
			}
		}

		if (end === false) {
			document.getElementById("subMain").innerHTML = `
        <div id="fightOp">
          <table id="scores"></table>
          <div id='weapons'></div>
        </div>
        <button id="fightBtn">TÁMADÁS!</button> 
        <button id="exitBtn" title="Gyáva!">Feladom</button>
        <div id="fighterCont">
          <img class="fighters" id="charFighter" src="./img/chars/${char.pic}.jpg">
          <img class="fighters" id="nmeFighter" src="./img/rooms/${room.nmepic}">
        </div>
      `;
			updateFScore();
			updateWeapons();

			var attBtn = document.getElementById("fightBtn");
			var xitBtn = document.getElementById("exitBtn");
			var nmeF = document.getElementById("nmeFighter");
			var charF = document.getElementById("charFighter");
			attBtn.addEventListener("click", attack);
			xitBtn.addEventListener("click", fleeF);
			timo2 = setInterval(() => nmeAttack(), nmeSpeed * 2);
		}
	}

	//finalwar
	function finalwarAct() {
		modi = [];
		let command = {};
		music.volume = 0.4;
		let featuredU = -1;
		ffields.length = 0;
		units.length = 0;
		let uid = 0;
		for (let y = 0; y < 13; y++) {
			ffields.push([]);
			for (let x = 0; x < 13; x++) {
				let r = Math.random();
				let z = r < 0.7 || y < 2 || y > 10 ? 0 : r < 0.9 ? 1 : 2;
				ffields[y].push({ terrain: z, empty: z === 0 });
			}
		}
		let gspeed = 1;
		let gclick = "select";
		let shootWeapon = {};
		let opera = 0;
		let operaBtn = ["Kapjuk el őket!", "Meneküljünk!", "Győztünk!", "Ne már!"];
		let fe = getObj("W");
		let fegyObj = [];
		if (fe.length > 0) {
			for (let f of fe) {
				let match = weapons.find((w) => w.name === f && !!w.final);
				if (match) fegyObj.push(match);
			}
		}
		let weaponCountMax =
			3 +
			Math.round(
				(100 - char.ugy + (100 - char.ero) / 2 + (100 - char.esz) / 4 + (100 - char.hat) / 3.5 + char.lel / 2) / 18
			);
		let weaponCount = 0;
		let intro = [
			"Na, mi lesz?",
			"Ezek gyengék, zúzzuk le őket!",
			char.name.split(",")[0] + "! Add már ki a parancsot!",
			"Úgy hallottam, van valami piros gomb a jobb felső sarokban...",
			"Egész nap itt fogunk álldogálni?",
			"Kezdek éhes lenni. Ti nem?",
			"Alszol, " + char.name.split(",")[0] + "?",
		];
		let unitPosX = (n) => `calc(12vw + ${3.3 * n}vw + 4px)`;
		let unitPosY = (n) => `calc(70px + ${3.3 * n}vw + 4px)`;
		let bulletPosX = (n) => `calc(12vw + ${3.3 * n + 1.65}vw - 5px)`;
		let bulletPosY = (n) => `calc(70px + ${3.3 * n + 1.65}vw - 5px)`;
		let bumPosX = (n) => `calc(12vw + ${3.3 * n - 2.35}vw)`;
		let bumPosY = (n) => `calc(70px + ${3.3 * n - 2.35}vw)`;
		let punchPosX = (n) => `calc(12vw + ${3.3 * n + 0.15}vw)`;
		let punchPosY = (n) => `calc(70px + ${3.3 * n + 0.15}vw)`;
		let beamPosX = (n) => `calc(12vw + ${3.3 * n}vw)`;
		let beamPosY = (n) => `calc(70px + ${3.3 * n}vw)`;

		main.innerHTML = `
        <div id="warpanels">
          <table id="harcter"></table>
          <div id="sprites"></div>
          <div id="extra"></div>
          <div id="kezeles">
            <div id="opBtns">
              <button class="btn" id="vezerBtn" >${operaBtn[opera]}</button>
              <span id="speedBtns">
                Sebesség:
                <button class="speedBtn" id="sp-0.25">1/5</button>
                <button class="speedBtn" id="sp-0.5">1/2</button>
                <button class="speedBtn curSpeed" id="sp-1">1</button>
                <button class="speedBtn" id="sp-2">2</button>
                <button class="speedBtn" id="sp-5">5</button>
              </span>
            </div>
            <div id="weapons"></div>
            <div id="ustat" class="noccur"></div>
          </div>
        </div>
      `;

		function newSprite(model, id, team, ally = false) {
			let attB = 1 + ally * 0.5 + (fwb === "esz" && team) * 0.2;
			let defB = 1 + ally * 0.5 + (fwb === "ugy" && team) * 0.2;
			let hpB = 1 + ally * 0.5 + (fwb === "ero" && team) * 0.2;
			return {
				id: id,
				friend: team,
				name: model.name,
				vip: model.vip,
				pic: model.pic,
				oatt: Math.round(model.att * attB) > 150 ? 150 : Math.round(model.att * attB),
				att: Math.round(model.att * attB) > 150 ? 150 : Math.round(model.att * attB),
				odef: Math.round(model.def * defB) > 75 ? 75 : Math.round(model.def * defB),
				def: Math.round(model.def * defB) > 75 ? 75 : Math.round(model.def * defB),
				ohp: Math.round(model.hp * hpB),
				hp: Math.round(model.hp * hpB),
				cr: model.cr,
				range: Math.round(model.range * (1 + ally / 9)),
				spec: model.spec,
				desc: model.desc,
				sound: model.sound,
				presentAct: {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				},
				futureAct: {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				},
				dead: false,
				obey: false,
			};
		}

		function drawFBoard() {
			let dirtStr = "";
			for (let row = 0; row < 13; row++) {
				dirtStr += "<tr>";
				for (let col = 0; col < 13; col++) {
					let fold = ffields[row][col];
					dirtStr += `
            <td
              class="terepCard"
              id="terc-${col}-${row}"
            >
              <img
                class="terep terep-${fold.terrain}"
                id="teri-${col}-${row}"
                src="./img/rooms/terep${fold.terrain}.jpg"
              />
            </td>
          `;
				}
				dirtStr += "</tr>";
			}
			document.getElementById("harcter").innerHTML = dirtStr;

			let preFriends = armies[room.friends].split(", ");
			let preNmes = armies[room.enemies].split(", ");
			let preOpts = room.opts.split(", ");
			for (let f of preFriends) {
				let spc = f.indexOf(" ");
				let numb = Number(f.substring(0, spc));
				let type = f.substring(spc + 1);
				for (let i = 0; i < numb; i++) {
					let model = sprites.find((s) => s.name == type);
					units.push(newSprite(model, uid, true, getObj("J_" + type)));
					uid++;
				}
			}
			for (let f of preNmes) {
				let spc = f.indexOf(" ");
				let numb = Number(f.substring(0, spc));
				let type = f.substring(spc + 1);
				for (let i = 0; i < numb; i++) {
					let model = sprites.find((s) => s.name == type);
					units.push(newSprite(model, uid, false));
					uid++;
				}
			}
			let ally = false;
			for (let f of preOpts) {
				let who = "";
				let team = false;
				if (f.includes("_")) {
					let type = f.split("_")[0];
					let ki = f.split("_")[1];
					if (type === "J") {
						if (getObj(f) && !getObj("X_" + ki)) {
							who = ki;
							team = true;
							ally = true;
						}
					} else {
						if (!getObj(f) && !getObj("J_" + ki)) {
							who = ki;
							team = false;
						}
					}
				} else {
					if (!getObj("X_" + f)) {
						who = f;
						team = true;
					}
				}
				if (who.length) {
					let model = sprites.find((s) => s.name == who);
					if (model) units.push(newSprite(model, uid, team, ally));
					uid++;
				}
			}
			let lerakN = [
				[6, 0],
				[4, 0],
				[8, 0],
				[2, 0],
				[10, 0],
				[5, 1],
				[7, 1],
				[3, 1],
				[9, 1],
				[0, 0],
				[12, 0],
				[1, 1],
				[11, 1],
				[5, 0],
				[7, 0],
			];
			let lerakF = [
				[6, 12],
				[4, 12],
				[8, 12],
				[2, 12],
				[10, 12],
				[5, 11],
				[7, 11],
				[3, 11],
				[9, 11],
				[0, 12],
				[12, 12],
				[1, 11],
				[11, 11],
				[5, 12],
				[7, 12],
			];
			let fids = [];
			let nids = [];
			for (let u of units) {
				if (u.friend) fids.push(u.id);
				else nids.push(u.id);
			}
			fids = shuffle(fids);
			nids = shuffle(nids);
			for (let i = 0; i < fids.length; i++) {
				let n = fids[i];
				units[n].x = lerakF[i][0];
				units[n].y = lerakF[i][1];
			}
			for (let i = 0; i < nids.length; i++) {
				let n = nids[i];
				units[n].x = lerakN[i][0];
				units[n].y = lerakN[i][1];
			}
			let spriteStr = "";
			for (let u of units) {
				let team = u.friend ? "friend" : "nme";
				spriteStr += `
					<img id="unit-${u.id}" class="sprite ${team}" src="./img/rooms/${u.pic}">
					<img id="bullet-${u.id}" class="bullet" src="./img/rooms/bullet.png">
					<audio id="voice-${u.id}" class="sounds" src = "./audio/${u.sound}.mp3";></audio>
				`;
			}
			document.getElementById("sprites").innerHTML = spriteStr;
			document.querySelectorAll(".sounds").forEach((s) => (s.volume = soundOn ? 1 : 0));

			for (let u of units) {
				document.getElementById("unit-" + u.id).style.left = unitPosX(u.x);
				document.getElementById("unit-" + u.id).style.top = unitPosY(u.y);
				document.getElementById("bullet-" + u.id).style.left = bulletPosX(u.x);
				document.getElementById("bullet-" + u.id).style.top = bulletPosY(u.y);

				ffields[u.y][u.x].empty = false;
			}
		}

		function cancelShoot() {
			document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
			document.querySelectorAll(".sprite.friend").forEach((s) => (s.style.cursor = "pointer"));
			document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
			gclick = "select";
			weaponCount = weaponCountMax;
			updateFWeapons();
			document.getElementById("overlay").style.setProperty("--reveal", "55px");
			shootWeapon = {};
		}

		function noMoveThere(x, y) {
			for (let uu of units) {
				if ((uu.presentAct.x == x && uu.presentAct.y == y) || (uu.x == x && uu.y == y)) {
					return false;
				}
			}
			return true;
		}

		//friend, bomb, spell, sugar, robi
		//char.objs = ["W_KIS ERŐITAL", "W_NAGY ERŐITAL", "W_DIABOLIKUS SZTEROID", "W_KÉZIGRÁNÁT", "W_VARÁZSPOR", "W_PROTONÁGYÚ", "W_ROBI"]
		function chooseFWeapon(e) {
			if (opera !== 1) return;
			let feD = e.target.id;
			weaponCount = 0;
			clearInterval(timo);
			let fn = feD.split("-")[1];
			shootWeapon = fegyObj[fn];
			updateFWeapons();
			document.getElementById(feD).classList.add("selectedUnit");
			document.getElementById("wtimer").src = "./img/rooms/cancel.png";
			document.getElementById("wtimer").style.cursor = "crosshair";
			gclick = "shoot";

			switch (shootWeapon.final) {
				case "friend":
					message("Válaszd ki az emberedet!");
					document.querySelectorAll(".friend").forEach((x) => (x.style.cursor = "crosshair"));
					document.querySelectorAll(".nme").forEach((x) => (x.style.cursor = "not-allowed"));
					document.querySelectorAll(".terep").forEach((x) => (x.style.cursor = "not-allowed"));
					break;

				case "bomb":
					message("Válaszd ki, hova dobod!");
					document.querySelectorAll(".sprite").forEach((x) => (x.style.cursor = "crosshair"));
					document.querySelectorAll(".terep").forEach((x) => (x.style.cursor = "crosshair"));
					break;

				case "spell":
					message("Válaszd ki, hol használod!");
					document.querySelectorAll(".sprite").forEach((x) => (x.style.cursor = "crosshair"));
					document.querySelectorAll(".terep").forEach((x) => (x.style.cursor = "crosshair"));
					break;

				case "sugar":
					message("Válasszd ki azt az üres alsó mezőt, ahonnan belősz!");
					document.querySelectorAll(".sprite").forEach((x) => (x.style.cursor = "not-allowed"));
					document.querySelectorAll(".terep").forEach((x) => {
						let ty = Number(x.id.split("-")[2]);
						if (ty === 12) {
							x.style.cursor = "crosshair";
						} else {
							x.style.cursor = "not-allowed";
						}
					});
					break;

				case "robi":
					message("Válaszd ki azt az üres mezőt, ahova lerakod Robit!");
					document.querySelectorAll(".sprite").forEach((x) => (x.style.cursor = "not-allowed"));
					document.querySelectorAll(".terep").forEach((x) => (x.style.cursor = "not-allowed"));
					document.querySelectorAll(".terep-0").forEach((x) => (x.style.cursor = "crosshair"));
					break;

				default:
					break;
			}
		}

		function weaponTarget(wx, wy) {
			let wi = !wy ? wx : -1;
			let curs = "";
			let disposable = true;
			if (wi < 0) {
				curs = document.getElementById(`teri-${wx}-${wy}`).style.cursor;
			} else {
				curs = document.getElementById(`unit-${wi}`).style.cursor;
			}
			if (curs === "not-allowed") {
				cancelShoot();
				return;
			}

			switch (shootWeapon.final) {
				case "friend":
					let effektek = [];
					if (wi < 0 || (wi > -1 && !units[wi].friend)) {
						cancelShoot();
						return;
					}
					let wu = units[wi];
					for (let e of shootWeapon.effect) {
						if (e.val === "erő") effektek.push({ prop: "hp", ch: Number(e.ch) });
						if (e.val === "támadás") effektek.push({ prop: "att", ch: Number(e.ch) });
						if (e.val === "védelem") effektek.push({ prop: "def", ch: Number(e.ch) });
					}
					for (let e of effektek) {
						let o = "o" + e.prop;
						wu[e.prop] += e.ch;
						if (wu[e.prop] > wu[o]) wu[o] = wu[e.prop];
					}
					if (wu.id === featuredU) updateFeatured(wu);
					sound2.src = "./audio/" + shootWeapon.sound + ".mp3";
					sound2.play();
					break;

				case "bomb":
					let seb = Math.round(40 + Math.random() * 40);
					let bx = wi < 0 ? wx : units[wi].x;
					let by = wi < 0 ? wy : units[wi].y;
					nbs = units.filter((u2) => !u2.dead && distance({ x: bx, y: by }, u2) === 1);
					if (wi > -1) {
						let wu = units[wi];
						let seb1 = seb - wu.def;
						seb1 = seb1 < 1 ? 1 : seb1 > 50 ? 50 : seb1;
						wu.hp -= seb1;
						if (wu.hp < 1) {
							wu.hp = 0;
							dies(wu);
						}
						if (featuredU === wu.id) updateFeatured(wu);
					} else {
						if (ffields[wy][wx].terrain === 2) {
							sound2.src = "./audio/splash.mp3";
							sound2.play();
							break;
						}
					}
					if (nbs.length > 0) {
						for (let n of nbs) {
							let seb2 = seb - n.def - Math.round(Math.random() * 20);
							seb2 = seb2 < 0 ? 0 : seb2 > 30 ? 30 : seb2;
							n.hp -= seb2;
							if (n.hp < 0) {
								n.hp = 0;
								dies(n);
							}
							if (n.id === featuredU) updateFeatured(n);
						}
					}
					sound2.src = "./audio/bomb.mp3";
					sound2.play();
					document.getElementById("extra").innerHTML = `<img id="bomba" class="bullet" src="./img/rooms/bullet.png">`;
					let bomb = document.getElementById("bomba");
					bomb.style.setProperty("transition", "none");
					bomb.style.left = bulletPosX(bx);
					bomb.style.top = bulletPosY(by);
					bomb.classList.add("occur");
					bomb.style.setProperty(
						"transition",
						`left linear ${0.3 / gspeed}s, top linear ${0.3 / gspeed}s, width linear ${0.3 / gspeed}s, height linear ${0.3 / gspeed
						}s`
					);
					bomb.classList.add("bumm");
					bomb.style.left = bumPosX(bx);
					bomb.style.top = bumPosY(by);
					timok[200] = setTimeout(() => {
						bomb.classList.remove("bumm");
						bomb.classList.remove("occur");
					}, 303 / gspeed);
					break;

				case "spell":
					if (wi < 0) {
						if (!noMoveThere(wx, wy)) {
							cancelShoot();
							return;
						}

						let choice = [];
						for (let i = 0; i < 3; i++) {
							if (i !== ffields[wy][wx].terrain) choice.push(i);
						}
						let t = rnd(choice);
						ffields[wy][wx].terrain = t;
						ffields[wy][wx].empty = t === 0;
						let f = document.getElementById(`teri-${wx}-${wy}`);
						f.src = `./img/rooms/terep${t}.jpg`;
						f.className = `terep terep-${t}`;
					} else {
						let wu = units[wi];
						if (wu.vip) {
							if (wu.friend) {
								wu.range++;
								if (wu.cr < 3) wu.cr++;
								if (wu.att < 131) wu.att += 20;
								if (wu.def < 66) wu.def += 10;
								wu.hp = Math.round(wu.hp * 1.5);
								if (wu.hp > wu.ohp) wu.ohp = wu.hp;
							} else {
								if (wu.range > 1) wu.range--;
								if (wu.cr > 1) wu.cr--;
								if (wu.att > 20) wu.att -= 20;
								if (wu.def > 10) wu.def -= 10;
								wu.hp = Math.round(wu.hp / 1.5);
							}
						} else {
							let choice = sprites.filter((s) => s.name !== wu.name && !s.vip);
							let model = rnd(choice);
							wu.name = model.name;
							wu.pic = model.pic;
							wu.att = model.att;
							wu.def = model.def;
							wu.cr = model.cr;
							wu.range = model.range;
							wu.spec = model.spec;
							wu.desc = model.desc;
							wu.sound = model.sound;
							wu.ohp = model.hp;
							if (wu.hp > wu.ohp) wu.hp = wu.ohp;
							document.getElementById("unit-" + wu.id).src = `./img/rooms/${wu.pic}`;
						}
						if (featuredU === wu.id) updateFeatured(wu);
					}
					sound2.src = "./audio/" + shootWeapon.sound + ".mp3";
					sound2.play();
					break;

				case "sugar":
					wx = parseInt(wx);
					sound2.src = "./audio/protonbeam.mp3";
					sound2.play();
					document.getElementById("extra").innerHTML = `<img id="beam" class="beam" src="./img/rooms/beam.png">`;
					let beam = document.getElementById("beam");
					beam.style.setProperty("transition", "none");
					beam.style.left = beamPosX(wx);
					beam.style.top = beamPosY(wy);
					beam.style.setProperty(
						"transition",
						`left linear ${0.05 / gspeed}s, top linear ${0.05 / gspeed}s, width linear ${0.05 / gspeed
						}s, height linear ${0.05 / gspeed}s`
					);
					disposable = false;
					for (let i = 12; i > -1; i--) {
						timok[200 + i] = setTimeout(() => {
							beam.style.left = beamPosX(wx);
							beam.style.top = beamPosY(i);
							beam.style.height = `${3.3 * (13 - i)}vw`;
							for (let ud of units) {
								if (ud.x === wx && ud.y === i) {
									let sebs = Math.round(ud.ohp / 2 + Math.random() * i * 10 - ud.def);
									sebs = sebs < 0 ? 1 : sebs > ud.hp ? ud.hp : sebs;
									ud.hp -= sebs;
									if (ud.hp < 0) {
										ud.hp = 0;
										dies(ud);
									}
									if (ud.id === featuredU) updateFeatured(ud);
								}
							}
							if (ffields[i][wx].terrain === 1 && Math.random() * i > 3) {
								ffields[i][wx].terrain = 0;
								ffields[i][wx].empty = true;
								document.getElementById(`teri-${wx}-${i}`).src = "./img/rooms/terep0.jpg";
								document.getElementById(`teri-${wx}-${i}`).className = "terep terep-0";
							}
						}, (50 * (12 - i)) / gspeed);
					}

					timok[200] = setTimeout(() => {
						beam.classList.add("darken");
					}, 1000 / gspeed);

					timok[200] = setTimeout(() => {
						document.getElementById("extra").innerHTML = "";
					}, 1400 / gspeed);

					break;

				case "robi":
					if (!noMoveThere(wx, wy)) {
						cancelShoot();
						return;
					}
					let model = sprites.find((s) => s.name == "Robi");
					units.push(newSprite(model, uid, true));
					let ur = units[uid];
					ur.x = wx;
					ur.y = wy;
					ffields[wy][wx].empty = false;
					document.getElementById("sprites").insertAdjacentHTML(
						"beforeend",
						`
						<img id="unit-${ur.id}" class="sprite friend" src="./img/rooms/${ur.pic}">
						<img id="bullet-${ur.id}" class="bullet" src="./img/rooms/bullet.png">
						<audio id="voice-${ur.id}" src = "./audio/${ur.sound}.mp3";></audio>
					`
					);
					document.getElementById(`voice-${ur.id}`).volume = soundOn ? 1 : 0;
					let ud = document.getElementById(`unit-${ur.id}`);
					ud.style.left = unitPosX(ur.x);
					ud.style.top = unitPosY(ur.y);
					document.getElementById("bullet-" + ur.id).style.left = bulletPosX(ur.x);
					document.getElementById("bullet-" + ur.id).style.top = bulletPosY(ur.y);
					uid++;
					sound2.src = "./audio/" + ur.sound + ".mp3";
					sound2.play();
					decide(ur);
					break;

				default:
					break;
			}

			if (disposable) {
				loseObj(shootWeapon.name, false);
				fe = getObj("W");
				fegyObj = [];
				if (fe.length > 0) {
					for (let f of fe) {
						let match = weapons.find((w) => w.name === f && !!w.final);
						if (match) fegyObj.push(match);
					}
				}
			}
			document.querySelectorAll(".nme").forEach((s) => (s.style.cursor = "help"));
			document.querySelectorAll(".friend").forEach((s) => (s.style.cursor = "pointer"));
			document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
			gclick = "select";
			weaponCount = 0;
			shootWeapon = {};
			updateFWeapons();
			if (fegyObj.length > 0) {
				weapontimer();
			}
		}

		function updateFWeapons() {
			let objString = "";
			if (fegyObj.length > 0) {
				document.getElementById("weapons").innerHTML = `
					<div>Fegyverek:</div>
					<div id="overlay">
						<img id="wtimer" class="weapon" src="./img/rooms/pipa.jpg">
					</div>        
				`;
				fegyObj.map((fegy, i) => {
					let titleString = `${fegy.name}&#10;${fegy.desc}&#10;`;
					objString +=
						weaponCount === weaponCountMax
							? `
                <img class="weapon usable" id="w-${i}" title="${titleString}" src="./img/weapons/${fegy.pic}">`
							: `<img class="weapon unused" id="w-${i}" title="${titleString}" src="./img/weapons/${fegy.pic}">`;
				});
				document.getElementById("weapons").innerHTML += objString;

				document.querySelectorAll(".weapon.usable").forEach((i) => {
					i.addEventListener("click", chooseFWeapon);
				});
			} else {
				document.getElementById("weapons").innerHTML = "";
			}
		}

		function fwAction(e) {
			let teljesszó = e.target.id.split("-");
			let szótő = teljesszó[0];

			switch (szótő) {
				case "vezerBtn":
					scene();
					break;

				case "sp":
					changeSpeed(teljesszó[1]);
					break;

				case "unit":
					let tu = units[Number(teljesszó[1])];
					switch (gclick) {
						case "select":
							updateFeatured(tu);
							if (opera === 1 && tu.friend && tu.name !== "Robi") {
								gclick = "order";
								command = tu;
								document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "crosshair"));
								document.querySelectorAll(".terep-0").forEach((s) => (s.style.cursor = "move"));
								document.querySelectorAll(".terep-1").forEach((s) => (s.style.cursor = "crosshair"));
								document.querySelectorAll(".terep-2").forEach((s) => (s.style.cursor = "not-allowed"));
							} else {
								document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
								document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = opera === 0 ? "help" : "default"));
							}
							break;

						case "order":
							if (!tu.friend) {
								command.futureAct = {
									type: "támad",
									victim: tu.id,
									x: -1,
									y: -1,
								};
								if (command.id === featuredU) updateFeatured(command);
								if (fwb === "hat") command.obey = true;
								document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
								document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
								gclick = "select";
							}
							if (tu.friend) {
								if (tu.id === command.id) {
									command.futureAct = {
										type: "áll",
										victim: -1,
										x: -1,
										y: -1,
									};
									document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
									document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
									gclick = "select";
									updateFeatured(tu);
									return;
								}

								updateFeatured(tu);
								command = tu;
								document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "crosshair"));
							}
							break;

						case "shoot":
							weaponTarget(Number(teljesszó[1], null));
							break;

						default:
							break;
					}
					break;

				case "teri":
					let tx = teljesszó[1];
					let ty = teljesszó[2];
					let tt = ffields[ty][tx].terrain;
					if (opera === 0) {
						let tn = ["MEZŐ", "ERDŐ", "TÓ"];
						let td = [
							"Sima terep.",
							"Akadályozza a mozgást és a lövést, de kellő erővel ki lehet vágni.",
							"Akadályozza a mozgást, de a lövést nem. Aki mellette áll, az visszanyer némi erőt.",
						];
						if (featuredU > -1) {
							document.getElementById("unit-" + featuredU).classList.remove("selectedUnit");
							featuredU = -1;
						}
						document.getElementById("ustat").innerHTML = `
							<h2>${tn[tt]}</h2>
							<h4>${td[tt]}</h4>
						`;
						document.getElementById("ustat").className = "occur";
						return;
					}

					switch (gclick) {
						case "order":
							command.futureAct = {
								type: "mozog",
								victim: -1,
								x: tx,
								y: ty,
							};
							if (fwb === "hat") command.obey = true;
							if (command.presentAct.type === "favágás") {
								command.presentAct = {
									type: "áll",
									victim: -1,
									x: -1,
									y: -1,
								};
							}
							if (command.id === featuredU) updateFeatured(command);
							document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
							document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
							gclick = "select";
							break;

						case "shoot":
							weaponTarget(tx, ty);
							break;

						default:
							break;
					}
					break;

				case "overlay":
					if (gclick !== "shoot") return;
					cancelShoot();
					break;

				default:
					break;
			}
		}

		function strongest(array) {
			let x = -1;
			let y = 0;
			for (let a of array) {
				if (a.hp + a.att + a.def > y) {
					y = a.hp + a.att + a.def;
					x = a.id;
				}
			}
			return x;
		}

		function weakest(array) {
			let x = -1;
			let y = 1000;
			for (let a of array) {
				if (a.hp + a.att + a.def < y) {
					y = a.hp + a.att + a.def;
					x = a.id;
				}
			}
			return x;
		}

		function bestmatch(u, array) {
			let x = -1;
			let y = 1000;
			for (let a of array) {
				let z = Math.abs(a.hp + a.att + a.def - (u.hp + u.att + u.def));
				if (z < y) {
					y = z;
					x = a.id;
				}
			}
			return x;
		}

		function closest(u, array) {
			let x = -1;
			let y = 15;
			for (let a of array) {
				let z = distance(u, a);
				if (z < y) {
					y = z;
					x = a.id;
				}
			}
			return x;
		}

		function closestó(u) {
			let xx = -1;
			let yy = -1;
			let z = 15;
			for (let y = 0; y < 13; y++) {
				for (let x = 0; x < 13; x++) {
					if (ffields[y][x].terrain === 2) {
						let w = distance({ x: u.x, y: u.y }, { x: x, y: y });
						if (w < z) {
							z = w;
							xx = x;
							yy = y;
						}
					}
				}
			}
			return { x: xx, y: yy };
		}

		function activate(u, forced) {
			if (u.obey && !forced) return;
			let friends = units.filter((fu) => fu.friend === u.friend && !fu.dead && u.id !== fu.id);
			let nmes = units.filter(
				(fu) =>
					fu.friend !== u.friend &&
					!fu.dead &&
					(fu.spec !== "lopakodás" || (fu.spec === "lopakodás" && fu.presentAct.type === "támad"))
			);

			if (u.name === "Óriás" && nmes.length > 0 && u.hp > u.ohp / 2) {
				u.futureAct = {
					type: "támad",
					victim: strongest(nmes),
					x: -1,
					y: -1,
				};
				return;
			}

			if (friends.length > 0) {
				let mugged = [];
				for (let f of friends) {
					if (attackers(f).length > 0) {
						mugged.push(f);
					}
				}
				if (mugged.length > 0 && u.cr < 0.5 + Math.random() * 4.5) {
					let muggers = attackers(units[closest(u, mugged)]);
					if (muggers.length > 0) {
						u.futureAct = {
							type: "támad",
							victim: closest(u, muggers),
							x: -1,
							y: -1,
						};
						return;
					}
				}
			}

			let nmesinsight = nmes.filter(
				(nu) =>
					distance(u, nu) <= u.range * 3 &&
					(nu.spec !== "lopakodás" || (nu.spec === "lopakodás" && nu.presentAct.type === "támad")) &&
					clearview(u, nu)
			);
			if (nmesinsight.length > 0 && nmesinsight.length > u.cr - Math.random() * 3) {
				u.futureAct = {
					type: "támad",
					victim: chooseVictim(u, nmesinsight),
					x: -1,
					y: -1,
				};
				return;
			}

			if (forced) {
				valag(u);
			}
		}

		function finalend(friend) {
			clearTimers(true);
			document.querySelectorAll(".bullet").forEach((b) => {
				b.style.display = "none";
			});
			if (fegyObj.length > 0) {
				if (shootWeapon !== {}) cancelShoot();
				weaponCount = 0;
				updateFWeapons();
			}
			if (friend) {
				message("Megsemmisült a sereged!");
				music.volume = 0.2;
				opera = 3;
			} else {
				message("Legyőztétek az ellenséget!");
				music.volume = 1;
				opera = 2;
			}
			document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
			document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
			glick = "select";
			document.getElementById("vezerBtn").innerHTML = operaBtn[opera];
		}

		function dies(u) {
			if (u.dead) return;
			u.dead = true;
			u.obey = false;
			u.futureAct = {
				type: "meghal",
				victim: -1,
				x: -1,
				y: -1,
			};
			u.presentAct = {
				type: "meghal",
				victim: -1,
				x: -1,
				y: -1,
			};
			if (featuredU === u.id) updateFeatured(u);
			let friendly = u.friend;
			let halálhörgés = friendly ? "no" : "die";
			if (u.vip) {
				let gyász = friendly ? `Béke ${u.name} poraira...` : `${u.name} már nem zavar többé minket!`;
				let gyászín = friendly ? "red" : "green";
				message(`<span class=${gyászín}>${gyász}</span>`);
				char.objs.push("X_" + u.name);
				modi.push(u.name); //Következő pályán halottszemle!
			}
			let uDom = document.getElementById("unit-" + u.id);
			document.getElementById("voice-" + u.id).src = `./audio/${halálhörgés}.mp3`;
			document.getElementById("voice-" + u.id).play();
			uDom.style.transition = `filter ${1 / gspeed}s`;
			uDom.classList.add("darkenFW");
			if (u.id === featuredU) {
				document.getElementById("ustat").style.transition = `filter ${1 / gspeed}s`;
				document.getElementById("ustat").classList.add("darkenFW");
			}
			timok[u.id] = setTimeout(() => {
				if (featuredU === u.id) {
					document.getElementById("ustat").className = "noccur";
					document.getElementById("ustat").innerHTML = "";
					featuredU = -1;
					if (gclick.split("-")[0] !== "shoot") {
						document.querySelectorAll(".sprite.nme").forEach((s) => {
							s.style.cursor = "help";
							s.classList.remove("targetUnit");
						});
						document.querySelectorAll(".terep").forEach((s) => {
							s.style.cursor = "default";
							s.classList.remove("targetTerep");
						});
						gclick = "select";
					}
				}
				uDom.style.display = "none";
				document.getElementById("bullet-" + u.id).style.display = "none";
				document.getElementById("voice-" + u.id).style.display = "none";
				ffields[u.y][u.x].empty = true;
				let survivors = units.filter((u) => u.friend === friendly && !u.dead);
				if (survivors.length < 1 && opera === 1) finalend(friendly);
			}, 1000 / gspeed);
		}

		let distance = (u1, u2) => Math.floor(Math.sqrt((u1.x - u2.x) * (u1.x - u2.x) + (u1.y - u2.y) * (u1.y - u2.y)));

		let attackers = (u) => units.filter((uf) => uf.presentAct.type === "támad" && uf.presentAct.victim === u.id);

		let inrange = (u) =>
			units.filter(
				(uf) =>
					uf.friend === !u.friend &&
					distance(u, uf) <= u.range &&
					!uf.dead &&
					(uf.spec !== "lopakodás" || (uf.spec === "lopakodás" && uf.presentAct.type === "támad")) &&
					clearview(u, uf)
			);

		function chooseVictim(u, arr) {
			let pick = rnd(arr);
			return u.name === "Kocsmatöltelékek"
				? pick.id
				: u.name === "Tüzér" || u.name === "Óriás"
					? strongest(arr)
					: u.name === "Indián" || u.hp < (u.ohp * Math.random()) / 3
						? weakest(arr)
						: u.hp > 0.5 + (u.ohp * Math.random()) / 2
							? closest(u, arr)
							: bestmatch(u, arr);
		}

		function neighbors(u) {
			let all = units.filter((u2) => !u2.dead && distance(u, u2) === 1);
			let nf = all.filter((u2) => u2.friend === u.friend).length;
			let nn = all.filter((u2) => u2.friend === !u.friend).length;
			return { all: all, nf: nf, nn: nn };
		}

		function clearview(u1, u2) {
			if (u1.spec === "mesterlövész" || u1.range === 1) return true;
			let [x1, y1, x2, y2] = [u1.x, u1.y, u2.x, u2.y];
			let dx = Math.abs(x2 - x1);
			let dy = Math.abs(y2 - y1);
			let cx = Math.sign(x2 - x1);
			let cy = Math.sign(y2 - y1);
			if (dx < 2 && dy < 2) return true;
			let [short, long] = ["", ""];
			let [shortD, longD] = [0, 0];
			if (dx < dy) {
				[short, long] = ["x", "y"];
				[shortD, longD] = [dx, dy];
				[shortC, longC] = [cx, cy];
			} else {
				[short, long] = ["y", "x"];
				[shortD, longD] = [dy, dx];
				[shortC, longC] = [cy, cx];
			}
			if (longD > 3) return false; //ha ez a max. range
			let f1 = null;
			let f2 = null;
			if (shortD === 1 && longD === 2) {
				if (long === "x") {
					f1 = ffields[y1][x1 + cx];
					f2 = ffields[y1 + cy][x1 + cx];
				} else {
					f1 = ffields[y1 + cy][x1];
					f2 = ffields[y1 + cy][x1 + cx];
				}
				if (!f1.empty && f1.terrain !== 2 && !f2.empty && f2.terrain !== 2) {
					return false;
				} else return true;
			}
			if (dx === dy || dx === 0 || dy === 0) {
				for (let i = 1; i < longD; i++) {
					let f = ffields[x1 + i * cx][y1 + i * cy];
					if (!f.empty && f.terrain !== 2) {
						return false;
					}
				}
			} else if (longD === 3) {
				if (shortD === 1) {
					if (long === "x") {
						f1 = ffields[y1][x1 + cx];
						f2 = ffields[y1 + cy][x1 + 2 * cx];
					} else {
						f1 = ffields[y1 + cy][x1];
						f2 = ffields[y1 + 2 * cy][x1 + cx];
					}
				}
				if (shortD === 2) {
					if (long === "x") {
						f1 = ffields[y1 + cy][x1 + cx];
						f2 = ffields[y1 + cy][x1 + 2 * cx];
					} else {
						f1 = ffields[y1 + cy][x1 + cx];
						f2 = ffields[y1 + 2 * cy][x1 + cx];
					}
				}
				if ((!f1.empty && f1.terrain !== 2) || (!f2.empty && f2.terrain !== 2)) {
					return false;
				} else return true;
			}
			return true;
		}

		function specVoice(u, other = false) {
			let mélynyomó = other ? sound : document.getElementById("voice-" + u.id);
			mélynyomó.src = `./audio/${specvoices[u.spec]}.mp3`;
			mélynyomó.play();
		}

		function movebullet(u, x, y, type = "shot", punch = false) {
			let bullet = document.getElementById("bullet-" + u.id);
			bullet.style.setProperty("transition", "none");
			bullet.style.left = bulletPosX(u.x);
			bullet.style.top = bulletPosY(u.y);
			bullet.classList.add("occur");

			function bum() {
				bullet.style.setProperty(
					"transition",
					`left linear ${0.3 / gspeed}s, top linear ${0.3 / gspeed}s, width linear ${0.3 / gspeed}s, height linear ${0.3 / gspeed
					}s`
				);
				bullet.style.zIndex = type === "round" ? "2" : "4";
				bullet.classList.add("bumm");
				bullet.style.left = bumPosX(x);
				bullet.style.top = bumPosY(y);
				clearTimeout(timok[150 + u.id]);
				timok[150 + u.id] = setTimeout(() => {
					bullet.classList.remove("bumm");
					bullet.classList.remove("occur");
					bullet.style.zIndex = "4";
				}, 303 / gspeed);
			}

			if (type !== "round") {
				bullet.style.setProperty(
					"transition",
					`left linear ${0.3 / gspeed}s, top linear ${0.3 / gspeed}s, width linear ${0.3 / gspeed}s, height linear ${0.3 / gspeed
					}s`
				);
				clearTimeout(timok[50 + u.id]);
				timok[50 + u.id] = setTimeout(() => {
					if (punch) {
						bullet.classList.add("punch");
						bullet.style.left = punchPosX(x);
						bullet.style.top = punchPosY(y);
					} else {
						bullet.style.left = bulletPosX(x);
						bullet.style.top = bulletPosY(y);
					}
					document.getElementById("voice-" + u.id).src = `./audio/${u.sound}.mp3`;
					document.getElementById("voice-" + u.id).play();
					clearTimeout(timok[100 + u.id]);
					timok[100 + u.id] = setTimeout(() => {
						if (type === "shot") {
							if (punch) bullet.classList.remove("punch");
							bullet.classList.remove("occur");
						} else {
							document.getElementById("voice-" + u.id).src = "./audio/bomb.mp3";
							document.getElementById("voice-" + u.id).play();
							bum();
						}
					}, 302 / gspeed);
				}, 1);
			} else {
				x = u.x;
				y = u.y;
				document.getElementById("voice-" + u.id).src = "./audio/angrydrunk.mp3";
				document.getElementById("voice-" + u.id).play();
				bum();
			}
		}

		function pathfinder(u) {
			let ox = u.x;
			let oy = u.y;
			let fx = u.futureAct.x;
			let fy = u.futureAct.y;
			if (u.futureAct.victim > -1) {
				fx = units[u.futureAct.victim].x;
				fy = units[u.futureAct.victim].y;
			}

			if (Math.floor(Math.sqrt((ox - fx) * (ox - fx) + (oy - fy) * (oy - fy))) === 1 && ffields[fy][fx].terrain === 1) {
				if (u.name === "Bübük") {
					u.futureAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
					u.presentAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
					u.obey = false;
				} else {
					u.presentAct = {
						type: "favágás",
						victim: -1,
						x: fx,
						y: fy,
					};
				}
				if (u.id === featuredU) updateFeatured(u);
				return;
			}
			if ((ox === fx && oy === fy) || (Math.abs(fx - ox) < 2 && Math.abs(fy - oy) < 2 && !ffields[fy][fx].empty)) {
				u.futureAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.presentAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.obey = false;
				if (u.id === featuredU) updateFeatured(u);
				return;
			}

			let mx = 0;
			let my = 0;
			if (fx > ox) mx = u.spec === "távolugrás" && fx - ox > 1 ? 2 : 1;
			if (fx < ox) mx = u.spec === "távolugrás" && ox - fx > 1 ? -2 : -1;
			if (fy > oy) my = u.spec === "távolugrás" && fy - oy > 1 ? 2 : 1;
			if (fy < oy) my = u.spec === "távolugrás" && oy - fy > 1 ? -2 : -1;
			let siker = false;
			function move(x, y) {
				if (x === u.x && y === u.y) {
					u.presentAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
					u.obey = false;
				} else {
					u.presentAct = {
						type: "mozog",
						victim: -1,
						x: x,
						y: y,
					};
				}
			}
			function dülöngélés() {
				if (u.spec !== "részegség" || (u.spec === "részegség" && Math.random() < 0.325 + u.cr / 8)) return;
				let ax = [-1, 0, 1];
				let ay = [-1, 0, 1];
				if (ox === 0) ax = [0, 1];
				if (ox === 12) ax = [0, -1];
				if (oy === 0) ay = [0, 1];
				if (oy === 12) ay = [0, -1];
				mx = rnd(ax);
				my = rnd(ay);
				specVoice(u);
				if (mx === 0 && my === 0) {
					siker = true;
					u.presentAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
				}
			}
			dülöngélés();
			if (siker) return;
			if (ffields[oy + my][ox + mx].empty) {
				siker = true;
				move(ox + mx, oy + my);
				if (Math.abs(mx) > 1 || Math.abs(my) > 1) specVoice(u);
			} else {
				if (mx > 1) mx = 1;
				if (mx < -1) mx = -1;
				if (my > 1) my = 1;
				if (my < -1) my = -1;
				if (ffields[oy + my][ox + mx].empty) {
					siker = true;
					move(ox + mx, oy + my);
				} else if (
					ffields[oy + my][ox + mx].terrain === 1 &&
					(u.spec === "favágás" || u.att + u.hp > 120 + Math.random() * 250) & (u.name !== "Bübük")
				) {
					siker = true;
					u.presentAct = {
						type: "favágás",
						victim: -1,
						x: ox + mx,
						y: oy + my,
					};
				} else {
					let mmx = mx;
					let mmy = my;
					if (!siker) {
						let order = shuffle([0, 1]);
						for (let o of order) {
							if (o === 0) {
								if (mx === 0 && !siker) {
									mmx =
										ox === 0 || (ox > 0 && !ffields[oy + my][ox - 1].empty)
											? 1
											: ox === 12 || (ox < 12 && !ffields[oy + my][ox + 1].empty)
												? -1
												: rnd([1, -1]);
									if (!!ffields[oy + my][ox + mmx]) {
										if (ffields[oy + my][ox + mmx].empty) {
											siker = true;
											move(ox + mmx, oy + my);
										}
									}
								}
							} else {
								if (my === 0 && !siker) {
									mmy =
										oy === 0 || (oy > 0 && !ffields[oy - 1][ox + mx].empty)
											? 1
											: oy === 12 || (oy < 12 && !ffields[oy + 1][ox + mx].empty)
												? -1
												: rnd([1, -1]);
									if (!!ffields[oy + mmy][ox + mx]) {
										if (ffields[oy + mmy][ox + mx].empty) {
											siker = true;
											move(ox + mx, oy + mmy);
										}
									}
								}
							}
						}
					}
					if (siker) return;

					if (mx !== 0 && my !== 0) {
						let order = shuffle([0, 1]);
						for (let o of order) {
							switch (o) {
								case 0:
									mmx = 0;
									mmy = my;
									break;

								case 1:
									mmy = 0;
									mmx = mx;
									break;

								default:
									break;
							}
							if (ffields[oy + mmy][ox + mmx].empty && !siker) {
								siker = true;
								move(ox + mmx, oy + mmy);
							}
						}
					}
					if (siker) return;

					if (mx !== 0 && my !== 0) {
						let order = shuffle([0, 1]);
						for (let o of order) {
							switch (o) {
								case 0:
									mmx = -mx;
									mmy = my;
									if (ox + mmx < 0 || ox + mmx > 12) mmx = 0;
									break;

								case 1:
									mmx = mx;
									mmy = -my;
									if (oy + mmy < 0 || oy + mmy > 12) mmy = 0;
									break;

								default:
									break;
							}
							if (ffields[oy + mmy][ox + mmx].empty && !siker) {
								siker = true;
								move(ox + mmx, oy + mmy);
							} else {
								mmx = -mx;
								mmy = -my;
								if (ox + mmx < 0 || ox + mmx > 12) mmx = 0;
								if (oy + mmy < 0 || oy + mmy > 12) mmy = 0;
								if (ffields[oy + mmy][ox + mmx].empty && !siker) {
									siker = true;
									move(ox + mmx, oy + mmy);
								}
							}
						}
						if (siker) return;

						if ((ffields[oy + my][ox + mx].terrain === 1) & (u.name !== "Bübük")) {
							u.presentAct = {
								type: "favágás",
								victim: -1,
								x: ox + mx,
								y: oy + my,
							};
						} else if ((ffields[oy + mmy][ox + mmx].terrain === 1) & (u.name !== "Bübük")) {
							u.presentAct = {
								type: "favágás",
								victim: -1,
								x: ox + mmx,
								y: oy + mmy,
							};
						} else {
							u.presentAct = {
								type: "áll",
								victim: -1,
								x: -1,
								y: -1,
							};
						}
					}
				}
			}
			if (u.id === featuredU) updateFeatured(u);
		}

		//present Actions
		function prÁll(u) {
			if (u.spec === "lopakodás") document.getElementById("unit-" + u.id).classList.add("stealth");
			let ct = closestó(u);
			let cd = distance(u, { x: ct.x, y: ct.y });
			if (u.name === "Robi") {
				u.hp -= Math.round(Math.random());
				let nmes = inrange(u);
				if (nmes.length > 0) {
					document.getElementById("voice-" + u.id).src = `./audio/${u.sound}.mp3`;
					nmes.forEach((n) => {
						if (n.cr < Math.random() * 3.5) {
							n.futureAct = {
								type: "áll",
								victim: -1,
								x: -1,
								y: -1,
							};
							document.getElementById("voice-" + u.id).play();
							if (Math.random() > 0.4) {
								u.futureAct = {
									type: "támad",
									victim: n.id,
									x: -1,
									y: -1,
								};
							}
						}
						if (n.id === featuredU) updateFeatured(n);
					});
				}
			} else if (u.hp < u.ohp && cd === 1) {
				if (u.spec === "hörpintés" && u.hp < 40 + 20 * Math.random()) {
					specVoice(u);
					u.hp = u.ohp - (1 + Math.round(Math.random() * 9) - (fwb === "lel"));
					ffields[ct.y][ct.x].terrain = 0;
					ffields[ct.y][ct.x].empty = true;
					document.getElementById(`teri-${ct.x}-${ct.y}`).src = "./img/rooms/terep0.jpg";
					document.getElementById(`teri-${ct.x}-${ct.y}`).className = "terep terep-0";
					return;
				}
				u.hp += Math.round(Math.random() + (fwb === "lel") * (1 + Math.random() * 3));
			} else {
				if (Math.random() > 0.75 + u.cr / 15 && u.hp > u.ohp * Math.random()) changeMind(u);
			}
		}

		function prMozog(u) {
			if (u.spec === "lopakodás") document.getElementById("unit-" + u.id).classList.add("stealth");
			let fx = u.presentAct.x;
			let fy = u.presentAct.y;
			if (fx === u.x && fy === u.y) {
				u.futureAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.presentAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.obey = false;
				return;
			}
			ffields[u.y][u.x].empty = true;
			ffields[fy][fx].empty = false;
			u.x = fx;
			u.y = fy;
			document.getElementById("unit-" + u.id).style.left = unitPosX(u.x);
			document.getElementById("unit-" + u.id).style.top = unitPosY(u.y);
		}

		function prFavágás(u) {
			if (u.spec === "lopakodás") document.getElementById("unit-" + u.id).classList.add("stealth");
			let fx = u.presentAct.x;
			let fy = u.presentAct.y;
			movebullet(u, fx, fy);
			if (u.spec === "favágás" || u.att + u.hp > 75 + Math.random() * 200) {
				sound.src = "./audio/treecut.mp3";
				sound.play();
				ffields[fy][fx].terrain = 0;
				ffields[fy][fx].empty = true;
				u.presentAct.type = "mozog";
				setTimeout(() => {
					document.getElementById(`teri-${fx}-${fy}`).src = "./img/rooms/terep0.jpg";
					document.getElementById(`teri-${fx}-${fy}`).className = "terep terep-0";
				}, 500 / gspeed);
			} else {
				if (u.cr < 0.5 + Math.random() * 3 && !u.obey) {
					u.futureAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
				}
			}
		}

		function prTámad(u) {
			if (u.spec === "lopakodás") document.getElementById("unit-" + u.id).classList.remove("stealth");
			let friendly = u.friend;
			let nme = units[u.presentAct.victim];
			if (nme.friend === u.friend || nme.dead) {
				u.futureAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.presentAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.obey = false;
				return;
			}
			let nx = nme.x;
			let ny = nme.y;
			let [att, hp, nmeDef] = [u.att, u.hp, nme.def];
			let seb = Math.round((att + hp / 10 - nmeDef) / 3 + Math.random() * 3 - Math.random() * 3);
			seb = seb < 0 ? 0 : seb > 50 ? 50 : seb;

			if (nme.name !== "Robi" && u.spec === "csábítás" && Math.random() * 50 + seb > 25 + Math.random() * 45) {
				nme.friend = friendly;
				specVoice(u, true);
				let team = friendly ? "friend" : "nme";
				document.getElementById("unit-" + nme.id).className = `sprite ${team}`;
				if (gclick.split("-")[0] !== "shoot") {
					document.querySelectorAll(".sprite.friend").forEach((s) => (s.style.cursor = "pointer"));
					document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "help"));
					gclick = "select";
				}
				if (nme.vip) {
					let gyász = friendly ? `${nme.name} átállt hozzánk!` : `${nme.name} átállt az ellenséghez!`;
					let gyászín = friendly ? "green" : "red";
					message(`<span class=${gyászín}>${gyász}</span>`);
					let i = char.objs.indexOf("J_" + nme.name);
					if (i > -1 && !friendly) {
						char.objs.splice(i, 1);
					} else if (i < 0 && friendly) {
						char.objs.push("J_" + nme.name);
					}
				}
				u.futureAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.presentAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				nme.futureAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				nme.presentAct = {
					type: "áll",
					victim: -1,
					x: -1,
					y: -1,
				};
				u.obey = false;
				if (nme.id === featuredU) updateFeatured(nme);
				let survivors = units.filter((u) => u.friend === !friendly && !u.dead);
				if (survivors.length < 1 && opera === 1) finalend(!friendly);
				return;
			}

			let at = "shot";
			let nb = u.spec === "gránátvetés" ? neighbors(nme) : u.spec === "részegség" ? neighbors(u) : null;
			if (nb !== null && u.spec === "gránátvetés" && nb.nf > nb.nn && nb.nn < 3 && distance(u, nme) > 1) at = "rakéta";
			if (nb !== null && u.spec === "részegség" && nb.nn > 1) at = "round";
			let punch = false;

			if (u.spec === "kiütés") {
				let cx = nme.x - u.x;
				let cy = nme.y - u.y;
				let tx = nme.x;
				let ty = nme.y;
				let ll = 0;
				for (let l = 1; l < 6; l++) {
					tx += cx;
					ty += cy;
					if (tx < 0 || tx > 12 || ty < 0 || ty > 12) break;
					if (ffields[ty][tx].empty && noMoveThere(tx, ty)) {
						punch = true;
						ll = l;
						break;
					}
				}
				if (punch) {
					clearTimeout(timok[nme.id]);
					nme.futureAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
					nme.presentAct = {
						type: "mozog",
						victim: -1,
						x: tx,
						y: ty,
					};
					specVoice(u, true);
					decide(nme);
					seb = Math.round(seb * (1 + ll / 10));
					if (!u.obey && Math.random() > u.cr / 6) changeMind(u);
				}
			}

			movebullet(u, nx, ny, at, punch);

			if (u.spec === "feltartóztatás") {
				if (nme.cr < seb / 20 + Math.random() * 3) {
					nme.futureAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
					if (nme.id === featuredU) updateFeatured(nme);
				}
			}
			if (nb === null && (u.spec === "halálos csapás" || seb > 15 + Math.random() * 10)) {
				let x = Math.random() * 12;
				switch (true) {
					case x < 3:
						nme.att -= Math.floor(1 + (Math.random() * seb) / 1.1);
						nme.att = nme.att < 0 ? 0 : nme.att;
						break;

					case x < 6:
						nme.def -= Math.floor(1 + (Math.random() * seb) / 1.4);
						nme.def = nme.def < 0 ? 0 : nme.def;
						break;

					case x < 9:
						nme.def -= nme.def > 1 ? 2 : nme.def;
						nme.att -= nme.att > 1 ? 2 : nme.att;
						seb += 1;
						break;

					default:
						seb = seb * 2;
						break;
				}
			}

			nme.hp -= seb;
			if (nme.hp < 0) {
				nme.hp = 0;
				dies(nme);
				u.obey = false;
				changeMind(u, true);
			}
			if (nme.id === featuredU) updateFeatured(nme);

			if (nb !== null) {
				for (let n of nb.all) {
					if (n.id === nme.id) continue;
					let sebb = Math.round((att + hp / 10 - n.def) / 5 + -Math.random() * 3);
					sebb = sebb < 0 ? 0 : sebb > 50 ? 50 : sebb;
					n.hp -= sebb;
					if (n.hp < 0) {
						n.hp = 0;
						dies(n);
					}
					if (n.id === featuredU) updateFeatured(n);
				}
			}
		}

		//future Actions
		function fuÁll(u) {
			u.presentAct = {
				type: "áll",
				victim: -1,
				x: -1,
				y: -1,
			};
			if (Math.random() > 0.2 + u.cr / 6 - (u.name === "Óriás" || u.hp === u.ohp) * 0.7) changeMind(u, true);
		}

		function fuMozog(u) {
			if (u.presentAct.type === "favágás") return;
			pathfinder(u);
			if (Math.random() > 0.3 + u.cr / 6) changeMind(u);
		}

		function fuTámad(u) {
			let célpont = units[u.futureAct.victim];
			if (
				célpont.friend === u.friend ||
				célpont.dead ||
				(célpont.spec === "lopakodás" && célpont.presentAct.type !== "támad")
			) {
				u.obey = false;
				changeMind(u, true);
				return;
			}
			if (distance(u, célpont) > u.range || (distance(u, célpont) <= u.range && !clearview(u, célpont))) {
				if (u.name === "Robi") {
					u.futureAct = {
						type: "áll",
						victim: -1,
						x: -1,
						y: -1,
					};
				} else {
					pathfinder(u);
				}
			} else {
				u.presentAct = {
					type: "támad",
					victim: célpont.id,
					x: -1,
					y: -1,
				};
			}
			if (Math.random() > 0.6 + u.cr / 10) changeMind(u);
		}

		//AI
		function decide(u) {
			switch (u.presentAct.type) {
				case "áll":
					prÁll(u);
					break;

				case "mozog":
					prMozog(u);
					break;

				case "favágás":
					prFavágás(u);
					break;

				case "támad":
					prTámad(u);
					break;

				default:
					break;
			}

			if (u.hp === u.ohp) {
				document.getElementById("unit-" + u.id).style.borderTop = "3px solid lime";
			} else if (u.hp >= u.ohp / 3) {
				document.getElementById("unit-" + u.id).style.borderTop = "3px solid yellow";
			} else {
				document.getElementById("unit-" + u.id).style.borderTop = "3px solid red";
			}
			if (u.hp < 1) {
				u.hp = 0;
				if (u.id === featuredU) updateFeatured(u);
				dies(u);
			} else {
				if (u.id === featuredU) updateFeatured(u);
				timok[u.id] = setTimeout(() => {
					switch (u.futureAct.type) {
						case "áll":
							fuÁll(u);
							break;

						case "mozog":
							fuMozog(u);
							break;

						case "támad":
							fuTámad(u);
							break;

						default:
							break;
					}
					if (u.id === featuredU) updateFeatured(u);
					decide(u);
				}, 1000 / gspeed);
			}
		}

		function valag(u) {
			let mx = u.x;
			let my = u.y;
			do {
				mx = Math.floor(Math.random() * 13);
				my = Math.floor(Math.random() * 13);
			} while (mx === u.x && my === u.y);

			u.futureAct = {
				type: "mozog",
				victim: -1,
				x: mx,
				y: my,
			};
		}

		function changeMind(u, forced = false) {
			if (u.obey && !forced) return;
			let ar = attackers(u);
			if (u.name === "Robi") ar = ar.filter((a) => distance(u, a) <= u.range);
			let ir = inrange(u);
			if (ar.length > 0) {
				if (
					u.name !== "Robi" &&
					u.hp < 10 + Math.random() * ar.length * 20 &&
					u.cr < Math.random() * (ar.length + 2.5)
				) {
					let ct = closestó(u);
					let cd = distance(u, { x: ct.x, y: ct.y });
					if (cd > 3) {
						u.futureAct = {
							type: "mozog",
							victim: -1,
							x: ct.x,
							y: ct.y,
						};
					} else {
						if (cd === 1) {
							u.futureAct = {
								type: "áll",
								victim: -1,
								x: -1,
								y: -1,
							};
						} else valag(u);
					}
				} else {
					u.futureAct = {
						type: "támad",
						victim: weakest(ar),
						x: -1,
						y: -1,
					};
				}
				if (u.id === featuredU) updateFeatured(u);
			} else if (u.cr < ir.length + Math.random() * 1.5 + (u.futureAct.type === "áll") && ir.length > 1) {
				u.futureAct = {
					type: "támad",
					victim: chooseVictim(u, ir),
					x: -1,
					y: -1,
				};
				if (u.id === featuredU) updateFeatured(u);
			} else {
				if (
					u.name !== "Robi" &&
					u.cr < Math.random() * 3 + (u.spec === "részegség") + (u.hp === u.ohp) - (u.ohp - u.hp) / 100
				) {
					activate(u, forced);
				} else {
					let ct = closestó(u);
					let cd = distance(u, { x: ct.x, y: ct.y });
					if (u.name !== "Robi") {
						if (u.hp < u.ohp * 0.8 && cd > 1) {
							u.futureAct = {
								type: "mozog",
								victim: -1,
								x: ct.x,
								y: ct.y,
							};
						} else {
							activate(u, cd > 1);
						}
					} else if (forced || (u.hp < u.ohp / 2 && cd === 1)) {
						u.futureAct = {
							type: "áll",
							victim: -1,
							x: -1,
							y: -1,
						};
					}

					if (u.id === featuredU) updateFeatured(u);
				}
			}
		}

		function scene() {
			gclick = "select";
			clearTimers();
			switch (opera) {
				case 0:
					opera = 1;
					document.getElementById("vezerBtn").innerHTML = operaBtn[opera];
					music.volume = 0.7;
					if (fegyObj.length > 0) {
						weapontimer();
					}
					document.querySelectorAll(".sprite.friend").forEach((s) => (s.style.cursor = "pointer"));
					document.querySelectorAll(".terep").forEach((s) => (s.style.cursor = "default"));
					if (featuredU > -1 && units[featuredU].friend) {
						gclick = "order";
						command = units[featuredU];
						document.querySelectorAll(".sprite.nme").forEach((s) => (s.style.cursor = "crosshair"));
					}
					for (let u of units) {
						decide(u);
					}
					document.querySelectorAll(".sounds").forEach((s) => (s.volume = soundOn ? 1 : 0));
					break;

				case 1:
					changeSpeed(1);
					opera = 4;
					let sereg = units.filter((u) => u.friend && !u.dead);
					for (let s of sereg) {
						s.futureAct = {
							type: "mozog",
							victim: -1,
							x: s.x,
							y: 12,
						};
						s.obey = true;
					}
					clearInterval(timo);
					if (fegyObj.length > 0) {
						if (shootWeapon !== {}) cancelShoot();
						weaponCount = 0;
						updateFWeapons();
					}
					document.getElementById("harcter").style.transition = `filter linear ${5 / gspeed}s`;
					document.getElementById("harcter").classList.add("darkenFW");
					document.querySelectorAll(".sprite").forEach((s) => {
						s.style.transition = `left linear ${1 / gspeed}s, top linear ${1 / gspeed}s, filter linear ${5 / gspeed}s`;
						s.classList.add("darkenFW");
					});
					timo = setTimeout(() => {
						clearTimers(true);
						char.room = room.fail;
						newRoom();
					}, 5000 / gspeed);
					break;

				case 2:
					char.room = room.pass;
					newRoom();
					break;

				case 3:
					char.room = room.fail;
					newRoom();
					break;

				default:
					break;
			}
		}

		function changeSpeed(newsped) {
			function reallyChangeIt() {
				document.getElementById("sp-" + gspeed).classList.remove("curSpeed");
				document.getElementById("sp-" + newsped).classList.add("curSpeed");
				gspeed = Number(newsped);
			}
			clearTimers();
			switch (opera) {
				case 0:
					reallyChangeIt();
					timo = setInterval(() => {
						message(rnd(intro));
					}, 10000 / gspeed);
					document
						.querySelectorAll(".sprite")
						.forEach((s) =>
							s.style.setProperty(
								"transition",
								`left linear ${1 / gspeed}s, top linear ${1 / gspeed}s, filter linear ${1 / gspeed}s`
							)
						);
					break;

				case 1:
					reallyChangeIt();
					if (fegyObj.length > 0) {
						document.getElementById("overlay").style.setProperty("transition", `bottom ${1 / gspeed}s linear`);
						weapontimer();
					}
					document
						.querySelectorAll(".sprite")
						.forEach((s) =>
							s.style.setProperty(
								"transition",
								`left linear ${1 / gspeed}s, top linear ${1 / gspeed}s, filter linear ${1 / gspeed}s`
							)
						);
					document
						.querySelectorAll(".bullet")
						.forEach((s) =>
							s.style.setProperty(
								"transition",
								`left linear ${0.3 / gspeed}s, top linear ${0.3 / gspeed}s, opacity ${0.15 / gspeed}s`
							)
						);
					break;

				default:
					break;
			}
		}

		function weapontimer() {
			timo = setInterval(() => {
				weaponCount++;
				document
					.getElementById("overlay")
					.style.setProperty("--reveal", `${5 + weaponCount * (50 / weaponCountMax)}px`);
				if (weaponCount >= weaponCountMax) {
					weaponCount = weaponCountMax;
					updateFWeapons();
					document.getElementById("overlay").style.setProperty("--reveal", "55px");
					clearInterval(timo);
				}
			}, 1000 / gspeed);
		}

		function updateFeatured(u) {
			if (u.dead) return;
			if (featuredU > -1) document.getElementById("unit-" + featuredU).classList.remove("selectedUnit");
			document.querySelectorAll(".sprite").forEach((s) => s.classList.remove("targetUnit"));
			document.querySelectorAll(".terep").forEach((s) => s.classList.remove("targetTerep"));

			featuredU = u.id;
			if (featuredU > -1) document.getElementById("unit-" + featuredU).classList.add("selectedUnit");
			document.getElementById("ustat").className = "occur";
			if (featuredU > -1 && units[featuredU].futureAct.victim > -1)
				document.getElementById("unit-" + units[featuredU].futureAct.victim).classList.add("targetUnit");
			if (featuredU > -1 && units[featuredU].futureAct.x > -1)
				document
					.getElementById("teri-" + units[featuredU].futureAct.x + "-" + units[featuredU].futureAct.y)
					.classList.add("targetTerep");
			let a = u.futureAct;
			let a2 = u.presentAct;
			let csapat = u.friend ? "barát" : "ellenség";
			let csapatClass = u.friend ? "lime" : "darkred";
			let crs = u.cr === 1 ? "szétszórt" : u.cr === 2 ? "alkalmazkodó" : "konok";
			let cél = a.victim > -1 ? `: ${units[a.victim].name} (${a.victim})` : a.x > -1 ? `: ${a.x}, ${a.y}` : "";
			let cél2 = a2.victim > -1 ? `: ${units[a2.victim].name} (${a2.victim})` : a2.x > -1 ? `: ${a2.x}, ${a2.y}` : "";
			document.getElementById("ustat").innerHTML = `
				<table>
					<tr>
						<td class="blue">NÉV:</td>
						<td class="orange">${u.name} (${u.id})</td>
					</tr>
					<tr>
						<td class="blue">CSAPAT:</td>
						<td class=${csapatClass}>${csapat}</td>
					</tr>
					<tr>
						<td class="blue">LEÍRÁS:</td>
						<td>${u.desc}</td>
					</tr>
					<tr>
						<td class="blue">HP:</td>
						<td><span class="yellow">${u.hp}</span>/${u.ohp}</td>
					</tr>
					<tr>
						<td class="blue">TÁMADÁS:</td>
						<td>${u.att}/${u.oatt}</td>
					</tr>
					<tr>
						<td class="blue">VÉDELEM:</td>
						<td>${u.def}/${u.odef}</td>
					</tr>
					<tr>
						<td class="blue">HATÓTÁVOLSÁG:</td>
						<td>${u.range}</td>
					</tr>
					<tr>
						<td class="blue">CÉLTUDATOSSÁG:</td>
						<td>${crs}</td>
					</tr>
					<tr>
						<td class="blue">SPECIALITÁS:</td>
						<td>${u.spec}</td>
					</tr>
					<tr>
						<td class="blue">HOSSZÚ AKCIÓ:</td>
						<td>${u.futureAct.type}${cél}</td>
					</tr>
					<tr>
						<td class="blue">RÖVID AKCIÓ:</td>
						<td>${u.presentAct.type}${cél2}</td>
					</tr>
				</table>
			`;
		}

		drawFBoard();
		updateFWeapons();
		document.addEventListener("click", fwAction);
		timo = setInterval(() => {
			message(rnd(intro));
		}, 10000 / gspeed);
	}

	//Act triggers
	function pressBtn(e) {
		switch (room.type) {
			//normal btns
			case "normal":
				let n = Number(e.target.id.split("-")[1]);
				let btn = room.buttons[n];
				if (btn.modi) modi = btn.modi;
				let num = rooms.findIndex((r) => r.num === btn.new);
				if (num === -1) {
					message("Ez még nincs kész.");
					return;
				} else {
					char.room = btn.new;
				}
				if (!room.modi) modi = false;
				newRoom();
				break;

			case "dungeon":
				let n2 = Number(e.target.id.split("-")[1]);
				let btn2 = room.buttons[n2];
				let num2 = rooms.findIndex((r) => r.num === btn2.new);
				if (num2 === -1) {
					message("Ez még nincs kész.");
					return;
				} else {
					char.room = btn2.new;
				}
				newRoom();
				break;

			case "pursuit":
				pursuitAct();
				break;

			case "mine":
				mineAct();
				break;

			case "dig":
				digAct();
				break;

			case "fight":
				fightAct();
				break;

			case "finalwar":
				finalwarAct();
				break;

			default:
				break;
		}
	}
}

window.addEventListener("load", _load);
