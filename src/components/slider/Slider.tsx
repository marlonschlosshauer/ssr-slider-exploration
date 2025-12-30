import { FC, PropsWithChildren } from "react";
import styles from "./Slider.module.scss";
import { PropsWithClassName } from "@/type/style";
import { merge } from "@/lib/style";

export const Slider: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <ul className={merge(styles.slider, className)}>{children}</ul>;
};
