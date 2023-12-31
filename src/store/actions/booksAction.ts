import GoogleBooksApi from '../../api/GoogleBooks';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'books/getAll',
  async (searchQuery: string, { rejectWithValue }: any) => {
    try {
      const { data, status } = await GoogleBooksApi.get('', {
        params: {
          q: JSON.stringify(searchQuery),
          key: 'AIzaSyDdiVeXvr2TNM3N_BwgtZYXF2c5I9MWdUQ',
        },
      });
      if (status === 200) {
        return data;
      }
    } catch (e: any) {
      console.warn(e);
      return rejectWithValue(e.message);
    }
  }
);
