import {StorageKeys, getData, storeData} from '../../utils';
import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

export const getUserId = async (): Promise<string> => {
  const userId = await getData(StorageKeys.Uuid);

  if (!userId) {
    const id = uuidV4();
    await storeData(StorageKeys.Uuid, id);

    return id;
  }

  return userId;
};
