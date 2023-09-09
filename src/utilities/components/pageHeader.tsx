interface Props {
  title: string;
  textAlign?: string;
}
export default function PageHeader(props: Props) {
  const { title, textAlign } = props;
  return (
    <h5
      className={
        textAlign
          ? textAlign + " mt-3 fw-medium page-header"
          : `text-left mt-3 fw-medium page-header`
      }
    >
      {title}
    </h5>
  );
}
