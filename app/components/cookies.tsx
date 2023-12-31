import cookie from 'js-cookie';

// Set a cookie
export function setCookie(key, value) {
  cookie.set(key, value, options);
};

// Get a cookie
export function getCookie(key) {
  return cookie.get(key);
};

// Remove a cookie
export function removeCookie(key) {
  cookie.remove(key);
};
