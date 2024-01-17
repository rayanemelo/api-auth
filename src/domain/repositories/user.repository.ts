import { CreateUserDTO, DeleteUserDTO, GetUserDTO, UpdateUserDTO } from "../dtos/user.dto";
import { IUser } from "../entities/user.entity";

export interface IUserRepository {
  getById(data: GetUserDTO): Promise<IUser | null>;
  create(data: CreateUserDTO): Promise<IUser>;
  update(data: UpdateUserDTO): Promise<IUser>;
  delete(data: DeleteUserDTO): Promise<boolean>; 
}