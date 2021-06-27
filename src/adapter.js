//responsible for communicating with the API to put AJAX calls in one place
class Adapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/";
    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  fetchDevotions() {
    return this.get(`${this.baseUrl}/devotions`);
  }

  fetchCategories() {
    return this.get(`${this.baseUrl}/categories`);
  }

  updateDevotion(id, body) {
    return this.patch(`${this.baseUrl}/devotions/${id}`, body);
  }

  get(url) {
    
    return fetch(url).then((res) => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }



}
