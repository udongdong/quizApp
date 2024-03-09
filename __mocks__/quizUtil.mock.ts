jest.mock('../src/utils', () => ({
  ...jest.requireActual('../src/utils'),
  suffle: jest.fn(arr => {
    return arr;
  }),
}));
