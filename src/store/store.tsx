import {configureStore} from '@reduxjs/toolkit'
import customersSlice, { setCustomers, fetchCustomersPending, fetchCustomersFailed } from './customersSlice'
import { CUSTOMERS, fetchData } from '../api';

const store = configureStore({
    reducer: {
        customers: customersSlice
    }
})

const initialCustomersList = async (): Promise<any[]> => {
    store.dispatch(fetchCustomersPending())
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