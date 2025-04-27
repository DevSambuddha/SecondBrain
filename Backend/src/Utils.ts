export const randomString = (length: number) => {
  let options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += options.charAt(Math.floor(Math.random() * options.length));
  }
  return result;
};
