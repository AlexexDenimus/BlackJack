// @flow

import { createBrowserHistory } from 'history';
import type { BrowserLocation } from 'history';
import storage from '../store/storage';

const history = createBrowserHistory();
const STORAGE_KEY = 'hasPreviousLocation';

let initialLocation: BrowserLocation = history.location;

storage.set(STORAGE_KEY, false);

history.listen(
  (location: BrowserLocation, action: string): void => {
    if (!storage.get(STORAGE_KEY) && action.toUpperCase() === 'REPLACE') {
      initialLocation = location;
    }

    storage.set(STORAGE_KEY, initialLocation.key !== location.key);
  }
);

export default history;