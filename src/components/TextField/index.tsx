import Label from './Label';
import Input from './Input';
import styled from 'styled-components';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

const Wrapper = styled.div`
  position: relative;
`;
interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  type: HTMLInputTypeAttribute;
  pattern?: string;
  required?: boolean;
  id: string;
  variant?: string;
}
const TextField = ({
  id,
  label,
  type,
  required,
  pattern,
  ...others
}: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        pattern={pattern}
        required={required}
        {...others}
      />
    </Wrapper>
  );
};

export default TextField;
