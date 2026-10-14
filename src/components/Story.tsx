"use client";

import dynamic from "next/dynamic";
import { useStepper } from "@/lib/useStepper";
import { ProgressRail } from "@/components/ProgressRail";
import { Screen } from "@/components/Screen";
import { ScrollCue } from "@/components/ScrollCue";
import { Ambience } from "@/components/Ambience";
import { SoundSwitch } from "@/components/SoundSwitch";
import { LENGTHS, SCREENS, TRACK } from "@/story/screens";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HistoricalFlight } from "@/components/HistoricalFlight";

// Three.js and the GLB scene load only in the browser, after the page is interactive.
const WorldStage = dynamic(() => import("@/world/WorldStage"), { ssr: false });

/**
 * A real scroll track drives a fixed stage. Visitors can pause at a story beat
 * or move through several in one gesture.
 */
export default function Story() {
  useStepper(LENGTHS);

  return (
    <>
    <main className="fixed inset-0 overflow-hidden">
      <WorldStage />
      <ProductShowcase />
      <HistoricalFlight />
      <div className="pointer-events-none absolute inset-0">
        {SCREENS.map((screen, index) => (
          index < 2 || index > 5 ? <Screen key={screen.id} screen={screen} index={index} /> : null
        ))}
      </div>

      <ProgressRail />
      <ScrollCue />
      <SoundSwitch music="/audio/music.mp3" />
      {SCREENS.map((screen, index) =>
        screen.sound ? (
          <Ambience key={screen.id} index={index} src={screen.sound} />
        ) : null,
      )}
    </main>
    <div aria-hidden="true" className="story-scroll-track" style={{ height: `calc(var(--story-viewport-height, 100dvh) * ${TRACK})` }} />
    </>
  );
}
