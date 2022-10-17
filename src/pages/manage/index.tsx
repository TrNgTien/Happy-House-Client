import React, { useState } from 'react';
import Head from 'next/head';
import MainLayout from '@components/layout';
import { SelectChangeEvent } from '@mui/material/Select';

import { Select, FormControl, MenuItem } from '@mui/material';
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
      <h1>List house</h1>
    </MainLayout>
  );
}
