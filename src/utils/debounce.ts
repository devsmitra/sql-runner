export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 300
) => {
  let timeoutId: number | undefined;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
