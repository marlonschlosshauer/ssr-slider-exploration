import { FC } from "react";
import { Slider } from "../slider/Slider";
import { Slide } from "../slider/Slide";
import styles from "./Square.module.scss";

export const Squares: FC = () => {
  return (
    <section>
      <Slider className={styles.slider}>
        {new Array(5).fill(1).map((_, key) => (
          <Slide key={key} className={styles.slide}>
            <a href={`#${key}`}>
              <article className={styles.square}>{key}</article>
            </a>
          </Slide>
        ))}
      </Slider>
    </section>
  );
};
