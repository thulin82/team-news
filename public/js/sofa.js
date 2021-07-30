// eslint-disable-next-line no-unused-vars
class Sofa {
    constructor(team, id) {
        this.team = team;
        this.id = id;
    }

    async teamSearch(teamName) {
        const response = await fetch(`http://localhost:4567/api/v1/team/teamsearch/${teamName}`);

        const teams = await response.json();

        return { teams };
    }

    async teamData(teamId) {
        const response = await fetch(`http://localhost:4567/api/v1/team/teamdata/${teamId}`);

        const teams = await response.json();

        return { teams };
    }

    async teamSquad(teamId) {
        const response = await fetch(`http://localhost:4567/api/v1/team/teamsquad/${teamId}`);

        const teams = await response.json();

        return { teams };
    }

    changeTeam(team, id) {
        this.team = team;
        this.id = id;
    }
}
