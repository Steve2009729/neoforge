'use client';

import { useState, useEffect } from 'react';

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  retry: () => Promise<void>;
}

export function useApi<T>(
  fetchFn: () => Promise<T>,
  immediate = true
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const retry = async () => {
    await fetchData();
  };

  // Auto-fetch on mount if immediate
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, []);

  return { data, loading, error, retry };
}
