/* Simple event bus for HJMOPS PWA */
window.bus = (() => {
  const listeners = {};
  return {
    on(event, callback) {
      if (!listeners[event]) {
        listeners[event] = [];
      }
      listeners[event].push(callback);
    },
    emit(event, data) {
      (listeners[event] || []).forEach((cb) => cb(data));
    },
    off(event, callback) {
      if (listeners[event]) {
        const idx = listeners[event].indexOf(callback);
        if (idx !== -1) listeners[event].splice(idx, 1);
      }
    }
  };
})();
