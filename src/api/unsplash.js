import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qAv4zjpHSUaMg_UKydUgJAzu-Nbpe44Q3HIeEvZRyEk"
  }
});
