import * as S from "./style";

const Icon = ({ icon, width, alt, separator, isClickable, onDesktop }) => (
  <S.Icon
    src={icon}
    alt={alt}
    width={width}
    separator={separator}
    isClickable={isClickable}
    onDesktop={onDesktop}
  />
);

export default Icon;
