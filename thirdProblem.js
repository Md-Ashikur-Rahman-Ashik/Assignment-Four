function deleteInvalids(arrays) {
  if (!Array.isArray(arrays)) {
    return "Please provide an array";
  }

  const final = [];
  for (const array of arrays) {
    if (isNaN(array)) {
      continue;
    } else if (typeof array === "number") {
      final.push(array);
    }
  }
  return final;
}
