import { IExperience } from './Experience';
import { IFormation } from './Formation';

export interface IProfil {
  localization?: string;
  searchZone?: string[];
  skill?: string[];
  description?: string;
  experiences?: IExperience[];
  formation?: string;
  previousFormations?: IFormation[];
}
