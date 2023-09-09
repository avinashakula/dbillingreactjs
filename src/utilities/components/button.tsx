interface Props {
  label: string;
  bg: string;
  onSubmit: () => void;
}
export default function Button(props: Props) {
  const { label, bg, onSubmit } = props;
  return (
    <>
      <button type="submit" className={`btn ${bg}`} onClick={onSubmit}>
        {label}
      </button>
    </>
  );
}
