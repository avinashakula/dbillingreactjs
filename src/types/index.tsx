export interface TypeOfPerson{
    value: string;
    name: string;
    label: string;
}
export interface CustomerDataState {
  typeofperson: TypeOfPerson;
  name: string;
  mobile: string;
  state: string;
  pincode: string;
  address: string;
  gstin: string;
  city: string;
}
