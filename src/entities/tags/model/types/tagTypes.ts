export interface ITag {
  id: number;
  title: string;
}

export interface TagStateSchema {
  tags: ITag[];
  error: string;
  isLoading: boolean;
}
