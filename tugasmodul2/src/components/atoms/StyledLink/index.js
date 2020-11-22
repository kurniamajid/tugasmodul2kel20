import styled from "styled-components";

const Link = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
);

const StyledLink = styled(Link)`
  color: #abd1c6;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #abd1c6;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  :hover {
    color: white;
    border: 2px solid white;
  }
`;

export default StyledLink;