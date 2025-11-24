"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// Motion Design System
// Juliet Brown style: subtle, purposeful motion
// ============================================

export const motion = {
  // Duration presets (seconds)
  duration: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
  },

  // Easing - smooth deceleration
  ease: {
    default: "power3.out",
    smooth: "power2.out",
    bounce: "back.out(1.2)",
  },

  // Transform distances (pixels)
  distance: {
    small: 20,
    medium: 40,
    large: 60,
  },

  // Scale values
  scale: {
    subtle: 0.98,
    normal: 1,
    hover: 1.03,
  },

  // Stagger timing (seconds)
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

// ============================================
// Accessibility: Reduced Motion Check
// ============================================

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ============================================
// Animation Utilities
// ============================================

// Fade in from bottom
export function fadeInUp(
  element: gsap.TweenTarget,
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    ease?: string;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  const {
    duration = motion.duration.normal,
    delay = 0,
    distance = motion.distance.small,
    ease = motion.ease.default,
  } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, duration, delay, ease }
  );
}

// Stagger fade in for multiple elements
export function staggerFadeInUp(
  elements: gsap.TweenTarget,
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  const {
    duration = motion.duration.normal,
    delay = 0,
    distance = motion.distance.small,
    stagger = motion.stagger.normal,
    ease = motion.ease.default,
  } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, duration, delay, stagger, ease }
  );
}

// Scroll-triggered animation
export function scrollFadeInUp(
  element: gsap.TweenTarget,
  options: {
    duration?: number;
    distance?: number;
    ease?: string;
    start?: string;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  const {
    duration = motion.duration.normal,
    distance = motion.distance.medium,
    ease = motion.ease.default,
    start = "top 85%",
  } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Scroll-triggered stagger animation
export function scrollStaggerFadeInUp(
  container: gsap.DOMTarget,
  childSelector: string,
  options: {
    duration?: number;
    distance?: number;
    stagger?: number;
    ease?: string;
    start?: string;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(`${container} ${childSelector}`, { opacity: 1, y: 0 });
    return;
  }

  const {
    duration = motion.duration.normal,
    distance = motion.distance.small,
    stagger = motion.stagger.normal,
    ease = motion.ease.default,
    start = "top 85%",
  } = options;

  const children = document.querySelectorAll(
    `${container} ${childSelector}`
  ) as unknown as gsap.TweenTarget;

  gsap.fromTo(
    children,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Card hover animation
export function setupCardHover(cardSelector: string) {
  if (prefersReducedMotion()) return;

  const cards = document.querySelectorAll(cardSelector);

  cards.forEach((card) => {
    const image = card.querySelector("img");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -4,
        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
        duration: motion.duration.fast,
        ease: motion.ease.default,
      });

      if (image) {
        gsap.to(image, {
          scale: motion.scale.hover,
          duration: motion.duration.fast,
          ease: motion.ease.default,
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: motion.duration.fast,
        ease: motion.ease.default,
      });

      if (image) {
        gsap.to(image, {
          scale: 1,
          duration: motion.duration.fast,
          ease: motion.ease.default,
        });
      }
    });
  });
}

// Line animation (for labels/underlines)
export function animateLine(
  element: gsap.TweenTarget,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { scaleX: 1 });
    return;
  }

  const { duration = motion.duration.normal, delay = 0 } = options;

  gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: "left center" },
    { scaleX: 1, duration, delay, ease: motion.ease.default }
  );
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
