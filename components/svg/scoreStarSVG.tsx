import React from 'react';

interface iScoreSVG {
  size: string;
}

const ScoreStarSVG: React.FC<iScoreSVG> = ({size = '24px'}) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.4302 10L12.9602 5.16C12.6702 4.21 11.3302 4.21 11.0502 5.16L9.5702 10H5.1202C4.1502 10 3.7502 11.25 4.5402 11.81L8.1802 14.41L6.7502 19.02C6.4602 19.95 7.5402 20.7 8.3102 20.11L12.0002 17.31L15.6902 20.12C16.4602 20.71 17.5402 19.96 17.2502 19.03L15.8202 14.42L19.4602 11.82C20.2502 11.25 19.8502 10.01 18.8802 10.01H14.4302V10Z'
          fill='#C4C4C4'
        />
      </svg>
    </div>
  );
};

export default ScoreStarSVG;
