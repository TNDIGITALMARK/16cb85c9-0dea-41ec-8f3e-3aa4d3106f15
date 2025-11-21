'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { ZyloClient } from './client';
import { getZyloConfig } from './config';
import { ZyloContextValue, TokenStatus } from './types';

export const ZyloContext = createContext<ZyloContextValue | null>(null);

interface ZyloProviderProps {
  children: ReactNode;
}

/**
 * Zylo Provider - Initializes and provides Zylo Client to the app
 *
 * Features:
 * - Auto-boots client on mount (attempts scoped anon, falls back to env anon)
 * - Provides client instance via React context
 * - Manages loading and error states
 * - Cleans up timers on unmount
 */
export function ZyloProvider({ children }: ZyloProviderProps) {
  const [client] = useState<ZyloClient | null>(() => {
    try {
      const config = getZyloConfig();
      return new ZyloClient(config);
    } catch (error) {
      console.error('Failed to initialize Zylo Client:', error);
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [tokenStatus, setTokenStatus] = useState<TokenStatus>({
    type: 'FALLBACK_ANON',
    expiresAt: null,
    isExpired: false,
    hasSignedContext: false,
  });

  useEffect(() => {
    // Skip if client failed to initialize
    if (!client) {
      setIsLoading(false);
      setError(new Error('Zylo Client failed to initialize'));
      return;
    }

    // Boot the client on mount
    client
      .boot()
      .then(() => {
        setTokenStatus(client.getTokenStatus());
        setIsLoading(false);
        console.log('✅ Zylo Provider: Client booted successfully');
      })
      .catch((err) => {
        console.error('❌ Zylo Provider: Boot failed', err);
        setError(err);
        setIsLoading(false);
      });

    // Cleanup: clear timers on unmount
    return () => {
      client.cleanup();
    };
  }, [client]);

  // Update token status periodically for debugging
  useEffect(() => {
    if (!client) return;

    const interval = setInterval(() => {
      setTokenStatus(client.getTokenStatus());
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, [client]);

  // Log error but continue rendering (Zylo is optional for the app to function)
  if (error) {
    console.warn('⚠️ Zylo Provider: Failed to initialize, continuing without Zylo features', error);
  }

  // Provide client to children (even if there's an error, allow app to render)
  return (
    <ZyloContext.Provider value={{ client, isLoading, error, tokenStatus }}>
      {children}
    </ZyloContext.Provider>
  );
}
