const shlokas = [
  {
    sanskrit: "Just as the embodied soul passes from childhood to youth to old age, so also at death the soul passes into another body. The wise are not bewildered by this. — Bhagavad-gita 2.13",
    translation: "In this verse, Krishna teaches that we are not the body — we are the soul (ātma). Just as the body naturally changes from childhood to adulthood to old age, death is simply another transition — the soul moves on to a new body. This understanding removes fear and confusion about death. For those who are wise, this constant change is natural and not disturbing, because they know the true self is eternal, untouched by the body’s aging or death."
  },
  {
    sanskrit: "O son of Kunti, the experiences of happiness and distress are temporary, like the appearance of winter and summer. One must learn to tolerate them without being disturbed. — Bhagavad-gita 2.14",
    translation: "In this verse, Krishna explains that pleasure and pain are temporary, just like changing seasons. Sometimes it’s hot, sometimes cold — but we adapt, knowing it will pass. Similarly, emotional highs and lows come and go. A wise person doesn't get overly attached to joy or overwhelmed by sorrow. By learning to stay calm and steady through life’s changes, we grow in strength, peace, and spiritual maturity. "
  },
  {
    sanskrit: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be. — Bhagavad-gita 2.12",
    translation: "In this verse, Krishna reveals a profound truth: the soul is eternal. We — you, me, and everyone — have always existed and will always exist. Our true self does not begin with birth or end with death. What changes is the body, not the soul. This teaching gives great comfort in times of fear, loss, or confusion. We are not temporary beings trying to grab fleeting joy — we are eternal souls on a spiritual journey."
  },
  {
    sanskrit: "You are mourning for what is not worthy of grief, yet you speak words of wisdom. The wise do not grieve for the living or the dead. — Bhagavad-gita 2.11",
    translation: "Krishna gently tells Arjuna that his sorrow is based on misunderstanding the nature of life and the soul. While emotions are natural, true wisdom sees that the soul is eternal, beyond birth and death. The wise understand that loss and death affect only the body — not the self within. Mourning becomes less overwhelming when we recognize that no one is ever truly lost; the soul continues its journey."
  },
  {
    sanskrit: "The person who is not disturbed by happiness and distress and remains steady is certainly eligible for liberation. — Bhagavad-gita 2.15",
    translation: "Krishna explains that a person who stays calm and balanced, no matter what life brings — joy or sorrow — is truly strong and wise. This steadiness of mind is a sign of spiritual maturity, and such a person becomes qualified for liberation (freedom from the cycle of birth and death). Rather than being tossed around by emotions, the steady soul walks the path of inner peace and spiritual realization."
  },
  {
    sanskrit: "He who knows the soul to be indestructible, eternal, unborn, and immutable—how can that person kill anyone or cause anyone to be killed? — Bhagavad-gita 2.21",
    translation: "In this verse, Krishna explains that the soul is eternal and indestructible. It is never born, it never dies, and it cannot be harmed by weapons, fire, or time. Understanding this truth changes how we see life and death.The person who truly realizes this doesn't see others as just bodies. They know that the soul within all beings is untouched by physical changes, including death. Such understanding removes fear and guilt, and leads to deeper peace and compassion. "
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
