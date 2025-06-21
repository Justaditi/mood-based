const shlokas = [
  {
    sanskrit: "From anger, complete delusion arises, and from delusion, bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost, one falls down again into the material pool. — Bhagavad-gita 2.63",
    translation: "Krishna shows how anger clouds judgment. It leads to confusion, forgetfulness, and bad decisions. To stay peaceful, we must guard against anger and stay centered."
  },
  {
    sanskrit: "One who is not disturbed by the flow of desires — that enter like rivers into the ocean — can alone achieve peace, not the one who strives to satisfy them. — Bhagavad-gita 2.70",
    translation: "When angry desires flow in, like rivers rushing into the sea, the wise remain still. Peace comes not by reacting, but by remaining steady and detached."
  },
  {
    sanskrit: "A person who is not disturbed by happiness and distress and is steady in both is eligible for liberation. — Bhagavad-gita 2.15",
    translation: "Krishna says real strength is found in emotional steadiness. Not reacting to anger or joy makes a person truly peaceful and free."
  },
  {
    sanskrit: "He who is able to withstand the urge of speech, the mind, the actions, and who can tolerate the urges of anger... is qualified to make spiritual progress. — Bhagavad-gita 6.5 (related idea from spiritual texts)",
    translation: "Controlling anger is a mark of spiritual strength. Tolerating provocation leads to growth, while reacting fuels suffering."
  },
  {
    sanskrit: "There is no possibility of peace without self-control. Without peace, how can there be happiness? — Bhagavad-gita 2.66",
    translation: "Anger shatters peace. And without peace, happiness is impossible. Krishna urges us to practice self-restraint to find joy."
  },
  {
    sanskrit: "One who is equal to friends and enemies, who is free from envy and anger, and who is always peaceful — such a devotee is very dear to Me. — Bhagavad-gita 12.15",
    translation: "Krishna describes the ideal person as free from anger and envy, treating all with equality and compassion. Such a person becomes dear to God and lives peacefully."
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
