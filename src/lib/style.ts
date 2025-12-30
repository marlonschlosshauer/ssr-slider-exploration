export const merge = (...classNames: (string | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");
