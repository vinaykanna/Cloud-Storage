import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { DialogProps } from "../../types";
import { createFolder } from "../../api";
import { snack } from "../../components/toast";

const CreateFolderDialog = ({ open, setOpen }: DialogProps) => {
  const [name, setName] = useState<string>("Untitled folder");
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();

  const { mutate, isLoading } = useMutation(createFolder, {
    onSuccess: () => {
      snack.success("Folder Created");
      setOpen(false);
      setName("Untitled folder");
      queryClient.invalidateQueries("storage");
    },
    onError: (err: any) => {
      snack.error(err.response.data.message);
    },
  });

  const handleSubmit = () => {
    if (!name) {
      inputRef.current?.focus();
      return;
    }

    mutate({
      name,
      folderId: searchParams.get("folderId"),
    });
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth PaperProps={{ sx: { p: 2 } }}>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        New Folder
      </Typography>
      <TextField
        inputRef={inputRef}
        onChange={(e) => setName(e.target.value)}
        size="small"
        value={name}
        autoFocus
      />
      <Box mt={4} display="flex" gap={2} justifyContent="flex-end">
        <Button onClick={() => setOpen(false)} variant="outlined">
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateFolderDialog;
