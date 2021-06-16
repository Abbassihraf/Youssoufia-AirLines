'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('offers', [{
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Taroudannt Airport',
      passengers: 20
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Rabat-Salé Airport',
      passengers: 20
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Cherif Al Idrissi Airport',
      passengers: 20
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Al Massira Airport',
      passengers: 20
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Ben Slimane Airport',
      passengers: 20
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Beni Mellal Airport',
      passengers: 20
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Bouarfa Airport',
      passengers: 20
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Mohammed V International Airport',
      passengers: 20
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Moulay Ali Cherif Airport',
      passengers: 20
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Mogador Airport',
      passengers: 20
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Saïss Airport',
      passengers: 20
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Guelmim Airport',
      passengers: 20
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Ifrane Airport',
      passengers: 20
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Menara Airport',
      passengers: 20
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Nador Airport',
      passengers: 20
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Ouarzazate Airport',
      passengers: 20
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Ouezzane Airport',
      passengers: 20
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Angads Airport',
      passengers: 20
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Ibn Battouta Airport',
      passengers: 20
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Tan Tan Airport',
      passengers: 20
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Taza Airport',
      passengers: 20
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Sania Ramel Airport',
      passengers: 20
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Zagora Airport',
      passengers: 20
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Dakhla Airport',
      passengers: 20
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Hassan I Airport',
      passengers: 20
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-01',
      airport: 'Smara Airport',
      passengers: 20
    },
    {
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Taroudannt Airport',
      passengers: 20
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Rabat-Salé Airport',
      passengers: 20
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Cherif Al Idrissi Airport',
      passengers: 20
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Al Massira Airport',
      passengers: 20
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Ben Slimane Airport',
      passengers: 20
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Beni Mellal Airport',
      passengers: 20
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Bouarfa Airport',
      passengers: 20
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Mohammed V International Airport',
      passengers: 20
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Moulay Ali Cherif Airport',
      passengers: 20
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Mogador Airport',
      passengers: 20
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Saïss Airport',
      passengers: 20
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Guelmim Airport',
      passengers: 20
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Ifrane Airport',
      passengers: 20
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Menara Airport',
      passengers: 20
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Nador Airport',
      passengers: 20
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Ouarzazate Airport',
      passengers: 20
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Ouezzane Airport',
      passengers: 20
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Angads Airport',
      passengers: 20
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Ibn Battouta Airport',
      passengers: 20
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Tan Tan Airport',
      passengers: 20
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Taza Airport',
      passengers: 20
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Sania Ramel Airport',
      passengers: 20
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Zagora Airport',
      passengers: 20
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Dakhla Airport',
      passengers: 20
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Hassan I Airport',
      passengers: 20
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-02',
      airport: 'Smara Airport',
      passengers: 20
    },
    {
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Taroudannt Airport',
      passengers: 20
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Rabat-Salé Airport',
      passengers: 20
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Cherif Al Idrissi Airport',
      passengers: 20
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Al Massira Airport',
      passengers: 20
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Ben Slimane Airport',
      passengers: 20
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Beni Mellal Airport',
      passengers: 20
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Bouarfa Airport',
      passengers: 20
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Mohammed V International Airport',
      passengers: 20
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Moulay Ali Cherif Airport',
      passengers: 20
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Mogador Airport',
      passengers: 20
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Saïss Airport',
      passengers: 20
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Guelmim Airport',
      passengers: 20
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Ifrane Airport',
      passengers: 20
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Menara Airport',
      passengers: 20
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Nador Airport',
      passengers: 20
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Ouarzazate Airport',
      passengers: 20
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Ouezzane Airport',
      passengers: 20
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Angads Airport',
      passengers: 20
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Ibn Battouta Airport',
      passengers: 20
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Tan Tan Airport',
      passengers: 20
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Taza Airport',
      passengers: 20
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Sania Ramel Airport',
      passengers: 20
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Zagora Airport',
      passengers: 20
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Dakhla Airport',
      passengers: 20
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Hassan I Airport',
      passengers: 20
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-03-03',
      airport: 'Smara Airport',
      passengers: 20
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('offers', null, {});
  }
};