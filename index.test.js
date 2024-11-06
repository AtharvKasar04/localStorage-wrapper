const storage = require("./index");

describe("Local Storage Wrapper", () => {
    // Mock localStorage

    // Mock localStorage
    beforeAll(() => {
        global.localStorage = {
            store: {},
            setItem(key, value) {
                this.store[key] = value;
            },
            getItem(key) {
                return this.store[key] || null;
            },
            removeItem(key) {
                delete this.store[key];
            },
            clear() {
                this.store = {};
            },
            key(index) {
                return Object.keys(this.store)[index] || null;
            },
            get length() {
                return Object.keys(this.store).length;
            }
        };
    });


    beforeEach(() => {
        // Clear localStorage before each test to start with a clean slate
        localStorage.clear();
    });

    test("should store and retrieve an item", () => {
        storage.setItem("name", "John Doe");
        const result = storage.getItem("name");
        expect(result).toBe("John Doe");
    });

    test("should store and retrieve an object", () => {
        const user = { name: "Alice", age: 30 };
        storage.setItem("user", user);
        const result = storage.getItem("user");
        expect(result).toEqual(user);
    });

    test("should return null for non-existent keys", () => {
        const result = storage.getItem("nonExistentKey");
        expect(result).toBeNull();
    });

    test("should remove an item", () => {
        storage.setItem("itemToRemove", "some data");
        storage.removeItem("itemToRemove");
        const result = storage.getItem("itemToRemove");
        expect(result).toBeNull();
    });

    test("should clear all items", () => {
        storage.setItem("key1", "value1");
        storage.setItem("key2", "value2");
        storage.clear();
        expect(storage.getItem("key1")).toBeNull();
        expect(storage.getItem("key2")).toBeNull();
    });

    test("should retrieve all items as an object", () => {
        const data = { key1: "value1", key2: { nested: "data" } };
        storage.setItem("key1", data.key1);
        storage.setItem("key2", data.key2);

        const allItems = storage.getAll();
        expect(allItems).toEqual(data);
    });
});
