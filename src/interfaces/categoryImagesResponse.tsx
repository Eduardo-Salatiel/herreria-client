// Generated by https://quicktype.io

export interface CategoryImagesResponse {
    ok:     boolean;
    images: Image[];
}

export interface Image {
    createdAt: string;
    category:  Category;
    imageUrl:  string;
    __v:       number;
    uid:       string;
}

export enum Category {
    Puertas = "puertas",
}
