// bootstrap is loaded globally via CDN script tag
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const bootstrap: any;

const storage = new TeamStorage();
const teamData = storage.getTeamData();
const sofa = new Sofa(teamData.team, teamData.id);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getCurrentTeam);

document.getElementById("t-change-btn")!.addEventListener("click", () => {
  let team = "";
  let id = "";
  const radios = document.getElementsByName(
    "team_radiobutton",
  ) as NodeListOf<HTMLInputElement>;

  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      const strArray = radios[i].value.split(",");
      team = strArray[0];
      id = strArray[1];
      break;
    }
  }

  if (team != "" && id != "") {
    sofa.changeTeam(team, id);
    storage.setTeamData(team, id);
  }
  ui.updateTeam(team);
  ui.updateLinks(id);

  const myModal = bootstrap.Modal.getInstance(
    document.querySelector("#locationModal"),
  );
  myModal.hide();
  window.location.replace("/"); //return to index page
});

document
  .getElementById("locationModal")!
  .addEventListener("hidden.bs.modal", () => {
    document.getElementById("search-results")!.textContent = "";
    (document.getElementById("team") as HTMLInputElement).value = "";
  });

document.getElementById("t-search-btn")!.addEventListener("click", () => {
  const team = (document.getElementById("team") as HTMLInputElement).value;
  teamSearch(team);
});

function teamSearch(team: string) {
  ui.loaderOn();
  sofa
    .teamSearch(team)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((results: any) => {
      ui.loaderOff();
      ui.populateSearchResult(results.teams.data);
    })
    .catch((err) => console.log(err));
}

function getCurrentTeam() {
  const data = storage.getTeamData();
  ui.updateTeam(data.team);
  ui.updateLinks(data.id);
}
