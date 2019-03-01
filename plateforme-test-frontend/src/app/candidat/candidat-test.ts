export interface ICandidatTest {
  id: number;
  nom: string;
  statut: string;
  dateFin ?: string;
  dureeReelle: number;
  dureeTheorique: number;
  resultat ?: number;
}

export class CandidatTest implements ICandidatTest {
  id: number;
  nom: string;
  statut: string;
  dateFin ?: string;
  dureeReelle: number;
  dureeTheorique: number;
  resultat ?: number;

  constructor(ctor ?: ICandidatTest) {
    this.id = ctor && ctor.id || null;
    this.nom = ctor && ctor.nom || '';
    this.statut = ctor && ctor.statut || '';
    this.dateFin = ctor && ctor.dateFin || '';
    this.dureeReelle = ctor && ctor.dureeReelle || null;
    this.dureeTheorique = ctor && ctor.dureeTheorique || null;
    this.resultat = ctor && ctor.resultat || null;
  }
}
