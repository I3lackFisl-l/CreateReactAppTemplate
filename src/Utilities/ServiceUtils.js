const CreateRequest = reqType => {
  // const bearerKey = localStorage.getItem("token");
  return {
    method: reqType,
    headers: {
      "Content-Type": "application/json" //,
      // 'Authorization': 'bearer ' + bearerKey
    }
  };
};

export const fetchGet = url => {
  return fetch(url, CreateRequest("GET"))
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log("fetchGetError:", e));
};

export const fetchPost = (url, param) => {
  const request = { ...CreateRequest("POST"), body: JSON.stringify(param) };
  return fetch(url, request)
    .then(res => res)
    .catch(e => console.log("fetchPostError:", e));
};

export const fetchDel = url => {
  return fetch(url, CreateRequest("DELETE"))
    .then(res => res)
    .catch(e => console.log("fetchDelError:", e));
};

export const fetchPut = (url, param) => {
  const request = { ...CreateRequest("PUT"), body: JSON.stringify(param) };
  return fetch(url, request)
    .then(res => res)
    .catch(e => console.log("fetchPutError:", e));
};
