import { createClient } from '@insforge/sdk';

export interface InsForgeClient {
  database: any;
  storage: any;
  auth: any;
}

const insforgeUrl = process.env.NEXT_PUBLIC_INSFORGE_URL;
const insforgeAnonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY;

if (!insforgeUrl || !insforgeAnonKey) {
  throw new Error('Missing InsForge environment variables');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const insforge = createClient({
  url: insforgeUrl,
  key: insforgeAnonKey,
} as any) as InsForgeClient;




