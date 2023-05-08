import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ViewType } from "../../types";
import FolderMenu from "../FolderOrFileMenu";
import File, { Position } from "./File";

type Props = {
  data: any;
  xl?: number;
  lg?: number;
  view?: ViewType;
};

function Files(props: Props) {
  const { data, xl, lg } = props;
  const [contextMenu, setContextMenu] = useState<Position | null>(null);
  const [selectedFile] = useState<any>(null);

  return (
    <>
      <Box mt={5}>
        <Typography variant="subtitle2" sx={{ mb: 2 }} color="primary">
          Files
        </Typography>
        <Grid container spacing={2}>
          {data?.map((item: any) => (
            <Grid item xl={xl ?? 3} lg={lg ?? 3} md={2} sm={12} key={item?.id}>
              <File data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <FolderMenu
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
        data={selectedFile}
      />
    </>
  );
}

export default Files;
