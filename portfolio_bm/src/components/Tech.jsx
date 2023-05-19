import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { Suspense } from 'react';

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText}  mb-6 `}>My Tech Stack</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <Suspense
              fallback={<p className="text-center select-none">{technology.name}</p>}
            >
              <BallCanvas icon={technology.icon} />
              <p className="text-center select-none">{technology.name}</p>
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'techstack');
