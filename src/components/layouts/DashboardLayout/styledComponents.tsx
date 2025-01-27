import { styled } from "@mui/system";

interface ContentWrapperProps {
  background?: string;
}

export const ContentWrapper = styled("div")<ContentWrapperProps>(
  ({ background }) => ({
    padding: "1.5rem 2rem 1rem 2rem",
    backgroundImage: background ? `url(${background})` : "none",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  })
);
