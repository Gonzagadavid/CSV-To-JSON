export default function checkJson(textJson) {
  const jsonRegex  = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
    textJson.replace(/"(\\.|[^"\\])*"/g, '')));
  return jsonRegex;
}
