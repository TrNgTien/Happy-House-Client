import Label from './Label';
import Input from './Input';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';

const Wrapper = styled.div`
  position: relative;
`;
interface Props extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  type: string;
  id: string;
  variant?: string;
}
const TextField = ({ id, label, type, ...others }: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} {...others} />
    </Wrapper>
  );
};

export default TextField;
