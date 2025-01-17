const { TransactionService } = require('./services/transactionService');

class APIFactory {
  constructor(client) {
    this.client = client;
  }

  get transactionService() {
    if (!this._transactionService) {
      this._transactionService = new TransactionService(this.client);
    }
    return this._transactionService;
  }

}

module.exports = { APIFactory };
