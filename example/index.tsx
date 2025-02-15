import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';

import {
  VarUI,
  VarColor,
  VarToggle,
  VarSelect,
  VarSlider,
  VarXY,
  VarCategory,
  VarButton,
  VarString,
  VarAngle,
  VarDisplay,
  VarNumber
} from '../.';

const App = () => {
  const [values, setValues] = React.useState({
    toggle: true,
    color: '#FF0000',
    colorAlpha: '#FF0000DD',
    select: 'zero',
    slider: 0.4,
    number: 1,
    string: 'test',
    angle: 0,
    xy: [0, 0]
  });

  return (
    <div>
      <h1>VarUI example</h1>
      <div className="example">
        <div className="wrapper">
          <VarUI updateValues={setValues} values={values}>
            <VarCategory label="Example">
              <VarColor label="VarColor" path="color" />
              <VarColor label="VarColor (alpha)" path="colorAlpha" alpha />
              <VarDisplay label="VarDisplay" path="color" />
              <VarToggle label="VarToggle" path="toggle" />
              <VarSelect
                path="select"
                label="VarSelect"
                options={[
                  { key: 'zero', label: 'Zero' },
                  { key: 'one', label: 'One' }
                ]}
              />
              <VarSlider
                label="VarSlider"
                path="slider"
                min={0.2}
                max={0.8}
                step={0.1}
              />
              <VarSlider
                label="VarSlider (showInput + showButtons)"
                path="slider"
                min={0.2}
                max={0.8}
                step={0.1}
                showInput
                showButtons
              />
              <VarSlider
                label="VarSlider (showInput)"
                path="slider"
                min={0.2}
                max={0.8}
                step={0.1}
                showInput
              />
              <VarSlider
                label="VarSlider (showButtons)"
                path="slider"
                min={0.2}
                max={0.8}
                step={0.1}
                showButtons
              />
              <VarNumber
                label="VarNumber"
                path="number"
                min={0.2}
                max={0.8}
                step={0.1}
                showButtons
              />
              <VarNumber label="VarNumber (no buttons)" path="number" />
              <VarString label="VarString" path="string" />
              <VarString
                label="VarString (multiline)"
                path="string"
                multiline
              />
              <VarAngle label="VarAngle" path="angle" />
              <VarXY label="VarXY" path="xy" />
              <VarButton
                buttonLabel="VarButton (no label)"
                onClick={() => alert('clicked!')}
              />
              <VarButton
                label="VarButton"
                buttonLabel="VarButton (with label)"
                onClick={() => alert('clicked!')}
              />
            </VarCategory>
          </VarUI>
        </div>
        <div className="values">
          <strong>Values:</strong>
          <dl>
            {Object.keys(values).map(key => (
              <React.Fragment key={key}>
                <dt>{key}</dt>
                <dd>
                  {typeof values[key] === 'boolean'
                    ? values[key]
                      ? 'true'
                      : 'false'
                    : Array.isArray(values[key])
                    ? values[key].join(', ')
                    : values[key]}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
