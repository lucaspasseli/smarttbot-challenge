import * as S from "./style";

const Paper = ({ gridArea, children }) => (
  <S.Paper gridArea={gridArea}>{children}</S.Paper>
);

export default Paper;
