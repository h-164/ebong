export function setCookieUntilMidnight(name: string, value: string) {
    if (typeof document === 'undefined') {
      return;
    }
  
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const expires = "expires=" + midnight.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  
  export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
      return null;
    }
  
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  export function isVoted(profileName: string): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
  
    return getCookie(profileName) !== null;
  }
