import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  title: string;
  content: string;
  imageUrl: string;
  index: number;
}

const ChristmasSection: React.FC<SectionProps> = ({ title, content, imageUrl, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    delay: 100 * (index % 2),
  });

  return (
    <animated.section
      ref={ref}
      style={animation}
      className={`py-20 ${index % 2 === 0 ? 'bg-red-900/10' : 'bg-green-900/10'}`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
          />
        </div>
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-4xl font-bold text-red-600 mb-6">{title}</h2>
          <p className="text-lg text-gray-200 leading-relaxed">{content}</p>
        </div>
      </div>
    </animated.section>
  );
};

export default ChristmasSection;