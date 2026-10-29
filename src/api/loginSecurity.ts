/** Local development can omit CAPTCHA only when no site key is configured. */
export const canSkipRecaptcha = (development: boolean, siteKey: string | undefined): boolean =>
  development && !siteKey?.trim();
