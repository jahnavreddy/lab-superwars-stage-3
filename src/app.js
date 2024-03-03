const PLAYERS = [
  "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman",
  "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish",
  "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader", "Slingo"
];

const initPlayers = (players) => {
  return players.map((name, index) => ({
      name,
      image: `images/super-${index + 1}.png`,
      strength: getRandomStrength(),
      type: index % 2 === 0 ? "hero" : "villain"
  }));
};

const getRandomStrength = () => {
  return Math.ceil(Math.random() * 101);
};

const buildPlayers = (players, type) => {
  const filteredPlayers = players.filter(player => player.type === type);
  return filteredPlayers.map(player => `
      <div class="player">
          <img src="${player.image}" alt="">
          <div class="name">${player.name}</div>
          <div class="strength">${player.strength}</div>
      </div>`
  ).join('');
};

const viewPlayers = (players) => {
  document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
  document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
  const players = initPlayers(PLAYERS);
  viewPlayers(players);
};
