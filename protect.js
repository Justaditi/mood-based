const shlokas = [
  {
    sanskrit: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack and preserve what they have. — Bhagavad-gita 9.22",
    translation: "Krishna personally protects those who depend on Him with love. He assures that He preserves what we need and protects what we value most."
  },
  {
    sanskrit: "Declare it boldly, O Arjuna, My devotee never perishes. — Bhagavad-gita 9.31",
    translation: "This is Krishna’s direct promise: those who take shelter in Him are never destroyed. Even in times of fear or failure, His protection is constant."
  },
  {
    sanskrit: "I am the strength of the strong, free from desire and attachment. — Bhagavad-gita 7.11",
    translation: "When we feel weak or exposed, Krishna reminds us that true strength comes from Him. Tuning into that divine strength brings confidence and resilience."
  },
  {
    sanskrit: "Even if you are the most sinful of all sinners, you will cross over all sin by the raft of knowledge. — Bhagavad-gita 4.36",
    translation: "No matter what has happened in the past, Krishna's guidance can carry us to safety. Divine knowledge and devotion protect the soul from all harm."
  },
  {
    sanskrit: "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear. — Bhagavad-gita 18.66",
    translation: "This is Krishna’s ultimate promise of protection. He asks us to surrender with trust, and assures us: “Do not fear.”"
  },
  {
    sanskrit: "He who meditates on Me as the Supreme Soul, always thinking of Me and engaged in devotional service, reaches Me without fail. — Bhagavad-gita 8.8",
    translation: "A mind fixed on Krishna is never alone. Constant remembrance of the Lord becomes our shield, strength, and final refuge."
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
