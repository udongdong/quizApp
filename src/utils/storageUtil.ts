import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKeys {
  Uuid = 'UUID',
}

export const storeData = async (key: StorageKeys, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (
  key: StorageKeys,
): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ?? undefined;
  } catch (e) {
    console.error(e);
  }
};

export const removeData = async (key: StorageKeys) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
