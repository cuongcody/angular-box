const mock = () => {
  let storage = {};
  return {
    getItem: key => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ''),
    removeItem: key => delete storage[key],
    clear: () => (storage = {})
  };
};

window.matchMedia =
  window.matchMedia ||
  (() => {
    return ({
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    } as unknown) as MediaQueryList;
  });
window.open = () => window;

navigator.msSaveOrOpenBlob = () => true;
URL.createObjectURL = () => 'url';

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', { value: () => ['-webkit-appearance'] });
