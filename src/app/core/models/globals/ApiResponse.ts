export interface ApiResponse<T = any> {
  payload: T;
  message: string[];
  code: number;
  error: boolean;
}
