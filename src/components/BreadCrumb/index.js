import * as S from "./style";

const BreadCrumb = ({ path }) => {
  const breads = path.split("/");

  return (
    <S.BreadCrumb>
      {breads.map((bread, key) => (
        <S.Text key={key}>{bread}</S.Text>
      ))}
    </S.BreadCrumb>
  );
};

export default BreadCrumb;
