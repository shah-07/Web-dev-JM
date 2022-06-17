interface player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  previousClubs?: string[];
}

const messy: player = {
  name: "messy",
  club: "abahoni",
  salary: 34343,
  wife: "sultana begum",
};

interface bios extends player {
  id: number;
  age?: number;
  location: string;
}

const hannan: bios = {
  id: 121,
  name: "hannan",
  location: "dhaka",
  club: "boshundhara",
  salary: 40000,
};
