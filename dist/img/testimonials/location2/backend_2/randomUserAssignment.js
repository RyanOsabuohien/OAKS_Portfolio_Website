let randomuser = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "شایان", last: "احمدی" },
      location: {
        street: { number: 5981, name: "شهید کبیری طامه" },
        city: "ایلام",
        state: "زنجان",
        country: "Iran",
        postcode: 56252,
        coordinates: { latitude: "19.5278", longitude: "-118.7040" },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "shyn.hmdy@example.com",
      login: {
        uuid: "80598268-5681-4027-abd6-5872e55f522c",
        username: "tinygoose423",
        password: "retire",
        salt: "uzIgciDx",
        md5: "6550ac5cb2fec4a86c48b293198ad5ec",
        sha1: "ea5945f6cf0973b9d07e99aeb54852a58440cacb",
        sha256:
          "f4177d9cf3547882d6b27b6e03ac5a60495acaa023b2bc28a09b332972cfa71a",
      },
      dob: { date: "1975-03-30T17:15:33.487Z", age: 48 },
      registered: { date: "2012-02-09T03:54:55.352Z", age: 11 },
      phone: "093-39311730",
      cell: "0992-237-0874",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/16.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
      },
      nat: "IR",
    },
  ],
  info: { seed: "0d5e8023521aaea7", results: 1, page: 1, version: "1.4" },
};

console.log (randomuser.results[0].location.coordinates.longitude);
console.log (randomuser.info.version);