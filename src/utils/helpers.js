/**
 * Higher-order function that delays the execution of its function argument
 * If executed in close succession the most recent call will be cancelled
 */
export function debounce(inner, ms = 0) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      inner(...args);
    }, ms);
  };
}
