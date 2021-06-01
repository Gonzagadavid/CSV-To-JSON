export default function checkJson(textJson) {
  const jsonRegex = /\[?{("\w+":"[\w@.\s]+",?)+}\]?/gm;
  return jsonRegex.test(textJson);
}
