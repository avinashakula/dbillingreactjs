import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCustomer,
  fetchCustomersPending,
  fetchCustomersCompleted,
} from "@store/customersSlice";
import { Button, PageHeader } from "@utilities/components";

function ExistedCustomers() {
  const dispatch = useDispatch();
  const existedCustomersList = useSelector((state: any) => state);

  const deleteCustomer = (item: any, id: any) => {
    dispatch(fetchCustomersPending("Removing User..."));
    dispatch(removeCustomer({ item, id: id }));
    setTimeout(() => {
      dispatch(fetchCustomersCompleted());
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        <PageHeader
          title={"Existed Customers"}
          loading={existedCustomersList}
        />
        <div className="container-fluid">
          {existedCustomersList?.customers?.customers.map(
            (customer: any, index: any) => {
              return (
                <div key={index}>
                  <h2>{customer.name}</h2>
                  <Button
                    label={"Delete"}
                    bg={"btn-danger"}
                    onClick={() => deleteCustomer(index, customer?.id)}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default ExistedCustomers;
