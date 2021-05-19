import BreadCrumbStyled from "./style";

const BreadCrumb = ({ path }) => {
  const breads = path.split("/");

  return (
    <BreadCrumbStyled>
      {breads.map((bread, key) => (
        <BreadCrumbStyled.Text key={key}>{bread}</BreadCrumbStyled.Text>
      ))}
    </BreadCrumbStyled>
  );
};

export default BreadCrumb;
