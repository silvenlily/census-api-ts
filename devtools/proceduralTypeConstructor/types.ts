type collection = {
  count: "dynamic" | number | "?";
  hidden: "false" | false;
  name: string;
  resolve_list: string[];
};

type collectionList = {
  datatype_list: collection[];
  returned: number;
};

export { collectionList, collection };
