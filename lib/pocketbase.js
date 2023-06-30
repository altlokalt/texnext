import PocketBase from 'pocketbase';

const url = 'https://analytics.minfuel.com';

export const client = new PocketBase(url);
client.autoCancellation(false);