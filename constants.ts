
import { Product, ModelData, NavLink } from './types';

export const LOGO_URL = 'https://i.imgur.com/3Z6E5od.png';

export const products: Product[] = [
  { id: 1, name: 'Meteorit', price: 5000.00, imageUrl: 'https://picsum.photos/seed/meteorite/400/400' },
  { id: 2, name: 'Tshirt', price: 500.00, imageUrl: 'https://picsum.photos/seed/tshirt/400/400' },
  { id: 3, name: 'Astronot Filtre Kahve Kağıdı Tutacağı', price: 250.00, imageUrl: 'https://picsum.photos/seed/astronaut/400/400', tag: 'EL YAPIMI' },
  { id: 4, name: 'Termos', price: 5000.00, imageUrl: 'https://picsum.photos/seed/thermos/400/400' },
  { id: 5, name: 'NFT TASARIMLAR', price: 5000.00, imageUrl: 'https://picsum.photos/seed/nft/400/400' },
];

export const primaryNavLinks: NavLink[] = [
    { label: 'TURKSAT-6a', path: '/turksat-6a' }, { label: 'TURKSAT-5b', path: '/turksat-5b' }, { label: 'TURKSAT-5a', path: '/turksat-5a' }, 
    { label: 'TURKSAT-4a', path: '/turksat-4a' }, { label: 'TurksatsAll', path: '/turksatsall' }, { label: 'TURKSAT-3b', path: '/turksat-3b' },
    { label: 'TURKSAT-2a', path: '/turksat-2a' }, { label: 'TURKSAT-1c', path: '/turksat-1c' }, { label: 'TURKSAT-1b', path: '/turksat-1b' },
    { label: 'TURKSAT-1a', path: '/turksat-1a' }, { label: 'ingenuity', path: '/ingenuity' }, { label: 'perseverance', path: '/perseverance' },
    { label: 'exomars', path: '/exomars' }, { label: 'zhurong', path: '/zhurong' }, { label: 'kepler', path: '/kepler' }, { label: 'curiosity', path: '/curiosity' },
    { label: 'HUBBLE', path: '/hubble' }, { label: 'marsodyssey', path: '/marsodyssey' }, { label: 'VOYAGER 2', path: '/voyager2' },
    { label: 'Lagari', path: '/lagari' }, { label: 'Rasat', path: '/rasat' }, { label: 'gokturk-2', path: '/gokturk-2' }, { label: 'gokturk-1', path: '/gokturk-1' },
    { label: 'Neptune', path: '/neptune' }, { label: 'Uranus', path: '/uranus' }, { label: 'Saturn', path: '/saturn' }, { label: 'jupiter', path: '/jupiter' },
    { label: 'mars', path: '/mars' }, { label: 'earth', path: '/earth' }, { label: 'venus', path: '/venus' }, { label: 'jameswebb', path: '/jameswebb' },
    { label: 'voyager-1', path: '/voyager1' }, { label: 'ISS', path: '/iss' }, { label: 'mercury', path: '/mercury' }, { label: 'marsreconnaissance', path: '/marsreconnaissance' },
    { label: 'imece', path: '/imece' }, { label: 'ANASAYFA', path: '/' }
];

export const secondaryNavLinks: NavLink[] = [
    { label: 'HAKKIMIZDA', path: '/hakkimizda' },
    { label: 'HİZMETLER', path: '/hizmetler' },
    { label: 'SHOP', path: '/shop' },
    { label: 'BLOG', path: '/blog' },
    { label: 'BASINDA BİZ', path: '/basinda-biz' },
    { label: 'GALERİ', path: '/galeri' },
    { label: 'İLETİŞİM', path: '/iletisim' },
    { label: 'DFS', path: '/dfs' }
];

const GITHUB_REPO_URL = 'https://raw.githubusercontent.com/StingerUA/AlbaSpace/main/';

