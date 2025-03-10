import {OpenWeatherApiService} from './index';

describe('OpenWeatherApiService', () => {
  it('the class has instance getter which returns singleton', () => {
    const instance1 = OpenWeatherApiService.getInstance();
    const instance2 = OpenWeatherApiService.getInstance();

    expect(instance2).toBe(instance1);
  });

  it('resolveCoordinatesByLocationName returns some data', async () => {
    await expect(
      OpenWeatherApiService.getInstance().resolveCoordinatesByLocationName({
        locationName: 'Wrocław',
        countryCode: 'pl',
      }),
    ).resolves.toMatchSnapshot();
  });

  it('getWeatherForLocation returns some data', async () => {
    await expect(
      OpenWeatherApiService.getInstance().getWeatherForLocation({
        latitude: 17.76,
        longitude: -65.682,
        language: 'en',
        unitTypes: 'metric',
      }),
    ).resolves.toMatchSnapshot();
  });
});
