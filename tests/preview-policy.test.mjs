import test from 'node:test';
import assert from 'node:assert/strict';
import { PREVIEW_TIMEOUT_MS, isPreviewRetryableError } from '../src/api/previewPolicy.ts';

test('preview retains a margin after two backend attempts and backoff', () => {
  assert.ok(PREVIEW_TIMEOUT_MS > 2 * 30_000 + 1_500);
});
test('server unavailable and browser timeouts allow recovery', () => {
  for (const error of [{ response: { data: { code: 'AI001' } } },
    { code: 'ECONNABORTED' }, { code: 'ETIMEDOUT' }]) {
    assert.equal(isPreviewRetryableError(error), true);
  }
});
test('input validation and permission errors do not offer the transient retry', () => {
  for (const error of [null, undefined, 'timeout', { response: { data: { code: 'AI010' } } },
    { response: { data: { code: 'PERMISSION_DENIED' } } }]) {
    assert.equal(isPreviewRetryableError(error), false);
  }
});
