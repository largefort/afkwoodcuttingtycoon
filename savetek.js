// SaveTek.js

const SaveTek = {
  init: function() {
    // Initialize SaveTek, if necessary
  },
  saveData: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getData: function(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  hasData: function(key) {
    return localStorage.getItem(key) !== null;
  },
  clearData: function(key) {
    localStorage.removeItem(key);
  },
  clearAllData: function() {
    localStorage.clear();
  }
};
