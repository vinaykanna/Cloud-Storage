import { http } from "./http";

const createFolder = (data: any) => {
  return http.post("/projects/cloud-storage/create-folder", data);
};

const uploadFile = (data: any) => {
  return http.post("/projects/cloud-storage/upload-file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const createLink = (data: any) => {
  return http.post("/projects/cloud-storage/create-link", data);
};

const moveFile = (data: any) => {
  return http.put(`/projects/cloud-storage/move-file`, data);
};

const getStorage = ({ queryKey }: any) => {
  const params: any = queryKey[1];
  return http.get("/projects/cloud-storage", { params });
};

const getTotalStorage = ({ queryKey }: any) => {
  const clientId = queryKey[1];
  return http.get("/projects/cloud-storage/total-storage", {
    params: { clientId },
  });
};

const searchStorage = (params: any) => {
  return http.get("/projects/cloud-storage", { params });
};

const getStorageTree = ({ queryKey }: any) => {
  return http.get("/projects/cloud-storage/tree", {
    params: { clientId: queryKey[1] },
  });
};

const renameFile = (data: any) => {
  return http.post("/projects/cloud-storage/rename-file", data);
};

const removeFile = (id: number) => {
  return http.delete(`/projects/cloud-storage/remove-file/${id}`);
};

const replaceFileOrFolder = (data: any) => {
  return http.post(`/projects/cloud-storage/replace`, data);
};

const keepBothFilesOrFolders = (data: any) => {
  return http.post(`/projects/cloud-storage/keep-both`, data);
};

export {
  createFolder,
  getStorage,
  uploadFile,
  moveFile,
  getStorageTree,
  renameFile,
  removeFile,
  searchStorage,
  replaceFileOrFolder,
  keepBothFilesOrFolders,
  getTotalStorage,
  createLink,
};
