import { Controller, Body, Post, Get, Param, UnprocessableEntityException, Delete } from '@nestjs/common';
import { PrismaPromise, User } from '@prisma/client';
import { CreateUserDto } from './DTO/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enum/role.enum';


@Controller()
export class UsersController {
    constructor(private service: UsersService){}

    @Post('create-user')
    createUser(@Body() data: CreateUserDto): Promise<User>{
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.USER)
    };

    @Post('create-admin')
    createAdmin(@Body() data: CreateUserDto): Promise<User>{
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.ADMIN)
    };

    @Get('find/:id')
    findOne(@Param('id') id: string): Promise<User>{
        return this.service.findOne(id);
    };

    @Get('find-all')
    findMany(){
        return this.service.findMany();
    };

    @Delete('delete/:id')
    deleteOne(@Param('id') id: string): Promise<{ message: string}>{
        return this.service.deleteOne(id)
    }
    
}
