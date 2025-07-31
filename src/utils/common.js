export const getLimitText = (text, size = 16) => {
  if (!text) {
    return "";
  }

  return text.length > size ? text.slice(0, size) + "..." : text;
};
