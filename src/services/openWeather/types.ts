import {geoEndpointResponseSchema} from '@services/openWeather/zodSchemas';
import z from 'zod';

export type OWMetrics = 'standard' | 'metric' | 'imperial';
export type OWLanguage = keyof z.infer<
  typeof geoEndpointResponseSchema
>[0]['local_names'];
