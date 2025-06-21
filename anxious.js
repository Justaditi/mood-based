const shlokas = [
  {
    sanskrit: "The nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. — Bhagavad-gita 2.14",
    translation: "Krishna reminds us that anxiety and emotional distress are temporary, just like changing seasons. Tolerating them calmly, with patience, is a sign of strength. This perspective helps calm the restless mind and brings balance during difficult times."
  },
  {
    sanskrit: "One who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation. — Bhagavad-gita 2.15",
    translation: "In anxious moments, steadiness is the anchor. Krishna teaches that inner stability in all situations — without reacting excessively to joy or fear — is the gateway to peace and spiritual freedom."
  },
  {
    sanskrit: "Be steadfast in yoga, O Arjuna. Perform your duty and abandon all attachment to success or failure. Such evenness of mind is called yoga. — Bhagavad-gita 2.48",
    translation: "Anxiety often arises from worrying about results. Krishna advises us to act sincerely but not be attached to outcomes. This mindset — doing your best and letting go — is the path to mental clarity and spiritual calm."
  },
  {
    sanskrit: "There is no possibility of one’s becoming a yogi if one eats too much or eats too little, sleeps too much or does not sleep enough. — Bhagavad-gita 6.16",
    translation: "Sometimes anxiety is amplified by poor lifestyle habits. Krishna explains that balance in eating, sleeping, and living is essential to becoming peaceful and steady. A calm mind grows from a balanced life."
  },
  {
    sanskrit: "In the stage of perfection called trance or samādhi, one's mind is completely restrained from material mental activities. — Bhagavad-gita 6.20",
    translation: "In deep meditation or spiritual focus, the anxious chatter of the mind fades. Krishna describes how, through regular practice, we can train the mind to rest, leading to true relief from mental disturbance."
  },
  {
    sanskrit: "One whose mind is peaceful, who is free from material desires, and who has controlled the senses—such a person is said to have achieved the highest happiness. — Bhagavad-gita 5.29",
    translation: "True peace doesn’t come from controlling the world, but from calming the mind. Krishna reassures us that peace is within reach for the one who controls desires and anchors their mind in spiritual wisdom."
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
