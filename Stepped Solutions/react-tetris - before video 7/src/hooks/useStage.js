import { useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
}