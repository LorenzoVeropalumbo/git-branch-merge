var app = new Vue (
  {
    el: '#root',
    data: {
      teams: [],
      leagues: [],
      leagueNoDupli: [All,],
      value: 'All'
    },
    methods: {
      getTeams() {
        axios.get(`http://localhost:8888/git-branch-merge/api.php?league=${this.value}`)
        .then((response) => {
          this.teams = response.data;
          console.log(this.teams);
        })
      },
      getLeagues() {
        axios.get('http://localhost:8888/git-branch-merge/api.php')
        .then((response) => {
          this.leagues = response.data;
          this.leagues = this.leagues.filter(league => {
            if(!this.leagueNoDupli.includes(league.league)){
              this.leagueNoDupli.push(league.league)
              console.log(this.leagueNoDupli);
            }
          })
        })
      },     
    },
    mounted(){
      this.getTeams();
    }
  }
);