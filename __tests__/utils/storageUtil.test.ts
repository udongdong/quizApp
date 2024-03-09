import 'react-native';
import {StorageKeys, getData, removeData, storeData} from '../../src/utils';

describe('storageUtil test', () => {
  test('getData test', async () => {
    const id = await getData(StorageKeys.Uuid);
    expect(id).toBeUndefined();
  });

  test('storeData test', async () => {
    await storeData(StorageKeys.Uuid, 'test');
    const id = await getData(StorageKeys.Uuid);
    expect(id).toBe('test');
  });

  test('removeData test', async () => {
    await removeData(StorageKeys.Uuid);
    const id = await getData(StorageKeys.Uuid);
    expect(id).toBeUndefined();
  });
});
