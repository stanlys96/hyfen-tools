import React, { useState } from 'react';
import {
  Envelope,
  EnvelopeOff,
  Eye,
  EyeOff,
  Flag,
  FlagOff,
  Lock,
  Lockoff,
} from '../icons';

type FormInput = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  disabled?: boolean;
  typeForm?: 'email' | 'password' | 'guild' | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  classRoot?: string;
  classLabel?: string;
  classInput?: string;
  required?: boolean;
};

export default function FormInput(props: FormInput) {
  const [showPassword, setshowPassword] = useState<boolean>(false);

  return (
    <div
      className={[
        'relative flex flex-col gap-[8px] w-full',
        props.classRoot,
      ].join(' ')}>
      {/* Label */}
      <label
        htmlFor={props.name}
        className={['text-label text-white capitalize', props.classLabel].join(
          ' ',
        )}>
        {props.label}
        {props.required && '*'}
      </label>

      {/* Input */}
      <div className="relative w-full">
        <input
          type={
            props.typeForm === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : props.type
          }
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          readOnly={props.readonly}
          required={props.required}
          className={[
            'relative w-full pl-12 p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white placeholder:text-app-shade placeholder:text-label bg-app-background border border-app-disabled/20',
            props.classInput,
          ].join(' ')}
          placeholder={props.placeholder}
        />

        {props.typeForm === 'email' && (
          <span className="absolute top-4 left-4 cursor-pointer">
            {props.value ? <Envelope /> : <EnvelopeOff />}
          </span>
        )}

        {props.typeForm === 'password' && (
          <span className="absolute top-4 left-4 cursor-pointer">
            {props.value ? <Lock /> : <Lockoff />}
          </span>
        )}

        {props.typeForm === 'guild' && (
          <span className="absolute top-4 left-4 cursor-pointer">
            {props.value ? <Flag /> : <FlagOff />}
          </span>
        )}

        {/* When form is password show eye  */}
        {props.typeForm === 'password' && (
          <span
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setshowPassword(!showPassword)}>
            {showPassword ? <Eye /> : <EyeOff />}
          </span>
        )}
      </div>
    </div>
  );
}
