declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg';

interface Window {
  auth: {
    auth: {
      info: {
        role: string;
      },
      token: string;
    };    
  };
}