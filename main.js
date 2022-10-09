function _load() {
  window.music = document.getElementById("music");
  window.sound = document.getElementById("sound");
  music.volume = 1;
  sound.volume = 1;
  let main = document.getElementById("main");
  main.classList.remove("brighten");
  let footer = document.getElementById("footer");
  let header = document.getElementById("header");
  window.curmusic = "basicmusic";
  window.musicOn = true;
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
  var timo;
  var timo1;
  var timo2;
  var dying;

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
  }

  function chooseChar(x) {
    let numera = Number(x.target.id.split("-")[1]);
    char = { ...chars[numera] };
    char.room = 69; //startr
    char.objs = [];
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
      sBtn.src = "./img/soundOff.png";
      musicOn = false;
    } else {
      music.play();
      sBtn.src = "./img/soundOn.png";
      musicOn = true;
    }
  }

  function message(text) {
    document.querySelector("body").style.overflow = "hidden";
    const m = document.getElementById("message");
    m.innerHTML = text;
    m.classList.remove("disappear");
    m.classList.add("pear");
    setTimeout(() => {
      m.classList.remove("pear");
      m.classList.add("appear");
    }, 1);
    setTimeout(() => {
      m.classList.remove("appear");
      m.classList.add("disappear");
      document.querySelector("body").style.overflow = "auto";
    }, text.length * 50 + 2000);
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
      newRoom();
    }, 4100);
  }

  function checkDeath() {
    if (char.ero < 1) {
      clearInterval(dying);
      clearInterval(timo);
      clearTimeout(timo1);
      clearInterval(timo2);
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
      }, 1500);
      setTimeout(() => {
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
          <p>De ha mégsem vagy elégedett az eredménnyel, az F5 tartogat egy időutazó varázslatot számodra.</p>
        `;
        if (localStorage.getItem("charName").length > 0) {
          main.innerHTML +=
            "<p>Vagy a LOAD gombbal betöltheted a legutóbb elmentett állást.</p>";
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
    if (char.ero < 1) {
      clearInterval(dying);
      clearInterval(timo);
      clearTimeout(timo1);
      clearInterval(timo2);
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

  function loseObj(oo) {
    let i = char.objs.indexOf("W_" + oo);
    if (i > -1) {
      char.objs.splice(i, 1);
      message("Elvesztetted a következő tárgyat: " + oo);
    }
  }

  //Új Helyszín
  function newRoom() {
    if (char.room == 46) console.log("HOME STEP: ", steps);
    clearInterval(timo);
    clearTimeout(timo);
    clearTimeout(timo1);
    clearInterval(timo2);
    room = {};
    let num = rooms.findIndex((r) => r.num === char.room);
    if (num === -1) {
      message("Ez még nincs kész, ezért lefagyok.");
      return;
    }
    room = { ...rooms[num] };
    if (room.type === "Ytrial") {
      char.room = checkCond(room.value) ? room.pass : room.fail;
      num = rooms.findIndex((r) => r.num === char.room);
      if (num === -1) {
        message(
          "Nem felelsz meg a feltételnek a továbbjutáshoz, ezért lefagyok."
        );
        return;
      }
      room = {};
      room = { ...rooms[num] };
    }
    steps++;
    footer.innerHTML = "";
    main.innerHTML = "";

    //header
    header.innerHTML = `
      <div id="topMenu">
        <img class="thumb" src="./img/chars/${char.pic}.jpg">
        <div id="stats"></div>
        <button class="navBtn" id="saveBtn">SAVE</button>
        <button class="navBtn" id="loadBtn">LOAD</button>
        <img id='soundBtn' class="topBtns" src='./img/soundOn.png' alt="music">
      </div>
      <div id="message" class="disappear"></div> 
    `;
    printVals();
    document.getElementById("soundBtn").addEventListener("click", changeMusic);
    document.getElementById("saveBtn").addEventListener("click", saveGame);
    document.getElementById("loadBtn").addEventListener("click", loadGame);
    document.getElementById("loadBtn").disabled =
      localStorage.getItem("charName") == null;
    document.getElementById("saveBtn").disabled = false;

    //dungeon
    let nobject = false;
    if (room.type === "dungeon") {
      dungeon++;
      document.getElementById("saveBtn").disabled = true;
      console.log("Dungeon: ", dungeon);
      console.log("Step: ", steps);

      if (
        dungeon >= room.end * (0.5 + Math.random()) ||
        (room.num === 57 && steps > 50)
      ) {
        room.desc = room.exitDesc;
        room.buttons = [room.exitBtn];
        nobject = " ";
        dungeon = 0;
      } else {
        room.buttons = [
          {
            txt: room.contBtn,
            new: room.num,
          },
          room.exitBtn,
        ];
        let event = Math.random();
        if (event < 0.4) {
          nobject = "<p>Semmi említésre méltó nem történik.</p>";
        } else if (event < 0.6) {
          let x = Math.floor(Math.random() * room.find.length);
          if (
            x >= room.findmany ||
            (x < room.findmany && getObj(room.find[x]) == false)
          ) {
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
    } else {
      dungeon = 0;
    }

    //trial
    if (room.type === "trial") {
      document.getElementById("saveBtn").disabled = true;
      let result = "";
      let crease = 0;
      if (modi) room.value = modi;
      switch (room.value) {
        case "Erő":
          if (Math.random() * 101 < char.ero) {
            char.room = room.pass;
            crease = 1;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          changeVal("ero", crease);
          break;

        case "Ügyesség":
          if (Math.random() * 101 < char.ugy) {
            char.room = room.pass;
            crease = 1;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          changeVal("ugy", crease);
          break;

        case "Ész":
          if (Math.random() * 101 < char.esz) {
            char.room = room.pass;
            crease = 1;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          changeVal("esz", crease);
          break;

        case "Lélek":
          if (Math.random() * 101 < char.lel) {
            char.room = room.pass;
            crease = 1;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          changeVal("lel", crease);
          break;

        case "Hatalom":
          if (Math.random() * 101 < char.hat) {
            char.room = room.pass;
            crease = 1;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          changeVal("hat", crease);
          break;

        default:
          break;
      }
      music.volume = 0.25;
      message(room.value + " próba: <span id='result'>" + result + "</span>");
      document.getElementById("result").style.color =
        result === "siker!" ? "green" : "red";
      setTimeout(() => {
        modi = false;
        newRoom();
      }, 6000);
    } else if (room.type === "Xtrial") {
      document.getElementById("saveBtn").disabled = true;
      let result = "";
      let crease = 0;
      switch (room.value) {
        case "com":
          if (45 + Math.random() * 120 < char.esz + char.hat + char.sup / 3) {
            char.room = room.pass;
            crease = 1;
            music.volume = 0.75;
            result = "lenyűgöző volt!";
            if (room.modi) modi = room.modi;
          } else {
            char.room = room.fail;
            crease = -1;
            music.volume = 0.25;
            result = "inkább rontott a helyzeten.";
          }
          message("A beszéded <span id='result'>" + result + "</span>");
          document.getElementById("result").style.color =
            result === "lenyűgöző volt!" ? "green" : "red";
          changeVal("hat", crease);
          changeVal("esz", crease);
          changeVal("sup", crease);
          break;

        case "recruit":
          let kisugarzas =
            char.esz +
            char.hat +
            char.sup +
            char.lel +
            char.ero / 2 +
            char.ugy / 3;
          if (75 + Math.random() * 150 < kisugarzas) {
            char.room = room.pass;
            crease = 1 + Math.round(kisugarzas / 15 + Math.random() * 10);
            music.volume = 0.75;
            result = "nagy hatást keltett.";
          } else {
            char.room = room.fail;
            crease = -1 - Math.round(8 - kisugarzas / 61 + Math.random() * 3);
            music.volume = 0.25;
            result = "csalódást okozott.";
          }
          message("Személyed varázsa <span id='result'>" + result + "</span>");
          document.getElementById("result").style.color =
            result === "nagy hatást keltett." ? "green" : "red";
          changeVal("sup", crease);
          break;

        case "vanepuca":
          if (
            char.ero > 30 + Math.random() * 40 &&
            char.lel / 2 + char.hat > 40 + Math.random() * 60 &&
            char.esz + char.ugy > 20 + Math.random() * 20
          ) {
            char.room = room.pass;
            crease = 3;
            music.volume = 0.75;
            result = "sikerrel kiálltad!";
          } else {
            char.room = room.fail;
            crease = -3;
            music.volume = 0.25;
            result = "csúfosan elbuktad!";
          }
          message(
            "Az embert próbáló próbát <span id='result'>" + result + "</span>"
          );
          document.getElementById("result").style.color =
            result === "sikerrel kiálltad!" ? "green" : "red";
          changeVal("ero", crease * 4);
          changeVal("hat", crease * 3);
          changeVal("lel", crease * 2);
          changeVal("ugy", crease);
          changeVal("esz", crease);
          break;

        case "night":
          if (
            checkCond("E_Boldi elzárása") ||
            checkCond("X_Béna Boldizsár, !E_Boldi kivégzése") ||
            checkCond("D_választás")
          ) {
            char.room = room.pass;
            music.volume = 0.75;
            result = "Sikeresen elhárítottad ma a fő veszélyt.";
          } else {
            let x = char.lel + Math.random() * 100;
            if (x > 85 || checkCond("S_Bübüszimat")) {
              char.room = room.mid;
              music.volume = 0.5;
              result =
                "Nem sikerült elhárítanod ma a fő veszélyt, de szerencséd van.";
            } else {
              char.room = room.fail;
              music.volume = 0.25;
              result = "Nem sikerült a nap során elhárítanod a fő veszélyt.";
            }
          }
          message(result);
          document.getElementById("message").style.color =
            char.room == room.pass
              ? "green"
              : char.room == room.mid
              ? "blue"
              : "red";
          break;

        default:
          break;
      }
      setTimeout(() => {
        if (room.mid) {
          document.getElementById("message").style.color = "darkblue";
        }
        newRoom();
      }, 6000);
    } else {
      //other rooms
      if (curmusic != room.music) {
        if (room.type === "fight") {
          let fm = "fight" + (1 + Math.floor(8 * Math.random()));
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
        let r = Math.floor(1 + Math.random() * pp[1]);
        room.pic = pp[0] + r + ".jpg";
      }
      main.innerHTML = `
        <img id="roomPic" src="./img/rooms/${room.pic}">
        <h2>${room.title}</h2>
        <div id="subMain">
          <p id="roomDesc">${room.desc}</p>
          <p id="pickup"></p>
          <div id="sels"></div>
          <div id="btns"></div>
        </div>
        
      `;
      if (document.getElementById("fullName"))
        document.getElementById("fullName").innerHTML = char.name;
      if (document.querySelector(".name")) {
        document
          .querySelectorAll(".name")
          .forEach((n) => (n.innerHTML = char.name.split(",")[0]));
      }
      if (document.querySelector(".part")) {
        document.querySelectorAll(".part").forEach((p) => (p.innerHTML = part));
      }
      if (document.getElementById("extra") && modi) {
        document.getElementById("extra").innerHTML = modi;
        modi = false;
      }
      if (document.getElementById("add") && room.add) {
        if (checkCond(room.add.split("::")[0])) {
          document.getElementById("add").innerHTML = room.add.split("::")[1];
        }
      }
      if (document.getElementById("pp") && progi.length > 1) {
        let prgTxt = "";
        let prgArr = progi.split(" - ");
        for (let p of prgArr) {
          prgTxt += "<li>" + p + "</li>";
        }
        document.getElementById("pp").innerHTML = prgTxt;
      }

      if (document.getElementById("akna"))
        document.getElementById("akna").innerHTML = room.akna;
      if (document.getElementById("kincs"))
        document.getElementById("kincs").innerHTML = room.kincs;

      if (nobject) {
        document.getElementById("pickup").innerHTML = nobject;
      } else if (room.obj) {
        let fegyObj = [];
        for (let o of room.obj) {
          char.objs.push(o);
          if (o.charAt(0) === "W") {
            fegyObj.push(weapons.find((w) => w.name === o.split("_")[1]));
          }
        }
        if (fegyObj.length > 0) {
          let plural = fegyObj.length > 1 ? "tárgyakkal" : "tárggyal";
          let objString =
            "<p class='rightScore'>A következő " +
            plural +
            " gazdagodtál: </p><p>";
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

      if (room.select) {
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
        document.getElementById("sels").innerHTML = selString;
        document
          .getElementById("submit")
          .addEventListener("click", function (event) {
            event.preventDefault();
            let txt = "";
            let varc = 0;
            for (let l = 0; l < list; l++) {
              let o = document.getElementById("col" + l);
              let t = o.options[o.selectedIndex].text;
              txt += t + (l < list - 1 ? room.sep : "");
              if (room.cvar) varc += Number(o.value);
            }
            window[room.wvar] = txt;
            if (room.cvar) changeVal(room.cvar, varc);
            let num = rooms.findIndex((r) => r.num === sub.new);
            if (num === -1) {
              message("Ez még nincs kész.");
              return;
            } else {
              char.room = sub.new;
            }
            if (room.cvar) {
              if (room.wc) prg = varc;
              message("Választásod pontértéke: " + varc);
              document.getElementById("submit").disabled = true;
              setTimeout(() => {
                newRoom();
              }, 4500);
            } else newRoom();
          });
      }

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

        document
          .querySelectorAll(".btn")
          .forEach((i) => i.addEventListener("click", pressBtn));
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
        switch (room.Xchange) {
          case "sleep":
            let relax = Math.round(30 - steps);
            relax = relax < 1 ? 1 : relax;
            changeVal("ero", relax * 2);
            message("Sikerült " + relax + " órát aludnod.");
            break;

          default:
            break;
        }
      }
      if (loaded) loaded = false;
      if (room.type === "death") {
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
    }
  }

  //ROOM OPERATION
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

      //pursuit
      case "pursuit":
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
          <div id="runnerCont">
            <img class="runners" id="charRunner" src="./img/chars/${char.pic}.jpg">
            <img class="runners" id="nmeRunner" src="./img/rooms/${room.goalpic}">
          </div>
          <div id="question"></div>
        `;
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
            document.querySelector("input").disabled = true;
            newRoom();
          }
        }, 1000);

        function checkEnd() {
          if (counter > 0 && pos < 85) newQuestion();
          else {
            if (counter < 1) {
              char.room = room.fail;
              document.querySelector("input").disabled = true;
              modi = false;
            } else {
              char.room = room.pass;
              changeVal("esz", room.level);
              if (room.modi) {
                modi = room.modi;
              } else {
                modi = false;
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
          let a = parseInt(
            1 + (Math.random() * (100 + room.level * modi * 6 - counter)) / 2
          );
          let b = parseInt(
            1 + (Math.random() * (100 + room.level * modi * 3 - counter)) / 2
          );
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
            let reaction = Math.round((new Date().getTime() - startTime) / 140);
            let answer = Number(event.target.value);
            let x = 0;
            if (answer == e) {
              x = Math.round(
                char.esz / 2 + char.ugy / 2 - reaction - room.level * modi
              );
              y = x > 0 ? "Jó válasz!" : "Jó, csak lassú.";
            } else {
              x -= Math.round(
                (counter / 3 + reaction / 5) / 2 + room.level * modi
              );
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
        break;

      //aknakereső
      case "mine":
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

        function updateMScore() {
          document.getElementById("scoresM").innerHTML = `
            <span class="score">Energia: ${digs}</span> 
            <span class="score">Kincs: ${kincsHit}/${room.kincs}</span> 
            <span class="score">Akna: ${aknaHit}/${room.akna}</span>
          `;
          //Ezeket még dolgozd ki!!!
          if (kincsHit == room.kincs) {
            message("Minden kincset megtaláltál!");
          } else if (digs < 1) {
            message("Kidöglöttél!");
          }
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
                    title="Ássál csak, ${name}!"
                />
              </td>
            `;
          }
          gardenStr += "</tr>";
        }
        document.getElementById("garden").innerHTML = gardenStr;
        updateMScore();
        document
          .querySelectorAll(".minefield")
          .forEach((i) => i.addEventListener("click", pressMine));

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
              document.getElementById(
                "mfc-" + mineX + "-" + mineY
              ).innerHTML = `
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
              updateMScore();
              document.getElementById("mf-" + mineX + "-" + mineY).src =
                "./img/rooms/" + room.treasure;
              document.getElementById("mf-" + mineX + "-" + mineY).title =
                "Drágaságom!";
              break;

            case 2:
              sound.src = "./audio/bomb.mp3";
              sound.play();
              aknaHit++;
              updateMScore();
              document.getElementById("mf-" + mineX + "-" + mineY).src =
                "./img/rooms/akna.png";
              document.getElementById("mf-" + mineX + "-" + mineY).title =
                "Ez jó nagyot szólt!";
              let loser = Math.floor(
                21 + Math.random() * (20 - char.ugy / 5) - char.ugy / 5
              );
              changeVal("ero", -loser);
              break;

            default:
              break;
          }
          digs--;
          updateMScore();
        }
        break;

      //Fight
      case "fight":
        music.volume = 0.7;
        let changeMax = 0;
        let gyilok = false;
        let gyilokUsed = -1;
        let fegyObj = getWeapons();
        let att = Math.round(
          char.ugy / 1.1 + char.esz / 2.8 + char.ero / 1.5 - char.lel / 1.2
        );
        att = att < 0 ? 0 : att > 150 ? 150 : att;
        let def = Math.round(
          char.ugy / 4 +
            char.hat / 7 +
            char.ero / 3 +
            char.esz / 6 -
            char.lel / 5
        );
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
              Math.random() * 500
          );
        speed = speed < 1000 ? 1000 : speed > 5000 ? 5000 : speed;
        if (room.dungeon) {
          var nmeAtt = Math.round(
            steps / 5 + dungeon * 5 + Math.random() * 25 * room.level
          );
          nmeAtt = nmeAtt > 150 ? 150 : nmeAtt;
          var nmeDef = Math.round(
            steps / 10 + dungeon * 2.5 + (Math.random() * 25 * room.level) / 2
          );
          nmeDef = nmeDef > 75 ? 75 : nmeDef;
          var nmeSpeed =
            5000 -
            Math.round(
              room.level * 1000 + steps + dungeon * 50 - Math.random() * 500
            );
          nmeSpeed = nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
          room.speed = Math.round((5000 - nmeSpeed) / 500);
          room.hp = dungeon * 7 * room.level + Math.round(Math.random() * 30);
          room.hp = room.hp > 100 ? 100 : room.hp;
        } else {
          var nmeAtt = room.att;
          var nmeDef = room.def;
          var nmeSpeed =
            5000 -
            Math.round(room.speed * 500 + steps * 5 - Math.random() * 500);
          nmeSpeed = nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
        }

        let start = true;
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
            let soundEnd = sound.src.substr(-7);
            if (soundEnd !== "die.mp3") {
              sound.src = "./audio/die.mp3";
              sound.play();
            }
            nmeF.classList.add("darken");
            document.getElementById("fightBtn").disabled = true;
            document.getElementById("exitBtn").disabled = true;
            if (room.dungeon && firstchange) {
              changeVal(
                "ugy",
                Math.floor(nmeAtt / 30 + nmeDef / 15 + Math.random() * 3)
              );
              changeVal(
                "ero",
                Math.round((Math.random() * (dungeon + room.level)) / 3)
              );
              changeVal("lel", -1);
            }
            if (firstchange) {
              firstchange = false;
              changeVal("ugy", 1);
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
            document.getElementById("weapons").innerHTML =
              "<div id='weapons'>Fegyverek:</div>";
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
                break;
              case "ellenség sebesség":
                let nmeSP =
                  szorzo === 1
                    ? room.speed + Number(eff.ch) * szorzo
                    : room.speed;
                nmeSpeed =
                  5000 -
                  Math.round(nmeSP * 500 + steps * 5 - Math.random() * 500);
                nmeSpeed =
                  nmeSpeed < 1000 ? 1000 : nmeSpeed > 5000 ? 5000 : nmeSpeed;
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

        function moan(mivan) {
          if (mivan > -1) {
            sound.src = "./audio/" + fegyObj[mivan].sound + ".mp3";
          } else {
            let x = Math.floor(1 + Math.random() * 20);
            sound.src = "./audio/hit" + x + ".mp3";
          }
          sound.play();
        }

        function nmeAttack() {
          moan(-1);
          nmeF.style.left = 80 + "px";
          var seb = Math.round(
            (nmeAtt - def) / 3 + Math.random() * 3 - Math.random() * 3
          );
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
          var seb = Math.round(
            (att - nmeDef) / 3 + Math.random() * 3 - Math.random() * 3
          );
          if (seb < 1) seb = 1;
          nmeHit = " -" + seb;
          if (seb > 10 + Math.random() * 10) {
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
          char.room = room.fail;
          if (room.modi) modi = room.modi;
          clearTimeout(timo1);
          clearInterval(timo2);
          attBtn.disabled = true;
          xitBtn.disabled = true;
          end = true;
          if (char.ero > 0) {
            setTimeout(() => {
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

      default:
        break;
    }
  }
}

window.addEventListener("load", _load);
