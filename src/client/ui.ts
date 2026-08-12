// eslint-disable-next-line @typescript-eslint/no-unused-vars
class UI {
  searchResult: HTMLElement;
  navBarTeam: HTMLElement;
  teamName: HTMLElement;
  managerName: HTMLElement;
  stadiumName: HTMLElement;
  loader: HTMLElement;
  homeLink: HTMLElement;
  squadLink: HTMLElement;
  transfersLink: HTMLElement;

  constructor() {
    this.searchResult = document.getElementById(
      "search-results",
    ) as HTMLElement;
    this.navBarTeam = document.getElementById("t-current-team") as HTMLElement;
    this.teamName = document.getElementById("t-team-name") as HTMLElement;
    this.managerName = document.getElementById("t-team-manager") as HTMLElement;
    this.stadiumName = document.getElementById("t-team-stadium") as HTMLElement;
    this.loader = document.getElementById("loader") as HTMLElement;
    this.homeLink = document.getElementById("home-link") as HTMLElement;
    this.squadLink = document.getElementById("squad-link") as HTMLElement;
    this.transfersLink = document.getElementById(
      "transfers-link",
    ) as HTMLElement;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  populateSearchResult(teams: any) {
    this.searchResult.innerHTML = '<fieldset class="form-group">';
    // Only take top 3
    for (let index = 0; index < 3; index++) {
      const entity = teams.results[index].entity;
      this.searchResult.innerHTML += `
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" 
                        name="team_radiobutton" id="html" 
                        value="${entity.name},${entity.id}">
                        ${entity.name} ${entity.gender},
                        ${entity.country.name} - ${entity.id}
                    </label>
                </div>`;
    }
    this.searchResult.innerHTML += "</fieldset>";
  }

  updateTeam(team: string) {
    this.navBarTeam.textContent = team;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  populateStartPage(results: any) {
    this.teamName.textContent = results.team.fullName;
    this.managerName.textContent = `Manager: ${results.team.manager.name}`;
    const stadium = results.team.venue.stadium;
    this.stadiumName.textContent = `Stadium: ${stadium.name}, Capacity: ${stadium.capacity}`;
  }

  loaderOn() {
    this.loader.style.display = "block";
  }

  loaderOff() {
    this.loader.style.display = "none";
  }

  updateLinks(id: string) {
    this.homeLink.setAttribute("href", `./?id=${id}`);
    this.squadLink.setAttribute("href", `./squad?id=${id}`);
    this.transfersLink.setAttribute("href", `./transfers?id=${id}`);
  }
}
