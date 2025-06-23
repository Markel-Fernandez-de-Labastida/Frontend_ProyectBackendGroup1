const consultFetch = async (url, method = "GET", body = {}, header = {}) => {
  console.log({ url });
  let option;

  if (method === "POST" || method === "PUT") {
    option = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    };
  } else if (method === "DELETE" || method === "GET") {
    option = {
      method: method,
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    };
  }
  try {
    const answer = await fetch(url, option);
    console.log("respuesta: ", answer);
    const data = await answer.json();
    if (!answer.ok) {
      console.log("STATUS:", data);
      throw {
        ok: false,
        status: answer.status,
        msg: data.msg,
      };
    }
    return data;
  } catch (error) {
    console.log(error);
    if (error.msg) {
      throw error;
    }
    throw {
      ok: false,
      msg: "Error en la consulta.",
    };
  }
};

module.exports = {
  consultFetch,
};
