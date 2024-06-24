import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const handleExceptions = (error) => {
  console.log(error);
  if (error.code === 11000) {
    throw new BadRequestException(`Pokemon exists in db`);
  }

  throw new InternalServerErrorException(`Can't create Pokemon`);
};
