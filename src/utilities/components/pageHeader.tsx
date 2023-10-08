interface Props {
  title: string;
  textAlign?: string;
  loading?: any;
}
export default function PageHeader(props: Props) {
  const { title, textAlign, loading } = props;
  return (
    <h5
      className={
        textAlign
          ? textAlign + " mt-3 fw-medium page-header"
          : `text-left mt-3 fw-medium page-header`
      }
    >
      {title}
      {loading?.customers?.loading && <small className={"float-end text-primary"}>{loading?.customers?.error} </small>}
    </h5>
  );
}
