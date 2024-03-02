// src/components/atoms/Icon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition; // 表示するアイコン
  className?: string;    // 任意のCSSクラス名
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default Icon;


