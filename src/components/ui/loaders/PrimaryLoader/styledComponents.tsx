import { styled } from "@mui/system";

interface BackdropProps {
  loading?: true | false;
}

export const Backdrop = styled("div", {
  shouldForwardProp: (prop) => prop !== "loading",
})<BackdropProps>(({ loading }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: loading ? "hidden" : "unset",
}));

export const LoaderContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 100,
});

export const Loader = styled("img")({
  width: "200px",
  height: "auto",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999999,

  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  animation: "fadeIn 0.8s infinite alternate-reverse",
});
