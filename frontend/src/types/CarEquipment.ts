type AirConditioningType = 'automatyczna' | 'automatyczna, 2 strefowa' | 'automatyczna, 3 strefowa' | 'automatyczna 4+ strefowa' | 'manualna'
type UpholsteryType = 'alcantara' | 'czesciowo skorzana' | 'materialowa' | 'skorzana';
type TempomatType = 'tempomat' | 'tempomat adaptacyjny ACC' | 'tempomat przewidujacy PCC'
type HeadlightsType = 'lampy bi-ksenonowe' | 'lampy ksenonowe' | 'lampy przednie w technologii LED' | 'reflektory laserowe'
type TireType = 'letnie' | 'off-road' | 'wielosezonowe' | 'zimowe'
type RimsType = 'aluminiowe' | 'stalowe'


export interface AudioMultimedia {
    appleCarPlay: boolean;
    bluetooth: boolean;
    zestawGlosnomowiacy: boolean;
    ladowanieBezprzewodowe: boolean;
    systemNaglosnienia: boolean;
    touchScreen: boolean;
    internet: boolean;
    androidAuto: boolean;
    radio: boolean;
    usb: boolean;
    nawigacjaSatelitarna: boolean;
    wyswietlaczHeadUp: boolean;
    kontrolaGlosem: boolean;
}

export interface Comfort {
    airConditioning: AirConditioningType;
    elektrycznyFotelKierowcy: boolean;
    elektrycznyFotelPasazera: boolean;
    tapicerka: UpholsteryType;
    pogrzewanyFotelKierowcy: boolean;
    pogrzewanyFotelPasazera: boolean;
    regulacjaPodparciaLedzwiowegoKierowca: boolean;
    regulacjaPodparciaLedzwiowegoPasazer: boolean;
    foteleWentylowanePrzod: boolean;
    foteleWentylowaneTyl: boolean;
    foteleMasazPrzod: boolean;
    foteleMasazTyl: boolean;
    sportoweFotelePrzod: boolean;
    ogrzewaneSiedzeniaTyl: boolean;
    podlokietnikiPrzod: boolean;
    podlokietnikiTyl: boolean;
    skorzanaKierownica: boolean;
    sportowaKierownica: boolean;
    sterowanieRadiemKierownica: boolean;
    kierownicaWielofunkcyjna: boolean;
    kierownicaOgrzewana: boolean;
    kierownicaBiegi: boolean;
    shifterSkorzany: boolean;
    cyfrowyKluczyk: boolean;
    keylessEntry: boolean;
    keylessGo: boolean;
    engineStartNoKeys: boolean;
    ogrzewaniePostojowe: boolean;
    czujnikDeszczu: boolean;
    kontrolaOgrzewania: boolean;
    pogrzewanaPrzedniaSzyba: boolean;
    wycieraczki: boolean;
    elektryczneSzybyPrzod: boolean;
    elektryczneSzybyTyl: boolean;
    przyciemnioneSzybyTyl: boolean;
    elektrycznyDach: boolean;
    hak: boolean;
    elektrycznyDachPilot: boolean;
}

