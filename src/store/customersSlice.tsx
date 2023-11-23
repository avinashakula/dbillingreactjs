import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REMOVECUSTOMER, fetchData } from "../api";
import { CustomerDataState } from "src/types";
interface customersProps {
  customers: CustomerDataState[];
  loading: boolean;
  error: string | null | undefined;
}
const initialState: customersProps = {
  customers: [],
  loading: false,
  error: "",
};

export const addNewCustomerAsync = createAsyncThunk("customers/addNewCustomerAsync", async(user)=>{

  const config = {
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(user)
  };

  try{
    console.log("aaaaaaaaaaaaa");
    const response = await fetch("http://desireitservices.in/old/dbilling/api/newCustomer.php", config)
    if( !response.ok ){
      throw new Error('Failed to update user')
    }
    const data = await response.json();
    return data;
  }catch(error){
    throw error;
  }

  

});
const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    add(state: any, action) {
      console.log(state.customers);
      state.customers == undefined
        ? (state.customers = [action.payload])
        : state.customers.push(action.payload);
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
  extraReducers:(builder)=>{
    builder.addCase(addNewCustomerAsync.fulfilled, (state, action)=>{
      console.log("aa");
      state.loading = false;      
    });
    builder.addCase(addNewCustomerAsync.rejected, (state, action)=>{
      state.loading = false;
    })
    builder.addCase(addNewCustomerAsync.pending, (state, action)=>{
      state.loading = true;
    })
  }
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
