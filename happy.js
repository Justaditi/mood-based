// happy.js

const shlokas = [
  {
    sanskrit: "Such a liberated person is not attracted to material sense pleasure but is always in trance enjoying the pleasure within. In this way the self-realised person enjoys unlimited happiness for he concentrates on the Supreme.",
    translation: "We need to direct the search for happiness actually inward rather than out to this world, the world in which we find ourselves. It has to become an internal quest where we are actually in touch with our true identity. Brahma-yoga. And it means to be absorbed, to be focused, concentrated and absorbed on another experience, another world. We have this external world that we see all around us and is subject to change and is constantly changing; it’s never going to remain the same. It is made up of a substance - material energy - that doesn’t matter what we do with it, how much we cram into our body or on our body, will not fulfill us and give us that experience that we are seeking. And the Bhagavad-gita is shining light on the fact that there is another world, a world that is within and an intelligent person does not chase the ephemeral or fleeting idea of happiness in this world but rather goes within to seek out another source of spiritual experience and joy of what is described as ananda."
  },
  {
    sanskrit: "An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kuntī, such pleasures have a beginning and an end, and so the wise man does not delight in them.",
    translation: "This is quite a novel concept for most people because of the society in which we live and the way in which people view this world, we do not actually hear these types of ideas but there is a couple that really, really jump out. One is the nature of so-called material happiness, the little joys that we can get in life. They have a beginning and therefore they must have an end; you cannot have a beginning without an end. That is the nature of things, part of this duality. So if something has a beginning and we know that it surely will end, of course putting a lot of effort into that experience is obviously not going to be very smart. It’s like we become so invested and then we get so disappointed when our happiness comes to an end. And here Krishna is saying that we should understand that this experience that we’re having is coming about simply because we are getting a little stimulation somehow to our senses or the senses of the body and it might provide some element of joyfulness but we must know that this joy will pass. It will not fulfill us; it will not satisfy us and it will pass."
  },
  {
    sanskrit: "One whose happiness is within, who is active and rejoices within, and whose aim is inward is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme.",
    translation: " The idea of this journey within; that there is a genuine real spiritual experience that is to be had. The process of yoga is the process of undertaking this journey and fortifying ourselves and re-directing this quest for happiness to a place where we can actually genuinely find this—a very high level of fulfilment."
  },
  {
    sanskrit: "Oh son of Kunti, the nonpermanent (nonpermanent) appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.O best amongst men [Arjuna], the person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation.",
    translation: "Krishna teaches Arjuna that happiness and distress are temporary, just like the changing seasons. They come and go based on how our senses perceive the world, and a wise person learns to tolerate them without being disturbed. Instead of chasing pleasures or avoiding pain, one should remain balanced — because real freedom comes from inner steadiness, not external circumstances."
  },
  {
    sanskrit: "Before giving up this present body, if one is able to tolerate the urges of the material senses and to check the force of desire and anger is well situated and is happy in this world.",
    translation: "Krishna says that a person who can control desires and anger — who doesn’t blindly follow the senses — is truly happy and well situated, even in this world. This message challenges the common belief that happiness comes from constant enjoyment. Krishna instead points us toward spiritual strength, acceptance, and control.True harmony, he says, doesn’t mean maximizing material pleasure. It means living from the soul — with clarity, peace, and connection to the Supreme."
  },
  {
    sanskrit: "Merely renouncing all activities yet not engaging in devotional service of the Lord cannot make one happy. But a thoughtful person engaged in such devotional or loving service can achieve the Supreme without delay.",
    translation: "Krishna explains that simply giving up actions or withdrawing from the world does not lead to true happiness. Renunciation alone is not enough. What truly fulfills the soul is engaging in devotional service — acting with love and devotion for the Supreme.This verse touches on the deep spiritual truth that our need for happiness and love is not material. These needs come from the core of our being, because we are not the body — we are eternal spiritual beings. And these needs can only be fully satisfied through a loving relationship with the Supreme Soul (Krishna).In other words, fulfillment doesn’t come from doing nothing, but from doing the right thing — living a life centered in devotion"
  }, 
  {
    sanskrit: "A yogi whose mind is fixed on Me (this meaning Krishna) verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is free from all the reactions to past deeds.",
    translation: "Krishna explains that a yogi who fixes their mind on Him attains true spiritual happiness, beyond passion, karma, and suffering. This happiness comes not from external things, but from a deep inner connection with the Supreme Soul. Even good actions can't erase all past karma — but devotional connection with Krishna frees one from those reactions entirely. In that state of spiritual harmony, the soul finds lasting peace and fulfillment."
  },
  {
    sanskrit: "O best of the Bharatas, now please hear from Me about the three kinds of happiness by which the conditioned soul enjoys, and by which he sometimes comes to the end of all distress.",
    translation: " Krishna begins to explain that not all happiness is the same. There are three distinct types of happiness, each shaped by the subtle forces known as the three modes of material nature—goodness, passion, and ignorance. Happiness in the mode of goodness is calm, peaceful, and rooted in inner contentment. It may not feel exciting in the beginning, but over time it brings deep satisfaction and clarity. This type of happiness leads a person toward wisdom and spiritual awakening. Happiness in the mode of passion feels thrilling and pleasurable at first, but it eventually leads to distress. It's fueled by intense desires and the pursuit of sense enjoyment, ambition, and temporary highs. Though it may appear sweet in the beginning, it turns bitter in the end. Happiness in the mode of ignorance is dull and misleading. It arises from laziness, sleep, intoxication, or delusion. It keeps one in darkness, preventing spiritual growth, and ultimately leads to confusion, depression, and greater suffering. Krishna explains that people are constantly influenced by these energies, often experiencing all three at different times. Our pursuit of happiness is shaped by whichever mode dominates our mind and senses at any given moment. True happiness, Krishna teaches, comes not from chasing external pleasures, but from turning inward and seeking the eternal spiritual joy that lies beyond the fleeting nature of the material world."
  }
];

function showRandomShloka() {
  const random = shlokas[Math.floor(Math.random() * shlokas.length)];
  document.getElementById("sanskrit").textContent = random.sanskrit;
  document.getElementById("translation").textContent = random.translation;
}

document.addEventListener("DOMContentLoaded", function () {
  showRandomShloka();

  document.getElementById("another").addEventListener("click", function (e) {
    e.preventDefault();
    showRandomShloka();
  });
});
