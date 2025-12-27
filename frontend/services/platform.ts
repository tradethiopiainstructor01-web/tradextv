export interface PlatformOverview {
  categories: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  featurePillars: Array<{
    id: string;
    title: string;
    description: string;
    points: string[];
  }>;
  programs: Array<{
    title: string;
    description: string;
  }>;
  roles: Array<{
    name: string;
    access: string;
  }>;
}

const BASE_URL =
  (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/+$/, '') || '/api';

async function parseJson(response: Response) {
  const payload = await response.json();
  if (!payload || typeof payload !== 'object') {
    throw new Error('Unexpected response from the TradeXTV API');
  }
  return payload;
}

export async function fetchPlatformOverview(): Promise<PlatformOverview> {
  const response = await fetch(`${BASE_URL}/platform/overview`);
  if (!response.ok) {
    const errorPayload = await parseJson(response).catch(() => null);
    const message =
      errorPayload?.message ?? 'Unable to load the platform overview';
    throw new Error(message);
  }

  const dataPayload = await parseJson(response);
  if (!dataPayload.success || !dataPayload.data) {
    throw new Error('TradeXTV API did not provide platform data');
  }

  return dataPayload.data;
}
