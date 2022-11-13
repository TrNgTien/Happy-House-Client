import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '@components/layout';
import { SelectChangeEvent } from '@mui/material/Select';
import { Select, FormControl, MenuItem, Stack } from '@mui/material';
import styled from 'styled-components';
import RoomCard from '@components/RoomCard/RoomCard';
import { H1 } from '@components/Typography';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.75rem;
`;

export default function ManagePage() {
  const [age, setAge] = useState('');
  const d = new Date();
  let year = d.getFullYear();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <MainLayout>
      <Head>
        <title>Happy House</title>
      </Head>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>Năm {year}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Wrapper>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </Wrapper>
    </MainLayout>
  );
}
