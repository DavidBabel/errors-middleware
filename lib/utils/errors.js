export class IllegalArgumentError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'IllegalArgumentError';
  }
}
