"use client";
import { useState, useRef } from "react";
const stages = [
  {
    label: "Join",
    title: "Start with a simple signup.",
    description:
      "Create a member account for the gym, then sign in to access workouts and member features.",
    screen: "signup",
    alt: "Signup screen with name, email, and password fields",
  },
  {
    label: "Set up",
    title: "Make the experience yours.",
    description:
      "Manage profile details and reach the activities that matter from the member home.",
    screen: "profile",
    alt: "Member profile form",
  },
  {
    label: "Plan",
    title: "Build a repeatable routine.",
    description:
      "Choose a saved workout template and review its exercises before starting a session.",
    screen: "plan",
    alt: "Saved workout template with an exercise list",
  },
  {
    label: "Train",
    title: "One set at a time.",
    description:
      "Log weight and reps, then review the workout summary with duration and total volume.",
    screen: "log",
    alt: "Workout logging screen with weight and reps",
  },
  {
    label: "Progress",
    title: "See the work add up.",
    description:
      "Follow exercise history and training progress across sessions.",
    screen: "progress",
    alt: "Chart of example workout progress",
  },
  {
    label: "Book",
    title: "Find support for the next step.",
    description:
      "Browse personal trainers and select a session time that works for you.",
    screen: "booking",
    alt: "Trainer session selection screen",
  },
  {
    label: "Connect",
    title: "Stay part of the gym.",
    description:
      "Discover workout buddies, gym events, and new members in the community.",
    screen: "social",
    alt: "Gym community options",
  },
];
export function Journey() {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = stages[index];
  return (
    <section className="journey">
      <h2>The member journey</h2>
      <p>Follow the experience, from signup to the next session.</p>
      <div
        className="journey-tabs"
        role="tablist"
        aria-label="Member journey stages"
      >
        {stages.map((stage, i) => (
          <button
            key={stage.label}
            id={`stage-${i}`}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            aria-selected={index === i}
            aria-controls="journey-panel"
            tabIndex={index === i ? 0 : -1}
            onClick={() => setIndex(i)}
            onKeyDown={(e) => {
              let next = i;
              if (e.key === "ArrowRight") next = (i + 1) % stages.length;
              else if (e.key === "ArrowLeft")
                next = (i - 1 + stages.length) % stages.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = stages.length - 1;
              else return;
              e.preventDefault();
              setIndex(next);
              refs.current[next]?.focus();
            }}
          >
            {String(i + 1).padStart(2, "0")} {stage.label}
          </button>
        ))}
      </div>
      <div
        className="journey-panel"
        role="tabpanel"
        id="journey-panel"
        aria-labelledby={`stage-${index}`}
        tabIndex={0}
      >
        <div>
          <span className="eyebrow">
            {String(index + 1).padStart(2, "0")} / MEMBER EXPERIENCE
          </span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
        <img
          src={`/images/inzer/${s.screen}.webp`}
          alt={s.alt}
          width="600"
          height="1200"
          loading="eager"
        />
      </div>
      <p className="case-note">
        Code-derived UI presentation with fictional sample data. Screens are
        adapted for the portfolio; this is not a live product demo.
      </p>
    </section>
  );
}
