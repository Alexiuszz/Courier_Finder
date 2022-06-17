export const SetCookie = (name, value, path, exp) => {
  if (typeof document === "undefined") return false;
  document.cookie = `${name}=${value}; expires=${exp}`;
};

export const GetCookie = (name) => {
  if (typeof document === "undefined") return false;
  if (document.cookie.length > 0) {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      .split("=")[1];
    return cookie;
  }
  return '';
};
