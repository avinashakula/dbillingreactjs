import { createSlice } from "@reduxjs/toolkit";

interface customersProps {
  customers: any[];
}
const initialState: customersProps = {
  customers: [],
};
const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    add(state: any, action) {
      state.customers.push(action.payload);
    },
    remove(state: any, action) {
      return state.filter((item: any) => item.name !== action.payload);
    },
    setCustomers(state: any, action) {
      state.customers = action.payload;
    },
  },
});

export const { add, remove, setCustomers } = customersSlice.actions;
export default customersSlice.reducer;
