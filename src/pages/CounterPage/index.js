import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlice';
import Button from '../../components/Button';
import CounterText from '../../components/CounterText';

const CounterPage = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickHandler = (action) => {
    action === 'increment' ? dispatch(increment(1)) : dispatch(decrement(1));
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