export interface DriveAssistance {
    tempomat: TempomatType,
    reflektory: HeadlightsType,
    kontrolaOdleglosciParkowaniePrzod: boolean;
    kontrolaOdleglosciParkowanieTyl: boolean;
    parkAssistant: boolean;
    kameraPanoramiczna360: boolean;
    kameraParkowaniaTyl: boolean;
    elektryczneLusterkaUstawienie: boolean;
    elektryczneLusterkaSkladanie: boolean;
    podgrzewaneLusterka: boolean;
    kameraLusterka: boolean;
    czujnikiMartwegoPola: boolean;
    aystentZmianyPasa: boolean;
    laneAssist: boolean;
    kontrolaOdleglosciPojazdu: boolean;
    ogranicznikPredkosci: boolean;
    brakeAssist: boolean;
    asystentPokonywaniaZakretow: boolean;
    kontrolaTrakcji: boolean;
    kontrolaZjazduZeStoku: boolean;
    hillHolder: boolean;
    rozpoznawanieOgarniczeniaPredkosci: boolean;
    rozpoznawanieZnakowDrogowych: boolean;
    zapobieganieKolizjomSkrzyzowanie: boolean;
    autoKierowanie: boolean;
    asystentSwiatelDrogowych: boolean;
    lampyDoswietlajaceZakret: boolean;
    oswietlenieAdaptacyjne: boolean;
    czujnikZmierzchu: boolean;
    spryskiwaczeReflektorow: boolean;
    swiatlaDzienne: boolean;
    swiatlaDzienneLED: boolean;
    lampyPrzeciwmglowe: boolean;
    lampyPrzeciwmgloweLED: boolean;
    lampyTylneLED: boolean;
    startStop: boolean;
    elektrycznaKontrolaCisnieniaOpony: boolean;
    elektrycznyHamulecPostojowy: boolean;
    wspomaganieKierownicy: boolean;
    oswietlenieWnetrzaLED: boolean;
    asystentJazdyWKorku: boolean;
    regulowanyDyferencjalCentralny: boolean;
    blokadaMechanizmuRoznicowego: boolean
}

export interface Electric {
    quickCharge: boolean;
    kabelDoLadowania: boolean;
    systemOdzyskiwaniaEnergii: boolean;
}

export interface Performance {
    oponyRunFlat: boolean;
    zawieszenieRegulowane: boolean;
    zawieszenieHydropneumatyczne: boolean;
    zawieszenieKomfortowe: boolean;
    zawieszenieSportowe: boolean;
    zawieszeniePneumatyczne: boolean;
    hamulceKompozytCeramiczny: boolean;
    filtrCzastekStalych: boolean;
    opony: TireType,
    felgi: RimsType,
}

export interface Safety {
    abs: boolean;
    esp: boolean;
    wspomaganieHamowania: boolean;
    rozdzialSilyHamowania: boolean;
    hamowanieAwaryjneWMiescie: boolean;
    hamowaniaAwaryjnePiesi: boolean;
    asystentHamowaniaAwaryjnego: boolean;
    ostrzezenieOKolizji: boolean;
    ochronaSluchuKolizja: boolean;
    ochronaPrzedKolizjaTyl: boolean;
    ochronaPrzedKolizjaBok: boolean;
    ruchPoprzecznyTyl: boolean;
    emitacjaDzwiekuSilnika: boolean;
    zmeczenieKierowcy: boolean;
    rekomendowaniePrzerwPodczasJazdy: boolean;
    monitorowanieKondycjiKierowcy: boolean;
    asystentPasaRuchu: boolean;
    powiadomienieOWypadku: boolean;
    poduszkaPowietrznaKierowcy: boolean;
    poduszkaPowietrznaPasazer: boolean;
    poduszkaKolanaKierowca: boolean;
    poduszkaKolanaPasazer: boolean;
    kurtynyPowietrznePrzod: boolean;
    kurtynyPowietrzneTyl: boolean;
    poduszkaPowietrznCentralna: boolean;
    poduszkaPowietrznaCzolowaTyl: boolean;
    bocznePoduszkiPowietrznePrzod: boolean;
    bocznePoduszkiPowietrzneTyl: boolean;
    bocznaPoduszkaPowietrznaKierowcy: boolean;
    kurtynaPowietrznaTylPoprzeczna: boolean;
    poduszkaPowietrznaPasowBezpieczenstwa: boolean;
    isofix: boolean;
    dachowanie: boolean;
}

export interface CarEquipment {
    audioMultimedia: AudioMultimedia;
    comfort: Comfort;
    electric: Electric;
    driveAssistance: DriveAssistance;
    performance: Performance;
    safety: Safety
}

export type CarEquipmentKeys = keyof CarEquipment;
export type CarEquipmentValues =
    keyof CarEquipment["audioMultimedia"] |
    keyof CarEquipment["safety"] |
    keyof CarEquipment["comfort"] |
    keyof CarEquipment["electric"] |
    keyof CarEquipment["driveAssistance"] |
    keyof CarEquipment["performance"];