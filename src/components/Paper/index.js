import * as S from "./style";

const Paper = ({ gridArea, width, height, position, isToggle, children }) => (
  <S.Paper
    gridArea={gridArea}
    width={width}
    height={height}
    position={position}
    isToggle={isToggle}
  >
    {children}
  </S.Paper>
);

export default Paper;
