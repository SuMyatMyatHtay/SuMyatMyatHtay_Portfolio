"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useHydratedReducedMotion } from "./use-hydrated-reduced-motion";

export type StoryCategory = "achievements" | "community" | "roots";

export type StoryItem = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: "academic" | "sports" | "student" | "service" | "hobbies" | "myanmar";
  category: StoryCategory;
  nodeClass: string;
  tags?: string[];
  details?: string[];
  slides?: Array<{ title: string; description: string; image: string }>;
};

const categories: Array<{
  id: StoryCategory;
  label: string;
  subtitle: string;
  className: string;
}> = [
  {
    id: "achievements",
    label: "Achievements",
    subtitle: "things I worked hard for",
    className: "category-achievements",
  },
  {
    id: "community",
    label: "Campus & Community",
    subtitle: "people I grew with",
    className: "category-community",
  },
  {
    id: "roots",
    label: "Little Pieces of Me",
    subtitle: "things that feel like home",
    className: "category-roots",
  },
];

export default function StoryTree({ items }: { items: StoryItem[] }) {
  const reduceMotion = useHydratedReducedMotion();
  const [activeCategory, setActiveCategory] = useState<StoryCategory | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const selected = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );
  const slides = selected?.slides ?? [];
  const slide = slides[slideIndex];
  const image = slide?.image ?? selected?.image;

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
      if (slides.length > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setSlideIndex((current) => (current + direction + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, slides.length]);

  const openItem = (item: StoryItem) => {
    setSlideIndex(0);
    setActiveCategory(item.category);
    setSelectedId(item.id);
  };

  return (
    <div className="storybook-grove storybook-grove-assets">
      <div className="asset-grove-scene">
        <img
          className="asset-grove-backdrop"
          src="/storybook/backdrop.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="asset-grove-theme-tint" aria-hidden="true" />

        
        <div className="asset-grove-note">
          <span>✿</span>
          <h3 className="grove-note-title">Sera&apos;s little world</h3>
          <p className="grove-note-copy">
            Hover a branch.<br />
            Pick a memory.
          </p>
        </div>
        <img
          className="asset-grove-tree"
          src="/storybook/branches-clean.png"
          alt=""
          aria-hidden="true"
        />

        <div
          className={`asset-branch-glow ${activeCategory ? `is-${activeCategory}` : ""}`}
          aria-hidden="true"
        >
          <img
            className="asset-branch-highlight highlight-achievements"
            src="/storybook/branches-clean.png"
            alt=""
          />
          <img
            className="asset-branch-highlight highlight-community"
            src="/storybook/branches-clean.png"
            alt=""
          />
          <img
            className="asset-branch-highlight highlight-roots"
            src="/storybook/branches-clean.png"
            alt=""
          />
        </div>

        <img className="asset-animal asset-animal-fox" src="/storybook/animal-fox.png" alt="" aria-hidden="true" />

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`asset-category ${category.className} ${activeCategory === category.id ? "active" : ""}`}
            onMouseEnter={() => setActiveCategory(category.id)}
            onMouseLeave={() => setActiveCategory(null)}
            onFocus={() => setActiveCategory(category.id)}
            onBlur={() => setActiveCategory(null)}
            onClick={() => setActiveCategory((current) => current === category.id ? null : category.id)}
          >
            <img src="/storybook/branch-tag.png" alt="" aria-hidden="true" />
            <span className="asset-category-label">{category.label}</span>
            <small>{category.subtitle}</small>
          </button>
        ))}

        {items.map((item, index) => {
          const isDimmed = activeCategory !== null && activeCategory !== item.category;
          return (
            <motion.button
              key={item.id}
              type="button"
              className={`asset-story-node ${item.nodeClass} asset-node-${item.category} ${isDimmed ? "dimmed" : ""}`}
              onMouseEnter={() => setActiveCategory(item.category)}
              onMouseLeave={() => setActiveCategory(null)}
              onFocus={() => setActiveCategory(item.category)}
              onBlur={() => setActiveCategory(null)}
              onClick={() => openItem(item)}
              animate={reduceMotion ? undefined : {
                rotate: index % 2 === 0 ? [-1.2, 1.2, -1.2] : [1.1, -1.1, 1.1],
                y: [0, -2, 0],
              }}
              transition={reduceMotion ? undefined : {
                duration: 4.8 + index * 0.28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 0, y: -7 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              aria-label={`Open ${item.label}`}
            >
              <img className="asset-node-frame" src="/storybook/ornament-tag.png" alt="" aria-hidden="true" />
              <span className="asset-node-photo-shell">
                <img
                  className="asset-node-photo"
                  src={item.image}
                  alt=""
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <span className="asset-node-placeholder" aria-hidden="true">♡</span>
              </span>
              <span className="asset-node-label">{item.label}</span>
            </motion.button>
          );
        })}

        <img
          className="asset-grove-front"
          src="/storybook/front-barriers.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="story-book-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedId(null);
            }}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby={`story-title-${selected.id}`}
              className={`story-book-card book-${selected.category}`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, y: 36, rotate: -1.5 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={reduceMotion ? { duration: 0.12 } : { type: "spring", stiffness: 280, damping: 24 }}
            >
              <button className="story-book-close" type="button" onClick={() => setSelectedId(null)} aria-label="Close story">
                <X size={19} />
              </button>
              <div className="story-book-spine" aria-hidden="true" />
              <div className="story-book-image">
                <img
                  key={image}
                  src={image}
                  alt={slide?.title ?? `${selected.label} memory`}
                  className={slide ? "story-slide-photo" : undefined}
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <div className="story-book-image-placeholder">
                  <span>♡</span>
                  <small>Photo coming soon</small>
                </div>
                {slides.length > 1 && (
                  <div className="story-slide-controls" role="group" aria-label={`${selected.label} photos`}>
                    <button type="button" aria-label="Previous photo" onClick={() => setSlideIndex((current) => (current - 1 + slides.length) % slides.length)}><ChevronLeft size={20} /></button>
                    <span>{slideIndex + 1} / {slides.length}</span>
                    <button type="button" aria-label="Next photo" onClick={() => setSlideIndex((current) => (current + 1) % slides.length)}><ChevronRight size={20} /></button>
                  </div>
                )}
              </div>
              <div className="story-book-copy">
                <p className="story-book-eyebrow">{selected.eyebrow}</p>
                <h3 id={`story-title-${selected.id}`}>{selected.label}</h3>
                <div aria-live="polite" aria-atomic="true">
                  {slide && <h4 className="story-slide-title">{slide.title}</h4>}
                  <p className="story-book-description">{slide?.description ?? selected.description}</p>
                </div>
                {selected.details && selected.details.length > 0 && (
                  <ul>{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                )}
                {selected.tags && selected.tags.length > 0 && (
                  <div className="story-book-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                )}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
