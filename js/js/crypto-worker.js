/* Stub crypto worker - echoes messages */
self.onmessage = (e) => {
  const { data } = e;
  // Echo back received data; no cryptographic operations implemented
  postMessage(data);
};
