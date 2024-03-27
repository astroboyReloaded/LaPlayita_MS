import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllStaff, addNewStaff } from '../db/staffDBUtils';

const initialState = {
  staff: [],
  loading: false,
  error: null,
};

export const fetchStaff = createAsyncThunk(
  'staff/fetchStaff',
  async (_, { rejectWithValue }) => {
    try {
      const staff = await getAllStaff();
      return staff;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, { payload }) => {
      const newStaff = {
        id: Date.now(),
        role: payload.role,
        first: payload.first,
        last: payload.last,
        phone: payload.phone,
        email: payload.email,
        staffName: payload.staffName,
        password: payload.password,
      };
      state.staff.push(newStaff);
      try {
        addNewStaff(newStaff);
      } catch (err) {
        state.error = err;
      }
    },
    editStaff: (state, { payload }) => {
      state.staff = state.staff.map((member) => {
        if (member.id === payload.id) {
          return {
            ...member,
            ...payload,
          };
        }
        return member;
      });
      localStorage.setItem('staff', JSON.stringify(state.staff));
    },
    removeStaff: (state, { payload }) => {
      state.staff = state.staff.map((member) => member.id !== payload.id);
      localStorage.setItem('staff', JSON.stringify(state.staff));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStaff.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchStaff.fulfilled, (state, { payload }) => ({
      ...state,
      staff: payload,
      loading: false,
    }));
    builder.addCase(fetchStaff.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }));
  },
});

export const { addStaff, editStaff, removeStaff } = staffSlice.actions;

export default staffSlice.reducer;
