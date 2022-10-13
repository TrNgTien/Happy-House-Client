import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useTrans from "../../hooks/useTrans";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import IconButton from "@mui/material/IconButton";
import { Avatar, Stack } from "@mui/material";

interface IPageProps {
  children: React.ReactNode;
}

const NavBar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  z-index: 100;
  background-color: #d4ccc1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

const BrandName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-name-color);
  font-family: "Inter", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
const TabTitle = styled.a`
  color: #97826d;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const TabTitleActive = styled.a`
  background-color: #97826d;
  color: white;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
const WrapperMain = styled.main`
  background-color: var(--primary-color);
  margin-top: 5rem;
  height: 100vh;
  padding: 0 1rem;
`;
export default function MainLayout({ children }: IPageProps) {
  const trans = useTrans();
  const { pathname } = useRouter();
  const IMAGE_URL =
    "https://thuvienanime.com/wp-content/uploads/2022/04/Boruto.png";
  return (
    <>
      <header>
        <NavBar>
          <Stack direction="row" spacing={8}>
            <Link href="/">
              <BrandName>Happy House</BrandName>
            </Link>
            <Stack direction="row" spacing={4} alignItems="center">
              <Link href="/statistic">
                <TabTitle>{trans.header.tabStats}</TabTitle>
              </Link>
              <Link href="/manage">
                {pathname === "/manage" ? (
                  <TabTitleActive>{trans.header.tabManage}</TabTitleActive>
                ) : (
                  <TabTitle>{trans.header.tabManage}</TabTitle>
                )}
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <Avatar alt="Avatar" src={IMAGE_URL} />
          </Stack>
        </NavBar>
      </header>
      <WrapperMain>{children}</WrapperMain>
    </>
  );
}
