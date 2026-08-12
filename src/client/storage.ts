// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TeamStorage {
  team: string;
  id: string;
  defaultTeam: string;
  defaultId: string;

  constructor() {
    this.team = "";
    this.id = "";
    this.defaultTeam = "Malmö FF";
    this.defaultId = "1892";
  }

  getTeamData() {
    if (localStorage.getItem("team") === null) {
      this.team = this.defaultTeam;
    } else {
      this.team = localStorage.getItem("team") as string;
    }

    if (localStorage.getItem("id") === null) {
      this.id = this.defaultId;
    } else {
      this.id = localStorage.getItem("id") as string;
    }

    return {
      team: this.team,
      id: this.id,
    };
  }

  setTeamData(team: string, id: string) {
    localStorage.setItem("team", team);
    localStorage.setItem("id", id);
  }
}
