import { AccessLevel } from "@prisma/client";

export interface GetUserDTO {
  userId: string;
}

export interface GetUserResponseDTO {
  name: string;
  lastName: string;
  email: string;
  accessLevel: AccessLevel;
}

export interface CreateUserDTO {
  name: string;
  lastName: string;
  email: string;
  password: string;
  accessLevel: AccessLevel;
}

export interface UpdateUserDTO {
  id: string;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  accessLevel?: AccessLevel;
}

export interface DeleteUserDTO {
  userId: string;
}

