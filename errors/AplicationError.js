class AplicationError extends Error {
  constructor(code, message) {
    super();

    this.status = code || 500;
    this.message = message || 'Aplication error';
    this.name = this.constructor.name; // Aplication error
  }
}

module.exports = AplicationError;