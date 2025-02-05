import { Injectable } from '@angular/core';
import { Pharmacy } from '../model/pharmacy';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  private pharmacies: Pharmacy[] = [
    {
      id: 1,
      name: 'Pharmacie Centrale',
      address: '123 Rue Principale',
      phone: '0123456789',
    },
    {
      id: 2,
      name: 'Pharmacie du Nord',
      address: '456 Rue Principale',
      phone: '0987654321',
    },
  ];

  getPharmacies(): Pharmacy[] {
    return this.pharmacies;
  }

  // getPharmacyById(id: number): Pharmacy | undefined {
  //   return this.pharmacies.find((pharmacy) => pharmacy.id === id);
  // }

  //permet de récupérer un pharmacie par son id
  getPharmacyById(id: number): Observable<Pharmacy | undefined> {
    const pharmacy = this.pharmacies.find((pharmacy) => pharmacy.id === id);
    return of(pharmacy);
  }
  addPharmacy(pharmacy: Pharmacy) {
    this.pharmacies.push(pharmacy);
  }

  deletePharmacy(id: number) {
    this.pharmacies = this.pharmacies.filter((p) => p.id !== id);
  }
}
