const { faker } = require('@faker-js/faker');

export class Company {
	companyName: string;
	// companyPhrase: string;
	location: {
		lat: number;
		lng: number
	}

	constructor() {
		this.companyName = faker.company.companyName();
		// this.companyPhrase = faker.company.companyPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}
}

