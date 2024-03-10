import 'react-native';
import {getUserId} from '../../src/modules';

const mockData = '6c479f7f-7b6a-4fe0-bbb1-b55ea00c7341';

jest.mock('uuid', () => ({
  ...jest.requireActual('uuid'),
  v4: jest.fn(() => mockData),
}));

describe('userModule test', () => {
  test('getUserId test', async () => {
    const userid = await getUserId();

    expect(userid).toEqual(mockData);
  });
});
