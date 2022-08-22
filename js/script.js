var app = new Vue (
    {
      el: '#root',
      data: {
        teams: [],
        leagues: [],
        leagueNoDupli: [],
        value: 'All'
      },
      methods: {
        GetTeams() {
          axios.get(`http://localhost:8888/git-branch-merge/api.php?league=${this.value}`)
          .then((response) => {
            this.teams = response.data;
          }) 
        },
        getLeague() {
          axios.get(`http://localhost:8888/git-branch-merge/api.php`)
          .then((response) => {
            console.log(response.data);
          }) 
        }        
      },
      mounted(){
        this.GetTeams();
        this.getLeague();
      }
    }
)