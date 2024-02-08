function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  const check = name.slice(-1);
  const convert = check.toLowerCase();

  if (convert.includes("a") || convert.includes("y")) {
    return "Good Name";
  } else if (convert.includes("i") || convert.includes("e")) {
    return "Good Name";
  } else if (convert.includes("o") || convert.includes("u")) {
    return "Good Name";
  } else if (convert.includes("w")) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
