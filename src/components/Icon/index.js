import { IconStyled } from "./style";

const Icon = ({ icon, alt, separator, isClickable }) => (
  <IconStyled
    src={icon}
    alt={alt}
    separator={separator}
    isClickable={isClickable}
  />
);

export default Icon;
