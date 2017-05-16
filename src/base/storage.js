import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,

  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return
  // the latest data.
  sync : {
    // we'll talk about the details later.
  }
});

/**
 * @desc 保存，强key value
 * @param data
 */
const save = data => new Promise((resolve, reject) => {
  storage.save({
    key: data.key,
    rawData: data.value
  });
  resolve();
});

/**
 * @desc 读取，按照 key
 * @param key
 * @return {Promise.<*>}
 */
const load = key => new Promise((resolve, reject) => {
  storage.load({
    key,
  }).then(val => resolve(val))
    .catch(e => reject(e));
});

export default {
  save,
  load,
};
