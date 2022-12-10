import React, { useState } from 'react';
import Head from 'next/head';
import MainLayout from '@components/layout';
import { SelectChangeEvent } from '@mui/material/Select';
import { Select, FormControl, MenuItem, Stack } from '@mui/material';
import RoomCard from '../../components/RoomCard';
import styled from 'styled-components';
export default function ManagePage() {
  const [age, setAge] = useState('');
  const d = new Date();
  let year = d.getFullYear();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.75rem;
`;
const roomId = [1, 2, 3, 4, 5, 6, 7]
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
        {roomId.map((items, index) => <RoomCard key={`room_${index}`} items={items}/>)}
      </Wrapper>
    </MainLayout>
  );
}
