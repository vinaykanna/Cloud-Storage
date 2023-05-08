import { Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GreyButton = styled(Button)({
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});

export const StyledFile = styled("div")<{ dragging?: number }>(
  ({ dragging }) => ({
    border: `1px solid ${dragging ? "red" : "#DDDDDD"}`,
    borderRadius: "4px",
    overflow: "hidden",
    height: "220px",
    display: "flex",
    flexDirection: "column",
  })
);

export const StyledFileTitle = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

export const StyledSingleLineContainer = styled("div")(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  lineClamp: 1,
  WebkitBoxOrient: "vertical",
}));

export const StyledFolder = styled("div")<{
  dragging?: number;
  dropping?: number;
}>(({ dragging, dropping }) => ({
  border: `1px solid ${
    dragging ? "red" : dropping ? "#182F53" : "rgba(0,0,0,0.08)"
  }`,
  borderRadius: "10px",
  cursor: "pointer",
  display: "flex",
  gap: 10,
  alignItems: "center",
  backgroundColor: dropping ? "rgb(24, 47, 83, 0.2)" : "rgba(0,0,0,0.06)",
  padding: "15px 20px",
}));

export const StyledUploadStatusDrawer = styled("div")(() => ({
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  background: "white",
  width: "400px",
  border: "1px solid black",
  position: "fixed",
  left: 20,
  bottom: 0,
  zIndex: 500000,
}));

export const StyledSearchList = styled(Paper)(() => ({
  width: "100%",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  position: "absolute",
  top: "100%",
  left: 0,
  minHeight: "200px",
  maxHeight: "400px",
  overflowY: "auto",
  zIndex: 1,
}));
