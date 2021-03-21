class Adapter {
  //   constructor() {
  //     this.baseUrl = "http://localhost:3000/api/v1";
  //   }
  //   fetchBooks() {
  //     // debugger;
  //     return fetch(`${this.baseUrl}/books`).then((res) => res.json());
  //   }

  //   updateBook(id, body) {
  //     return fetch(`${this.baseUrl}/books/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     }).then((res) => res.json());
  //   }

  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/";
    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  fetchBooks() {
    return this.get(`${this.baseUrl}/books`);
  }

  updateBook(id, body) {
    return this.patch(`${this.baseUrl}/books/${id}`, body);
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
