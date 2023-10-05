let rootApi = "http://desireitservices.in/old/dbilling/api/";
export const CUSTOMERS = "CUSTOMERS";
const getQueryString = (query:string) => {
    if( query == CUSTOMERS ){
        return "customers.php";
    }
}
export const fetchData = async (apiString:string) => {
    let queryString = getQueryString(apiString);
    const response = await fetch(rootApi+queryString);
    return response;
}