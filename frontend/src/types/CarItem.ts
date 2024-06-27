import type {CarEquipment} from "@/types/CarEquipment";

export const driveType = ['przód', 'tył', '4x4'] as const;
export const fuelType = ['benzyna','diesel','hybryda'] as const;
export const bodyType = ['Sedan','SUV','Minivan','Kompakt','Kombi','Kabriolet','Coupe','Hatchback'] as const;


type FuelType = typeof fuelType[number];
type BodyType = typeof bodyType[number];
type DriveType = typeof driveType[number];

export interface CarItem {
    id: string;
    title: string;
    rocznik: number;
    przebieg: number;
    paliwo: FuelType;
    moc: number;
    pojemnosc: number;
    imgs: string[];
    nadwozie: BodyType;
    naped: DriveType;
    liczbaDrzwi: number;
    liczbaMiejsc: number;
    kraj: string;
    liczbaWlacicieli: number;
    cena: number;
    vin: number;
    rejestracja: string;
    equipment: CarEquipment;
    description: string

}