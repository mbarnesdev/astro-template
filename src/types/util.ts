export type WPReturnWrap<K extends string, V> = {
  [P in K]: {
    nodes: V;
  };
};

export type WPPostReturnWrap<T> = WPReturnWrap<"posts", T>;
