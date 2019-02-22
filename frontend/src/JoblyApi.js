// Helper class to make axios requests to database fron front-end

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    let _token = JSON.parse(localStorage.getItem("token"));

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(`${BASE_URL}/${endpoint}`, {
        params: { _token, ...params },
      });
    } else if (verb === "post") {
      q = axios.post(`${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(`${BASE_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async getCompaniesSearch(name) {
    let res = await this.request(`companies?search=${name}`);
    return res.companies;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async getJobsSearch(title) {
    let res = await this.request(`jobs?search=${title}`);
    return res.jobs;
  }

  static async login(user) {
    let res = await this.request(`login`, user, "post");
    return res.token;
  }

  static async register(user) {
    let res = await this.request(`users`, user, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(user, username) {
    let res = await this.request(`users/${username}`, user, "patch");
    return res.user;
  }

  static async apply(id, state) {
    let res = await this.request(`jobs/${id}/apply`, { state }, "post");
    return res.message;
  }

  static async getJobsUserAppliedTo(username) {
    let res = await this.request(`users/${username}/jobs-applied-to`);
    return res.jobsAppliedTo;
  }
}

export default JoblyApi;
