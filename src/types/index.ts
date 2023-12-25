export type OptionalKeys<T extends object> = {
  [P in keyof T]: object extends Pick<T, P> ? P : never;
}[keyof T];

export type OptionalPropertyOf<T extends object> = Pick<T, OptionalKeys<T>>;

export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
