class UI {
    constructor() {
        this.searchResult = document.getElementById('search-results');
        this.navBarTeam = document.getElementById('t-current-team');
        this.teamName = document.getElementById('t-team-name');
        this.managerName = document.getElementById('t-team-manager');
        this.loader = document.getElementById('loader');
    }

    populateSearchResult(teams) {
        this.searchResult.innerHTML = '<fieldset class="form-group">';
        // Only take top 3
        for (let index = 0; index < 3; index++) {
            this.searchResult.innerHTML += `
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="team_radiobutton" id="html" value="${teams.teams.teams[index].name},${teams.teams.teams[index].id}">
                        ${teams.teams.teams[index].name}, ${teams.teams.teams[index].primaryUniqueTournament.name} - ${teams.teams.teams[index].id}
                    </label>
                </div>`
        }
        this.searchResult.innerHTML += '</fieldset>';
    }

    updateTeam(team) {
        this.navBarTeam.textContent = team;
    }

    populateStartPage(results) {
        this.teamName.textContent = results.teams.team.fullName;
        this.managerName.textContent = results.teams.team.manager.name;
    }

    loaderOn() {
        this.loader.style.display = 'block'
    }

    loaderOff() {
        loader.style.display = 'none'
    }
}
