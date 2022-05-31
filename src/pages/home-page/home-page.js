import React from "react";

import "./home-page.css";
import { GameItem } from "../../components/game-item";

const GAMES = [
  {
    image: '/game-covers/forza_5.jpeg',
    title: 'Forza Horizon 5',
    genres: ['Race', 'Simulator', 'The Open World'],
    price: 1600,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description: "Horizon's endless kaleidoscope of adventures awaits you! Take an exciting journey through the incredibly beautiful and distinctive world of Mexico while driving some of the greatest vehicles in history. Start your Horizon adventure today by adding it to your wishlist!",
  },
  {
    image: '/game-covers/battlefield_2042.jpg',
    title: 'Battlefield 2042',
    genres: ['Action', 'Shooter', 'War'],
    video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
    price: 1200,
    id: 2,
    description: 'Battlefield™ 2042 is a first-person shooter that takes the series back to its legendary scale battles. In a future where chaos reigns, adapt and thrive on ever-changing battlefields with your squad and arsenal of the latest technology.'
  },
  {
    image: '/game-covers/life_is_strange_true_colors.jpeg',
    title: 'Life is Strange True Colors',
    genres: ['Deep plot', 'The Protagonist'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 800,
    id: 3,
    description: 'Alex Chen hides her "curse" - her supernatural ability to read and influence the strong emotions of others - from everyone. But when her brother dies - allegedly in an accident - Alex uses it to discover the truth.'
  },
  {
    image: '/game-covers/gta_v.jpeg',
    title: 'Grand Theft Auto V',
    genres: ['The Open World', 'Action'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 750,
    id: 4,
    description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
    image: '/game-covers/rainbow_siege.jpeg',
    title: 'Tom Clancy\'s Rainbow Six® Siege',
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Tactics', 'Shooter'],
    price: 2400,
    id: 5,
    description: 'Tom Clancy\'s Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.'
  },
  {
    image: '/game-covers/assassins_creed_valhalla.png',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Parkour', 'RPG', 'The Open World'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2600,
    id: 6,
    description: 'Assassin\'s Creed Valhalla is a multiplatform action/RPG computer game developed by Ubisoft Montreal Studios and published by Ubisoft. It is the twelfth game in the Assassin\'s Creed series of games.'
  },
];

export const HomePage = () => {
  return (
      <div className="home-page">
        { GAMES.map(game => <GameItem key={game.id} game={game} />)}
      </div>
  )
};