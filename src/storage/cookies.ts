import CookieManager from '@react-native-community/cookies';

export const setCookie = async (url: string, name: string, value: string) => {
  await CookieManager.set(url, {
    name,
    value,
    domain: '',
    path: '/',
    version: '',
    expiration: '',
    secure: true,
    httpOnly: true,
  });
};

export const getCookies = async (url: string) => {
  const cookies = await CookieManager.get(url);
  return cookies;
};
