import React, { FC, ReactText, useMemo } from 'react';

import { useVarUIValue } from './common/VarUIContext';
import { IVarBaseInputProps, VarBase } from './VarBase';

export interface IVarSelectOption {
  /**
   * Key for the option. Also used as value if `value` is not specified.
   */
  key: ReactText;

  /**
   * Option label.
   */
  label: string;

  /**
   * Option value. Key will be used if not specified.
   * Note: Will be serialized to JSON and deserialized when selected.
   */
  value?: any;
}

export interface IVarSelectProps extends IVarBaseInputProps<any> {
  /**
   * Options to be displayed.
   */
  options: IVarSelectOption[];
}

/**
 * Select component. Returns and accepts either `value` from option object or `key` when `value` is not provided.
 */
export const VarSelect: FC<IVarSelectProps> = ({
  label,
  path,
  value,
  onChange,
  options,
  disabled,
  className
}) => {
  const [currentValue, setCurrentValue] = useVarUIValue(path, value, onChange);

  const serializedCurrentValue = useMemo(() => JSON.stringify(currentValue), [
    currentValue
  ]);

  return (
    <VarBase label={label} disabled={disabled} className={className}>
      <span>
        <select
          onChange={e => setCurrentValue(JSON.parse(e.target.value))}
          value={serializedCurrentValue}
          title="Select options"
        >
          {options.map(option => {
            const serializedValue = JSON.stringify(option.value ?? option.key);

            return (
              <option key={option.key} value={serializedValue}>
                {option.label}
              </option>
            );
          })}
        </select>
      </span>
    </VarBase>
  );
};
