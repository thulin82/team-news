// eslint-disable-next-line no-unused-vars
class UI {
    constructor() {
        this.searchResult = document.getElementById('search-results');
        this.navBarTeam = document.getElementById('t-current-team');
        this.teamName = document.getElementById('t-team-name');
        this.managerName = document.getElementById('t-team-manager');
        this.stadiumName = document.getElementById('t-team-stadium');
        this.loader = document.getElementById('loader');
        this.homeLink = document.getElementById('home-link');
        this.squadLink = document.getElementById('squad-link');
        this.transfersLink = document.getElementById('transfers-link');
    }

    populateSearchResult(teams) {
        this.searchResult.innerHTML = '<fieldset class="form-group">';
        // Only take top 3
        for (let index = 0; index < 3; index++) {
            this.searchResult.innerHTML += `
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" 
                        name="team_radiobutton" id="html" 
                        value="${teams.teams[index].name},${teams.teams[index].id}">
                        ${teams.teams[index].name}, 
                        ${teams.teams[index].primaryUniqueTournament.name} - 
                        ${teams.teams[index].id}
                    </label>
                </div>`;
        }
        this.searchResult.innerHTML += '</fieldset>';
    }

    updateTeam(team) {
        this.navBarTeam.textContent = team;
    }

    populateStartPage(results) {
        this.teamName.textContent = results.team.fullName;
        this.managerName.textContent = `Manager: ${results.team.manager.name}`;
        this.stadiumName.textContent = `Stadium: ${results.team.venue.stadium.name}, 
        Capacity: ${results.team.venue.stadium.capacity}`;
    }

    loaderOn() {
        this.loader.style.display = 'block';
    }

    loaderOff() {
        this.loader.style.display = 'none';
    }

    updateLinks(id) {
        this.homeLink.setAttribute("href", `./?id=${id}`);
        this.squadLink.setAttribute("href", `./squad?id=${id}`);
        this.transfersLink.setAttribute("href", `./transfers?id=${id}`);
    }
}
