import { PipeTransform, Pipe } from '@angular/core';
import { RecruitSchema } from 'models/recruit';

@Pipe({
  name: 'recruitFilter'
})
export class RecruitFilterPipe implements PipeTransform {
  transform(recruits: RecruitSchema[], name: string): RecruitSchema[] {
    if (!recruits || !name) {
      return recruits;
    }

    return recruits.filter(recruit =>
      recruit.firstName.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
      recruit.lastName.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
}
