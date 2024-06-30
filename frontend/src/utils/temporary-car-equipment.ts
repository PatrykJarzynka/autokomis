import type {CarEquipment} from "@/types/CarEquipment";

export const tempCarEquipment: CarEquipment = {
    audioMultimedia: {
        appleCarPlay: false,
        androidAuto: true,
        bluetooth: false,
        internet: true,
        kontrolaGlosem: false,
        ladowanieBezprzewodowe: true,
        nawigacjaSatelitarna: false,
        radio: true,
        usb: false,
        systemNaglosnienia: true,
        touchScreen: false,
        wyswietlaczHeadUp: true,
        zestawGlosnomowiacy: false,
    },
    safety: {
        abs: true,
        asystentHamowaniaAwaryjnego: false,
        asystentPasaRuchu: true,
        bocznaPoduszkaPowietrznaKierowcy: false,
        bocznePoduszkiPowietrznePrzod: true,
        bocznePoduszkiPowietrzneTyl: false,
        dachowanie: true,
        esp: false,
        emitacjaDzwiekuSilnika: true,
        hamowaniaAwaryjnePiesi: false,
        hamowanieAwaryjneWMiescie: true,
        isofix: false,
        kurtynaPowietrznaTylPoprzeczna: true,
        kurtynyPowietrznePrzod: false,
        kurtynyPowietrzneTyl: true,
        monitorowanieKondycjiKierowcy: false,
        ochronaPrzedKolizjaBok: true,
        ochronaPrzedKolizjaTyl: false,
        ochronaSluchuKolizja: true,
        ostrzezenieOKolizji: false,
        poduszkaKolanaKierowca: true,
        poduszkaKolanaPasazer: false,
        poduszkaPowietrznaPasazer: true,
        poduszkaPowietrznaCzolowaTyl: false,
        poduszkaPowietrznaKierowcy: true,
        poduszkaPowietrznaPasowBezpieczenstwa: false,
        poduszkaPowietrznCentralna: true,
        powiadomienieOWypadku: false,
        rekomendowaniePrzerwPodczasJazdy:true,
        rozdzialSilyHamowania: false,
        ruchPoprzecznyTyl: true,
        wspomaganieHamowania: false,
        zmeczenieKierowcy: true
    },
    comfort: {
        airConditioning: "automatyczna",
        cyfrowyKluczyk:  true,
        czujnikDeszczu: false,
        elektryczneSzybyPrzod: true,
        elektryczneSzybyTyl: false,
        elektrycznyDach: true,
        elektrycznyDachPilot: false,
        elektrycznyFotelKierowcy: true,
        elektrycznyFotelPasazera: true,
        engineStartNoKeys: false,
        foteleMasazPrzod: true,
        foteleMasazTyl: false,
        hak: true,
        foteleWentylowanePrzod: false,
        foteleWentylowaneTyl: true,
        keylessEntry: false,
        keylessGo: true,
        kierownicaBiegi: false,
        kierownicaOgrzewana: true,
        kierownicaWielofunkcyjna: false,
        kontrolaOgrzewania: true,
        ogrzewaneSiedzeniaTyl: false,
        ogrzewaniePostojowe: true,
        podlokietnikiPrzod: false,
        podlokietnikiTyl: true,
        pogrzewanaPrzedniaSzyba: false,
        pogrzewanyFotelKierowcy: true,
        pogrzewanyFotelPasazera: false,
        przyciemnioneSzybyTyl: true,
        regulacjaPodparciaLedzwiowegoKierowca: false,
        regulacjaPodparciaLedzwiowegoPasazer: true,
        shifterSkorzany: false,
        skorzanaKierownica: true,
        sportowaKierownica: false,
        sportoweFotelePrzod: true,
        sterowanieRadiemKierownica: false,
        tapicerka: "czesciowo skorzana",
        wycieraczki: false
    },
    driveAssistance: {
        tempomat: "tempomat",
        asystentJazdyWKorku: true,
        asystentPokonywaniaZakretow: false,
        asystentSwiatelDrogowych:  true,
        autoKierowanie: false,
        aystentZmianyPasa: true,
        brakeAssist: false,
        blokadaMechanizmuRoznicowego: true,
        czujnikiMartwegoPola: false,
        czujnikZmierzchu: true,
        elektrycznaKontrolaCisnieniaOpony: false,
        elektryczneLusterkaSkladanie: true,
        elektryczneLusterkaUstawienie: false,
        elektrycznyHamulecPostojowy: false,
        hillHolder: true,
        kameraLusterka: true,
        kameraPanoramiczna360: false,
        kameraParkowaniaTyl: true,
        kontrolaOdleglosciParkowaniePrzod: false,
        kontrolaOdleglosciParkowanieTyl: true,
        kontrolaOdleglosciPojazdu: true,
        kontrolaTrakcji: false,
        kontrolaZjazduZeStoku: true,
        lampyDoswietlajaceZakret: false,
        lampyPrzeciwmglowe: true,
        lampyPrzeciwmgloweLED:  true,
        lampyTylneLED: false,
        laneAssist: false,
        ogranicznikPredkosci: true,
        oswietlenieAdaptacyjne: true,
        oswietlenieWnetrzaLED: false,
        parkAssistant: true,
        podgrzewaneLusterka: false,
        reflektory: "lampy bi-ksenonowe",
        regulowanyDyferencjalCentralny: true,
        rozpoznawanieOgarniczeniaPredkosci: true,
        rozpoznawanieZnakowDrogowych: false,
        spryskiwaczeReflektorow: false,
        startStop: true,
        swiatlaDzienne: true,
        swiatlaDzienneLED: false,
        wspomaganieKierownicy: true,
        zapobieganieKolizjomSkrzyzowanie: false,
    },
    electric: {
        quickCharge: false,
        kabelDoLadowania: false,
        systemOdzyskiwaniaEnergii: false,
    },
    performance: {
        oponyRunFlat: true,
        felgi: "aluminiowe",
        filtrCzastekStalych: true,
        hamulceKompozytCeramiczny: false,
        opony: "off-road",
        zawieszenieHydropneumatyczne: true,
        zawieszenieKomfortowe: false,
        zawieszeniePneumatyczne: false,
        zawieszenieRegulowane: false,
        zawieszenieSportowe: false
    }
}

