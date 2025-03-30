const getAuctionData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(auctionData), 2000);
  });
}

const auctionData = [
  {
    name: 'Witcherrr_3 (xml_t5)',
    author: 'Serge_VM222',
    timer: 1000000,
    bet: '0.10',
  },
  {
    name: 'Alien (green) e_e',
    author: 'Frank.Nagval',
    timer: 2000000,
    bet: '0.20',
  },
  {
    name: 'CoBRRRa',
    author: 'CPH_777',
    timer: 3000000,
    bet: '0.50',
  },
  {
    name: 'Diamonds (4)',
    author: 'sUpah_kiLLah',
    timer: 4000000,
    bet: '0.80',
  },
  {
    name: 'Holofobia2',
    author: 'ttgs',
    timer: 5000000,
    bet: '1.0',
  },
  {
    name: 'Baby Yoda 1',
    author: 'Peppppe22',
    timer: 6000000,
    bet: '0.25',
  },
  {
    name: 'alien vs. predator (01)',
    author: '1300e1440',
    timer: 7000000,
    bet: '0.97',
  },
  {
    name: 'IAMDECEPTICON',
    author: 'Robert_Wward',
    timer: 8000000,
    bet: '0.14',
  },
  {
    name: 'Ghostbusterrrrrrrs',
    author: 'ttgs',
    timer: 9000000,
    bet: '0.90',
  },
];


export { getAuctionData };