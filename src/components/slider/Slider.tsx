"use client";

import { FC, PropsWithChildren, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import { PropsWithClassName } from "@/type/style";
import { merge } from "@/lib/style";

export const Slider: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const startX = useRef(0);
  const initialScrollLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!sliderRef.current) return;

    if (
      sliderRef.current &&
      sliderRef.current.scrollLeft !== initialScrollLeft.current
    ) {
      e.preventDefault();
      e.stopPropagation();
    }

    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    setScrollLeft(sliderRef.current.scrollLeft);
    initialScrollLeft.current = sliderRef.current.scrollLeft;

    // Capture pointer to continue receiving events even if cursor leaves element
    // sliderRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!isDragging.current || !sliderRef.current) return;

    if (
      sliderRef.current &&
      sliderRef.current.scrollLeft !== initialScrollLeft.current
    ) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
    }

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiply by 1.5 for faster scroll
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLUListElement>) => {
    isDragging.current = false;

    if (sliderRef.current) {
      sliderRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const onPointerLeave = () => {
    // Only stop dragging if pointer actually leaves (pointer capture handles this)
    if (isDragging && sliderRef.current) {
      isDragging.current = false;
    }
  };

  return (
    <ul
      ref={sliderRef}
      className={merge(styles.slider, className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </ul>
  );
};
