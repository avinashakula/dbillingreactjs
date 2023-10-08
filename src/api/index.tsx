let ENV = import.meta.env;
export const CUSTOMERS = "CUSTOMERS";
export const REMOVECUSTOMER = "REMOVE_CUSTOMER";


const getQueryString = (query: string) => {
  if (query == CUSTOMERS) {
    return "customers.php";
  }else if (query == REMOVECUSTOMER) {
    return "removeCustomer.php";
  }
};
export const fetchData = async (apiString: string, type:string='POST', data:any={}) => {
  let queryString = getQueryString(apiString);
  const response = await fetch(ENV?.VITE_REACT_APP_ROOT_API + queryString, {
    method: 'POST',
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};
