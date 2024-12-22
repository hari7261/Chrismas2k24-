import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useSpring, animated } from '@react-spring/web';
import { Download } from 'lucide-react';

const CardGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  const downloadCard = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = `christmas-card-${name}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <animated.div style={animation} className="w-full max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <label className="block text-white text-lg mb-2">
          Enter Your Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Name"
        />
      </div>

      <div
        ref={cardRef}
        className="bg-[url('https://img.freepik.com/free-photo/beautifully-decorated-christmas-tree_23-2150960539.jpg?t=st=1734848261~exp=1734851861~hmac=383bc5966003d526fee2a835d28aa97dbb5c187be4f545bbfda944d424a7b6bc&w=1060')] bg-cover bg-center p-8 rounded-xl shadow-2xl min-h-[400px] flex flex-col justify-center items-center text-center"
      >
        <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-red-600 mb-4">
            Merry Christmas!
          </h3>
          <p className="text-xl text-gray-800 mb-4">
            Wishing you joy and happiness this holiday season
          </p>
          {name && (
            <p className="text-2xl font-script text-green-700">From: {name}</p>
          )}
        </div>
      </div>

      <button
        onClick={downloadCard}
        className="mt-6 flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors"
      >
        <Download className="mr-2" />
        Download Card
      </button>
    </animated.div>
  );
};

export default CardGenerator;
