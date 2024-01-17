import {
  GetUserDTO,
  CreateUserDTO,
  UpdateUserDTO,
  DeleteUserDTO,
} from '../../domain/dtos/user.dto';
import { IUser } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { db } from '../data/db-context';

export class UserRepository implements IUserRepository {
  async getById({ userId }: GetUserDTO): Promise<IUser | null> {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async create(data: CreateUserDTO): Promise<IUser> {
    const user = await db.user.create({
      data: {
        ...data,
      },
    });

    return user;
  }

  async update(data: UpdateUserDTO): Promise<IUser> {
    const updateUser = await db.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });

    return updateUser;
  }

  async delete(data: DeleteUserDTO): Promise<boolean> {
    const deleteUser = await db.user.delete({
      where: {
        id: data.userId,
      },
    });

    return !!deleteUser;
  }
}
