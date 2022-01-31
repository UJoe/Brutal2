function _load() {
  let music = document.getElementById("music");
  let main = document.getElementById("main");
  let footer = document.getElementById("footer");
  let header = document.getElementById("header");
  window.curmusic = "basicmusic";
  window.musicOn = true;
  window.char = {};
  window.room = {};

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
  }

  function chooseChar(x) {
    let numera = Number(x.target.id.split("-")[1]);
    char = chars[numera];
    char.room = 0; //startr
    char.objs = [];
    music.play();
    newRoom();
  }

  function continueChar() {
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

    if (localStorage.getItem("charName").length > 0) {
      loadChar();
      let objList = "";
      if (char.objs.length > 0) {
        for (let o of char.objs) {
          objList += `
            <li>
              - ${o}
            </li>
          `;
        }
      } else {
        objlist = "-";
      }
      footer.innerHTML = `
      <br><br>
      <p>
        Jaj, vagy várjál... Ha jól látom, Te vagy ${char.name}!
      </p>
      <p>
        Igen, igen, akinek az Ereje ${char.ero}, az Ügyessége ${
        char.ugy
      }, az Esze ${char.esz}, a Lelke ${char.ugy} és a Hatalma ${char.hat}!
      </p>
      <p>
        Egy igazi legenda! Hol is hagytad abba? Ja igen, itt:<br>
        <br>
        <span class="order">${rooms[char.room].title}</span>
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
    const m = document.getElementById("message");
    m.innerHTML = text;
    m.classList.remove("disappear");
    m.classList.add("pear");
    setTimeout(function () {
      m.classList.remove("pear");
      m.classList.add("appear");
    }, 1);
    setTimeout(function () {
      m.classList.remove("appear");
      m.classList.add("disappear");
    }, text.length * 50 + 1000);
  }

  function saveGame() {
    saveChar();
    message("A játék sikeresen mentve.");
  }

  function loadGame() {
    loadChar();
    message("Oké, töltöm!");
    setTimeout(function () {
      newRoom();
    }, 3100);
  }

  function checkDeath() {
    if (char.ero < 1) {
      alert("Meghaltál!");
      body.html = "";
    }
    //Ennél azért jobb legyen és minden értékre! :)
  }

  function changeVal(id, val) {
    if (val === 0) return;
    if (val > 0) {
      klassz = "increase";
      val = "+" + val;
    } else {
      klassz = "decrease";
    }
    let v = document.getElementById("val_" + id);
    v.innerHTML = val;
    v.classList.add(klassz);
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
          Hatalom: <span class="stat" id="val_hat"">${char.hat} </span>
    </div>
    `;
    checkDeath();
  }

  //Új Helyszín
  function newRoom() {
    room = rooms[char.room];
    footer.innerHTML = "";
    main.innerHTML = "";
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
    if (room.type === "trial") {
      document.getElementById("saveBtn").disabled = true;
      let result = "";
      let crease = 0;
      switch (room.value) {
        case "Erő":
          if (Math.random() * 121 < char.ero) {
            char.room = room.pass;
            crease = char.ero < 120 ? 1 : 0;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          char.ero += crease;
          changeVal("ero", crease);
          break;

        case "Ügyesség":
          if (Math.random() * 121 < char.ugy) {
            char.room = room.pass;
            crease = char.ugy < 120 ? 1 : 0;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          char.ugy += crease;
          changeVal("ugy", crease);
          break;

        case "Ész":
          if (Math.random() * 121 < char.esz) {
            char.room = room.pass;
            crease = char.esz < 120 ? 1 : 0;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          char.esz += crease;
          changeVal("esz", crease);
          break;

        case "Lélek":
          if (Math.random() * 121 < char.lel) {
            char.room = room.pass;
            crease = char.lel < 120 ? 1 : 0;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          char.lel += crease;
          changeVal("lel", crease);
          break;

        case "Hatalom":
          if (Math.random() * 121 < char.hat) {
            char.room = room.pass;
            crease = char.hat < 120 ? 1 : 0;
            result = "siker!";
          } else {
            char.room = room.fail;
            crease = -1;
            result = "bukás!";
          }
          char.hat += crease;
          changeVal("hat", crease);
          break;

        default:
          break;
      }
      music.volume = music.volume / 4;
      message(room.value + " próba: <span id='result'>" + result + "</span>");
      document.getElementById("result").style.color =
        result === "siker!" ? "lime" : "darkorange";
      setTimeout(function () {
        music.volume = music.volume * 4;
        newRoom();
      }, 5000);
    } else {
      if (curmusic != room.music) {
        music.src = "./audio/" + room.music + ".mp3";
        if (musicOn) music.play();
        curmusic = room.music;
      }

      main.innerHTML = `
        <img id="roomPic" src="./img/rooms/${room.pic}">
        <h2>${room.title}</h2>
        <div id="subMain">
          <p id="roomDesc">${room.desc}</p>
          <div id="btns"></div>
        </div>
        
      `;
      let btnString = "";
      let btns = room.buttons;
      for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        btnString += `
          <button id="btn-${i}" class="btn">${btn.txt}</button>
        `;
      }
      document.getElementById("btns").innerHTML = btnString;

      document
        .querySelectorAll(".btn")
        .forEach((i) => i.addEventListener("click", pressBtn));

      if (room.change) {
        let txt = "Változás: ";
        for (let x = 0; x < room.change.length; x++) {
          let ch = room.change[x];
          let chby = ch.crease;
          if (ch.rnd) {
            let xtra = parseInt(1 + Math.random() * ch.rval);
            if (ch.crease < 0) xtra = -xtra;
            chby += xtra;
          }
          switch (ch.id) {
            case "Erő":
              if (char.ero + chby > 120) {
                chby = 120 - char.ero;
              } else {
                if (char.ero + chby < 0) {
                  chby = -char.ero;
                }
              }
              char.ero += chby;
              changeVal("ero", chby);
              break;

            case "Ügyesség":
              if (char.ugy + chby > 120) {
                chby = 120 - char.ugy;
              } else {
                if (char.ugy + chby < 0) {
                  chby = -char.ugy;
                }
              }
              char.ugy += chby;
              changeVal("ugy", chby);
              break;

            case "Ész":
              if (char.esz + chby > 120) {
                chby = 120 - char.esz;
              } else {
                if (char.esz + chby < 0) {
                  chby = -char.esz;
                }
              }
              char.esz += chby;
              changeVal("esz", chby);
              break;

            case "Lélek":
              if (char.lel + chby > 120) {
                chby = 120 - char.lel;
              } else {
                if (char.lel + chby < 0) {
                  chby = -char.lel;
                }
              }
              char.lel += chby;
              changeVal("lel", chby);
              break;

            case "Hatalom":
              if (char.hat + chby > 120) {
                chby = 120 - char.hat;
              } else {
                if (char.hat + chby < 0) {
                  chby = -char.hat;
                }
              }
              char.hat += chby;
              changeVal("hat", chby);
              break;

            default:
              break;
          }
          let chbys = chby > 0 ? "+" + chby : chby;
          txt += ch.id + " " + chbys;
          txt += x + 1 == room.change.length ? "." : ", ";
        }
        message(txt);
      }
    }
  }

  //ROOM OPERATION
  function pressBtn(e) {
    switch (room.type) {
      case "normal":
        let n = Number(e.target.id.split("-")[1]);
        char.room = room.buttons[n].new;
        newRoom();
        break;

      case "pursuit":
        let counter = char.ero;
        let pos = 5;
        document.getElementById("subMain").innerHTML = `
          <div id="countCont">
            Szufla: <span id="countNo">${counter}</span>
          </div>
          <div id="runnerCont">
            <img class="runners" id="charRunner" src="./img/chars/${char.pic}.jpg">
            <img class="runners" id="nmeRunner" src="./img/rooms/${room.pic}">
          </div>
          <div id="question"></div>
        `;
        let count = document.getElementById("countNo");
        let timo = setInterval(function () {
          counter--;
          let szufla = (counter / char.ero) * 90;
          count.innerHTML = counter;
          count.style.width = szufla + "%";
          if (counter < 6) count.style.backgroundColor = "red";
          if (counter < 1) {
            clearInterval(timo);
            char.room = room.fail;
            newRoom();
          }
        }, 1000);

        function checkEnd() {
          if (counter > 0 && pos < 85) newQuestion();
          else {
            if (counter < 1) {
              char.room = room.fail;
            } else {
              char.room = room.pass;
            }
            document.getElementById("question").innerHTML = "";
            header.innerHTML = "";
            clearInterval(timo);
            setTimeout(() => {
              newRoom();
            }, 1000);
          }
        }

        newQuestion();

        function newQuestion() {
          let a = parseInt(
            1 + (Math.random() * (100 + room.level * 5 - counter)) / 2
          );
          let b = parseInt(
            1 + (Math.random() * (100 + room.level * 3 - counter)) / 2
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
            let reaction = Math.round((new Date().getTime() - startTime) / 100);
            let answer = Number(event.target.value);
            let x = 0;
            if (answer == e) {
              x = Math.round((char.esz + char.ugy - reaction) / 3) - room.level;
              y = x > 0 ? "Jó válasz!" : "Jó, csak lassú.";
            } else {
              x -= Math.round((counter / 3 + reaction / 5) / 2) + room.level;
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
            setTimeout(function () {
              footer.classList.remove("appear");
              footer.classList.add("disappear");
            }, 750);
            checkEnd();
          });
        }
        break;

      default:
        break;
    }
  }
}

window.addEventListener("load", _load);
