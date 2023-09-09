interface Props {
  label: string;
  name: string;
  onInputChange: (input: React.KeyboardEvent<HTMLElement>) => void;
}
export default function TextareaInput(props: Props) {
  const { label, name, onInputChange } = props;
  return (
    <>
      <label className="form-label">{label}</label>
      <textarea name={name} className="form-control" onKeyUp={onInputChange} />
    </>
  );
}
