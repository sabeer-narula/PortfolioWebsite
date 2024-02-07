export function isSafari(): boolean {
    const userAgent = window.navigator.userAgent;
    const safari = /^((?!chrome|android).)*safari/i.test(userAgent);
    return safari;
  }