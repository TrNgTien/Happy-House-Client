import Link from "next/link";
import styled from "styled-components";
import useTrans from "../../hooks/useTrans";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface IPageProps {
  children: React.ReactNode;
}

const NavBar = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
  background-color: #d4ccc1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BrandName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #342f29;
`;
const TabTitle = styled.a`
  color: #342f29;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function MainLayout({ children }: IPageProps) {
  const trans = useTrans();
  const IMAGE_URL =
    "https://thuvienanime.com/wp-content/uploads/2022/04/Boruto.png";
  return (
    <>
      <header>
        <NavBar>
          <Stack direction="row" spacing={2}>
            <BrandName>Happy House</BrandName>
            <Stack direction="row" spacing={2} alignItems="center">
              <Link href="/statistic">
                <TabTitle>{trans.header.tabStats}</TabTitle>
              </Link>
              <Link href="/manage">
                <TabTitle>{trans.header.tabManage}</TabTitle>
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row">
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <Avatar alt="Avatar" src={IMAGE_URL} />
          </Stack>
        </NavBar>
      </header>
      <main>{children}</main>
    </>
  );
}
