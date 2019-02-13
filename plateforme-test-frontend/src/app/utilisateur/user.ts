export interface IUser {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  dateCreation?: string;
  dateModification?: string;
  profil: string ;
  enable:	boolean;
}

export class User implements IUser{
    id: number;
    nom: string;
    prenom: string;
    mail:string;
    dateCreation?:	string;
    dateModification?:	string;
    profil: string ;
    enable:	boolean;

    constructor(ctor?: IUser) {
        this.id = ctor && ctor.id || null;
        this.nom = ctor && ctor.nom || '';
        this.prenom = ctor && ctor.prenom || '';
        this.mail = ctor && ctor.mail || '';
        this.dateCreation = ctor && ctor.dateCreation || '';
        this.dateModification = ctor && ctor.dateModification || '';
        this.profil = ctor && ctor.profil || '';
        this.enable = ctor && ctor.enable || false;
      }
}