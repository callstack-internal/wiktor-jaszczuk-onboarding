import {z} from 'zod';

const zodTimestamp = z.number().int().min(0);

const zodLocationNamesShape = z.object({
  eo: z.string().optional(),
  fr: z.string().optional(),
  de: z.string().optional(),
  lv: z.string().optional(),
  pt: z.string().optional(),
  ar: z.string().optional(),
  en: z.string().optional(),
  he: z.string().optional(),
  uk: z.string().optional(),
  la: z.string().optional(),
  sr: z.string().optional(),
  ru: z.string().optional(),
  hu: z.string().optional(),
  it: z.string().optional(),
  bg: z.string().optional(),
  yi: z.string().optional(),
  zh: z.string().optional(),
  es: z.string().optional(),
  pl: z.string().optional(),
  lt: z.string().optional(),
  ja: z.string().optional(),
  mk: z.string().optional(),
  be: z.string().optional(),
  cs: z.string().optional(),
  sk: z.string().optional(),
});

export const geoEndpointResponseSchema = z.array(
  z.object({
    name: z.string(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string().optional(),
    local_names: zodLocationNamesShape,
  }),
);

export const weatherEndpointResponseSchema = z.object({
  coord: z.object({
    lon: z.number().min(-180).max(180),
    lat: z.number().min(-90).max(90),
  }),
  weather: z.array(
    z.object({
      id: z.number().int().positive(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number().min(0).max(100),
    sea_level: z.number(),
    grnd_level: z.number(),
  }),
  visibility: z.number(),
  wind: z.object({
    speed: z.number(),
    deg: z.number().min(0).max(360),
    gust: z.number().optional(),
  }),
  clouds: z.object({
    all: z.number().min(0).max(100),
  }),
  rain: z
    .object({
      '1h': z.number().min(0),
    })
    .optional(),
  snow: z
    .object({
      '1h': z.number().min(0),
    })
    .optional(),
  dt: zodTimestamp,
  sys: z.object({
    country: z.string(),
    sunrise: zodTimestamp,
    sunset: zodTimestamp,
  }),
  timezone: z.number().int(),
});
