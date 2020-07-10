export function debounce(inner, ms = 0) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      inner(...args);
    }, ms);
  };
}
