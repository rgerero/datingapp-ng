import { NumberSymbol } from "@angular/common";

export interface ApiError {
    message: string;
    details?: string;
    statusCode: number;
}