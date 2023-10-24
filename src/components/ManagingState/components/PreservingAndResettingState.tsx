import { useState } from 'react';
import { useStyleTheme } from '../hook/useStyleTheme';

interface CounterProps {
  player: string;
}

export function PreservingAndResettingState() {
  const [isFirstPlayer, setIsFirstPlayer] = useState<boolean>(false);

  return (
    <div>
      {isFirstPlayer ? <Counter key="Sonic" player="Sonic" /> : <Counter key="Robotnik" player="Robotnik" />}

      <button onClick={() => setIsFirstPlayer(!isFirstPlayer)}>Next player</button>
    </div>
  );
}

function Counter({ player }: CounterProps) {
  const [points, setPoints] = useState<number>(0);

  const { styleTextSecondary } = useStyleTheme();

  return (
    <div>
      <h2 style={styleTextSecondary}>
        {player}'s score: {points}
      </h2>
      <button onClick={() => setPoints(points + 1)}>Add points</button>
    </div>
  );
}
