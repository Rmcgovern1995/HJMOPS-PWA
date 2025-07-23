/* Calc worker stub - echoes messages back */
self.onmessage = (e) => {
  // echo back the same data
  self.postMessage(e.data);
};
