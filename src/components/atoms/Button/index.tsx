import React from 'react';

type Button = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  typeButton: 'button' | 'submit' | 'reset';
  classButton:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  isTransparent?: boolean;
};

export default function index(props: Button) {
  return (
    <button className={['relative', props.className].join(' ')}>
      {props.children}
    </button>
  );
}
