import { createError, eventHandler, readBody } from "h3";

export default eventHandler(async (event) => {
  const user = await readBody(event);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const getUser = await $fetch("http://localhost:8000/user/auth/login", {
    body: {
      username: user.username,
      password: user.password,
    },
    headers,
    method: 'POST'
  });

  if (!getUser) {
    throw createError(`Incorrect Password.`)
  }

  return getUser;
});
