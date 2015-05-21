interface Attribute {
  // static attrName: string;

  add(node: HTMLElement, value: any): void;
  remove(node: HTMLElement): void;
  value(node: HTMLElement): any;
}

export default Attribute;
