import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ReqUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export const UserEnterprise = createParamDecorator(
  (payload: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const enterprises = request.user?.enterprises;
    if (enterprises) {
      const enterpriseIndex = request.user?.enterprises.indexOf(payload);

      if (enterpriseIndex !== -1)
        return request.user?.enterprises[enterpriseIndex];
    }
    return null;
  },
);
