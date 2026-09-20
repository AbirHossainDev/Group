/* =========================================
   দুইজনের শহর
   Main JavaScript
========================================= */


/* ================= STATE ================= */

const state = {

  player1: "",

  player2: "",

  location: "কেন্দ্রীয় চত্বর",

  memories: 0,

  photos: [],

  energy1: 100,

  energy2: 100,

  dayMode: false

};


/* ================= SELECTOR ================= */

const $ = (selector) => {

  return document.querySelector(selector);

};


/* ================= PLACES ================= */

const places = [

  {
    icon: "🌆",
    name: "কেন্দ্রীয় চত্বর",
    description:
      "শহরের সবচেয়ে ব্যস্ত জায়গা।"
  },

  {
    icon: "🌳",
    name: "সবুজ পার্ক",
    description:
      "গাছপালা আর শান্ত হাঁটার রাস্তা।"
  },

  {
    icon: "🌉",
    name: "নদীর সেতু",
    description:
      "শহরের আলো দেখার দারুণ জায়গা।"
  },

  {
    icon: "🎡",
    name: "আনন্দ মেলা",
    description:
      "গেম, খাবার আর মজার আয়োজন।"
  },

  {
    icon: "☕",
    name: "কফি কর্নার",
    description:
      "গল্প করার সুন্দর একটা জায়গা।"
  },

  {
    icon: "📚",
    name: "পুরোনো লাইব্রেরি",
    description:
      "অদ্ভুত সব বইয়ের সন্ধান।"
  },

  {
    icon: "🏖️",
    name: "শহরের লেক",
    description:
      "পানির ধারে বসে বিশ্রাম।"
  },

  {
    icon: "🎨",
    name: "আর্ট স্ট্রিট",
    description:
      "রঙিন দেয়াল আর ছবি তোলার জায়গা।"
  }

];


/* ================= QUESTIONS ================= */

const questions = [

  "আজ যদি যেকোনো জায়গায় যেতে পারতে, কোথায় যেতে?",

  "শহরের সবচেয়ে মজার জায়গা কোনটা মনে হচ্ছে?",

  "আজকের দিনের সবচেয়ে ভালো মুহূর্ত কোনটা?",

  "একটা নতুন জিনিস শেখার সুযোগ পেলে কী শিখতে?",

  "একসাথে একটা মজার প্রজেক্ট করলে সেটা কী হবে?",

  "আজকের অভিযানকে এক শব্দে কী বলবে?",

  "এই শহরে নিজের একটা দোকান খুললে কী বিক্রি করবে?",

  "একদিনের জন্য শহরের মেয়র হলে প্রথমে কী করবে?"

];


/* ================= EVENTS ================= */

const events = {

  hand: {

    icon: "🤝",

    title: "হাত মেলানোর সময়!",

    text:
      "একটা সুন্দর বন্ধুত্বপূর্ণ মুহূর্ত তৈরি হলো।"

  },

  sit: {

    icon: "🪑",

    title: "একসাথে বসার সময়",

    text:
      "দুজন কিছুক্ষণ বসে শহরের দৃশ্য দেখলে।"

  },

  food: {

    icon: "🍜",

    title: "খাবারের বিরতি",

    text:
      "শহরের নতুন একটা খাবার ট্রাই করার সিদ্ধান্ত হলো।"

  },

  walk: {

    icon: "🚶",

    title: "হাঁটতে বের হলে",

    text:
      "নতুন রাস্তা ধরে হাঁটতে হাঁটতে সুন্দর একটা জায়গা পাওয়া গেল।"

  },

  gift: {

    icon: "🎁",

    title: "সারপ্রাইজ ইভেন্ট!",

    text:
      "শহরের কোথাও একটা ছোট্ট সারপ্রাইজ অপেক্ষা করছে।"

  }

};


/* ================= IMAGES ================= */

const sceneImages = [

  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"

];


const galleryImages = [

  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",

  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",

  "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=700&q=80",

  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80"

];


/* ================= TOAST ================= */

