import React, { useState, useMemo, useRef, useEffect } from "react";
import songs from "../public/song.mp3";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpeg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpeg";
import img8 from "./assets/8.png";

// CHANGE TO YOUR OFFICIAL DATE
const relationshipStart = new Date("2023-11-20");

// CHANGE THESE TO YOUR REAL MEMORIES
const memories = [
  {
    date: "Favorite Moment",
    title: "Just Us",
    description:
      "My favorite memory with you is that sunset we watched before I had to leave. Sitting beside you, talking about life, and feeling so connected made me realize how deeply I care for you. Every moment we spend together feels important, meaningful, and something I treasure more than words could ever explain.",
  },
];

// THINGS YOU LOVE ABOUT HER
const reasonsILoveYou = [
  "You always make me feel safe and understood.",
  "Your laugh is my favorite sound.",
  "You support me no matter what.",
  "You're kind to everyone — not just me.",
  "You’re my home.",
  "You inspire me to be a better person.",
  "You have the most beautiful soul.",
  "I love how we can be silly together.",
  "You make ordinary moments feel magical.",
  "I love you for exactly who you are.",
  "You complete me in ways I never knew I needed.",
  "You make my heart full every day.",
  "You are my best friend and partner in crime.",
  "I love dreaming about our future together.",
  "You are my greatest adventure.",
  "I love the way you look at me.",
  "I love you for who you are and everything you will become.",
];

// PHOTOS (ADD YOUR OWN)
const photos = [
  {
    src: img1,
    alt: "img1",
  },
  {
    src: img2,
    alt: "photo2",
  },
  {
    src: img3,
    alt: "photo3",
  },
  {
    src: img4,
    alt: "photo4",
  },
  {
    src: img5,
    alt: "photo5",
  },
  {
    src: img6,
    alt: "photo6",
  },
  {
    src: img7,
    alt: "photo7",
  },
  {
    src: img8,
    alt: "photo8",
  },
];

function FlowerBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="flower flower-1">✿</span>
      <span className="flower flower-2">❀</span>
      <span className="flower flower-3">✿</span>
      <span className="flower flower-4">❀</span>
      <span className="flower flower-5">✿</span>
    </div>
  );
}

