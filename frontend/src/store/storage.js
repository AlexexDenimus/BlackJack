// @flow

const storage = window.localStorage;

export type StorageChangeListener = (prev: any, cur: any, key: string) => void;

const listeners: Map<string, StorageChangeListener[]> = new Map();

function parseValue(value: ?string) {
  try {
    return value && JSON.parse(value);
  } catch (e) {
    return value;
  }
}

window.addEventListener('storage', (event: StorageEvent) => {
  if (event.storageArea !== storage) {
    return;
  }

  const { key } = event;

  if (key) {
    (listeners.get(key) || []).forEach(listener =>
      listener(parseValue(event.oldValue), parseValue(event.newValue), key)
    );
  }
});

function get(key: string): any {
  return storage ? JSON.parse(storage.getItem(key)) : null;
}

function set(key: string, value: any): void {
  storage.setItem(key, JSON.stringify(value));
}

function subscribe(key: string, listener: StorageChangeListener) {
  listeners.set(key, [listener, ...(listeners.get(key) || [])]);
}

function unsubscribe(key: string, listener: StorageChangeListener) {
  const currentListeners = listeners.get(key);

  if (!currentListeners) {
    return;
  }

  listeners.set(key, currentListeners.filter(l => l !== listener));
}

export default { get, set, subscribe, unsubscribe };
