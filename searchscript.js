const Masine = ["Rowing Masina","Sprava za trbusnjake","Leg Press","Lat Masina","Biceps masina","Chest Press","Traka za trcanje","Bicikl","Masina za prednju lozu","Masina za zadnju lozu"];
const IndustrijaMasine = ["Rowing Masina","Sprava za trbusnjake","Leg Press"];
const MladostMasine = ["Rowing Masina","Sprava za trbusnjake","Leg Press","Bicikl","Masina za prednju lozu","Masina za zadnju lozu"];
const WonderMasine = ["Rowing Masina","Leg Press","Lat Masina","Biceps masina","Chest Press","Traka za trcanje","Bicikl","Masina za prednju lozu","Masina za zadnju lozu"];
loadSuggestions();
function loadSuggestions(){
var suggestionDiv = document.getElementById("Suggestions");
  for (let i = 0; i < Masine.length; i++) {
    var newDiv = document.createElement("h2");
    newDiv.innerText = Masine[i];
    suggestionDiv.appendChild(newDiv);
  }
}
updateSearch();
function updateSearch(){
  var query = document.getElementById('Search').value;
  var industrijaDiv = document.getElementById("Industrija")
  industrijaDiv.style.display = 'none';
  var mladostDiv = document.getElementById("Mladost")
  mladostDiv.style.display = 'none';
  var wonderDiv = document.getElementById("Wonder")
  wonderDiv.style.display = 'none';
  var goofyDiv = document.getElementById("Default");
  goofyDiv.style.display = 'none';
  if(query!=""){
    for (let i = 0; i < IndustrijaMasine.length; i++) {
      if(IndustrijaMasine[i].toLowerCase().includes(query.toLowerCase())) industrijaDiv.style.display = 'block';
    }
    for (let i = 0; i < MladostMasine.length; i++) {
      if(MladostMasine[i].toLowerCase().includes(query.toLowerCase())) mladostDiv.style.display = 'block';
    }
    for (let i = 0; i < WonderMasine.length; i++) {
      if(WonderMasine[i].toLowerCase().includes(query.toLowerCase())) wonderDiv.style.display = 'block';
    }
  }
  if(industrijaDiv.style.display=='none' && mladostDiv.style.display=='none' && wonderDiv.style.display=='none')
  goofyDiv.style.display = 'block';
}
