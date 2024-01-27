
export interface Istd {
    fname : string,
    lname : string,
    email : string,
    contact : number
}

export interface Ipost {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export interface Itodo {
    userId: number;
    id: number;
    title: string;
    completed: true | false;
}

export interface Iskill {
    skillName : string,
    content : string
}
