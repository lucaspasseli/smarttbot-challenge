import * as S from "./style";

const Icon = ({ icon, width, alt, separator, isClickable }) => (
  <S.Icon
    src={icon}
    alt={alt}
    width={width}
    separator={separator}
    isClickable={isClickable}
  />
);

export default Icon;
