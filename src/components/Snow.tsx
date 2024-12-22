import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface SnowflakeProps {
  delay: number;
  x: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({ delay, x }) => {
  const props = useSpring({
    from: { transform: `translate(${x}vw, -10px)`, opacity: 1 },
    to: { transform: `translate(${x + (Math.random() * 10 - 5)}vw, 100vh)`, opacity: 0 },
    config: { duration: 3000 + Math.random() * 2000 },
    delay,
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        width: '8px',
        height: '8px',
        background: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
  );
};

const Snow: React.FC = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3000,
    x: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map(({ id, delay, x }) => (
        <Snowflake key={id} delay={delay} x={x} />
      ))}
    </div>
  );
};

export default Snow;