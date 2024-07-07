import type {CarItem} from "@/types/CarItem";
import {defaultCarEquipment, tempCarEquipment} from "@/utils/temporary-car-equipment";

export const defaultCarItem: CarItem = {
    id: null,
    title: null,
    description: null,
    moc: null,
    imgs: null,
    paliwo: null,
    rocznik: null,
    vin: null,
    pojemnosc: null,
    przebieg: null,
    rejestracja: null,
    kraj: null,
    liczbaWlacicieli: null,
    liczbaMiejsc: null,
    naped: null,
    liczbaDrzwi: null,
    cena: null,
    nadwozie: null,
    equipment: defaultCarEquipment
}

export const temporaryCarItems: CarItem[] = [
    {
        id: '1',
        title: "Volvo XC 60",
        rocznik: 2022,
        przebieg: 41_000,
        paliwo: "benzyna",
        moc: 310,
        pojemnosc: 1969,
        nadwozie: 'SUV',
        vin: 2323423423423423423423,
        cena: 20000,
        kraj: 'Polska',
        rejestracja: 'SR2024',
        liczbaWlacicieli: 1,
        liczbaMiejsc: 4,
        liczbaDrzwi: 5,
        naped: 'tył',
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InM0cGNuaWdtaHU4Ni1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.3JztCixcQrfZNwQCb7vV9ieZrbjJ6_0gBlMR2SKfe8c/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InM0cGNuaWdtaHU4Ni1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.3JztCixcQrfZNwQCb7vV9ieZrbjJ6_0gBlMR2SKfe8c/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InM0cGNuaWdtaHU4Ni1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.3JztCixcQrfZNwQCb7vV9ieZrbjJ6_0gBlMR2SKfe8c/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InM0cGNuaWdtaHU4Ni1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.3JztCixcQrfZNwQCb7vV9ieZrbjJ6_0gBlMR2SKfe8c/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ],
        equipment: tempCarEquipment,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies sagittis varius. Mauris a pharetra nulla. Nulla facilisi. Donec suscipit scelerisque ante. Aliquam erat volutpat. Quisque eu posuere ipsum. Sed consequat, quam sit amet dapibus vulputate, ligula purus fermentum lectus, vel fringilla sapien dui vel nisl. Praesent ut tempor diam. Aliquam gravida feugiat elit, nec commodo odio luctus quis. Donec sed feugiat tortor, vitae ornare turpis. In interdum, lectus a facilisis finibus, justo nisl sodales lorem, quis aliquam turpis orci ut augue. Fusce vitae gravida metus, in ultricies sapien. Morbi sed sapien ligula. Donec justo mi, sollicitudin sed placerat ac, suscipit vitae ante.\n' +
            '\n' +
            'Curabitur ac diam tempus, efficitur ligula a, tempus diam. Sed nec convallis turpis, nec vehicula sem. Quisque semper, ligula eu interdum gravida, dui dolor imperdiet ligula, in consectetur lacus ipsum imperdiet metus. Nulla sed nulla neque. Fusce pulvinar turpis lectus, id volutpat massa efficitur pharetra. Maecenas quis orci elit. Fusce suscipit pulvinar odio vitae dignissim. Phasellus pellentesque leo ac diam dictum, et posuere ante pellentesque. In id lacus tristique, varius magna et, viverra lacus. Nulla eu tincidunt dolor, quis lobortis ante. Donec eleifend malesuada augue, a finibus enim rhoncus ullamcorper. Maecenas sit amet est orci. Sed eget tempor tortor, vitae bibendum ligula.\n' +
            '\n' +
            'Nulla eu leo ut lorem malesuada elementum. Sed consequat semper pulvinar. Nam sit amet cursus mi. Nullam mattis suscipit lacus vel accumsan. Nullam a risus maximus lorem tempus ultrices. Sed sit amet quam vel quam faucibus congue vitae id nisi. Nulla varius orci est, quis ultricies turpis mattis eget. Vivamus volutpat venenatis turpis ut finibus. Donec lacinia fermentum bibendum. Integer neque ipsum, egestas sit amet mi feugiat, commodo pellentesque sem. Mauris vitae justo nec elit consequat maximus eu eget nunc. Morbi lacinia aliquet sem sed luctus. Nulla facilisi. Sed a odio non est luctus eleifend.'
    },
    {
        id: '2',
        title: "Land Rover Discovery Sport",
        rocznik: 2017,
        przebieg: 85_000,
        paliwo: "benzyna",
        moc: 240,
        pojemnosc: 1999,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjV0bHU0NjBkZGMyMDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.gJWq48yZkrWBK-cwO6GLCD2ruubTSAjpw0tLpcEQrLY/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '3',
        title: "Mercedes-Benz Klasa E",
        rocznik: 1991,
        przebieg: 131_500,
        paliwo: "benzyna",
        moc: 323,
        pojemnosc: 4973,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InBxdXdpaTJ6ZnZ0MzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.9KPg8SZTUh8F8ueiZuLV4k-uoWEYqp-3wXKQzcFUVmE/image;s=1440x0;q=100',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '4',
        title: "Audi Q3 1.4 TFSI S tronic",
        rocznik: 2015,
        przebieg: 155_000,
        paliwo: "benzyna",
        moc: 150,
        pojemnosc: 1395,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InE3YjlsMjBuY2F3MjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.HEwkbIvoEsKITHDeawaugSHcVnkkqX_qRTxRhTR2AIY/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '5',
        title: "Audi A8",
        rocznik: 2020,
        przebieg: 60_000,
        paliwo: "benzyna",
        moc: 340,
        pojemnosc: 2995,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBwNXlzdHI5bDhldjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.IS92Ga_gi_Q5ytQk7rbgVmsqntxjtkbQmC9uzfpYSkE/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '6',
        title: "Volkswagen Crafter",
        rocznik: 2024,
        przebieg: 10,
        paliwo: "diesel",
        moc: 140,
        pojemnosc: 1968,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRpcmZ0NzUwNHFhMTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.a8MuvGM_RFQe0j06iH2o21Mrh9Z8Qg5RlWa6ag_L9wQ/image;s=3840x0;q=100',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '7',
        title: "Mercedes-Benz Klasa E 220 CDI BlueEff Avantgarde",
        rocznik: 2012,
        przebieg: 301_442,
        paliwo: "diesel",
        moc: 170,
        pojemnosc: 2143,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImJndW9ueDE3Mm84YTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.th2uatWYxGOPXvnDe92O2cMCWKUVZN9AAF43B9JzEt0/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '8',
        title: "Volvo XC 60 D3 Momentum",
        rocznik: 2017,
        przebieg: 179_000,
        paliwo: "diesel",
        moc: 150,
        pojemnosc: 1969,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImtrOHZjYjc3aDl2YS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ExTw5mz2pNB542fdUpuu0IjjL2Wu-DMnk0pYtddzcjc/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '9',
        title: "Renault Trafic",
        rocznik: 2020,
        przebieg: 122_000,
        paliwo: "diesel",
        moc: 145,
        pojemnosc: 1997,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImNjdDZpYWJ2aG1zMS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.hep8OgTIhKYKzsjn2eNr6H06ZWDMEEtGGNePXXyK8Lg/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '10',
        title: "Nissan Qashqai 1.2 DIG-T N-Connecta",
        rocznik: 2017,
        przebieg: 122_000,
        paliwo: "benzyna",
        moc: 115,
        pojemnosc: 1197,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNoYmIxZmJzajRtYzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.p75y7OKcUjKEfj7O23ivgbIMlAWgz2zAS2FmWqUVDUQ/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '11',
        title: "Toyota Yaris Hybrid 100 Selection",
        rocznik: 2018,
        przebieg: 21_800,
        paliwo: "hybryda",
        moc: 75,
        pojemnosc: 1497,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjRlY2hwMWltczQycjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.I49jrmgbttJc7pbXriyMdbhfBgGtfeqBuwtEU_Bw5Xw/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '12',
        title: "Honda Civic 1.4 Comfort",
        rocznik: 2006,
        przebieg: 234_310,
        paliwo: "benzyna",
        moc: 83,
        pojemnosc: 1339,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IndtY284N3BoZnN0Ni1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.9g4ayN3OrJPbC_5sX_jZ60e_PupdwHoGEO3qE5hG7zQ/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '13',
        title: "Audi A7",
        rocznik: 2013,
        przebieg: 183_000,
        paliwo: "benzyna",
        moc: 310,
        pojemnosc: 2995,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InU4YWx2bnphYnRnMTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.B1HTomhVzcv7jz0xBGxVWMGzcsd6Ves-EE0X8enERxs/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '14',
        title: "Dodge Journey",
        rocznik: 2017,
        przebieg: 91_500,
        paliwo: "benzyna",
        moc: 287,
        pojemnosc: 3605,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InBneXQ5cmZ3NnJuaDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Zt_NYmz8sJ4rZQOozzaXk6YspY2x8Ex_H0d6osganoE/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '15',
        title: "Opel Astra 1.7 CDTI DPF Cosmo",
        rocznik: 2009,
        przebieg: 192_000,
        paliwo: "diesel",
        moc: 110,
        pojemnosc: 1686,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InlmYXV6Njl1MGYxdTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.RBFskYko5t8sITDcOft98LDjh-Yvo5lapXcPo8LZTFU/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '16',
        title: "Porsche Boxer 2.5",
        rocznik: 1999,
        przebieg: 96_700,
        paliwo: "benzyna",
        moc: 204,
        pojemnosc: 2480,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjkxNHpqOXlqeXByMi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.kLzxWIu3klEIs7lP-Y4WMVzPFpg4P6k1xFNIHgFM4X4/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '17',
        title: "Fiat Croma 1.9 JTD Dynamic",
        rocznik: 2010,
        przebieg: 197_925,
        paliwo: "diesel",
        moc: 120,
        pojemnosc: 1910,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjQ2MXF2Y284MTQybDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.HWLeORgEYtR-1bHfTJHx8IVNQtXS5hMvXjVWJg3t3zM/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '18',
        title: "Opel Vectra",
        rocznik: 2007,
        przebieg: 341_500,
        paliwo: "diesel",
        moc: 120,
        pojemnosc: 1910,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImVxd2wydmw5Mm5jMjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.YI6DFLjPKUpjqVdeUQSauJKBb90Mke3QagIFycs9Dhc/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '19',
        title: "Nissan Premiera",
        rocznik: 2002,
        przebieg: 222_000,
        paliwo: "benzyna",
        moc: 140,
        pojemnosc: 1998,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjB0bDkydjBxYjk0bDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.D6AjEUvVQrBy3JWwHqrRNGRGw4rOW4NpOFreMnHtflo/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    },
    {
        id: '20',
        title: "Audi A5 3.0 TDI Sportvack DPF",
        rocznik: 2012,
        przebieg: 324_000,
        paliwo: "diesel",
        moc: 204,
        pojemnosc: 2967,
        imgs: [
            'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQ2NXc2b2RyNG16bzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.oLleS4amsTJdFkf2NMLF0UV-UBM13tUaPffKLLB-Th8/image;s=1440x0;q=80',
            'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        ]
    }
]