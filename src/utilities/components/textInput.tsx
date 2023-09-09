interface Props {
  label: string;
  name: string;
  onInputChange: (input: React.KeyboardEvent<HTMLElement>) => void;
}
export default function TextInput(props: Props) {
  const { label, name, onInputChange } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        name={name}
        type="text"
        className="form-control"
        onKeyUp={onInputChange}
      />
    </>
  );
}
