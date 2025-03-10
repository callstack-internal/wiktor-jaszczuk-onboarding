import z from 'zod';
import {geoEndpointResponseSchema} from './zodSchemas';

export type OWMetrics = 'standard' | 'metric' | 'imperial';
export type OWLanguage = keyof z.infer<
  typeof geoEndpointResponseSchema
>[0]['local_names'];
