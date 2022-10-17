import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import LoginImage from '../../assets/images/login-img.png';
import { Button } from '../../components/Button';
import TextField from '../../components/TextField';
import { H1, P } from '../../components/Typography';

const Wrapper = styled.div`
  display: flex;
  background-color: #d4ccc1;
  @media (max-width: 600px) {
    height: 100vh;
  }
`;
const WrapperForm = styled.div`
  position: relative;
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
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 65vw;
  height: 100vh;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default function Login() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          alt="login-image"
          layout="fill"
          objectFit="cover"
          src={LoginImage}
        />
      </ImageWrapper>
      <WrapperForm>
        <Form>
          <H1>ĐĂNG NHẬP</H1>
          <TextField id="username" label="Tên đăng nhập:" type="text" />
          <TextField id="password" label="Mật khẩu:" type="password" />
        </Form>
        <Button onClick={() => Router.push('/manage')}>Đồng ý</Button>
        <P>
          Nếu bạn chưa có tài khoản. <A href="#">LIÊN HỆ CHÚNG TÔI</A>
        </P>
      </WrapperForm>
    </Wrapper>
  );
}
