class UI {
    constructor() {
        this.searchResult = document.getElementById('search-results');
        this.navBarTeam = document.getElementById('t-current-team');
    }

    populateSearchResult(teams) {
        this.searchResult.innerHTML = '';
        // Only take top 3
        for (let index = 0; index < 3; index++) {
            this.searchResult.innerHTML += `<input type="radio" id="html" name="team_radiobutton" 
                                            value="${teams.teams.teams[index].name}, ${teams.teams.teams[index].id}">
                                            <label for="html">${teams.teams.teams[index].name}, ${teams.teams.teams[index].primaryUniqueTournament.name} - ${teams.teams.teams[index].id}</label><br>`
        }
    }

    updateTeam(team) {
        this.navBarTeam.textContent = team;
    }
}
