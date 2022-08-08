import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Res,
  Body,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  async index(@Res() res: Response) {
    const users = await this.userService.findAll();
    return res.send({ users }).status(HttpStatus.OK);
  }

  @Get('/:id')
  show(@Res() res: Response) {
    return res.status(HttpStatus.OK);
  }

  @Post('/')
  async create(@Res() res: Response, @Body() userDto: CreateUserDto) {
    const user = await this.userService.create(userDto);

    console.log(user);
    return res.send({ user }).status(HttpStatus.CREATED);
  }

  @Post('/:id')
  update(@Res() res: Response) {
    return res.status(HttpStatus.OK);
  }

  @Delete('/:id')
  destroy(@Res() res: Response) {
    return res.status(HttpStatus.NO_CONTENT);
  }
}
