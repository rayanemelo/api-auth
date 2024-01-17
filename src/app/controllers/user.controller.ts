import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repository/user.repository';

const userService = new UserService(new UserRepository());

export class UserController {
  static async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { params } = req;

      const response = await userService.getUser({
        userId: params.userId,
      });
      
      res.status(200).json({
        message: "Success",
        data: response.data,
      });
    } catch (error) {
      console.log("error: ", error);
      
      res.status(500).json({
        message: "Error",
      })
    }
  }
  
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      const response = await userService.createUser({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        accessLevel: body.accessLevel,
      })

      res.status(200).json({
        message: "Created",
        data: response.data,
      });
    } catch (error) {
      console.log("error: ", error);

      res.status(500).json({
        message: "Error",
      })
    }
  } 
  
  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { body, params } = req;

      const response = await userService.updateUser({
        id: params.userId,
        ...body,
      });

      res.status(200).json({
        message: "Updated",
        data: response.data,
      }); 
    } catch (error) {
      console.log("error: ", error);

      res.status(500).json({
        message: "Error",
      })
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { params } = req;

      const response = await userService.deleteUser({
        userId: params.userId,
      });

      res.status(200).json({
        message: "Deleted",
        data: response.data,
      });
    } catch (error) {
      console.log("error: ", error);

      res.status(500).json({
        message: "Error",
      })
    }
  }
}