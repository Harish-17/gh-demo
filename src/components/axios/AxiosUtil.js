import axios from "axios";

const getList = async () => {
  return axios
    .get("https://salesiq.zoho.com/visitor/v2/harishinc/articles", {
      params: { limit: 10 },
    })
    .then((response) => {
      return response.data;
    });
};

const getDetails = async (articleId) => {
  return axios
    .get(`https://salesiq.zoho.com/visitor/v2/harishinc/articles/${articleId}`)
    .then((response) => response.data.data);
};

export { getList, getDetails };
