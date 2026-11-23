const days = [
  "Dé Domhnaigh",
  "Dé Luain",
  "Dé Máirt",
  "Dé Céadaoin",
  "Déardaoin",
  "Dé hAoine",
  "Dé Sathairn",
];

const months = [
  "Eanáir",
  "Feabhra",
  "Márta",
  "Aibreán",
  "Bealtaine",
  "Meitheamh",
  "Iúil",
  "Lúnasa",
  "Meán Fómhair",
  "Deireadh Fómhair",
  "Samhain",
  "Nollaig",
];

export const irishDate = (now = new Date()) => {
  // Use Dublin's calendar day so server and browser agree on the date.
  const [year, month, day] = now
    .toLocaleDateString("en-CA", { timeZone: "Europe/Dublin" })
    .split("-")
    .map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return {
    year,
    iso: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    ga: `${days[date.getUTCDay()]}, ${day} ${months[month - 1]} ${year}`,
    en: date.toLocaleDateString("en-IE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    }),
  };
};
