export interface Masterpiece {
    id: string,
    name: {
        [language: string]: string;
    },
    description: {
        [language: string]: string;
    },
    order: number;
}
