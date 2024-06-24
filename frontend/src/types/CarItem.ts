type FuelType = 'benzyna' | 'diesel' | 'hybryda'

export interface CarItem {
    id: string;
    title: string;
    rocznik: number;
    przebieg: number;
    paliwo: FuelType;
    moc: number;
    pojemnosc: number;
    imgs: string[];

}