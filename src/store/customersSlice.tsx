import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REMOVECUSTOMER, fetchData } from "../api";
interface customersProps {
  customers: any[];
  loading: boolean;
  error: string | null | undefined;
}
const initialState: customersProps = {
  customers: [],
  loading: false,
  error: "",
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    add(state: any, action) {
      state.push(action.payload);
    },
    removeCustomer(state: any, action) {
      fetchData(REMOVECUSTOMER, "POST", { id: action.payload?.id });
      state.customers = state.customers.filter(
        (item: any, index: any) => index !== action.payload?.item
      );
    },
    setCustomers(state: any, action) {
      state.loading = false;
      state.error = null;
      state.customers = action.payload;
    },
    fetchCustomersPending(state: any, action) {
      state.loading = true;
      state.error = action.payload;
    },
    fetchCustomersCompleted(state: any) {
      state.loading = false;
      state.error = null;
    },
    fetchCustomersFailed(state: any) {
      state.loading = false;
      state.error = "Something went wrong, Try again later..";
    },
  },
});

export const {
  add,
  removeCustomer,
  setCustomers,
  fetchCustomersPending,
  fetchCustomersCompleted,
  fetchCustomersFailed,
} = customersSlice.actions;
export default customersSlice.reducer;
