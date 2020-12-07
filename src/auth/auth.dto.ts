import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  IsEmail,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@ValidatorConstraint({ name: 'password', async: false })
export class PasswordValidation implements ValidatorConstraintInterface {
  public validate(text: string): boolean {
    return new RegExp(/^(?=.*[A-Z])(?=.*\d).*$/).test(text);
  }

  public defaultMessage(): string {
    return '$property should contain at least one digit, at least one upper case';
  }
}

export class AuthDto {
  @ApiProperty({ required: true, example: 'default@mail.com' })
  @IsEmail()
  public email: string;

  @ApiProperty({ required: true, example: 'Qwer1234' })
  @IsString()
  @MinLength(6)
  @Validate(PasswordValidation)
  public password: string;
}
