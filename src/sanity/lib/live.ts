// Querying with "sanityFetch" will keep content automatically updated.
// Import and render "<SanityLive />" in a layout to enable it; see
// https://github.com/sanity-io/next-sanity#live-content-api for details.
import { defineLive } from 'next-sanity/live';
import { apiVersion } from '../env';
import { client } from './client';

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion }),
});
