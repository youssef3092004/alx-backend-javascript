export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
    else throw new TypeError('Name must be a string');
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') this._code = newCode;
    else throw new TypeError('Code must be a string with 3 characters');
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
