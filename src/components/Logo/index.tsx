import { memo } from 'react';
import { colorMapper } from 'common/styles/utils';

interface Props {
  color?: 'white' | 'primary';
}

const Logo = ({ color = 'primary' }: Props) => (
  <div style={{ display: 'block' }}>
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.125 32.5H32.5V56.875H8.125V32.5ZM32.5 8.125H56.875V32.5H32.5V8.125Z"
        fill={colorMapper[color]}
      />
    </svg>
  </div>
);

export default memo(Logo);
