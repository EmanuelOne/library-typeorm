import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  // inside validation pipe, we can use custom error message
  // app.useGlobalPipes(new ValidationPipe({
  //   transform: true,
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  //   validationError: { target: false },
  //   transformOptions: {
  //     enableImplicitConversion: true,
  //   },
  //   errorMessage: {
  //     required: '{{propertyName}} is required',
  //     minLength: '{{propertyName}} must be at least {{minLength}} characters',
  //     maxLength: '{{propertyName}} must be at most {{maxLength}} characters',
  //     pattern: '{{propertyName}} must match {{pattern}}',
  //     min: '{{propertyName}} must be greater than or equal to {{min}}',
  //     max: '{{propertyName}} must be less than or equal to {{max}}',
  //     isNotEmpty: '{{propertyName}} must not be empty',
  //     isEmpty: '{{propertyName}} must be empty',
  //     isNotIn: '{{propertyName}} must not be in {{notIn}}',
  //     isIn: '{{propertyName}} must be in {{isIn}}',
  //     isUUID: '{{propertyName}} must be a UUID',
  //     isDateString: '{{propertyName}} must be a date string',
  //     isDate: '{{propertyName}} must be a date',
  //     isAfter: '{{propertyName}} must be after {{isAfter}}',
  //     isBefore: '{{propertyName}} must be before {{isBefore}}',
  //     isEmail: '{{propertyName}} must be an email',
  //     isArray: '{{propertyName}} must be an array',
  //     isCreditCard: '{{propertyName}} must be a credit card',
  //     isDivisibleBy: '{{propertyName}} must be divisible by {{divisibleBy}}',

  await app.listen(8080);
}
bootstrap();
