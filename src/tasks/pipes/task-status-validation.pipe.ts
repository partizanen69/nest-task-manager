import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN,
    ];
    
    transform(value: any) {
        const isValid = this.isStatusValid(value);
        if (!isValid) {
            throw new BadRequestException(`"${value}" is not a valid status`);
        } 
        
        return value;
    }

    private isStatusValid(status: any): boolean {
        if (typeof status !== 'string') return false;
        
        status = status.toUpperCase();
        const isValid = this.allowedStatuses.indexOf(status) > -1;
        return isValid;
    }
}