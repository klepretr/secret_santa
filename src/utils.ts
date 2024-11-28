import {InputButtonIconSize} from "./interfaces.ts";

export const shuffle = <T>(array: T[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}

export const deserialize = (b64: string): any => {
  let encoded = b64.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(decodeURIComponent(escape(atob(encoded))))
}

export const serialize = (obj: any) => {
  return btoa(
    unescape(
      encodeURIComponent(
        JSON.stringify(obj)
      )
    )
  ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export const iconSizeByAlias = (alias: InputButtonIconSize): string => {
  switch (alias) {
    case 'small':
      return '1rem';
    case 'medium':
      return '1.5rem';
    case 'large':
      return '2rem';
  }
}

export const generateUUID = (): string => {
  let uuid = "";

  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}