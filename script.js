const s=document.getElementById("sidebar"),m=document.getElementById("msg"),u=JSON.parse(localStorage.getItem("users")||"{}");
let register=false;

openMenu=()=>s.style.left="0";
closeMenu=()=>s.style.left="-260px";
show=id=>(document.querySelectorAll(".section").forEach(e=>e.classList.remove("active")),document.getElementById(id).classList.add("active"),closeMenu());
openPlace=(t,txt)=>{placeTitle.innerText=t;placeText.innerText=txt;document.getElementById("backBtn").onclick=()=>show('luoghi');show("dettaglio")};
updateAddPlaceButton=()=>{addPlaceBtn.disabled=!user.innerText;addPlaceBtn.style.cursor=user.innerText?"pointer":"not-allowed"};
toggleMode=()=>{
  register=!register;
  title.innerText=register?"Registrati":"Login";
  document.getElementById("switch").innerText=register?"Hai già un account? Login":"Non hai un account? Registrati";
  m.innerText="";
};
submitLogin=()=>{let n=nome.value,p=password.value;if(register){if(u[n])return m.innerText="Utente esiste";u[n]=p;localStorage.setItem("users",JSON.stringify(u));m.style.color="green";m.innerText="Registrato!"}else if(u[n]&&u[n]===p){user.innerText=n;updateAddPlaceButton();show("home")}else{m.style.color="red";m.innerText="Errore login"}};
updateAddPlaceButton();

// Dati luoghi per fascia oraria
const fasciaData = {
  mattina: {
    titolo: "🌅 Cosa fare di mattina",
    luoghi: [
      { nome:"Skatepark", img:"https://i.pinimg.com/736x/62/79/eb/6279ebbc02020e79898063066d3e2c1f.jpg", desc:"Sport urbano.", info:"Lo Skatepark delle Reggiane è uno dei migliori d'Italia e si trova a due passi dal centro città. Offre 1.700 mq di strutture per skateboard, BMX e pattinaggio, oltre a un playground con campi da basket. È gratuito e aperto a tutti.\n\nSi trova in Piazzale Europa ed è aperto tutti i giorni con accesso libero." },
      { nome:"Cerwood", img:"https://i.pinimg.com/1200x/30/1c/2a/301c2aa27b97f310b5947c7bb09b6ec3.jpg", desc:"Parco avventura.", info:"Cerwood è il parco avventura più grande d'Italia, con percorsi acrobatici tra gli alberi adatti a tutti i livelli di difficoltà.\n\nSituato in Via Massenzatico 92, Reggio Emilia. Aperto il weekend e nei giorni festivi; in estate anche nei giorni feriali.\nÈ consigliata la prenotazione." },
      { nome:"Parco Crostolo", img:"https://i.pinimg.com/736x/49/71/a5/4971a556a7a3a347357427a8282fb16c.jpg", desc:"Natura e relax.", info:"Il Parco Crostolo è il polmone verde di Reggio Emilia: un lungo corridoio naturale che attraversa la città lungo il torrente Crostolo. Ideale per bici, jogging, frisbee o stare all'aperto.\n\nIngresso principale da Viale Timavo." },
      { nome:"Petali", img:"https://i.pinimg.com/736x/6f/af/65/6faf65df0ff2d88a567be43054167787.jpg", desc:"Shopping e ritrovo.", info:"I Petali è un centro commerciale con 60 negozi, cinema multisala, palestra Virgin e Wi-Fi gratuito.\n\nSi trova in Piazzale Atleti Azzurri d'Italia, 5.\nAperto tutti i giorni dalle 10:00 alle 21:00." }
    ]
  },
  pomeriggio: {
    titolo: "☀️ Cosa fare di pomeriggio",
    luoghi: [
      { nome:"Petali", img:"https://i.pinimg.com/736x/6f/af/65/6faf65df0ff2d88a567be43054167787.jpg", desc:"Shopping e ritrovo.", info:"I Petali è un centro commerciale con 60 negozi, cinema multisala, palestra Virgin e Wi-Fi gratuito.\n\nSi trova in Piazzale Atleti Azzurri d'Italia, 5.\nAperto tutti i giorni dalle 10:00 alle 21:00." },
      { nome:"Cerwood", img:"https://i.pinimg.com/1200x/30/1c/2a/301c2aa27b97f310b5947c7bb09b6ec3.jpg", desc:"Parco avventura.", info:"Cerwood è il parco avventura più grande d'Italia, con percorsi acrobatici tra gli alberi.\n\nVia Massenzatico 92, Reggio Emilia. Aperto il weekend e nei festivi; in estate anche feriali. Consigliata la prenotazione." },
      { nome:"Gite in natura", img:"https://i.pinimg.com/736x/8b/2a/69/8b2a69e946f2e79409c86c564a45c8fb.jpg", desc:"Escursioni nei dintorni.", info:"Ci sono molte destinazioni interessanti nei dintorni di Reggio Emilia per una gita pomeridiana: borghi dell'Appennino, castelli matildici, laghi collinari e percorsi naturalistici." },
      { nome:"Escape Room", img:"https://i.pinimg.com/474x/64/64/b8/6464b817bd1b7293413621fddf86166e.jpg", desc:"Esperienze immersive.", info:"A Reggio Emilia ci sono più escape room dove puoi sfidare i tuoi amici a risolvere enigmi in 60 minuti. Prezzi: 20–25€ a persona.\n\nArbitroom (Via Monti Urali 38/6), Escape Room Club (Via Eleonora Duse 3), The Room Escape Game (centro città)." }
    ]
  },
  sera: {
    titolo: "🌙 Cosa fare di sera",
    luoghi: [
      { nome:"Discoteche in città", img:"https://i.pinimg.com/1200x/00/5f/7b/005f7b70d57703141f081f07dd004945.jpg", desc:"Party e divertimento.", info:"Archive Club (Via Garonna 9), Number ONE Club (Via Berta 8), Italghisa (Via dei Gonzaga 41) e Q Club (Via Piave 1/B): le migliori discoteche di Reggio Emilia per ballare e divertirsi." },
      { nome:"Discoteche fuori città", img:"https://i.pinimg.com/736x/44/2c/0c/442c0c52e8373e7d6066dc3c48f015cf.jpg", desc:"Party fuori porta.", info:"Fuori Orario a Taneto di Gattatico (15 min), Corallo Disco a Scandiano (10 min), Okay Disco a Villa Minozzo (45 min). Tre opzioni per serate fuori dall'ordinario." },
      { nome:"Locali serali con giochi", img:"https://i.pinimg.com/736x/a3/49/30/a34930b3bc66199f6aaea9f4bbba79fb.jpg", desc:"Non solo cocktail.", info:"Club Play Off (Via B. Gigli 7), Pool Club (Via Papa Giovanni XXIII), Doppio Malto (Via Gramsci 45), Bowling 2000 (Via Vistola 13). Biliardo, bowling, ping pong, karaoke e molto altro." },
      { nome:"Bar di tendenza", img:"https://i.pinimg.com/736x/8b/2a/69/8b2a69e946f2e79409c86c564a45c8fb.jpg", desc:"Atmosfera e carattere.", info:"The Riff (Piazza San Prospero 4) – soul e funky fondato da Benny Benassi e Fabio Volo.\nRebell – cocktail bar con libreria Einaudi.\nCasa Frida – vini naturali ed eventi informali." }
    ]
  }
};

