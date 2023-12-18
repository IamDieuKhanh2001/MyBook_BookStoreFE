interface IParentCategoryDetail {
    id: number
    name: string
    created_at: string
    updated_at?: string
    deleted_at?: string | null;
    childrenCategory: IChildCategory[]
  }