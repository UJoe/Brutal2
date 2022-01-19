function _load() {
  let music = document.getElementById("music");
  let main = document.getElementById("main");
  let footer = document.getElementById("footer");
  let header = document.getElementById("header");
  window.curmusic = "basicmusic";
  window.musicOn = true;
  window.char = {};

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
    char.room = 0;
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
    }, text.length * 60 + 1000);
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

  //Új Helyszín
  function newRoom() {
    let room = rooms[char.room];
    if (curmusic != room.music) {
      music.src = "./audio/" + room.music + ".mp3";
      if (musicOn) music.play();
      curmusic = room.music;
    }
    footer.innerHTML = "";
    header.innerHTML = `
      <div id="topMenu">
        <button class="navBtn" id="saveBtn">SAVE</button>
        <button class="navBtn" id="loadBtn">LOAD</button>
        <img id='soundBtn' class="topBtns" src='./img/soundOn.png' alt="music">
      </div>
      <div id="message" class="disappear"></div> 
    `;
    document.getElementById("soundBtn").addEventListener("click", changeMusic);
    document.getElementById("saveBtn").addEventListener("click", saveGame);
    document.getElementById("loadBtn").addEventListener("click", loadGame);
    main.innerHTML = `
      <img id="roomPic" src="./img/rooms/${room.pic}">
      <h2>${room.title}</h2>
      <p>${room.desc}</p>
      <p id="btns"></p>
    `;
    let btnString = "";
    let btns = room.buttons;
    for (let i = 0; i < btns.length; i++) {
      let btn = btns[i];
      btnString += `
        <button id="btn-${i}" class="btn">${btn.txt}</button>
      `;
    }
    main.innerHTML += btnString;
    document.querySelectorAll(".btn").forEach((i) => {
      i.addEventListener("click", function (e) {
        let n = Number(e.target.id.split("-")[1]);
        char.room = btns[n].new;
        newRoom();
      });
    });
  }
}

/* function buttonPressed(e) {
  let n = Number(e.target.id.split("-")[1]);
  char.room = room.buttons[n].new;
  newRoom();
} */

window.addEventListener("load", _load);
