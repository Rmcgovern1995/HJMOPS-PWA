/* Simplified worker pool stub */
window.workerPool = {
  runTask: function(task, payload) {
    // Immediately resolve with null; tasks not executed.
    return Promise.resolve(null);
  }
};
