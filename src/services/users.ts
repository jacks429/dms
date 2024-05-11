// /* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker';
import { RANDOMIZE } from '../app/constants.js';
import type { Users } from '../types/entities.js';

import usersStaticJSON from '../../data/users.json' assert { type: 'json' };

const usersStaticData: Users = usersStaticJSON;

export function getUsers(randomize = RANDOMIZE) {
	console.log('getUsers');

	const result = randomize
		? usersStaticData.map((p) => {
				p.name = faker.name.fullName();
				p.email = faker.internet.email();
				p.position = faker.name.jobTitle();
				p.country = faker.address.country();
				return p;
		  })
		: usersStaticData;

		// console.log(users);
		// console.log(result);

	return result;
}
