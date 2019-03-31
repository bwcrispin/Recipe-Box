function getRequest(location, callback) {
  fetch(location)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
          method: "POST",
          body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => console.log(err))
}

function putRequest(location, requestBody, callback) {
  fetch(location, {
          method: "PUT",
          body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => console.log(err))
}

// function patchRequest(location, requestBody, callback) {
//   fetch(location, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Method': PATCH,
//       'Authorization': ''
//     },
//           method: "PATCH",
//           body: JSON.stringify(requestBody)
//       })
//       .then(response => response.json())
//       .then(data => callback(data))
//       .catch(err => console.log(err))
// }

function deleteRequest(location, requestBody, callback) {
  fetch(location, {
          method: "DELETE",
          body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => console.log(err))
}

export default {
  getRequest, postRequest, putRequest, deleteRequest
}