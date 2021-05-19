import * as S from "./style";

const Icon = ({ icon, alt, separator, isClickable }) => (
  <S.Icon
    src={icon}
    alt={alt}
    separator={separator}
    isClickable={isClickable}
  />
);

export default Icon;
