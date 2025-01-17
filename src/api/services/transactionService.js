const { endpoints } = require('../../..//config/endpointConfig');

class TransactionService {
    constructor(client) { 
      this.client = client;
      this.endpoint= endpoints.api.transactions;
    }
  
    async findTransactionsByAmount(accountId, amount) {
      const response = await this.client.get(this.endpoint.search.amount.replace('{id}', accountId).replace('{value}', amount));
      return response; 
    }
  }
  
  module.exports = { TransactionService };