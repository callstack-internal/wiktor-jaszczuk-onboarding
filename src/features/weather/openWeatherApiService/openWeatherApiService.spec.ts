import {OpenWeatherApiService} from './index';

describe('OpenWeatherApiService', () => {
  it('the class has instance getter which returns singleton', () => {
    const instance1 = OpenWeatherApiService.getInstance();
    const instance2 = OpenWeatherApiService.getInstance();

    expect(instance2).toBe(instance1);
  });

  it('resolveCoordinatesByLocationName returns some data', async () => {
    await expect(
      OpenWeatherApiService.getInstance().resolveCoordinatesByLocationName(
        'Wrocław',
        'pl',
      ),
    ).resolves.toMatchSnapshot();
  });

  it('getWeatherForLocation returns some data', async () => {
    await expect(
      OpenWeatherApiService.getInstance().getWeatherForLocation(17.76, -65.682),
    ).resolves.toMatchSnapshot();
  });
});
