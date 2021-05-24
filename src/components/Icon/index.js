import * as S from "./style";

const Icon = ({ icon, width, alt, separator, isClickable, isDesktop }) => (
  <S.Icon
    src={icon}
    alt={alt}
    width={width}
    separator={separator}
    isClickable={isClickable}
    isDesktop={isDesktop}
  />
);

export default Icon;
