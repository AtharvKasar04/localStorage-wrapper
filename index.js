// Set an item in localStorage with JSON serialization
function setItem(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
}

// Get an item from localStorage and parse it from JSON
function getItem(key) {
    try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
        console.error("Error retrieving from localStorage:", error);
        return null;
    }
}

// Remove an item from localStorage
function removeItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage:", error);
    }
}

// Clear all items in localStorage
function clear() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error("Error clearing localStorage:", error);
    }
}

// Retrieve all key-value pairs from localStorage
function getAll() {
    try {
        const entries = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = getItem(key);
            entries[key] = value;
        }
        return entries;
    } catch (error) {
        console.error("Error retrieving all items from the localStorage:", error);
        return null;
    }
}

module.exports = {
    setItem,
    getItem,
    removeItem,
    clear,
    getAll,
};