function showToast(message) {

  const toast = $("#toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2200);

}


/* ================= UPDATE STATUS ================= */

function updateStatus() {

  $("#nameA").textContent =
    state.player1;

  $("#nameB").textContent =
    state.player2;

  $("#energyA").textContent =
    state.energy1 + "%";

  $("#energyB").textContent =
    state.energy2 + "%";

  $("#memoryCount").textContent =
    state.memories;

  $("#photoCount").textContent =
    state.photos.length;

  $("#statusText").textContent =

    `${state.player1} ও ${state.player2}
     এখন ${state.location}-এ`;

}


/* ================= RENDER PLACES ================= */

function renderPlaces() {

  const placesContainer =
    $("#places");

  placesContainer.innerHTML = "";

  places.forEach((place, index) => {

    const button =
      document.createElement("button");

    button.className =
      "place-card";

    button.innerHTML = `

      <div class="emoji">
        ${place.icon}
      </div>

      <b>
        ${place.name}
      </b>

      <p class="text-sm text-slate-400">
        ${place.description}
      </p>

    `;

    button.onclick = () => {

      goToPlace(index);

    };

    placesContainer.appendChild(button);

  });

}


/* ================= GO PLACE ================= */

function goToPlace(index) {

  const place =
    places[index];

  state.location =
    place.name;

  $("#locationName").textContent =

    `${place.icon} ${place.name}`;


  $("#heroTitle").textContent =

    `${place.name}-এ তোমাদের অভিযান`;


  $("#heroText").textContent =

    place.description +
    " চারপাশে ঘুরে দেখো, ছবি তোলো এবং নতুন ইভেন্ট খুঁজে বের করো।";


  $("#scene").style.backgroundImage =

    `url("${sceneImages[index % sceneImages.length]}")`;


  state.memories++;

  updateStatus();


  showEvent(

    "📍",

    `${place.name} আনলক হয়েছে!`,

    place.description

  );


  showToast(
    `${place.name}-এ চলে এসেছো 🚶`
  );

}


/* ================= EVENT ================= */

function showEvent(
  icon,
  title,
  text
) {

  $("#eventBox").innerHTML = `

    <span>
      ${icon}
    </span>

    <div>

      <b>
        ${title}
      </b>

      <p>
        ${text}
      </p>

    </div>

  `;

}


/* ================= ACTION ================= */

function performAction(type) {


  /* ---------- PHOTO ---------- */

  if (type === "photo") {

    takePhoto();

    return;

  }


  /* ---------- QUESTION ---------- */

  if (type === "question") {

    askQuestion();

    return;

  }


  /* ---------- GAME ---------- */

  if (type === "game") {

    miniGame();

    return;

  }


  const event =
    events[type] || events.gift;


  state.memories++;


  if (Math.random() < 0.4) {

    state.energy1 =
      Math.max(
        0,
        state.energy1 - 5
      );

  }


  if (Math.random() < 0.4) {

    state.energy2 =
      Math.max(
        0,
        state.energy2 - 5
      );

  }


  showEvent(

    event.icon,

    event.title,

    event.text

  );


  updateStatus();


  showToast(
    event.title + " ✨"
  );

}


/* ================= PHOTO ================= */

function takePhoto() {

  const image =

    galleryImages[
      state.photos.length %
      galleryImages.length
    ];


  state.photos.push({

    image,

    location:
      state.location

  });


  const photo =
    document.createElement("div");

  photo.className =
    "photo";


  photo.innerHTML = `

    <img
      src="${image}"
      alt="স্মৃতির ছবি"
    >

    <span>
      📍 ${state.location}
    </span>

  `;


  $("#gallery")
    .prepend(photo);


  state.memories++;


  showEvent(

    "📸",

    "ছবি তোলা হয়েছে",

    `${state.location}-এর স্মৃতি অ্যালবামে রাখা হলো।`

  );


  updateStatus();


  showToast(
    "ছবিটা অ্যালবামে যোগ হয়েছে 📸"
  );

}


/* ================= QUESTION ================= */

function askQuestion() {

  const question =

    questions[
      Math.floor(
        Math.random() *
        questions.length
      )
    ];


  $("#modalContent").innerHTML = `

    <div class="text-4xl mb-3">
      ❓
    </div>

    <h3 class="text-2xl font-black">
      ${state.player1}-এর প্রশ্ন
    </h3>

    <p class="text-lg text-slate-300 mt-3">
      ${question}
    </p>

    <div class="mt-4 text-sm text-slate-400">

      ${state.player2}
      উত্তর দেবে 😄

    </div>

  `;


  $("#modal")
    .classList
    .remove("hidden");

}


/* ================= MINI GAME ================= */

function miniGame() {

  $("#modalContent").innerHTML = `

    <div class="text-4xl mb-3">
      🎮
    </div>

    <h3 class="text-2xl font-black">
      দ্রুত মিনি গেম
    </h3>

    <p class="mt-3">
      5 + 7 × 2 = ?
    </p>

    <div
      class="grid grid-cols-3 gap-2 mt-4"
    >

      <button
        class="main-btn answer"
        data-answer="19"
      >
        19
      </button>

      <button
        class="main-btn answer"
        data-answer="24"
      >
        24
      </button>

      <button
        class="main-btn answer"
        data-answer="17"
      >
        17
      </button>

    </div>

  `;


  $("#modal")
    .classList
    .remove("hidden");


  document
    .querySelectorAll(".answer")
    .forEach(button => {

      button.onclick = () => {

        const answer =
          button.dataset.answer;

        if (answer === "19") {

          state.memories++;

          showToast(
            "সঠিক উত্তর! 🎉"
          );

          updateStatus();

        } else {

          showToast(
            "আবার চেষ্টা করো 😄"
          );

        }

      };

    });

}


/* ================= RANDOM ================= */

function randomAdventure() {

  const actions = [

    "hand",

    "photo",

    "sit",

    "question",

    "food",

    "game",

    "walk",

    "gift"

  ];


  const randomAction =

    actions[
      Math.floor(
        Math.random() *
        actions.length
      )
    ];


  performAction(
    randomAction
  );


  setTimeout(() => {

    const randomPlace =

      Math.floor(
        Math.random() *
        places.length
      );


    goToPlace(
      randomPlace
    );

  }, 600);

}


/* ================= CLOCK ================= */

function updateClock() {

  const now =
    new Date();


  const time =

    now.toLocaleTimeString(
      "bn-BD",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );


  $("#clock").textContent =
    "🕘 " + time;

}


setInterval(
  updateClock,
  1000
);

updateClock();


/* ================= START ================= */

$("#startBtn").onclick = () => {

  const name1 =
    $("#player1")
      .value
      .trim();

  const name2 =
    $("#player2")
      .value
      .trim();


  state.player1 =
    name1 || "প্রথমজন";

  state.player2 =
    name2 || "দ্বিতীয়জন";


  $("#loginScreen")
    .style
    .display = "none";


  updateStatus();

  renderPlaces();


  showToast(
    `স্বাগতম ${state.player1} ও ${state.player2}! 🌟`
  );

};


/* ================= DAY NIGHT ================= */

$("#themeBtn").onclick = () => {

  state.dayMode =
    !state.dayMode;


  document.body
    .classList
    .toggle(
      "day",
      state.dayMode
    );


  $("#themeBtn").textContent =
    state.dayMode
      ? "☀️"
      : "🌙";


  showToast(

    state.dayMode
      ? "দিনের মোড চালু ☀️"
      : "রাতের মোড চালু 🌙"

  );

};


/* ================= RANDOM BUTTON ================= */

$("#randomBtn").onclick =
  randomAdventure;


$("#surpriseBtn").onclick =
  randomAdventure;


/* ================= ACTION BUTTONS ================= */

document
  .querySelectorAll(
    "[data-action]"
  )
  .forEach(button => {

    button.onclick = () => {

      performAction(
        button.dataset.action
      );

    };

  });


/* ================= MODAL ================= */

$("#closeModal").onclick = () => {

  $("#modal")
    .classList
    .add("hidden");

};


$("#modal").onclick = (event) => {

  if (
    event.target.id ===
    "modal"
  ) {

    $("#modal")
      .classList
      .add("hidden");

  }

};


/* ================= RESET ================= */

$("#resetBtn").onclick = () => {

  const confirmReset =
    confirm(
      "সব অগ্রগতি নতুন করে শুরু করবে?"
    );


  if (confirmReset) {

    location.reload();

  }

};