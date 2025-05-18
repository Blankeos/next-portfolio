import { DynamicRoute } from 'next-typesafe-url';
import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Route = {
  routeParams: z.object({
    slug: z.string(),
  }),
} satisfies DynamicRoute;
export type RouteType = typeof Route;
