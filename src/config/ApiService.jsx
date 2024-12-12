import axios from 'axios';

class ApiService {
  static BASE_URL = "https://casaconnect.onrender.com";

  static getHeader() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    };
  }

  /** this registers a new user */
  static async registerUser(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/user/register`, formData, {
        headers: this.getHeader()
      });
      console.log("sign in response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error signup:", error);
      throw error;
    }
  }

  /** this logs in a registered user */
  static async loginUser(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/auth/login`, formData, {
        headers: this.getHeader()
      });
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Rethrow the error so it can be caught in the handleSubmit method
    }
  }
}

export default ApiService;
