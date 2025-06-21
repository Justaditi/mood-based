const shlokas = [
  {
    sanskrit: "There is no possibility of one’s becoming a yogi if one eats too much or eats too little, sleeps too much or does not sleep enough. — Bhagavad-gita 6.16",
    translation: "Krishna teaches that spiritual life requires balance. Laziness or overindulgence in food or sleep makes the mind dull. A yogi stays energized by living moderately and purposefully."
  },
  {
    sanskrit: "Arise, O Arjuna! Give up this degrading weakness of heart. It does not become you. Shake off this petty faint-heartedness and stand up. — Bhagavad-gita 2.3",
    translation: "Krishna urges Arjuna to rise above laziness and fear. This call to action applies to us too — to rise, take responsibility, and live with courage and focus."
  },
  {
    sanskrit: "Perform your prescribed duty, for action is better than inaction. A man cannot even maintain his body without work. — Bhagavad-gita 3.8",
    translation: "Laziness comes from inaction. Krishna clearly says that doing our duty is not optional — it's essential for progress, survival, and spiritual fulfillment."
  },
  {
    sanskrit: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. — Bhagavad-gita 2.47",
    translation: "Laziness often comes from worrying about results. Krishna reminds us to focus on effort, not outcome. When we act without attachment, work becomes joyful and freeing."
  },
  {
    sanskrit: "The person who is devoted to the path of selfless action, who has purified his mind and conquered the senses, attains perfection through work. — Bhagavad-gita 3.19",
    translation: "Perfection comes not through laziness or passivity, but through dedicated action with a pure heart. Krishna assures that every sincere effort purifies and uplifts us."
  },
  {
    sanskrit: "The soul can never be cut, burned, moistened, or withered. It is eternal and beyond the destruction of matter. — Bhagavad-gita 2.23",
    translation: "We are not this tired body — we are the eternal soul. Remembering our true identity gives strength and energy to act with purpose, beyond physical fatigue."
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
