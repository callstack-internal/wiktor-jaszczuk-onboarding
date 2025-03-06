import {OpenWeatherService} from '@services/openWeather';

describe('OpenWeatherService', () => {
  it('the class has instance getter which returns singleton', () => {
    const instance1 = OpenWeatherService.getInstance();
    const instance2 = OpenWeatherService.getInstance();

    expect(instance2).toBe(instance1);
  });

  it('resolveCoordinatesByLocationName returns some data', async () => {
    await expect(
      OpenWeatherService.getInstance().resolveCoordinatesByLocationName(
        'Wrocław',
        'pl',
      ),
    ).resolves.toMatchSnapshot();
  });

  it('getWeatherForLocation returns some data', async () => {
    await expect(
      OpenWeatherService.getInstance().getWeatherForLocation(17.76, -65.682),
    ).resolves.toMatchSnapshot();
  });
});
