import _ from "lodash";
import { ServiceResponse } from "../../domain/@types/generic";
import { GetUserDTO, GetUserResponseDTO, CreateUserDTO, UpdateUserDTO, DeleteUserDTO } from "../../domain/dtos/user.dto";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { IUserService } from "../../domain/services/user.service";

export class UserService implements IUserService {

  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  
  async getUser(data: GetUserDTO): Promise<ServiceResponse<GetUserResponseDTO>> {
    const user = await this.userRepository.getById(data);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      success: true,
      data: _.pick(user, ["id", "name", "email", "lastName", "accessLevel"]),
    }
  }
  
  async createUser(data: CreateUserDTO): Promise<ServiceResponse> {
    await this.userRepository.create(data);
  
    return {
      success: true,
    }
  }
  
  async updateUser(data: UpdateUserDTO): Promise<ServiceResponse> {
    await this.userRepository.update(data);
 
    return {
      success: true, 
    }
  }

  async deleteUser(data: DeleteUserDTO): Promise<ServiceResponse> {
    const user = await this.userRepository.delete(data);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      success: true,
    }
  }
}

// constructor(private readonly userRepository: IUserRepository) {}