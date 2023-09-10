import * as React from 'react';
import { useState, useEffect } from "react";
import PageHeader from "@utilities/components/pageHeader";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@store/customersSlice";
import TextInput from "@utilities/components/textInput";
import TextareaInput from "@utilities/components/textareaInput";
import { addCustomers } from "@utilities/constants/customers";
import { typeOfPersonList } from "@utilities/mock/customers";
import Button from "@utilities/components/button";
import DropDown from "@utilities/components/dropDown";
// import { Button } from '@mui/material';

function AddCustomers() {
  const dispatch = useDispatch();
  const existedCustomersList = useSelector((state: any) => state);
  const [customerData, setCustomerData] = useState();
  const onSubmit = () => {
    // dispatch add action
    dispatch(add(customerData));
  };

  const onInputChange = (input: any) => {
    let name = input?.target?.name;
    let value = input?.target?.value;
    setCustomerData({ ...customerData, [name]: value });
  };

  const onSelectChange = (input: any) => {
    let name = input?.target?.attributes?.name?.value;
    let value = input?.target?.attributes?.dataValue?.value;
    let label = input?.target?.attributes?.label?.value;   
    setCustomerData({ ...customerData, [name]: {"value":value, "name":name, "label":label} });
  };

  useEffect(() => {
    console.log("existedCustomersList", existedCustomersList);
  }, [existedCustomersList]);

  return (
    <div className="container">
      <PageHeader title={addCustomers.ADDCUSTOMER} />
      {/* <Button variant="contained">Hello world</Button> */}
      <div className="container-fluid">
        <div className="col-md-6 offset-md-3 bg-white p-3 rounded-4 shadow-sm">
          {/* <form> */}
          <div className="mb-3">
            <DropDown
              name={addCustomers.typeOfPerson}
              onInputChange={onSelectChange}
              list={typeOfPersonList}
              value={customerData?.[addCustomers.typeOfPerson]}
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

          <Button label="Submit" bg="btn-primary" onSubmit={onSubmit} />
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default AddCustomers;
