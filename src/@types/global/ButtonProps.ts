
export interface IGenres{
    id: string,
    name: string,
    type?: IGenres[]
}
export interface IButtonProps{
    id: string,
    name: string,
    type: IGenres[]
}