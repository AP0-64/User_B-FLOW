import { usertable } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements usertable {
  @ApiProperty()
  id: number;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  mail: string;

  @ApiProperty()
  password: string;
}
