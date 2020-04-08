const sleep = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration * 1000);
  });

export default {
  sleep,
};
