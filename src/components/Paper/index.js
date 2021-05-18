import { PaperStyled } from "./style";

const Paper = ({ gridArea, children }) => (
  <PaperStyled gridArea={gridArea}>{children}</PaperStyled>
);

export default Paper;
