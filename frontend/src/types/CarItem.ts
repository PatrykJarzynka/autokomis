type FuelType = 'benzyna' | 'diesel' | 'hybryda'
type BodyType = 'Sedan' | 'SUV' | 'Minivan' | 'Kompakt' | 'Kombi' | 'Kabriolet' | 'Coupe' | 'Hatchback'
type DriveType = 'przód' | 'typ' | '4x4'

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

}