class PrivateApiClient {

  async initializeFromPage(page) {
    const context = page.context();
    this.apiContext = context.request;
    this.headers = {
        'Accept': 'application/json'
      };
  }

  async get(endpoint) {
    const response = await this.apiContext.get(endpoint, { headers: this.headers });
    if (!response.ok()) {
      throw new Error(`GET request to ${endpoint} failed with status ${response.status()}`);
    }
    return response.json();
  }

  async post(endpoint, data) {
    const response = await this.apiContext.post(endpoint, { data:JSON.stringify(data), headers: this.headers });
    if (!response.ok()) {
      throw new Error(`POST request to ${endpoint} failed with status ${response.status()}`);
    }
    return response.json();
  }

}

module.exports = {PrivateApiClient};
