import { useEffect, useRef, useState } from "react";
import { Bookmark, Check, Menu, X } from "lucide-react";
import {
  APART,
  CHAPTERS,
  DAY_GROUPS,
  HELPS,
  ZONES,
  chapterIndex,
  resolvePlan,
  type Block,
  type DayGroup,
  type ZoneInfo,
} from "@/data/onions";

const STORAGE_KEY = "onion-field-book-v1";

type Memory = {
  chapterId: string;
  zoneId: string | null;
  day: DayGroup | null;
  marks: string[];
  checks: string[];
};

const press =
  "transition-transform duration-150 ease-out active:scale-[0.96] disabled:active:scale-100";

export function FieldBook() {
  const [chapterId, setChapterId] = useState("front");
  const [zoneId, setZoneId] = useState<string | null>(null);
  const [day, setDay] = useState<DayGroup | null>(null);
  const [marks, setMarks] = useState<string[]>([]);
  const [checks, setChecks] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstScroll = useRef(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Memory>;
        if (parsed.chapterId && CHAPTERS.some((c) => c.id === parsed.chapterId)) {
          setChapterId(parsed.chapterId);
        }
        if (typeof parsed.zoneId === "string" && ZONES.some((z) => z.id === parsed.zoneId)) {
          setZoneId(parsed.zoneId);
        }
        if (parsed.day === "long" || parsed.day === "mid" || parsed.day === "short") {
          setDay(parsed.day);
        }
        if (Array.isArray(parsed.marks)) {
          setMarks(parsed.marks.filter((m) => typeof m === "string"));
        }
        if (Array.isArray(parsed.checks)) {
          setChecks(parsed.checks.filter((m) => typeof m === "string"));
        }
      }
    } catch {
      /* ignore broken local notes */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload: Memory = { chapterId, zoneId, day, marks, checks };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [hydrated, chapterId, zoneId, day, marks, checks]);

  useEffect(() => {
    if (firstScroll.current) {
      firstScroll.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [chapterId]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }
    function go(delta: number) {
      const index = chapterIndex(chapterId);
      const next = CHAPTERS[index + delta];
      if (next) setChapterId(next.id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chapterId]);

  const index = chapterIndex(chapterId);
  const chapter = CHAPTERS[index] ?? CHAPTERS[0];
  const marked = marks.includes(chapter.id);
  const zone = ZONES.find((z) => z.id === zoneId) ?? null;

  function openChapter(id: string) {
    setChapterId(id);
    setMenuOpen(false);
  }

  function toggleMark() {
    setMarks((current) =>
      current.includes(chapter.id) ? current.filter((id) => id !== chapter.id) : [...current, chapter.id],
    );
  }

  function toggleCheck(id: string) {
    setChecks((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]">
      <a
        href="#chapter"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to the chapter
      </a>
      <BookSpine
        chapterId={chapter.id}
        marks={marks}
        zone={zone}
        day={day}
        onOpen={openChapter}
      />
      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-ink/15 bg-paper/95 px-4 py-3 lg:hidden">
          <button
            type="button"
            className={`${press} grid h-11 w-11 place-items-center border border-ink/15`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open contents"
          >
            <Menu aria-hidden="true" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg leading-tight">
              {chapter.id === "front" ? "Volume 8: Onions (The Education Revolution)" : chapter.title}
            </p>
            <p className="truncate text-sm text-muted">
              {chapter.num ? `Chapter ${chapter.num}` : "Field guide"}
            </p>
          </div>
          <MarkButton marked={marked} onToggle={toggleMark} />
        </header>

        {menuOpen ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-ink/40"
              aria-label="Close contents"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 flex w-72 max-w-full flex-col bg-olive text-paper">
              <div className="flex items-center justify-between px-4 py-3">
                <p className="font-display text-xl">Contents</p>
                <button
                  type="button"
                  className={`${press} grid h-11 w-11 place-items-center`}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close contents"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-2 pb-6" aria-label="Chapters">
                {CHAPTERS.map((item) => (
                  <ChapterLink
                    key={item.id}
                    id={item.id}
                    num={item.num}
                    title={item.id === "front" ? "Volume 8: Onions (The Education Revolution)" : item.title}
                    active={item.id === chapter.id}
                    marked={marks.includes(item.id)}
                    onOpen={openChapter}
                    tone="sheet"
                  />
                ))}
              </nav>
            </div>
          </div>
        ) : null}

        <main id="chapter" className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <article key={chapter.id} className="page-in mx-auto max-w-3xl">
            {chapter.id === "front" ? (
              <FrontMatter marks={marks} onOpen={openChapter} />
            ) : (
              <ChapterBody
                num={chapter.num}
                title={chapter.title}
                deck={chapter.deck}
                blocks={chapter.blocks}
                marked={marked}
                onToggleMark={toggleMark}
                zone={zone}
                day={day}
                onZone={setZoneId}
                onDay={setDay}
                checks={checks}
                onToggleCheck={toggleCheck}
              />
            )}
            <Pager index={index} onOpen={openChapter} />
            <p className="mt-8 max-w-2xl text-sm text-muted">
              Privacy: This guide does not collect your name, email, or any personal information. Your zone, day-length choice, and checklist are saved only on your own device.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}

function BookSpine({
  chapterId,
  marks,
  zone,
  day,
  onOpen,
}: {
  chapterId: string;
  marks: string[];
  zone: ZoneInfo | null;
  day: DayGroup | null;
  onOpen: (id: string) => void;
}) {
  const dayLabel = DAY_GROUPS.find((item) => item.id === day)?.label;
  return (
    <aside className="sticky top-0 hidden h-dvh flex-col bg-olive text-paper lg:flex">
      <div className="px-6 pt-8">
        <p className="font-display text-sm italic text-paper/70">A field guide</p>
        <button
          type="button"
          onClick={() => onOpen("front")}
          className={`${press} mt-2 text-left font-display text-3xl leading-none`}
        >
          Volume 8: Onions (The Education Revolution)
        </button>
        <p className="mt-3 text-sm leading-snug text-paper/75">Blue and the Awesome Dudes</p>
        <p className="mt-1 text-sm leading-snug text-paper/75">
          {zone && dayLabel ? `Zone ${zone.id} · ${dayLabel}` : "Zone not set"}
        </p>
      </div>
      <nav className="mt-8 flex-1 overflow-y-auto px-3 pb-8" aria-label="Chapters">
        {CHAPTERS.map((item) => (
          <ChapterLink
            key={item.id}
            id={item.id}
            num={item.num}
            title={item.id === "front" ? "Front" : item.title}
            active={item.id === chapterId}
            marked={marks.includes(item.id)}
            onOpen={onOpen}
            tone="spine"
          />
        ))}
      </nav>
    </aside>
  );
}

function ChapterLink({
  id,
  num,
  title,
  active,
  marked,
  onOpen,
  tone,
}: {
  id: string;
  num: string;
  title: string;
  active: boolean;
  marked: boolean;
  onOpen: (id: string) => void;
  tone: "spine" | "sheet";
}) {
  const activeClass =
    tone === "spine"
      ? "bg-paper text-ink"
      : "bg-paper text-ink";
  const idleClass = "text-paper/85 hover:bg-paper/10";
  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      aria-current={active ? "page" : undefined}
      className={`${press} flex min-h-11 w-full items-center gap-3 px-3 py-2 text-left ${active ? activeClass : idleClass}`}
    >
      <span className="w-7 shrink-0 font-display text-sm tabular-nums">{num || "—"}</span>
      <span className="min-w-0 flex-1 truncate font-display text-lg leading-tight">{title}</span>
      {marked ? <span className="h-2 w-2 shrink-0 rounded-full bg-amber" aria-label="Marked" /> : null}
    </button>
  );
}

function MarkButton({ marked, onToggle }: { marked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={marked}
      className={`${press} inline-flex h-11 items-center gap-2 border border-ink/15 px-3 text-sm`}
    >
      <Bookmark aria-hidden="true" className={marked ? "fill-amber text-amber" : ""} />
      {marked ? "Marked" : "Mark"}
    </button>
  );
}

function FrontMatter({ marks, onOpen }: { marks: string[]; onOpen: (id: string) => void }) {
  const saved = CHAPTERS.filter((chapter) => marks.includes(chapter.id) && chapter.id !== "front");
  return (
    <div>
      <p className="font-display text-amber italic">Plate 01 · Allium cepa</p>
      <div className="mt-4 grid items-end gap-8 lg:grid-cols-2">
        <img
          src="/plates/cover.jpg"
          alt="A lifted storage onion with copper skin, white roots, and blue-green leaves on cream paper."
          width={1200}
          height={1600}
          className="w-full border border-ink/15"
        />
        <div>
          <p className="text-sm text-amber">The Education Revolution Pocket Guide, Volume 8</p>
          <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">Volume 8: Onions (The Education Revolution)</h1>
          <p className="mt-3 font-display text-xl italic text-amber">Blue and the Awesome Dudes</p>
          <p className="mt-5 max-w-xl text-xl leading-snug text-ink">
            Grow them from seed, lift them when the tops fall, save the seed from the bulbs worth keeping, and store each crop the way it actually lasts.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            USDA zones 3 through 11, with the latitude catch that zone numbers hide. Companion plants that help, and the ones that don't. A cellar for bulbs and a jar for seed — they are not the same room.
          </p>
          <button
            type="button"
            onClick={() => onOpen("safe")}
            className={`${press} mt-8 inline-flex h-12 items-center bg-amber px-6 font-display text-lg text-paper`}
          >
            Begin with Stay safe
          </button>
        </div>
      </div>

      <section className="mt-14 max-w-2xl">
        <h2 className="font-display text-3xl">How to use it</h2>
        <ol className="mt-4">
          {[
            ["Read day length before you buy a packet.", "The wrong group never makes a bulb, no matter how carefully you water."],
            ["Set your zone and your latitude.", "Planting, harvest, and seed dates later in the book follow both. They stay on this device."],
            ["Treat companions as a planting plan.", "Shade, shared disease, and root space matter. Charms do not."],
            ["Don't store seed like a bulb.", "Mesh and cold air for onions. A dry jar in the refrigerator for seed."],
          ].map(([title, body], itemIndex) => (
            <li key={title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-ink/15 py-4">
              <span className="font-display text-amber tabular-nums">0{itemIndex + 1}</span>
              <span>
                <span className="block font-display text-xl">{title}</span>
                <span className="mt-1 block text-muted">{body}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl">Contents</h2>
        <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
          {CHAPTERS.filter((chapter) => chapter.id !== "front").map((chapter) => (
            <li key={chapter.id}>
              <button
                type="button"
                onClick={() => onOpen(chapter.id)}
                className={`${press} flex w-full items-baseline gap-4 py-4 text-left`}
              >
                <span className="font-display text-amber tabular-nums">{chapter.num}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-2xl">{chapter.title}</span>
                  <span className="mt-1 block text-muted">{chapter.deck}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {saved.length > 0 ? (
        <section className="mt-12 max-w-2xl">
          <h2 className="font-display text-2xl">Marked</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {saved.map((chapter) => (
              <li key={chapter.id}>
                <button
                  type="button"
                  onClick={() => onOpen(chapter.id)}
                  className={`${press} h-11 border border-ink/15 px-4`}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function ChapterBody({
  num,
  title,
  deck,
  blocks,
  marked,
  onToggleMark,
  zone,
  day,
  onZone,
  onDay,
  checks,
  onToggleCheck,
}: {
  num: string;
  title: string;
  deck: string;
  blocks: Block[];
  marked: boolean;
  onToggleMark: () => void;
  zone: ZoneInfo | null;
  day: DayGroup | null;
  onZone: (id: string) => void;
  onDay: (day: DayGroup) => void;
  checks: string[];
  onToggleCheck: (id: string) => void;
}) {
  let seenParagraph = false;
  return (
    <div>
      <header className="flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-display text-amber italic">Chapter {num}</p>
          <h1 className="mt-2 font-display text-5xl">{title}</h1>
          <p className="mt-4 text-xl leading-snug text-muted">{deck}</p>
        </div>
        <div className="hidden lg:block">
          <MarkButton marked={marked} onToggle={onToggleMark} />
        </div>
      </header>
      <div className="mt-8">
        {blocks.map((block, blockIndex) => {
          const firstParagraph = block.kind === "p" && !seenParagraph;
          if (block.kind === "p") seenParagraph = true;
          return (
            <BlockView
              key={blockIndex}
              block={block}
              drop={firstParagraph}
              zone={zone}
              day={day}
              onZone={onZone}
              onDay={onDay}
              checks={checks}
              onToggleCheck={onToggleCheck}
            />
          );
        })}
      </div>
    </div>
  );
}

function BlockView({
  block,
  drop,
  zone,
  day,
  onZone,
  onDay,
  checks,
  onToggleCheck,
}: {
  block: Block;
  drop: boolean;
  zone: ZoneInfo | null;
  day: DayGroup | null;
  onZone: (id: string) => void;
  onDay: (day: DayGroup) => void;
  checks: string[];
  onToggleCheck: (id: string) => void;
}) {
  if (block.kind === "p") {
    return <p className={`my-4 max-w-2xl ${drop ? "drop-cap" : ""}`}>{block.text}</p>;
  }
  if (block.kind === "h") {
    return <h2 className="mt-12 mb-4 max-w-2xl font-display text-3xl">{block.text}</h2>;
  }
  if (block.kind === "note") {
    return (
      <aside className="my-8 max-w-2xl border-l-2 border-amber bg-ink/5 px-5 py-4">
        <p className="font-display text-xl">{block.title}</p>
        <p className="mt-2">{block.text}</p>
      </aside>
    );
  }
  if (block.kind === "plate") {
    return (
      <figure className="my-10">
        <img src={block.src} alt={block.alt} className="w-full border border-ink/15" />
        <figcaption className="mt-3 flex gap-3 text-sm text-muted">
          <span className="shrink-0 font-display text-amber">Plate {block.plate}</span>
          <span>{block.caption}</span>
        </figcaption>
      </figure>
    );
  }
  if (block.kind === "steps" || block.kind === "bullets") {
    const Tag = block.kind === "steps" ? "ol" : "ul";
    return (
      <Tag className="my-6 max-w-2xl">
        {block.items.map((item, itemIndex) => (
          <li key={item.t} className="flex gap-4 border-t border-ink/15 py-5">
            <span className="w-8 shrink-0 font-display text-lg text-amber tabular-nums">
              {block.kind === "steps" ? String(itemIndex + 1).padStart(2, "0") : "·"}
            </span>
            <span>
              <span className="block font-display text-2xl leading-tight">{item.t}</span>
              <span className="mt-2 block text-muted">{item.d}</span>
            </span>
          </li>
        ))}
      </Tag>
    );
  }
  if (block.kind === "table") {
    return (
      <figure className="my-8">
        <div className="overflow-x-auto">
          <table className="field-table min-w-xl text-sm sm:text-base">
            <caption className="mb-3 text-left text-sm text-muted">{block.caption}</caption>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    );
  }
  if (block.kind === "zones" || block.kind === "year") {
    return (
      <ZoneStudio
        mode={block.kind}
        zone={zone}
        day={day}
        onZone={onZone}
        onDay={onDay}
        checks={checks}
        onToggleCheck={onToggleCheck}
      />
    );
  }
  if (block.kind === "companions") {
    return <CompanionBoard />;
  }
  return (
    <dl className="my-8 max-w-2xl">
      {block.items.map((item) => (
        <div key={item.term} className="grid gap-1 border-t border-ink/15 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
          <dt className="font-display text-xl">{item.term}</dt>
          <dd className="text-muted">{item.def}</dd>
        </div>
      ))}
    </dl>
  );
}

function ZoneStudio({
  mode,
  zone,
  day,
  onZone,
  onDay,
  checks,
  onToggleCheck,
}: {
  mode: "zones" | "year";
  zone: ZoneInfo | null;
  day: DayGroup | null;
  onZone: (id: string) => void;
  onDay: (day: DayGroup) => void;
  checks: string[];
  onToggleCheck: (id: string) => void;
}) {
  const result = zone && day ? resolvePlan(zone, day) : null;
  return (
    <section className="my-8" aria-label={mode === "zones" ? "Zone calendar" : "Year checklist"}>
      <h2 className="font-display text-2xl">USDA zone</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Average annual extreme minimum.{" "}
        <a
          className="underline decoration-amber underline-offset-4"
          href="https://planthardiness.ars.usda.gov/"
          target="_blank"
          rel="noreferrer"
        >
          Look yours up on the USDA map
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose a zone">
        {ZONES.map((item) => {
          const selected = zone?.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onZone(item.id)}
              className={`${press} grid h-11 w-12 place-items-center border font-display text-lg tabular-nums ${
                selected ? "border-amber bg-amber text-paper" : "border-ink/20 bg-paper text-ink"
              }`}
            >
              {item.id}
            </button>
          );
        })}
      </div>

      <h2 className="mt-8 font-display text-2xl">Length of the summer day</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-3" role="group" aria-label="Choose day length">
        {DAY_GROUPS.map((item) => {
          const selected = day === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onDay(item.id)}
              className={`${press} min-h-11 border px-3 py-3 text-left ${
                selected ? "border-amber bg-amber text-paper" : "border-ink/20 bg-paper"
              }`}
            >
              <span className="block font-display text-lg leading-tight">{item.label}</span>
              <span className={`mt-1 block text-sm ${selected ? "text-paper/80" : "text-muted"}`}>{item.hint}</span>
            </button>
          );
        })}
      </div>

      {!result || !zone || !day ? (
        <p className="mt-8 max-w-2xl border border-dashed border-ink/25 px-5 py-6 text-muted">
          Choose a zone and a day length. The sowing, transplant, harvest, and seed windows will follow.
        </p>
      ) : mode === "zones" ? (
        <PlanCard zone={zone} tone={result.tone} plan={result.plan} />
      ) : (
        <YearList zoneId={zone.id} day={day} tone={result.tone} plan={result.plan} checks={checks} onToggleCheck={onToggleCheck} />
      )}
    </section>
  );
}

function PlanCard({
  zone,
  tone,
  plan,
}: {
  zone: ZoneInfo;
  tone: "fit" | "warn" | "fail";
  plan: ReturnType<typeof resolvePlan>["plan"];
}) {
  const toneLabel = tone === "fit" ? "Fits this place" : tone === "warn" ? "Works, with a catch" : "This pairing fights itself";
  const rows = [
    ["Winter", zone.winters],
    ["Country", zone.regions],
    ["Sow", plan.sow],
    ["Set out", plan.plant],
    ["Lift the bulbs", plan.harvest],
    ["Seed crop", plan.seed],
    ["Keep the bulbs", plan.keep],
    ["Varieties", plan.varieties],
  ];
  return (
    <div className="mt-8 border border-ink/15">
      <div className="border-b border-ink/15 px-5 py-4">
        <p className="font-display text-sm text-amber">{toneLabel}</p>
        <h3 className="mt-1 font-display text-3xl">Zone {zone.id}</h3>
        <p className="mt-3 max-w-2xl text-lg leading-snug">{plan.headline}</p>
      </div>
      <dl>
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 border-b border-ink/10 px-5 py-4 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
            <dt className="font-display text-amber">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function YearList({
  zoneId,
  day,
  tone,
  plan,
  checks,
  onToggleCheck,
}: {
  zoneId: string;
  day: DayGroup;
  tone: "fit" | "warn" | "fail";
  plan: ReturnType<typeof resolvePlan>["plan"];
  checks: string[];
  onToggleCheck: (id: string) => void;
}) {
  const tasks =
    tone === "fail"
      ? [
          { id: `${zoneId}-${day}-rethink`, when: "Before you buy seed", do: plan.headline },
          { id: `${zoneId}-${day}-instead`, when: "What to do instead", do: plan.varieties },
        ]
      : [
          { id: `${zoneId}-${day}-sow`, when: "Sow", do: plan.sow },
          { id: `${zoneId}-${day}-plant`, when: "Set out", do: plan.plant },
          { id: `${zoneId}-${day}-lift`, when: "Lift", do: plan.harvest },
          { id: `${zoneId}-${day}-keep`, when: "Cure and store", do: plan.keep },
          {
            id: `${zoneId}-${day}-stock`,
            when: "At harvest",
            do: "Set aside at least twenty true-to-type bulbs that did not bolt. Not hybrids. Not thick necks.",
          },
          { id: `${zoneId}-${day}-seed`, when: "Seed, the next year", do: plan.seed },
        ];
  const done = tasks.filter((task) => checks.includes(task.id)).length;
  return (
    <div className="mt-8">
      <p className="font-display text-amber">{tone === "fail" ? "Fix the packet first" : "Your window"}</p>
      <h3 className="mt-1 max-w-2xl font-display text-3xl">{plan.headline}</h3>
      <p className="mt-3 text-sm text-muted tabular-nums">
        {done} of {tasks.length} marked done
      </p>
      <ul className="mt-4 border-t border-ink/15">
        {tasks.map((task) => {
          const on = checks.includes(task.id);
          return (
            <li key={task.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => onToggleCheck(task.id)}
                className={`${press} flex w-full gap-4 border-b border-ink/15 py-4 text-left`}
              >
                <span
                  className={`mt-1 grid h-6 w-6 shrink-0 place-items-center border ${on ? "border-amber bg-amber text-paper" : "border-ink/30"}`}
                  aria-hidden="true"
                >
                  {on ? <Check className="h-4 w-4" /> : null}
                </span>
                <span>
                  <span className="block font-display text-sm text-amber">{task.when}</span>
                  <span className={`mt-1 block ${on ? "text-muted" : ""}`}>{task.do}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CompanionBoard() {
  const [tab, setTab] = useState<"help" | "apart">("help");
  const list = tab === "help" ? HELPS : APART;
  return (
    <section className="my-8" aria-label="Companion plants">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Companion lists">
        {(
          [
            ["help", "Plant with them"],
            ["apart", "Keep apart"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={tab === id}
            onClick={() => setTab(id)}
            className={`${press} h-11 border px-4 font-display text-lg ${
              tab === id ? "border-amber bg-amber text-paper" : "border-ink/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <ul className="mt-4">
        {list.map((item) => (
          <li key={item.name} className="border-t border-ink/15 py-5">
            <h3 className="font-display text-3xl">{item.name}</h3>
            <p className="mt-2 max-w-2xl italic text-muted">{item.place}</p>
            <p className="mt-3 max-w-2xl">{item.why}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Pager({ index, onOpen }: { index: number; onOpen: (id: string) => void }) {
  const prev = CHAPTERS[index - 1];
  const next = CHAPTERS[index + 1];
  return (
    <nav className="mt-14 grid gap-3 border-t border-ink/15 pt-5 sm:grid-cols-2" aria-label="Chapter pages">
      {prev ? (
        <button type="button" onClick={() => onOpen(prev.id)} className={`${press} min-h-11 border border-ink/15 px-4 py-3 text-left`}>
          <span className="block text-sm text-muted">Previous</span>
          <span className="font-display text-xl">{prev.id === "front" ? "Front" : prev.title}</span>
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button
          type="button"
          onClick={() => onOpen(next.id)}
          className={`${press} min-h-11 border border-amber bg-amber px-4 py-3 text-right text-paper sm:col-start-2`}
        >
          <span className="block text-sm text-paper/80">Next</span>
          <span className="font-display text-xl">{next.title}</span>
        </button>
      ) : null}
    </nav>
  );
}
