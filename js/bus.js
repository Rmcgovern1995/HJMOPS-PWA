/* Simple event bus for decoupled communication */
window.bus = {
  events: {},
  on(event, handler) {
    (this.events[event] = this.events[event] || []).push(handler);
  },
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
};
