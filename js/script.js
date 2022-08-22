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
            console.log("dadwwa");
          }) 
        },       
      },
      mounted(){
        this.GetTeams();
      }
    }
)