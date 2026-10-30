import test from 'node:test';
import assert from 'node:assert/strict';
import { analysisOutcome } from '../src/api/analysisPolicy.ts';
const state = { requestId: 'new', status: 'RUNNING', resultId: null, errorCode: null, retryable: false };
test('historical completion cannot finish a new attempt', () => {
  assert.equal(analysisOutcome('new', { ...state, requestId: 'old', status: 'SUCCEEDED', resultId: 1 }), 'waiting');
});
test('failed current attempt offers recovery even when a historical result exists', () => {
  assert.equal(analysisOutcome('new', { ...state, status: 'FAILED', errorCode: 'AI001', retryable: true }), 'failed');
});
test('only the accepted successful attempt with a persisted result completes', () => {
  assert.equal(analysisOutcome('new', { ...state, status: 'SUCCEEDED', resultId: 2 }), 'completed');
  assert.equal(analysisOutcome('new', { ...state, status: 'SUCCEEDED' }), 'waiting');
});
