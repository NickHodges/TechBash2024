import { db, NOW, Contacts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

}
  await db.insert(Contacts).values([
    { timestamp: NOW, name: 'Charlie',  email: 'charlie@tuna.com', message: 'Hello from the briny deep!'},
    { timestamp: NOW, name: 'Nina', email: 'nina@gmail.com', message: 'Hello from Topeka, KS!' },
    { timestamp: NOW, name: 'Bruce', email: 'Bruce@springsteen.com', message: 'Greetings from Asbury Park!'}
	]);