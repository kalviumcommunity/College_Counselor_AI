import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Heart, X } from "lucide-react";
import UniversityCard from "./UniversityCard";

const SWIPE_THRESHOLD = 100;

function SwipeCard({ university, isTop, onSwipe }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_e, info) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onSwipe("right", university.id);
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onSwipe("left", university.id);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, rotate }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      animate={isTop ? { scale: 1 } : { scale: 0.95, y: 12 }}
      exit={{
        x: x.get() > 0 ? 500 : -500,
        opacity: 0,
        transition: { duration: 0.3 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <UniversityCard university={university} />
      {isTop && (
        <>
          <motion.div
            className="absolute top-8 right-8 border-4 border-emerald-500 text-emerald-500 px-4 py-1 rounded-lg text-2xl font-extrabold rotate-12"
            style={{ opacity: likeOpacity }}
          >
            SAVE
          </motion.div>
          <motion.div
            className="absolute top-8 left-8 border-4 border-rose-500 text-rose-500 px-4 py-1 rounded-lg text-2xl font-extrabold -rotate-12"
            style={{ opacity: nopeOpacity }}
          >
            PASS
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default function CardStack({ universities }) {
  const [cards, setCards] = useState(universities);
  const [swipeLog, setSwipeLog] = useState([]);

  const handleSwipe = (direction, universityId) => {
    setSwipeLog((prev) => [...prev, { universityId, direction }]);
    setCards((prev) => prev.filter((c) => c.id !== universityId));
  };

  const buttonSwipe = (direction) => {
    if (cards.length === 0) return;
    handleSwipe(direction, cards[0].id);
  };

  if (cards.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-zinc-200 p-10 text-center">
          <div className="text-5xl mb-3">🎓</div>
          <h3 className="text-xl font-bold text-zinc-900 mb-2">
            You've seen them all
          </h3>
          <p className="text-zinc-600 text-sm">
            You saved {swipeLog.filter((s) => s.direction === "right").length}{" "}
            colleges. Refine your chat to discover more matches.
          </p>
        </div>
      </div>
    );
  }

  // Render the top 3 cards in the DOM, with the top card last (for stacking)
  const visibleCards = cards.slice(0, 3);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full" style={{ height: "560px" }}>
        <AnimatePresence>
          {visibleCards
            .slice()
            .reverse()
            .map((university, idx) => {
              const isTop = idx === visibleCards.length - 1;
              return (
                <SwipeCard
                  key={university.id}
                  university={university}
                  isTop={isTop}
                  onSwipe={handleSwipe}
                />
              );
            })}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => buttonSwipe("left")}
          className="w-14 h-14 bg-white border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-rose-500 rounded-full shadow-md flex items-center justify-center transition"
          aria-label="Pass"
        >
          <X size={26} />
        </button>
        <div className="text-sm text-zinc-500 font-medium">
          {cards.length} left
        </div>
        <button
          onClick={() => buttonSwipe("right")}
          className="w-14 h-14 bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 text-emerald-500 rounded-full shadow-md flex items-center justify-center transition"
          aria-label="Save"
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
}
