/*
    We have to disable no-extraneous dependencies for this file because we
    don't want the React dependency in the package since we only need React
    for this example code.
 */
/* eslint-disable import/no-extraneous-dependencies */
import React, { FC, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { bob } from './typescript';

interface SampleComponentProps {
  one: string;
  two?: string;
}

export const SampleComponent: FC<SampleComponentProps> = ({ one, two = '' }) => {
  const [state, setState] = useState(false);
  const text =
    'I am a long text, that goes well beyond the normal 80 characters allowed in prettier and also way over the new 120 and then some';
  const { spacing } = useTheme();
  const style = {
    button: {
      padding: spacing(2),
    },
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div>
      {state && <div>I am not visible</div>}
      <button type="button" onClick={() => setState(false)} style={style.button}>
        {bob('Button')}
      </button>
      <Button />I am a component with {text} {one} {two}
    </div>
  );
};
