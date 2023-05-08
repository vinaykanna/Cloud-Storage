import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Files from "../views/Files";
import Folders from "../views/Folders";
import { getStorage } from "../api";
import { getFilesOrFolders } from "../views/getFilesOrFolders";
import BreadCrumbs from "../views/BreadCrumbs";
import Search from "../views/Search";
import AddAttachment from "../views/AddAttachment";
import Loader from "../components/Loader";
import { Typography } from "@mui/material";
import { empty } from "../assets";
import Header from "../views/Header";

function Storage() {
  const [searchParams] = useSearchParams();

  const query = {
    folderId: searchParams.get("folderId"),
  };

  const { data, isLoading }: any = useQuery(["storage", query], getStorage);

  const folders = getFilesOrFolders({
    type: "FOLDER",
    data: data?.data?.result,
    sortBy: searchParams.get("sortBy") || "",
  });

  const files = getFilesOrFolders({
    type: "FILE",
    data: data?.data?.result,
    sortBy: searchParams.get("sortBy") || "",
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <Box px={4} pb={6}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Box>
            {data?.data?.breadCrumbs?.length ? (
              <BreadCrumbs data={data?.data?.breadCrumbs} />
            ) : null}
          </Box>
          <Search />
        </Box>
        {data?.data?.result?.length ? (
          <>
            {folders?.length ? <Folders data={folders} /> : null}
            {files?.length ? <Files data={files} /> : null}
          </>
        ) : (
          <Box textAlign="center" mt={10}>
            <img src={empty} style={{ maxWidth: 300 }} alt="" />
            <Typography mt={2} variant="subtitle2">
              No files or folders found
            </Typography>
          </Box>
        )}
      </Box>
      <AddAttachment />
    </>
  );
}

export default Storage;
