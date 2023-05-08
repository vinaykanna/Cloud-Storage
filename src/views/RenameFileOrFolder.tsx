import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { DialogProps } from "../types";
import { renameFile } from "../api";
import { snack } from "../components/toast";

interface Props extends DialogProps {
  itemName: string;
  itemId: string;
}

const RenameFileOrFolderDialog = (props: Props) => {
  const { open, itemId, itemName, setOpen } = props;
  const [name, setName] = useState<string>("");
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setName(itemName);
  }, [itemName]);

  const { mutate } = useMutation(renameFile, {
    onSuccess: () => {
      snack.success("Item renamed successfully");
      setOpen(false);
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
      id: itemId,
    });
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth PaperProps={{ sx: { p: 2 } }}>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Rename Folder
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
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </Dialog>
  );
};

export default RenameFileOrFolderDialog;
