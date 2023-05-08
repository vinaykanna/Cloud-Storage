import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useMutation } from "react-query";
import { searchStorage } from "../../api";
import Loader from "../../components/Loader";
import SearchContainer from "../../components/SearchContainer";
import { StyledSearchList } from "../styles";
import SearchFileItem from "./SearchFileItem";
import SearchFolderItem from "./SearchFolderItem";
import SortBy from "./SortBy";
import useQueryParams from "../../hooks/useQueryParams";

function Search() {
  const [search, setSearch] = useState("");
  const { queryParams } = useQueryParams();
  const { mutate, data, isLoading }: any = useMutation(searchStorage);

  const handleSearch = (v: string) => {
    setSearch(v);
    mutate({
      folderId: queryParams.folderId,
      search: v,
    });
  };

  const searchFolders = data?.data?.result?.filter(
    (item: any) => item.type === "FOLDER"
  );
  const searchFiles = data?.data?.result?.filter(
    (item: any) => item.type === "FILE"
  );

  return (
    <Box pt={2} display="flex" gap={2}>
      <SortBy />
      <Box position="relative">
        <SearchContainer
          minWidth="350px"
          debounced
          placeHolder="Search"
          onChange={(v) => handleSearch(v)}
          value={search}
        />
        {search && (
          <StyledSearchList>
            {isLoading ? (
              <Loader minHeight={200} />
            ) : (
              <div>
                {!searchFolders?.length && !searchFiles?.length ? (
                  <Typography
                    sx={{ mt: 3, textAlign: "center" }}
                    variant="subtitle2"
                  >
                    No results
                  </Typography>
                ) : (
                  <div>
                    {searchFolders?.map((item: any, index: number) => (
                      <SearchFolderItem
                        item={item}
                        key={index}
                        setSearch={setSearch}
                      />
                    ))}
                    {searchFiles?.map((item: any, index: number) => (
                      <SearchFileItem
                        item={item}
                        key={index}
                        setSearch={setSearch}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </StyledSearchList>
        )}
      </Box>
    </Box>
  );
}

export default Search;
