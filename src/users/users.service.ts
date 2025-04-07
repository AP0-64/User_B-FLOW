import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return this.prisma.usertable.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.usertable.findMany();
  }

  findOne(id: number) {
    return this.prisma.usertable.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.usertable.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.usertable.delete({ where: { id } });
  }
}
