import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('carlos-portfolio');

export const databases = new Databases(client);
