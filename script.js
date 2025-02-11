const tchaikovskyValseSentimentale = (
  <a href="https://co0lbean.github.io/music-randomiser/valsesentimentale.html"></a>
);
const chopin24Preludes17 = (
  <a href="https://co0lbean.github.io/music-randomiser/24preludesno17.html"></a>
);
const chopin24Preludes15 = (
  <a href="https://co0lbean.github.io/music-randomiser/raindropno15.html"></a>
);
const rachConcerto2 = (
  <a href="https://co0lbean.github.io/music-randomiser/rach_pianoconcertono2_2ndmvmnt.html"></a>
);
const schumannTraumerei = (
  <a href="https://co0lbean.github.io/music-randomiser/traumereischumann.html"></a>
);
const dvorakHumoresque = (
  <a href="https://co0lbean.github.io/music-randomiser/humoresquedvorak.html"></a>
);
const schubertImpromptu3 = (
  <a href="https://co0lbean.github.io/music-randomiser/impromptuno3schubert.html"></a>
);
const ravelBolero = (
  <a href="https://co0lbean.github.io/music-randomiser/boleroravel.html"></a>
);
const shostakovichStringQuartet8 = (
  <a href="https://co0lbean.github.io/music-randomiser/dsch.html"></a>
);

const pieces = [
  tchaikovskyValseSentimentale,
  chopin24Preludes15,
  chopin24Preludes17,
  rachConcerto2,
  schubertImpromptu3,
  schumannTraumerei,
  dvorakHumoresque,
  ravelBolero,
  shostakovichStringQuartet8,
];

function getRandomIndex(pieces) {
  return Math.floor(Math.random() * pieces.length);
}
