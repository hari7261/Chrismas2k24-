import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Snow from './Snow';

const Header: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.header style={fadeIn} className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/gradient-christmas-tinsel-background_52683-76117.jpg?t=st=1734847174~exp=1734850774~hmac=1b7289037a7e4b0e45b04fcdf9b27cb625c3f1f143aceb0e26b00d2e658d0c5f&w=996")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />{' '}
        {/* Overlay for better contrast */}
      </div>
      <Snow />
    </animated.header>
  );
};

export default Header;
