import { useState, useEffect } from "react";
import PageHeader from "@utilities/components/pageHeader";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "@store/customersSlice";
import { fetchCustomersList } from "../../actions/userActions";
function ExistedCustomers() {
  const dispatch = useDispatch();
  const existedCustomersList = useSelector((state: any) => state);

  const del = (item: any) => {
    dispatch(remove(item));
  };
  useEffect(() => {
    console.log(
      "existedCustomersList",
      existedCustomersList?.customers?.customers?.data
    );
  }, [existedCustomersList]);

  useEffect(() => {
    dispatch(fetchCustomersList());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <PageHeader title={"Existed Customers"} />
        <div className="container-fluid">
          {existedCustomersList?.customers?.customers?.data &&
            existedCustomersList.customers.customers.data.map(
              (customer: any, index: any) => {
                return (
                  <>
                    <h2>{customer.name}</h2>
                    <button onClick={() => del(customer.name)}>
                      Delete {customer.name}
                    </button>
                  </>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}

export default ExistedCustomers;
