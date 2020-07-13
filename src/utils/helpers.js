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

/**
 * Helper function that converts date strings (YYYY, YYYY-MM, YYYY-MM-DD) into
 * a comparable format e.g. 2020 = 20200000 2020-08-31 = 20200831
 */
export function standardiseDateString(date) {
  const dateNumbers = [...date.replace('-', '')];

  return [0, 0, 0, 0, 0, 0, 0, 0]
    .map((_, index) => dateNumbers[index] ? dateNumbers[index] : 0)
    .join();
}
