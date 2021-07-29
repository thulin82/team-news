/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', populateStartPage);

function populateStartPage() {
    const data = storage.getTeamData();
    sofa.teamData(data.id)
        .then(results => {
            console.log(results);
            ui.populateStartPage(results);
        })
        .catch(err => console.log(err));
}
