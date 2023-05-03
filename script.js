const IndustrijaSlike = ["Slike/Industrija1.jpg","Slike/Industrija2.jpg"];
const MladostSlike = ["Slike/Mladost1.jpg","Slike/Mladost2.jpg","Slike/Mladost3.jpg","Slike/Mladost4.jpg"];
const WonderGymSlike = ["Slike/WonderGym1.jpg","Slike/WonderGym2.jpg","Slike/WonderGym3.jpg"];


function promeniSliku(slika,nizSlika) {
  var index = -1;
  for (let i = 0; i < nizSlika.length; i++) {
    if(slika.src.includes(nizSlika[i])) index = i;
  }
  console.log();
  index=index+1;
  if (index>=nizSlika.length) index = 0;
  slika.src = nizSlika[index];
}


if(localStorage.getItem("theme")){
  document.body.className=localStorage.getItem("theme");
}
function promeniStyle(style){
  document.body.className = style;
  localStorage.setItem("theme",style);
}

function izracunajUkupnuClanarinu(){
  var ukupnaCena = 0;
  var form = document.getElementById('CalcForm');
  ukupnaCena+=+form.elements['Industrija'].value;
  ukupnaCena+=+form.elements['Mladost'].value;
  ukupnaCena+=+form.elements['Wonder'].value;
  alert("Ukupna cena svih clanarina je: " + ukupnaCena);
}
