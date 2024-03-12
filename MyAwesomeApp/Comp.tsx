import { useCountContext } from "./Contexteg";

// YourComponent.tsx


const YourComponent: React.FC = () => {
  const { state, dispatch } = useCountContext();

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>
        Decrement by 2
      </button>
    </div>
  );
};