import { ILocation } from 'app/shared/model/location.model';
import { IEmployee } from 'app/shared/model/employee.model';
import { IJobHistory } from 'app/shared/model/job-history.model';

export interface IDepartment {
  id?: number;
  departmentName?: string;
  location?: ILocation | null;
  employees?: IEmployee[] | null;
  jobHistory?: IJobHistory | null;
}

export const defaultValue: Readonly<IDepartment> = {};
