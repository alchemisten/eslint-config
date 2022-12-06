export const bob = (a: string): string => {
  return a;
};

export interface Foo {
  a: number;
  b: number;
  c: number;
  d: string;
}

export const carl = (c: number): void => {
  const stuff = 0;
  const foo: Foo = {
    a: 0,
    b: 9,
    c: 12,
    d: 'a Code',
  };

  Object.keys(foo).forEach((key) => {
    foo[key] += `-${stuff}-${c}`;
  });
};

export interface NamedObject {
  name: string;
}

/* This example is deliberately verbose to demonstrate consistent-return.
 * Remove the return in the last line to see the error.
 */
export const findByName = (list: NamedObject[], name: string): NamedObject | undefined => {
  for (const item of list) {
    if (item.name === name) {
      return item;
    }
  }

  return undefined;
};
