class Storage {
    constructor() {
        this.team = '';
        this.id = '';
        this.defaultTeam = 'Malmö FF';
        this.defaultid = '1892';
    }

    getTeamData() {
        if (localStorage.getItem('team') === null) {
            this.team = this.defaultTeam;
        } else {
            this.team = localStorage.getItem('team');
        }

        if (localStorage.getItem('id') === null) {
            this.id = this.defaultId;
        } else {
            this.id = localStorage.getItem('id');
        }

        return {
            team: this.team,
            id: this.id
        }
    }

    setTeamData(team, id) {
        localStorage.setItem('team', team);
        localStorage.setItem('id', id);
    }
}