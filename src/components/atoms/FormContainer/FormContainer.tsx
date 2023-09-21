import React, { ReactNode, CSSProperties, FormEvent } from 'react';
import { FormBox } from './_document';

interface IndexProps {
  sx?: CSSProperties;
  children?: ReactNode;
}

export default function FormContainer(props: IndexProps) {
  return (
    <FormBox style={props.sx} onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
      {props.children}
    </FormBox>
  );
}
