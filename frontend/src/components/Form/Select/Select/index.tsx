import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Checkbox, Chip, MenuItem } from '@mui/material';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Error } from '../../../styles/styled-components/Error';
import { errorColor } from '../../../styles/variables';

import ISelectProps from './ISelectProps';
import { ChipBox, SelectComponent } from './styles';

const Select: React.FC<ISelectProps> = ({ 
  name,
  placeholder,
  label,
  mb, mt, ml, mr,
  icon: Icon,
  variant = 'outlined',
  multiple = false,
  check = false,
  chip = false,
  options,
  maxOptionsLimit = 999,
  ...rest 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  let { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState<string>('');

  /**
   * Register field in unform.
   */
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue(ref: any) {
        if (!multiple) {
          return ref.node.value;
        }
        
        if (ref.node.value === '') {
          return [];
        }

        return ref.node.value.split(',')
      },
      setValue(ref: any, value: string) {
        setValue(value);
      }
    });
  }, [fieldName, registerField, multiple]);

  /**
   * Return error adornment
   * and remove icon of select.
   */
  const hasError = useCallback(() => {
    return error 
      ? {
        endAdornment: (
          <Error title={error as string}>
            <FiAlertCircle size={20} color={errorColor} />
          </Error>
        ),
        IconComponent: () => {
          return null;
        }
      }
      : {};
  }, [error]);

  /**
   * Format initial value depending on multiple.
   */
  const initialValue = useCallback(() => {

    if (multiple || check || chip) {
      if (!value) {
        return [];
      }

      if (!Array.isArray(value)) {
        const array = [];
        array.push(value);
        return array;
      }
    } 

    return value;
  }
  , [value, multiple, inputRef]);

  /**
   * Format values into labels to it can be used in renderValue.
   * Without this, the value will be shown in the select.
   */
  const renderLabelsOptions = useCallback((selected: string[]) => {
    return selected.map((value:string) => {
      return options
              .find(opt => opt.value === value)
              ?.label
    })
  }, [options]);
  
  /**
   * Render Select Chip.
   */
  const renderChip = useCallback((selected: string[]) => {
    return (
      <ChipBox>
        {selected.map((value, index) => (
          <Chip key={index} label={value} />
        ))}
      </ChipBox>
    )
  }, []);

  /**
   * Render Placeholder.
   */
  const renderPlaceholder = useCallback((selected: string[]) => {
    if (selected.length === 0) {
      return ( <em> { placeholder } </em>);
    }
  }, [placeholder]);
  
  /**
   * Render Select value.
   */
  const renderValue = useCallback((selected: any) => {
    if (!Array.isArray(selected)) {
      selected = [selected];
    }

    selected = renderLabelsOptions(selected) as string[];

    if (chip) {
      return renderChip(selected);
    }

    if (check) {
      return selected.join(', ');
    }

    return selected;
  }, [chip, check, renderChip, renderLabelsOptions]);

  /**
   * Handle options selected
   * @param event - Event of select change.
   */
  function handleChange(event: any) {
    setValue(event.target.value)
  };
 
  return (
    <SelectComponent
      select
      size="small"
      id={fieldName}
      value={initialValue()}
      inputRef={inputRef}
      fullWidth
      name={name}
      label={label}
      placeholder={placeholder}
      variant={variant}
      error={!!error}
      sx={{ 
        mb: Number(mb), 
        mt: Number(mt), 
        ml: Number(ml), 
        mr: Number(mr),
      }}
      
      onChange={handleChange}

      SelectProps={{
        autoWidth: false,
        ...hasError(),
        multiple,
        renderValue: check || chip ? renderValue : undefined,
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 500,
              width: '300px',
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
        },
      }}      

      {...rest}
    >
      {
        placeholder && 
        <MenuItem disabled value="">
            <em>{placeholder}</em>
        </MenuItem>
      }
      {options.map((option, index) => (
        <MenuItem key={index} 
          value={option.value} 
          disabled={ multiple && value.length > (maxOptionsLimit - 1) && value.indexOf(option.value) === -1}
        >
          {check && 
            <Checkbox checked={multiple && value ? value.indexOf(option.value) > -1 : option.value == value} />
          }
          {option.label}
        </MenuItem>
      ))}
    </SelectComponent>
  );
};

export default Select;