const shlokas = [
  {
    sanskrit: "One who is not connected with the Supreme can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. And how can there be any happiness without peace?",
    translation: " Krishna reveals that real peace begins with spiritual connection. When we’re disconnected from the Supreme, our mind becomes restless and our intelligence clouded. Instead of finding peace, we get caught in endless desires, anxieties, and confusion. Peace isn’t achieved by chasing material things — it comes from spiritual clarity and a heart aligned with truth. Without that inner stillness, even happiness becomes impossible."
  },
  {
    sanskrit: "As a strong wind sweeps away a boat on the water, even one of the roaming senses on which the mind focuses can carry away a man's intelligence. Therefore, O mighty-armed Arjuna, one whose senses are restrained from their objects is certainly of steady intelligence. ",
    translation: "Krishna compares the uncontrolled senses to wild forces that can completely throw us off course — just like a boat caught in a storm. If we let the mind follow every impulse or desire, we’re pulled in endless directions, like trying to herd cats or calm a pack of wild monkeys. The result? Confusion, frustration, and inner chaos. But when we learn to restrain the senses, not repressing them but guiding them wisely, we regain clarity, peace, and steady intelligence. Instead of chasing distractions, we begin to move steadily toward real purpose and fulfillment."
  },
  {
    sanskrit: " A person who is not disturbed by the incessant flow of desires - that enter like rivers into the ocean which is ever being filled but is always still - can alone achieve peace, and not the man who strives to satisfy such desires.",
    translation: "Krishna teaches that peace comes not from fulfilling every desire, but from learning to remain calm and undisturbed by them. Just as the ocean stays steady even as countless rivers flow into it, a peaceful person doesn't chase every urge or impulse.Following the senses endlessly is like pouring gasoline on a fire—it only increases agitation, not satisfaction. Real peace requires purifying the heart and mind, often through practices like meditation and kirtan, so we can see clearly who we are and what truly fulfills us. Peace isn't found in satisfying the mind’s demands, but in rising above them. "
  },
  {
    sanskrit: " Before giving up this present body, if one is able to tolerate the urges of the material senses and to check the force of desire and anger, he is well situated and is happy in this world.",
    translation: "Krishna reveals that true happiness in this life doesn’t come from satisfying every desire — it comes from controlling them. A person who can patiently withstand the waves of anger and desire is strong within and finds real peace, even in this world. This verse invites us to begin a spiritual journey — one that requires effort and the cultivation of spiritual intelligence. Through that process, we move toward the fulfillment and higher happiness the soul truly seeks."
  },
  {
    sanskrit: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace. ",
    translation: "Krishna teaches that true peace comes through spiritual understanding, not from material escape or indulgence. When we have faith, control our senses, and seek real knowledge, we begin to see life clearly and rise above suffering. Like someone addicted to a harmful habit, we may think material pleasure is the solution, but it only deepens our pain. Without a spiritual goal, life becomes increasingly empty. But with a clear purpose — the pursuit of truth, self-realization, and devotion — we find a peace that is lasting, not dependent on external conditions. "
  },
  {
    sanskrit: "The steadily devoted soul attains unadulterated peace because he offers the result of all activities to Me [Me being Krishna]; whereas a person who is not in union with the Divine, who is greedy for the fruits of his labor, becomes entangled.",
    translation: "Krishna explains that real peace comes when we act in the world without selfish desire, offering the fruits of our work to the Supreme. Trying to enjoy everything for ourselves leads to restlessness and bondage, while devotion brings freedom and inner calm. This verse reveals the solution to our longing for fulfillment: not escaping life, but spiritualizing it — turning our actions into offerings, serving with humility, and living in connection with the Divine and with others. In that selfless state, we discover true peace, joy, and love — far beyond what material pleasures can offer. "
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