export default function App() {
  const [showSecret, setShowSecret] = useState(false);
  const [showSurprisePage, setShowSurprisePage] = useState(false);

  const [showGallery, setShowGallery] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // MUSIC: auto-play on first interaction
  const audioRef = useRef(null);

  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          console.log("Music is playing ✅");
          window.removeEventListener("click", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
          window.removeEventListener("keydown", tryPlay);
          window.removeEventListener("scroll", tryPlay);
        })
        .catch((err) => {
          console.error("Play failed ❌", err);
        });
    };

    window.addEventListener("click", tryPlay);
    window.addEventListener("touchstart", tryPlay);
    window.addEventListener("keydown", tryPlay);
    window.addEventListener("scroll", tryPlay);

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, []);

  // DAYS TOGETHER
  const daysTogether = useMemo(() => {
    const now = new Date();
    return Math.floor((now - relationshipStart) / (1000 * 60 * 60 * 24));
  }, []);

  const handleStartGallery = () => {
    setShowGallery(true);
    setCurrentPhotoIndex(0);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-rose-50 to-white text-gray-800 relative overflow-hidden">
      <FlowerBackground />

      <audio ref={audioRef} src={songs} loop preload="auto" playsInline />

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-10 space-y-16">
        {/* HERO */}
        <section className="text-center space-y-4">
          <p className="text-sm tracking-[0.3em] uppercase text-rose-400">
            For My Love
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold hero-float">
            Happy 2nd Anniversary
            <span className="block text-rose-500 mt-2">LOVE</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            I made this little page just for you — a small reminder of how much
            you mean to me.
          </p>

          <div className="flex justify-center pt-3">
            <button
              onClick={() => setShowSurprisePage(true)}
              className="px-10 py-5 rounded-full border border-rose-400 bg-rose-500 text-white text-sm shadow-sm hover:bg-rose-600 transition"
            >
              OPEN
            </button>
          </div>
        </section>

        {/* DAYS TOGETHER */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">
            Days With You
          </h2>

          <div className="bg-white/80 border border-rose-100 rounded-3xl px-8 py-6 shadow-sm inline-block">
            <p className="text-sm text-gray-600 mb-1">
              We've been together for
            </p>
            <p className="text-4xl font-semibold text-rose-500">
              {daysTogether}
            </p>
            <p className="text-sm text-gray-600 mt-1">days 💕</p>
          </div>

          <p className="text-xs text-gray-500">
            Since: {relationshipStart.toLocaleDateString()}
          </p>
        </section>

        {/* MEMORIES TIMELINE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-rose-500">
            CORE MEMORIES
          </h2>
          <div className="space-y-4">
            {memories.map((m, i) => (
              <div
                key={i}
                className="bg-white/70 border border-rose-100 rounded-2xl p-5 shadow-sm"
              >
                <p className="text-xs uppercase text-rose-400 mb-1">{m.date}</p>
                <h3 className="font-semibold text-lg">{m.title}</h3>
                <p className="text-sm text-gray-600">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTO SLIDESHOW */}
        <section className="space-y-5 text-center">
          <h2 className="text-2xl font-semibold text-rose-500">
            Little Moments I Love
          </h2>

          {showGallery && (
            <div className="w-full max-w-sm mx-auto">
              <figure className="relative overflow-hidden rounded-3xl bg-white/80 border border-rose-100 shadow-lg photo-fade-in">
                <div className="w-full flex items-center justify-center p-3">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="w-full h-auto max-h-96 object-contain rounded-2xl"
                  />
                </div>
              </figure>

              {/* DOTS */}
              <div className="flex justify-center gap-1.5 mt-3">
                {photos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentPhotoIndex
                        ? "w-4 bg-rose-500"
                        : "w-2 bg-rose-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {!showGallery ? (
            <button
              onClick={handleStartGallery}
              className="px-6 py-2 rounded-full border border-rose-300 bg-white text-sm text-rose-500 shadow-sm hover:border-rose-400 transition photo-button-pulse"
            >
              Open our photo reel 💕
            </button>
          ) : (
            <button
              onClick={handleNextPhoto}
              className="px-6 py-2 rounded-full bg-rose-500 text-white text-sm shadow-sm hover:bg-rose-600 transition"
            >
              Next memory →
            </button>
          )}
        </section>

        {/* THINGS I LOVE ABOUT YOU */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-rose-500">
            Things I Love About You
          </h2>
          <ul className="space-y-3">
            {reasonsILoveYou.map((reason, idx) => (
              <li
                key={idx}
                className="bg-white/70 border border-rose-100 rounded-2xl p-4 shadow-sm flex gap-3"
              >
                <span className="text-rose-500 mt-1">♥</span>
                <p className="text-sm text-gray-700">{reason}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* LETTER */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-rose-500">
            A Letter For You
          </h2>
          <div className="bg-white/80 border border-rose-100 rounded-2xl p-5 shadow-sm text-sm text-gray-700 leading-relaxed">
            <p>My love,</p>
            <p>
              I’m sorry that today, the day that was supposed to be our
              anniversary, became something different… something painful. I
              broke my promise to you, and I take responsibility for that. But I
              don’t regret what happened, because it opened my eyes. It taught
              me to grow, to be better, to fight for the things and people who
              matter to me. And you… you’re the one who matters most. I hope you
              can find it in your heart to forgive me. And if you’re willing…
              Can we try again? Can we continue the ride we started together? I
              still want you. I still choose you.
            </p>

            <p>Happy anniversary. You mean the world to me. ❤️</p>
          </div>
        </section>

        {/* SECRET MESSAGE */}
        <section className="text-center pb-10 relative">
          <button
            onClick={() => setShowSecret((p) => !p)}
            className="px-6 py-2 m-7 rounded-full bg-rose-500 text-white text-sm shadow-sm hover:bg-rose-600 transition"
          >
            {showSecret ? "Hide secret message" : "Tap for a secret message"}
          </button>

          {showSecret && (
            <>
              <div className="heart-burst justify-center items-center">
                <span>♥</span>
                <span>♥</span>
                <span>♥</span>
              </div>

              <div className="mt-3 inline-block bg-white/80 border border-rose-100 rounded-2xl px-4 py-3 shadow-sm text-sm text-gray-700">
                Uwi kana saakin, miss na miss na kita. Balik ka na.
                <span className="text-rose-500 font-semibold">
                  {" "}
                  I choose you. Always.
                </span>
              </div>
            </>
          )}
        </section>
      </main>

      {/* SURPRISE PAGE */}
      {showSurprisePage && (
        <div className="fixed inset-0 z-30 bg-rose-50/90 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white/90 border border-rose-100 rounded-3xl p-6 max-w-md shadow-xl animate-pop-in relative space-y-4">
            <button
              onClick={() => setShowSurprisePage(false)}
              className="absolute right-3 top-3 text-xs px-2 py-1 rounded-full border border-rose-200 text-gray-500 hover:text-rose-500 transition"
            >
              Close
            </button>

            <h2 className="text-xl font-semibold text-rose-500 text-center">
              MY LOVE,
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-rose-500">
                Happy 2nd anniversary, my love.
              </span>{" "}
              Thank you for all the little things and the big things you’ve done
              for me. I appreciate every effort you make, every moment we share,
              and every way you show your love. I can’t help but feel grateful
              for everything we’ve been through together.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Thank you for being with me, supporting me, loving me, and caring
              for me. You inspire me to become better every single day. You are
              my motivation, my comfort, and my favorite person. I love you for
              who you are now and for who you’re becoming. I will always be here
              to support you, cheer for you, and be proud of you.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              I’m proud of every small step you take — not just for us, but for
              yourself. I see it, and I appreciate it more than you know. I love
              you so much, my love. Take your time to scroll… I hope you feel
              the love in this small thing I made for you
            </p>

            <p className="text-sm text-center text-gray-700">
              <span className="font-semibold text-rose-500">
                You're my favorite person.
              </span>
              <br />
              Today, tomorrow, and always.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
