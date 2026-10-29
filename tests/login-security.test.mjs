import test from 'node:test';
import assert from 'node:assert/strict';
import { canSkipRecaptcha } from '../src/api/loginSecurity.ts';

test('development without a site key can use the backend local login policy', () => {
  assert.equal(canSkipRecaptcha(true, undefined), true);
  assert.equal(canSkipRecaptcha(true, '  '), true);
});
test('production never bypasses CAPTCHA for missing or configured keys', () => {
  for (const key of [undefined, '', 'site-key']) assert.equal(canSkipRecaptcha(false, key), false);
});
test('configured development environments continue to require CAPTCHA', () => {
  assert.equal(canSkipRecaptcha(true, 'site-key'), false);
});
