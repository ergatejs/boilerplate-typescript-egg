import { useState } from 'react';

export default () => {
  const [user, setUser] = useState(2);
  const increment = () => setUser((c) => c + 1);
  const decrement = () => setUser((c) => c - 1);
  return { user, increment, decrement };
};
