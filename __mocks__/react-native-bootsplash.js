export default {
  hide: jest.fn().mockResolvedValue(),
  isVisible: jest.fn().mockResolvedValue(false),
  useHideAnimation: jest.fn().mockReturnValue({
    container: {},
    logo: {source: 0},
    brand: {source: 0},
  }),
};
