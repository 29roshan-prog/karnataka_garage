import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { Placeholder, SectionHeading, SectionLabel } from "./ui";

export function BeforeAfter() {
  const ref = useReveal<HTMLDivElement>();
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);

  const move = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section ref={ref} className="section-pad">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Transformation</SectionLabel>
            <SectionHeading>
              See the
              <br />
              difference.
            </SectionHeading>
          </div>
          <Placeholder>Replace with real garage photos</Placeholder>
        </div>

        <div
          ref={frameRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
          }}
          className="reveal relative mt-12 aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-sm border border-border"
        >
          <img
            src={afterImg}
            alt="Car panel after service"
            loading="lazy"
            width={1280}
            height={864}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src={beforeImg}
            alt="Car panel before service"
            loading="lazy"
            width={1280}
            height={864}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />

          <div
            className="absolute inset-y-0 w-[2px] bg-primary"
            style={{ left: `${pos}%` }}
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-red)]">
              <MoveHorizontal className="h-5 w-5" />
            </span>
          </div>

          <span className="label-micro absolute left-4 top-4 text-foreground/70">
            Before
          </span>
          <span className="label-micro absolute right-4 top-4 text-foreground/70">
            After
          </span>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
