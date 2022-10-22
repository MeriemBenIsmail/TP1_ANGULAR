export class Personne {

  name: string;
  firstname: string;
  age: number;
  favouriteQuote: string;
  description: string;
  keywords: string;
  path: string;
  cin: number;
  job: string;

  constructor(
    public id = 0,
    name = '',
    firstname = '',
    age = 0,
    path = '',
    cin = 1,
    job = '',
    favouriteQuote = '',
    description = '',
    keywords = ''
  ) {
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
    this.favouriteQuote = favouriteQuote;
    this.description = description;
    this.keywords = keywords;
  }
}
