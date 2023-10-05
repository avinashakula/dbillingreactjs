import PageHeader from "@utilities/components/pageHeader";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomer } from "@store/customersSlice";
function ExistedCustomers() {
  const dispatch = useDispatch();
  const existedCustomersList = useSelector((state: any) => state);

  const deleteCustomer = (item: any) => {
    dispatch(removeCustomer(item));
  };

  return (
    <div className="container">
      <div className="row">
        <PageHeader title={"Existed Customers"} />
        <div className="container-fluid">
          {existedCustomersList?.customers?.customers.map(
            (customer: any, index: any) => {
              return (
                <div key={index}>
                  <h2>{customer.name}</h2>
                  <button onClick={() => deleteCustomer(index)}>
                    Delete {customer.name}
                  </button>
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
