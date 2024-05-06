import {ICarWithAuthModel} from "./ICarWithAuthModel";
import {IPaginatedPageModel} from "./IPaginationPageModel";

export interface ICarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: IPaginatedPageModel | null;
    next: IPaginatedPageModel | null;
    items: ICarWithAuthModel[];
}