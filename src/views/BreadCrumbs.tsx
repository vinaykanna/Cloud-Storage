import { Breadcrumbs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSearchParams } from "react-router-dom";

function BreadCrumbs({ data }: any) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Box mb={3}>
      <Breadcrumbs maxItems={4} aria-label="breadcrumb">
        <Typography
          variant="body1"
          color="primary"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            searchParams.delete("folderId");
            setSearchParams(searchParams);
          }}
        >
          Home
        </Typography>
        {data.map((item: any, index: number) => (
          <Typography
            variant="body1"
            color="primary"
            key={index}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setSearchParams({
                ...searchParams,
                folderId: item?.id,
              });
            }}
          >
            {item?.name}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  );
}

export default BreadCrumbs;
