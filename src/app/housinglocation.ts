export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  alarmas?: boolean;
  camaras?: boolean;
  puertasReforzadas?: boolean;
  detectoresHumo?: boolean;
  status?: string;
  toiletNum: number;
  constructYear: number;
  tieneAscensor?:boolean;
}