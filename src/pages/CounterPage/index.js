import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../store/actionCreators';
import Button from '../../components/Button';
import CounterText from '../../components/CounterText';

const CounterPage = () => {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const onClickHandler = (action) => {
    action === 'increment' ? dispatch(incrementCounter(1)) : dispatch(decrementCounter(1));
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
