const storage = new Storage();
const teamData = storage.getTeamData();
// eslint-disable-next-line no-undef
const sofa = new Sofa(teamData.team, teamData.id);
// eslint-disable-next-line no-undef
const ui = new UI();

document.addEventListener('DOMContentLoaded', getCurrentTeam);

document.getElementById('t-change-btn').addEventListener('click', () => {
    var team = '';
    var id = '';
    var radios = document.getElementsByName('team_radiobutton');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var strArray = radios[i].value.split(',');
            team = strArray[0];
            id = strArray[1];
            break;
        }
    }

    if (team != '' && id != '' ) {
        sofa.changeTeam(team, id);
        storage.setTeamData(team, id);
    }
    ui.updateTeam(team);
    ui.updateLinks(id);

    // eslint-disable-next-line no-undef
    let myModal = bootstrap.Modal.getInstance(document.querySelector("#locationModal"));
    myModal.hide();
    window.location.replace('/'); //return to index page
});

document.getElementById('locationModal').addEventListener('hidden.bs.modal', () => {
    document.getElementById('search-results').textContent = '';
    document.getElementById('team').value = '';
});

document.getElementById('t-search-btn').addEventListener('click', () => {
    const team = document.getElementById('team').value;
    teamSearch(team);
});

function teamSearch(team) {
    ui.loaderOn();
    sofa.teamSearch(team)
        .then(results => {
            ui.loaderOff();
            ui.populateSearchResult(results.teams.data);
        })
        .catch(err => console.log(err));
}

function getCurrentTeam() {
    const data = storage.getTeamData();
    ui.updateTeam(data.team);
    ui.updateLinks(data.id);
}
