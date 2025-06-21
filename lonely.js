const shlokas = [
  {
    sanskrit: "I am seated in everyone’s heart, and from Me come remembrance, knowledge, and forgetfulness. — Bhagavad-gita 15.15",
    translation: "Krishna reminds us that we are never truly alone — He resides in our hearts at every moment, guiding us from within, even in our silence and solitude."
  },
  {
    sanskrit: "To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me. — Bhagavad-gita 10.10",
    translation: "Loving connection with the Divine brings clarity and direction, even when we feel isolated. Krishna promises to personally guide the sincere soul."
  },
  {
    sanskrit: "Even if you are considered the most sinful of all sinners, when you are situated in the boat of transcendental knowledge, you will be carried over the ocean of miseries. — Bhagavad-gita 4.36",
    translation: "Loneliness often feels like a deep ocean — but Krishna assures that spiritual knowledge is the boat that carries us to peace and shelter, no matter our past."
  },
  {
    sanskrit: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts. — Bhagavad-gita 10.8",
    translation: "When we feel disconnected from the world, we can reconnect to the Source of everything. In that divine relationship, loneliness dissolves."
  },
  {
    sanskrit: "He who sees Me everywhere and sees everything in Me, I am never lost to him, nor is he ever lost to Me. — Bhagavad-gita 6.30",
    translation: "This verse beautifully assures that the soul connected to Krishna is never truly lost or alone — there is a deep, constant bond beyond the physical."
  },
  {
    sanskrit: "A yogi is greater than the ascetic, the jñānī, and the karmī. Therefore, be a yogi, O Arjuna. Of all yogis, the one who worships Me with love and devotion is the most intimately united with Me in yoga and is the highest of all. — Bhagavad-gita 6.46–47",
    translation: "True connection — beyond loneliness — comes through devotion. Krishna tells Arjuna that a heart full of love and devotion is never separate from Him."
  }
];

function showRandomShloka() {
  const random = shlokas[Math.floor(Math.random() * shlokas.length)];
  document.getElementById("sanskrit").textContent = random.sanskrit;
  document.getElementById("translation").textContent = random.translation;
}

document.addEventListener("DOMContentLoaded", function () {
  showRandomShloka();

  const btn = document.getElementById("another");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      showRandomShloka();
    });
  }
});
