// eslint-disable-next-line no-unused-vars
class Sofa {
    constructor(team, id) {
        this.apiKey = '';
        this.team = team;
        this.id = id;
    }

    async teamSearch(teamName) {
        const response = await fetch(
            `https://sofascore.p.rapidapi.com/teams/search?name=${teamName}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": `${this.apiKey}`,
                    "x-rapidapi-host": "sofascore.p.rapidapi.com"
                }
            });

        const teams = await response.json();

        return {
            teams
        };
    }

    async teamData(teamId) {
        const response = await fetch(
            `https://sofascore.p.rapidapi.com/teams/detail?teamId=${teamId}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": `${this.apiKey}`,
                    "x-rapidapi-host": "sofascore.p.rapidapi.com"
                }
            });

        const teams = await response.json();

        return {
            teams
        };
    }

    changeTeam(team, id) {
        this.team = team;
        this.id = id;
    }
}
