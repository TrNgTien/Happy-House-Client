import React, { useState } from 'react';
import MainLayout from '../../components/layout';
import {
  ArrowBackIos,
  PlaceOutlined,
  Settings,
  Search,
} from '@mui/icons-material';
import {
  Stack,
  Button,
  Select,
  FormControl,
  MenuItem,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  BackTitleButton,
  AddressTypo,
  UpdateAddress,
} from './CalculationStyles';
import Head from 'next/head';
import TableCalculation from './components/TableCalulation';

export default function CalculationPage() {
  const [age, setAge] = useState('');
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <MainLayout>
      <Head>
        <title>Happy House</title>
        <meta
          name="description"
          content="Quản lí nhà trọ cho bạn tiện lợi hơn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        variant="text"
        style={{ color: 'var(--button-color)', textTransform: 'none' }}
      >
        <Stack direction="row" alignItems="center">
          <ArrowBackIos />
          <BackTitleButton>Trở lại</BackTitleButton>
        </Stack>
      </Button>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
      >
        <AddressTypo>Số nhà: 24 Linh Trung, Thủ Đức</AddressTypo>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          color="var(--button-color)"
        >
          <PlaceOutlined />
          <UpdateAddress href="#">Cập nhật bản đồ</UpdateAddress>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
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
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Tháng {month}</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <h1 style={{ color: '#C45C31' }}>Tiền Phòng trọ</h1>
        <Stack direction="row" alignItems="center">
          <TextField
            placeholder="Tìm phòng"
            id="outlined-end-adornment"
            sx={{
              width: '20ch',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <IconButton>
            <Settings />
          </IconButton>
        </Stack>
      </Stack>
      <TableCalculation />
    </MainLayout>
  );
}
