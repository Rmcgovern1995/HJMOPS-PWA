/* Stub calculation worker - echoes tasks */
self.onmessage = (e) => {
  const { data } = e;
  // Echo back tasks; no heavy computations implemented
  postMessage(data);
};
