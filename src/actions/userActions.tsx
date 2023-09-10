import { Dispatch } from "redux";
import { setCustomers } from "../store/customersSlice";

interface customerProp {
  id: number;
  mobile: string;
  name: string;
  address: string;
  gst: string;
  state: string;
  pincode: string;
  city: string;
  type: string;
}
const fetchCustomersListFromApi = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      "http://desireitservices.in/dbilling/api/customers.php"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};

export const fetchCustomersList = () => {
  return async (dispatch: any) => {
    try {
      const customersList = await fetchCustomersListFromApi();
      dispatch(setCustomers(customersList));
    } catch (error) {}
  };
};
