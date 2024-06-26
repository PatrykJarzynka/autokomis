import type {CarEquipmentValues} from "@/types/CarEquipment";

export interface Translation {
    title: string;
    values: Partial<Record<CarEquipmentValues, string >>
}
