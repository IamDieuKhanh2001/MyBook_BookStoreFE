import { IBookLanguage } from "./IBookLanguage";

interface IBookFilter {
    limit: string;
    search: string;
    minPrice: string;
    maxPrice: string;
    orderBy: string;
    language: IBookLanguage | null,
    author: IAuthor | null,
    ccategory: IChildCategory | null,
    publisher: IPublisher | null,
    provider: IProvider | null,
    bookForm: IBookForm | null,
}