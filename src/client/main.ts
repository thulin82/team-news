document.addEventListener("DOMContentLoaded", populateStartPage);

function populateStartPage() {
  const data = storage.getTeamData();
  sofa
    .teamData(data.id)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((results: any) => {
      ui.populateStartPage(results.teams.data);
    })
    .catch((err) => console.log(err));
}
