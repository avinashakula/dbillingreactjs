interface Props {
  label: string;
  bg: string;
  onClick: () => void;
}
export default function Button(props: Props) {
  const { label, bg, onClick, disabled } = props;
  return (
    <>
      <button type="submit" className={`btn ${bg}`} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
}
