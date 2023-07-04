// pidsum text
const text = [
  // pidsum origin
  `De dis tori na just tori way no get meaning, na just to helep person way dey waka for text matter. Make you no vex if e no dey flow well well, na just to helep you fill space for your work so e go balance well well. No be say na how we dey yan for real life o, na just for this one way I wan show you so e go helep your eye catch wetin you wan see.`,
  `Di yonder sun dey shine, e dey touch person body well well. As dem dey yan, so e dey for we town. Make we gather na to chop beta food way mama don prepare for we. E don tey way we see this kain beta weather for we side, e good make we jolly together, make we just flex dey go. No be wetin person fit yan for mouth, but e just be like say we go dance dey go till morning.`,
  `Na so e dey for dis side o, my brother. We go dey waka jejely for we town, dey look as e be for every corner. Make we dey waka dey go, life na jolly way dey sweet pass sugar. E go better, my people.`,
  //pidsum choke @koolamusic
  `Choketh ipsum well well, dolor sit amet, but as we full ground we go still dey show levels. E be like say na only so-so palava, consectetuer adipiscing elit, but na di way e be for dis world, make e helep you catch wetin you wan see. Sed ut perspiciatis unde, as e don dey hot, we still dey ginger our swagger, omnis iste natus error sit voluptatem e no go stop us to shine na so e be.`,
  `Dem fit say di tori no dey make brain, Aenean commodo ligula eget dolor but na so e go be for dis time. Aenean massa cum sociis natoque penatibus et, we go dey waka jejely for we town, dey look as e be for every corner. Et magnis dis parturient montes, nascetur ridiculus mus. Make you no forget say na just tori way no get meaning na im I wan helep you put for your work.`,
  `Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Na so we go dey carry go dey go, no wahala go show for we side. E go better, my people. Fusce vulputate eleifend sapien, vestibulum purus eget, viverra suscipit.`,
  //pidsum sapa @koolamusic
  `Sapa sit amet for we bodi. As we dey waka, di akara way mama put dey fry, consectetuer adipiscing elit sed diọ, dey make sense pass anytin. Di world wey we dey so, na only who sabi hustle go fit survive, ut labore et dolore magna aliqua for ground. As e dey hot, na so we dey use ororo soji, quia voluptas sit aspernatur aut odit aut fugit, e no go stop us to dey shine, na just we way sabi.`,
  `Di tori wey dem dey yan sometimes, e go be like say dem no sabi wetin dem dey yan, Aenean commodo ligula eget dolor. But as we full ground, sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus, we go dey shine anyhow. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.`,
  `As we dey waka jejely for we town, dem dey yan say, Pellentesque eu, pretium quis, shey na so we go dey carry go dey go. Nulla consequat massa quis enim way dem talk, we go still dey waka waka for we side, totam rem aperiam, eaque ipsa quae ab illo inventore. Di matter ehn, e go be like say na only di ginger we go dey use dey push us, veritatis et quasi architecto beatae vitae dicta sunt explicabo. No be say na how we go dey yan for real life o, but just make e helep you catch wetin you wan see.`,
  //pidsum naija go better @seunfashina002
  `my pipo my pipo Lorem ipsum dolor sit amet wetin dey shele for naija no be small o consectetur adipisicing elit, maxime. For dis life wey we dey so Id asperiores provident, plenty tins dey happen nostrum ipsum vero wey fit make pesin wan troway towel, debitis assumenda dolorum but na who give up fuck up.`,
  `Eiii repudiandae excepturi e don tey libero porro wey we don dey talk say voluptate Nigeria go better voluptatem commodi, e con be like say amet ut rem omnis we yuss dey play. Naija be like latin quia wey man no fit understand perspiciatis sunt et, we cry cry veniam mollitia make goffament helep us so tey quo, optio we turn town crier voluptates Perspiciatis. but we go still dey believe ab provident cos if we no believe who go helep us believe aut`,
  `Ullam rerum but as we dey believe, laudantium commodi we no go just sit down tempore odio cum dey wait make manna fall from heaven fugiat provident, make we try dey show love sint velit aliquid, make we dey helep people non autem quod nesciunt. if you no get work voluptates veritatis find work inventore, no dey thief person money voluptatem commodi con dey call am grace amet ut rem omnis. Nigeria na we own oo, quia perspiciatis.`,
  // pidsum eii brother bernard @seunfashina002
  `Tori tori o! Magni fugiat qui I don carry another beta gist come praesentium hic maxime. If you no dey live under rock, Id asperiores provident, you go don see video wey people dey yarn “Eiii Brother Bernard” sit inventore debitis. I know say una no sabi how e take start, facere aut quibusdam, no wahala I go run am for you like Usain Bolt soluta dignissimos beatae.`,
  `voluptatem commodi ehn ehn, na one woman oo excepturi repudiandae she waka go fall yakata for inside cake wey Reverend Father Bernard Kofi Ackon voluptates Perspiciatis wan take do fiftieth birthday ullam rerum velit aliquid.`,
  `E be like say she wan quick enter fifty libero porro, but she no sabi say veniam mollitia her time never reach. No wahala, na so e be, optio. As she fall yakata, everybody come dey hala “Eiii Father Bernard”. As per perferendis accusamus way, as the tori burst for internet, people come dey shout “Eii Brother Bernard”, saepe quasi officia, dem no even sabi wetin dey happen sef. Na normal level, Naija na better cruise.`,
];

const form = document.querySelector(".pidgin-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".pidgin-text");

form.addEventListener("submit", function (e) {
  // form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 15) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});


// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();