import Link from "next/link";
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Logo = () => {
  return (
    <LinkStyled href="/admin">
      <h1 className="fw-bold text-primary m-0">
        Sá<span className="text-secondary">ch</span>Vi<span className="text-secondary">ệt</span>
      </h1>
    </LinkStyled>
  );
};

export default Logo;
