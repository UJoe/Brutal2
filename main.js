function _load() {
  let music = document.getElementById("music");
  let main = document.getElementById("main");
  let extra = document.getElementById("extra");
  window.curmusic = "basicmusic";
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
    saveChar();
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
      extra.innerHTML = `
      <br><br>
      <p>
        Vagy folytatnád onnan, ahol abbahagytad?
      </p>
      <table>
        <tr>
          <td>
          <img
            class="charPic"
            id="img-x"
            src="./img/chars/${char.pic}.jpg"
            alt="${char.name}"
          />
          </td>
        </tr>
        <tr>
          <td class="charName">
          ${char.name}
          </td>
        </tr>
        <tr>
          <td>
          Erő: ${char.ero}
          </td>
        </tr>
        <tr>
          <td>
          Ügyesség: ${char.ugy}
          </td>
        </tr>
        <tr>
          <td>
          Ész: ${char.esz}
          </td>
        </tr>
        <tr>
          <td>
          Lélek: ${char.lel}
          </td>
        </tr>
        <tr>
          <td>
          Hatalom: ${char.hat}
          </td>
        </tr>
        <tr>
          <td>
          Helyszín: ${rooms[char.room].title}
          </td>
        </tr>
        <tr>
          <td>
          Tárgyak:<br>
          <ul>
          ${objList}
          </ul>
          </td>
        </tr>
        
      </table>
      `;
      document.getElementById("img-x").addEventListener("click", continueChar);
    } else extra.innerHTML = "";
  }

  //Új Helyszín
  function newRoom() {
    let room = rooms[char.room];
    if (curmusic != room.music) music.src = "./audio/" + room.music + ".mp3";
    extra.innerHTML = "";
    main.innerHTML = "FASZA!";
  }
}

window.addEventListener("load", _load);
