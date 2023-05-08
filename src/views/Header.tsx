import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { getTotalStorage } from "../api";
import { getFileSize } from "../utils";

function Header() {
  const { data }: any = useQuery(["total-storage-size"], getTotalStorage);

  return (
    <AppBar color="default" position="static">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 2,
        }}
      >
        <Typography variant="h5" color="primary">
          Cloud Storage
        </Typography>
        <Typography variant="body1" color="primary">
          Total Storage : {getFileSize(data?.data?.size)}
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Header;
