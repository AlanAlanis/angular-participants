export class Participant {
    strInitials: string;
    strName: string;
    strAddress: string;
    strPreferredLanguage: string;

    constructor(
        strInitials: string,
        strName: string,
        strAddress: string,
        strPreferredLanguage: string
    ){
        this.strInitials = strInitials;
        this.strName = strName;
        this.strAddress = strAddress;
        this.strPreferredLanguage = strPreferredLanguage;
    }
}