const ROOT_URL = "https://frebi.willandskill.eu/";

export default class {
  async register(
    firstName,
    lastName,
    email,
    password,
    organisationName,
    organisationKind
  ) {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind,
    };

    const url = `${ROOT_URL}auth/users/`;

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async activateUser(uid, token, signal) {
    const url = `${ROOT_URL}auth/users/activate/`;
    const payload = { uid, token };
    return fetch(url, {
      method: "POST",
      signal,
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async getLoginUser() {
    const url = `${ROOT_URL}api/v1/me`;
    return fetch(url, {
      method: "GET",
      headers: this.getPrivateHeaders(),
    });
  }

  async login(email, password) {
    const url = `${ROOT_URL}api-token-auth/`;
    const payload = { email, password };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async getCustomerList({ signal }) {
    const url = `${ROOT_URL}api/v1/customers`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
      signal,
    });
  }

  async getCustomer(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  async createCustomer(payload) {
    const url = `${ROOT_URL}api/v1/customers`;
    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async deleteCustomer(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/ `;
    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders(),
    });
  }

  async editCustomerInfo(id, payload) {
    const url = `${ROOT_URL}api/v1/customers/${id}/ `;

    return fetch(url, {
      method: "PUT",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN");
  }

  deleteToken() {
    localStorage.setItem("BUSINESS_TOKEN", "");
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
