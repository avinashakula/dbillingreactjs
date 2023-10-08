import {configureStore} from '@reduxjs/toolkit'
import customersSlice, { setCustomers, fetchCustomersPending, fetchCustomersFailed } from './customersSlice'
import { CUSTOMERS, REMOVECUSTOMER } from '../api';
let ENV = import.meta.env;

const store = configureStore({
    reducer: {
        customers: customersSlice
    }
})

const getQueryString = (query: string) => {
    if (query == CUSTOMERS) {
      return "customers.php";
    }else if (query == REMOVECUSTOMER) {
      return "removeCustomer.php";
    }
  };
  export const fetchData = async (apiString: string, type:string='POST', data:any={}) => {
    store.dispatch(fetchCustomersPending(""))   
    let queryString = getQueryString(apiString);
    const response = await fetch(ENV?.VITE_REACT_APP_ROOT_API + queryString, {
      method: 'POST',
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response;
  };

const initialCustomersList = async (): Promise<any[]> => {
    store.dispatch(fetchCustomersPending(""))
    try {
        const response = await fetchData(CUSTOMERS);
        if( !response.ok ){
            throw new Error("Failed to fetch");
        }
        const data = await response.json();
        return data?.data;
    } catch (error) {
        console.error("Error fetching user list:", error);
        throw error;
    }
  };

initialCustomersList()
    .then(initialCustomers=>{    
        store.dispatch(setCustomers(initialCustomers))
    })
    .catch(error=>{
        store.dispatch(fetchCustomersFailed())
        console.error('Error fetching default user data', error)
    })




export default store;