showFascia = fascia => {
  const d = fasciaData[fascia];
  document.getElementById("fasciaTitle").innerText = d.titolo;
  document.getElementById("fasciaGrid").innerHTML = d.luoghi.map(l => {
    const safeName = l.nome.replace(/'/g,"\\'");
    return `<div class="card" onclick="openPlaceFromFascia('${safeName}')">
      <img src="${l.img}">
      <div class="card-content"><h3>${l.nome}</h3><p>${l.desc}</p></div>
    </div>`;
  }).join("");
  show("fascia");
};

openPlaceFromFascia = nome => {
  const card = [...document.querySelectorAll("#luoghiGrid .card")].find(c =>
    c.querySelector("h3")?.innerText === nome
  );
  if (!card) return;
  card.click();
  document.getElementById("backBtn").onclick = () => show("fascia");
};


// POPUP
function openPopup(){
  if(!user.innerText) return;
  document.getElementById("popup").style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

  // AGGIUNTA CARD
  function addCard(){
  let titolo = document.getElementById("newTitle").value;
  let desc = document.getElementById("newDesc").value;
  let img = document.getElementById("newImg").value;
  let info = document.getElementById("newInfo").value;

  if(!titolo || !desc || !img || !info){
      alert("Compila tutti i campi!");
      return;
  }

  let safeInfo = info.replace(/'/g,"\\'").replace(/\n/g,"\\n");
  let safeTitle = titolo.replace(/'/g,"\\'");

  let card = `
      <div class="card" onclick="openPlace('${safeTitle}','${safeInfo}')">
      <img src="${img}">
      <div class="card-content">
          <h3>${titolo}</h3>
          <p>${desc}</p>
      </div>
      </div>
  `;

  document.getElementById("luoghiGrid").innerHTML += card;

  closePopup();

  // reset campi
  document.getElementById("newTitle").value = "";
  document.getElementById("newDesc").value = "";
  document.getElementById("newImg").value = "";
  document.getElementById("newInfo").value = "";
  }