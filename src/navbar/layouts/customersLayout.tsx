import { Outlet, Link } from "react-router-dom";
export function CustomersLayout() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="dropdown">
            <button
              className="btn btn-primary btn-sm"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-arrow-down-circle-fill"></i>
            </button>
            <ul
              style={{ padding: "10px" }}
              className="dropdown-menu"
              aria-labelledby="dropdownMenu"
            >
              <li>
                <Link to="add" className="list-group-item">
                  Add Customers
                </Link>
              </li>
              <li>
                <Link to="customers" className="list-group-item ">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="purchasers" className="list-group-item ">
                  Purchasers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
