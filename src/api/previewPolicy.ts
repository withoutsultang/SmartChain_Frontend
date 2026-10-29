// Backend: two 30-second attempts plus retry backoff; retain a response margin.
export const PREVIEW_TIMEOUT_MS = 70_000;

type PreviewError = { code?: string; response?: { data?: { code?: string } } };

export function isPreviewRetryableError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const candidate = error as PreviewError;
  return candidate.response?.data?.code === 'AI001'
    || candidate.code === 'ECONNABORTED'
    || candidate.code === 'ETIMEDOUT';
}
