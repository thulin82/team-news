// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Sofa {
  team: string;
  id: string;

  constructor(team: string, id: string) {
    this.team = team;
    this.id = id;
  }

  async teamSearch(teamName: string) {
    const response = await fetch(
      `http://localhost:4567/api/v1/team/teamsearch/${teamName}`,
    );

    const teams = await response.json();

    return { teams };
  }

  async teamData(teamId: string) {
    const response = await fetch(
      `http://localhost:4567/api/v1/team/teamdata/${teamId}`,
    );

    const teams = await response.json();

    return { teams };
  }

  async teamSquad(teamId: string) {
    const response = await fetch(
      `http://localhost:4567/api/v1/team/teamsquad/${teamId}`,
    );

    const teams = await response.json();

    return { teams };
  }

  changeTeam(team: string, id: string) {
    this.team = team;
    this.id = id;
  }
}
