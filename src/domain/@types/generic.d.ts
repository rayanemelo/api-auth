export type ServiceResponse<T = any> = {
  success: boolean;
  data?: T;
}