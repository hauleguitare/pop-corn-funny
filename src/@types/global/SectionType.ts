
export interface IGenres{
    id: string | number,
    name: string,
    type?: IGenres[]
}
export interface ISectionType{
    id: string,
    name: string,
    type: IGenres[]
}