export const defaultCarEquipment: CarEquipment = {
    audioMultimedia: {
        appleCarPlay: false,
        androidAuto: false,
        bluetooth: false,
        internet: false,
        kontrolaGlosem: false,
        ladowanieBezprzewodowe: false,
        nawigacjaSatelitarna: false,
        radio: false,
        usb: false,
        systemNaglosnienia: false,
        touchScreen: false,
        wyswietlaczHeadUp: false,
        zestawGlosnomowiacy: false,
    },
    safety: {
        abs: false,
        asystentHamowaniaAwaryjnego: false,
        asystentPasaRuchu: false,
        bocznaPoduszkaPowietrznaKierowcy: false,
        bocznePoduszkiPowietrznePrzod: false,
        bocznePoduszkiPowietrzneTyl: false,
        dachowanie: false,
        esp: false,
        emitacjaDzwiekuSilnika: false,
        hamowaniaAwaryjnePiesi: false,
        hamowanieAwaryjneWMiescie: false,
        isofix: false,
        kurtynaPowietrznaTylPoprzeczna: false,
        kurtynyPowietrznePrzod: false,
        kurtynyPowietrzneTyl: false,
        monitorowanieKondycjiKierowcy: false,
        ochronaPrzedKolizjaBok: false,
        ochronaPrzedKolizjaTyl: false,
        ochronaSluchuKolizja: false,
        ostrzezenieOKolizji: false,
        poduszkaKolanaKierowca: false,
        poduszkaKolanaPasazer: false,
        poduszkaPowietrznaPasazer: false,
        poduszkaPowietrznaCzolowaTyl: false,
        poduszkaPowietrznaKierowcy: false,
        poduszkaPowietrznaPasowBezpieczenstwa: false,
        poduszkaPowietrznCentralna: false,
        powiadomienieOWypadku: false,
        rekomendowaniePrzerwPodczasJazdy:false,
        rozdzialSilyHamowania: false,
        ruchPoprzecznyTyl: false,
        wspomaganieHamowania: false,
        zmeczenieKierowcy: false
    },
    comfort: {
        airConditioning: null,
        cyfrowyKluczyk:  false,
        czujnikDeszczu: false,
        elektryczneSzybyPrzod: false,
        elektryczneSzybyTyl: false,
        elektrycznyDach: false,
        elektrycznyDachPilot: false,
        elektrycznyFotelKierowcy: false,
        elektrycznyFotelPasazera: false,
        engineStartNoKeys: false,
        foteleMasazPrzod: false,
        foteleMasazTyl: false,
        hak: false,
        foteleWentylowanePrzod: false,
        foteleWentylowaneTyl: false,
        keylessEntry: false,
        keylessGo: false,
        kierownicaBiegi: false,
        kierownicaOgrzewana: false,
        kierownicaWielofunkcyjna: false,
        kontrolaOgrzewania: false,
        ogrzewaneSiedzeniaTyl: false,
        ogrzewaniePostojowe: false,
        podlokietnikiPrzod: false,
        podlokietnikiTyl: false,
        pogrzewanaPrzedniaSzyba: false,
        pogrzewanyFotelKierowcy: false,
        pogrzewanyFotelPasazera: false,
        przyciemnioneSzybyTyl: false,
        regulacjaPodparciaLedzwiowegoKierowca: false,
        regulacjaPodparciaLedzwiowegoPasazer: false,
        shifterSkorzany: false,
        skorzanaKierownica: false,
        sportowaKierownica: false,
        sportoweFotelePrzod: false,
        sterowanieRadiemKierownica: false,
        tapicerka: null,
        wycieraczki: false
    },
    driveAssistance: {
        tempomat: null,
        asystentJazdyWKorku: false,
        asystentPokonywaniaZakretow: false,
        asystentSwiatelDrogowych:  false,
        autoKierowanie: false,
        aystentZmianyPasa: false,
        brakeAssist: false,
        blokadaMechanizmuRoznicowego: false,
        czujnikiMartwegoPola: false,
        czujnikZmierzchu: false,
        elektrycznaKontrolaCisnieniaOpony: false,
        elektryczneLusterkaSkladanie: false,
        elektryczneLusterkaUstawienie: false,
        elektrycznyHamulecPostojowy: false,
        hillHolder: false,
        kameraLusterka: false,
        kameraPanoramiczna360: false,
        kameraParkowaniaTyl: false,
        kontrolaOdleglosciParkowaniePrzod: false,
        kontrolaOdleglosciParkowanieTyl: false,
        kontrolaOdleglosciPojazdu: false,
        kontrolaTrakcji: false,
        kontrolaZjazduZeStoku: false,
        lampyDoswietlajaceZakret: false,
        lampyPrzeciwmglowe: false,
        lampyPrzeciwmgloweLED:  false,
        lampyTylneLED: false,
        laneAssist: false,
        ogranicznikPredkosci: false,
        oswietlenieAdaptacyjne: false,
        oswietlenieWnetrzaLED: false,
        parkAssistant: false,
        podgrzewaneLusterka: false,
        reflektory: null,
        regulowanyDyferencjalCentralny: false,
        rozpoznawanieOgarniczeniaPredkosci: false,
        rozpoznawanieZnakowDrogowych: false,
        spryskiwaczeReflektorow: false,
        startStop: false,
        swiatlaDzienne: false,
        swiatlaDzienneLED: false,
        wspomaganieKierownicy: false,
        zapobieganieKolizjomSkrzyzowanie: false,
    },
    electric: {
        quickCharge: false,
        kabelDoLadowania: false,
        systemOdzyskiwaniaEnergii: false,
    },
    performance: {
        oponyRunFlat: false,
        felgi: null,
        filtrCzastekStalych: false,
        hamulceKompozytCeramiczny: false,
        opony: null,
        zawieszenieHydropneumatyczne: false,
        zawieszenieKomfortowe: false,
        zawieszeniePneumatyczne: false,
        zawieszenieRegulowane: false,
        zawieszenieSportowe: false
    }
}