export const modelData: Record<string, ModelData> = {
    'gokturk-1': { title: 'Göktürk-1', description: 'Göktürk-1 is a high resolution optical Earth observation satellite designed and developed for the Turkish Ministry of National Defence.', images: ['https://picsum.photos/seed/gokturk1_1/800/600', 'https://picsum.photos/seed/gokturk1_2/800/600'], glbUrl: `${GITHUB_REPO_URL}Gokturk-1.glb` },
    'gokturk-2': { title: 'Göktürk-2', description: 'Göktürk-2 is a high resolution Earth observation satellite designed and developed by the Scientific and Technological Research Council of Turkey (TÜBİTAK) and Turkish Aerospace Industries (TUSAŞ).', images: ['https://picsum.photos/seed/gokturk2_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Gokturk-2.glb` },
    'rasat': { title: 'RASAT', description: 'RASAT is an Earth observation satellite designed and developed by TÜBİTAK Space Technologies Research Institute.', images: ['https://picsum.photos/seed/rasat_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Rasat.glb` },
    'imece': { title: 'İmece', description: 'İmece is a sub-meter resolution Earth observation satellite project of Turkey.', images: ['https://picsum.photos/seed/imece_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Imece.glb` },
    'turksat-1a': { title: 'Türksat 1A', description: 'Türksat 1A was Turkey\'s first communications satellite. Unfortunately, it was lost during its launch on an Ariane 4 rocket from Kourou, French Guiana, on January 24, 1994, due to a failure in the rocket\'s third stage. Its successor, Türksat 1B, was successfully launched later the same year.', images: ['https://space.skyrocket.de/img_sat/turksat-1b__1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Ariane_4_V60_launch_with_Turksat_1A_1994-01-24.jpg'], glbUrl: `${GITHUB_REPO_URL}Turksat_1A.glb` },
    'turksat-1b': { title: 'Türksat 1B', description: 'Türksat 1B was a Turkish communications satellite, which was successfully launched in 1994.', images: ['https://picsum.photos/seed/turksat1b/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_1B.glb` },
    'turksat-1c': { title: 'Türksat 1C', description: 'Türksat 1C was a Turkish communications satellite, which was successfully launched in 1996.', images: ['https://picsum.photos/seed/turksat1c/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_1C.glb` },
    'turksat-2a': { title: 'Türksat 2A', description: 'Türksat 2A was a Turkish communications satellite launched in 2001.', images: ['https://picsum.photos/seed/turksat2a/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_2A.glb` },
    'turksat-3a': { title: 'Türksat 3A', description: 'Türksat 3A is a Turkish communications satellite, operated by Turksat.', images: ['https://picsum.photos/seed/turksat3a/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_3A.glb` },
    'turksat-4a': { title: 'Türksat 4A', description: 'Türksat 4A is a Turkish communications satellite, operated by Turksat.', images: ['https://picsum.photos/seed/turksat4a/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_4A.glb` },
    'turksat-5a': { title: 'Türksat 5A', description: 'Türksat 5A is a Turkish communications satellite, operated by Turksat, launched in 2021.', images: ['https://picsum.photos/seed/turksat5a/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_5A.glb` },
    'turksat-5b': { title: 'Türksat 5B', description: 'Türksat 5B is a Turkish communications satellite, operated by Turksat, launched in 2021.', images: ['https://picsum.photos/seed/turksat5b/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_5B.glb` },
    'turksat-6a': { title: 'Türksat 6A', description: 'Türksat 6A is Turkey\'s first domestically produced communications satellite project.', images: ['https://picsum.photos/seed/turksat6a/800/600'], glbUrl: `${GITHUB_REPO_URL}Turksat_6A.glb` },
    'lagari': { title: 'Lagari', description: 'Lagari is a technology demonstration microsatellite.', images: ['https://picsum.photos/seed/lagari/800/600'], glbUrl: `${GITHUB_REPO_URL}Lagari.glb` },
    'iss': { title: 'International Space Station', description: 'The International Space Station (ISS) is a modular space station in low Earth orbit.', images: ['https://picsum.photos/seed/iss_1/800/600'], glbUrl: `${GITHUB_REPO_URL}International_Space_Station_.glb` },
    'mercury': { title: 'Mercury', description: 'Mercury is the smallest planet in the Solar System and nearest to the Sun.', images: ['https://picsum.photos/seed/mercury_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Mercury.glb` },
    'venus': { title: 'Venus', description: 'Venus is the second planet from the Sun, named after the Roman goddess of love and beauty.', images: ['https://picsum.photos/seed/venus_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Venus.glb` },
    'earth': { title: 'Earth', description: 'Our home planet, Earth is the third planet from the Sun and the only astronomical object known to harbor life.', images: ['https://picsum.photos/seed/earth_1/800/600'], glbUrl: `` }, // No Earth model found
    'mars': { title: 'Mars', description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.', images: ['https://picsum.photos/seed/mars_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Mars.glb` },
    'jupiter': { title: 'Jupiter', description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System.', images: ['https://picsum.photos/seed/jupiter_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Jupiter.glb` },
    'saturn': { title: 'Saturn', description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.', images: ['https://picsum.photos/seed/saturn_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Saturn.glb` },
    'uranus': { title: 'Uranus', description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.', images: ['https://picsum.photos/seed/uranus_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Uranus.glb` },
    'neptune': { title: 'Neptune', description: 'Neptune is the eighth and farthest-known Solar planet from the Sun.', images: ['https://picsum.photos/seed/neptune_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Neptune.glb` },
    'sputnik': { title: 'Sputnik', description: 'Sputnik 1 was the first artificial Earth satellite.', images: ['https://picsum.photos/seed/sputnik_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Sputnik.glb` },
    'voyager1': { title: 'Voyager 1', description: 'Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program to study the outer Solar System.', images: ['https://picsum.photos/seed/voyager1_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Voyager.glb` },
    'voyager2': { title: 'Voyager 2', description: 'Voyager 2 is a space probe launched by NASA on August 20, 1977, to study the outer planets.', images: ['https://picsum.photos/seed/voyager2_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Voyager.glb` },
    'hubble': { title: 'Hubble Space Telescope', description: 'The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation.', images: ['https://picsum.photos/seed/hubble_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Hubble.glb` },
    'jameswebb': { title: 'James Webb Space Telescope', description: 'The James Webb Space Telescope is a space telescope designed primarily to conduct infrared astronomy.', images: ['https://picsum.photos/seed/jameswebb_1/800/600'], glbUrl: `${GITHUB_REPO_URL}James_Webb.glb` },
    'kepler': { title: 'Kepler Space Telescope', description: 'The Kepler space telescope is a retired space telescope launched by NASA to discover Earth-size planets orbiting other stars.', images: ['https://picsum.photos/seed/kepler_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Kepler.glb` },
    'exomars': { title: 'ExoMars', description: 'ExoMars is an astrobiology programme by the European Space Agency and the Russian Roscosmos State Corporation.', images: ['https://picsum.photos/seed/exomars_1/800/600'], glbUrl: `${GITHUB_REPO_URL}ExoMars.glb` },
    'marsodyssey': { title: 'Mars Odyssey', description: '2001 Mars Odyssey is a robotic spacecraft orbiting the planet Mars.', images: ['https://picsum.photos/seed/marsodyssey_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Mars_Odyssey.glb` },
    'marsreconnaissance': { title: 'Mars Reconnaissance Orbiter', description: 'The Mars Reconnaissance Orbiter is a multipurpose spacecraft designed to conduct reconnaissance and exploration of Mars from orbit.', images: ['https://picsum.photos/seed/mro_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Mars_Reconnaissance.glb` },
    'perseverance': { title: 'Perseverance Rover', description: 'Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the crater Jezero on Mars as part of NASA\'s Mars 2020 mission.', images: ['https://picsum.photos/seed/perseverance_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Perseverance.glb` },
    'curiosity': { title: 'Curiosity Rover', description: 'Curiosity is a car-sized Mars rover exploring Gale crater on Mars as part of NASA\'s Mars Science Laboratory mission.', images: ['https://picsum.photos/seed/curiosity_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Curiosity.glb` },
    'ingenuity': { title: 'Ingenuity Helicopter', description: 'Ingenuity, also known as the Mars Helicopter, is a small robotic helicopter operating on Mars as part of NASA\'s Mars 2020 mission.', images: ['https://picsum.photos/seed/ingenuity_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Ingenuity.glb` },
    'zhurong': { title: 'Zhurong Rover', description: 'Zhurong is a Chinese Mars rover that is part of the Tianwen-1 mission to Mars conducted by the China National Space Administration.', images: ['https://picsum.photos/seed/zhurong_1/800/600'], glbUrl: `${GITHUB_REPO_URL}Zhurong.glb` },
};
