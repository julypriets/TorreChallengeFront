export default function({ $axios }) {
  // Set baseURL to something different
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "'https://torre-challenge.herokuapp.com/api/'"
      : "http://localhost:8080/api/";
  $axios.setBaseURL(baseURL);
}
