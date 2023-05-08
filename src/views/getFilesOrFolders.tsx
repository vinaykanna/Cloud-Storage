import moment from "moment";

interface IProps {
  type: "FOLDER" | "FILE";
  data: any;
  sortBy: string;
}

export const getFilesOrFolders = ({ sortBy, data, type }: IProps) => {
  let result = data?.filter((item: any) => item.type === type) || [];

  if (sortBy === "a_z") {
    result = result?.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  if (sortBy === "z_a") {
    result = result?.sort((a: any, b: any) => b.name.localeCompare(a.name));
  }

  if (sortBy === "date_newest") {
    result = result?.sort((a: any, b: any) => {
      return moment.utc(b?.createdAt).local().diff(moment(a.createdAt));
    });
  }

  if (sortBy === "date_oldest") {
    result = result?.sort((a: any, b: any) => {
      return moment.utc(a?.createdAt).local().diff(moment(b.createdAt));
    });
  }

  if (type === "FILE") {
    if (sortBy === "size_low_to_high") {
      result = [...(result || [])]?.sort((a, b) => a.size - b.size);
    }
    if (sortBy === "size_high_to_low") {
      result = [...(result || [])]?.sort((a, b) => b.size - a.size);
    }
  }

  return result;
};
