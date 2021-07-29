/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', populateStartPage);

function populateStartPage() {
    const data = storage.getTeamData();
    sofa.teamData(data.id)
        .then(results => {
            ui.populateStartPage(results.teams.data);
        })
        .catch(err => console.log(err));
}
