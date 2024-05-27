"use client";

import { Roulette, useRoulette } from "react-hook-roulette";

const options = {
  size: 450,
  initialAngle: 0,
  showArrow: true,
  maxSpeed: 15,
  style: {
    canvas: {
      bg: "#f9f9f9",
    },
    label: {},
  },
};

export default function RouletteBox({ items }: { items: any[] }) {
  const { roulette, onStart, onStop, result } = useRoulette({ items, options });

  return (
    <div className="mt-2 vstack items-center">
      <Roulette roulette={roulette} />
      <div className="hstack">
        <button type="button" onClick={onStart}>
          Start
        </button>
        <button type="button" onClick={onStop}>
          Stop
        </button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}
