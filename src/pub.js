
export const pub = (p) =>
  `${process.env.PUBLIC_URL}/${String(p).replace(/^\/+/, "")}`;