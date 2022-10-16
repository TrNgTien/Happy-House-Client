import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import LoginImage from '../../assets/images/login-img.png';
import { Button } from '../../components/Button';
import TextField from '../../components/TextField';
import { H1, P } from '../../components/Typography';

const Wrapper = styled.div`
  display: flex;
  background-color: var(--primary-color);
  @media (max-width: 600px) {
    height: 100vh;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 65vw;
  height: 100vh;
  @media (max-width: 600px) {
    display: none;
  }
`;
const WrapperForm = styled.div`
  margin: auto;
  text-align: center;
  padding: 0 3rem;
  flex-grow: 1;
`;
const Form = styled.form`
  display: grid;
  row-gap: 1.75rem;
  margin-bottom: 1.5rem;
`;
const A = styled.a`
  font-weight: bold;
  color: var(--brown-label-color);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image layout="fill" objectFit="cover" src={LoginImage} />
      </ImageWrapper>
      <WrapperForm>
        <Form>
          <H1>ĐĂNG NHẬP</H1>
          <TextField id="username" label="Tên đăng nhập:" type="text" />
          <TextField id="password" label="Mật khẩu:" type="password" />
        </Form>
        <Button>Đồng ý</Button>
        <P>
          Nếu bạn chưa có tài khoản. <A href="#">LIÊN HỆ CHÚNG TÔI</A>
        </P>
      </WrapperForm>
    </Wrapper>
  );
};

export default Login;
