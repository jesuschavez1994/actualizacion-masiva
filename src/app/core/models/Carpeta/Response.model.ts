import { ApiResponse } from "../globals/ApiResponse";
import { Carpeta } from "./DTO.model";

export interface GetCarpetasResponse extends ApiResponse<Carpeta[]>{}