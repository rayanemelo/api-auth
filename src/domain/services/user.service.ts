import { ServiceResponse } from "../@types/generic";
import { CreateUserDTO, DeleteUserDTO, GetUserDTO, GetUserResponseDTO, UpdateUserDTO } from "../dtos/user.dto";

export interface IUserService {
  getUser(data: GetUserDTO): Promise<ServiceResponse<GetUserResponseDTO>>;
  createUser(data: CreateUserDTO): Promise<ServiceResponse>;
  updateUser(data: UpdateUserDTO): Promise<ServiceResponse>;
  deleteUser(data: DeleteUserDTO): Promise<ServiceResponse>;
}