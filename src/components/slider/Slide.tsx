"use client";

import { DragEvent, FC, PropsWithChildren } from "react";
import styles from "./Slider.module.scss";
import { PropsWithClassName } from "@/type/style";
import { merge } from "@/lib/style";

export const Slide: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  // const onDragStart = (e: DragEvent<HTMLLIElement>) => {};
  // const onDragEnd = (e: DragEvent<HTMLLIElement>) => {};

  return <li className={merge(styles.slide, className)}>{children}</li>;
};
