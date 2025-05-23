import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RolesGuard implements CanActivate {
    private reflektor;
    constructor(reflektor: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
