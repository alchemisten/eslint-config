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
