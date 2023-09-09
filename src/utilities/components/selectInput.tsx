interface Props {
  label: string;
  name: string;
  onInputChange: (input: React.ChangeEvent<HTMLSelectElement>) => void;
  list: any[];
}
export default function SelectInput(props: Props) {
  const { label, name, onInputChange, list } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <select
        name={name}
        className="form-control"
        aria-describedby={label}
        onChange={onInputChange}
      >
        {list.map((item) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
