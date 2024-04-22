import type { NamedObject } from './typescript';
import { findByName } from './typescript';

export class TheClass {
  private sum: number;

  private things: NamedObject[] = [];

  public constructor() {
    this.doSomething();
  }

  public static getMeSomeStrings(): string[] {
    return ['a', 'b', 'c'];
  }

  private doSomething(): void {
    this.sum = 0;
    for (let i = 0; i < 100; i += 1) {
      this.sum += i;
    }
  }

  private findByName(searchedName: string): NamedObject {
    return findByName(this.things, searchedName);
  }
}
