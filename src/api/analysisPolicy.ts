export interface RunState {
  requestId: string | null;
  status: 'IDLE' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';
  resultId: number | null;
  errorCode: string | null;
  retryable: boolean;
}

/** Follow a particular attempt; a historical result is never evidence this attempt completed. */
export const analysisOutcome = (expectedRequestId: string | null, state: RunState | undefined) => {
  if (!state || !expectedRequestId || state.requestId !== expectedRequestId) return 'waiting';
  if (state.status === 'FAILED') return 'failed';
  if (state.status === 'SUCCEEDED' && state.resultId !== null) return 'completed';
  return 'waiting';
};
