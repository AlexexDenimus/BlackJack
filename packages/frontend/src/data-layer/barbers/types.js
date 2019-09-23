// @flow

export type BarberDto = {
    id: String,
    picture: String,
    fullName: String,
    description: String
}

export type BarbersMapper = {
        list: BarberDto[]
}