import React from "react";
import GameItem from "../../components/gameItem/GameItem";
import "./homePage.css";

const games = [
  {
    image:
      "https://pic.rutubelist.ru/video/e2/c0/e2c09813d80e379730be58b91334213e.jpg",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Открытый мир"],
    price: 2199,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: "https://i.playground.ru/e/xE5aO_BtTd7ufOuf4paIPg.jpeg",
    title: "Battlefield 2042",
    genres: ["Экшен", "Шутер", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 2499,
    id: 2,
    description:
      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
  },
  {
    image:
      "https://regnum.ru/uploads/pictures/news/2021/08/13/regnum_picture_1628862834639879_normal.jpg",
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Протагонистка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 1199,
    id: 3,
    description:
      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
  },
  {
    image: "https://i.playground.ru/p/DvXbhjCPGG_A282SlsMCpQ.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Экшен"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 1799,
    id: 4,
    description:
      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
  },
  {
    image: "https://i.playground.ru/p/02SnR4bfbW4OfNYOWIBU0w.jpeg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 1599,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {games.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
