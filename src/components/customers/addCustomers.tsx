import * as React from "react";
import { useState, useEffect } from "react";
import PageHeader from "@utilities/components/pageHeader";
import { useDispatch, useSelector } from "react-redux";
import { add, addNewCustomerAsync } from "@store/customersSlice";
import TextInput from "@utilities/components/textInput";
import TextareaInput from "@utilities/components/textareaInput";
import { addCustomers } from "@utilities/constants/customers";
import { typeOfPersonList } from "@utilities/mock/customers";
import Button from "@utilities/components/button";
import DropDown from "@utilities/components/dropDown";
// import { Button } from '@mui/material';
import { CustomerDataState, TypeOfPerson } from "src/types";

function AddCustomers() {
  const dispatch = useDispatch();
  const existedCustomersList = useSelector((state: any) => state.customers);
  const [customerData, setCustomerData] = useState<
    CustomerDataState | undefined
  >(undefined);

  const onSubmit = () => {
    // dispatch add action
    console.log("customerData", customerData);
    dispatch(addNewCustomerAsync(customerData));
    // dispatch(add(customerData));
  };

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("varlue....", target?.name);
    const name = target?.name;
    const value = target.innerText;
    const label = target?.selectedOptions[0]?.label;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: { value, name, label },
    }));
  };

  return (
    <div className="container">
      <PageHeader title={addCustomers.ADDCUSTOMER} />
      {/* <Button variant="contained">Hello world</Button> */}
      <div className="container-fluid">
        <div className="col-md-6 offset-md-3 bg-white p-3 rounded-4 shadow-sm">
          {/* <form> */}
          <div className="mb-3">
            <DropDown
              label={"abc"}
              name={addCustomers.typeOfPerson}
              onInputChange={onSelectChange}
              list={typeOfPersonList}
              value={customerData?.[addCustomers.typeOfPerson] || ""}
            />
          </div>
          <div className="mb-3">
            <TextInput
              label={addCustomers.NAME}
              name={addCustomers.NAME.toLowerCase()}
              onInputChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <TextInput
              label={addCustomers.MOBILE}
              name={addCustomers.MOBILE.toLowerCase()}
              onInputChange={onInputChange}
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <TextInput
                label={addCustomers.STATE}
                name={addCustomers.STATE.toLowerCase()}
                onInputChange={onInputChange}
              />
            </div>
            <div className="col-md-6">
              <TextInput
                label={addCustomers.CITY}
                name={addCustomers.CITY.toLowerCase()}
                onInputChange={onInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <TextInput
                label={addCustomers.PINCODE}
                name={addCustomers.PINCODE.toLowerCase()}
                onInputChange={onInputChange}
              />
            </div>
            <div className="col-md-6">
              <TextInput
                label={addCustomers.GSTIN}
                name={addCustomers.GSTIN.toLowerCase()}
                onInputChange={onInputChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <TextareaInput
              label={addCustomers.ADDRESS}
              name={addCustomers.ADDRESS.toLowerCase()}
              onInputChange={onInputChange}
            />
          </div>

          <Button label="Submit" bg="btn-primary" onClick={onSubmit} disabled={existedCustomersList.loading} />
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default AddCustomers;
