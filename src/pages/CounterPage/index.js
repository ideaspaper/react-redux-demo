import Button from '../../components/Button';
import CounterText from '../../components/CounterText';
import { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = (action) => {
    action === 'increment' ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <CounterText>{count}</CounterText>
      <Button onClickHandler={() => onClickHandler('increment')}>+</Button>
      <Button onClickHandler={() => onClickHandler('decrement')}>-</Button>
    </>
  );
};

export default CounterPage;
