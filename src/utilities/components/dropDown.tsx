interface Props {
  name: string;
  onInputChange: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  list: any[];
  value: any;
}
const DropDown = (props: Props) => {
  const { name, onInputChange, list, value } = props;
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {value?.label ? value?.label : 'Select'}
      </button>
      <ul className="dropdown-menu">
        {list.map((item: any) => {
          return (
            <li>
              <a
                className="dropdown-item"
                href="#"
                name={name}
                label={item.name}
                dataValue={item.value}
                onClick={onInputChange}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>   
  );
};

export default DropDown;
