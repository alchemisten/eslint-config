/*
    We have do disable no-extraneous dependencies for this file because we
    don't want the React dependency in the package, because we only need React
    for this example code.
 */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { bob } from './typescript';

export const SampleComponent = (): JSX.Element => {
    const [state, setState] = useState(false);
    const text =
        'I am a long text, tha goes well beyond the normal 80 characters allowed in prettier and also way over the new 120 and then some';

    useEffect(() => {
        setState(true);
    }, []);

    return (
        <div>
            {state && <div>I am not visible</div>}
            <button type="button" onClick={() => setState(false)}>
                {bob('Button')}
            </button>
            I am a component with {text}
        </div>
    );
};
