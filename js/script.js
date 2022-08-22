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
      getTeams() {
        axios.get('http://localhost:8888/git-branch-merge/api.php')
        .then((response) => {
          this.teams = response.data;
          console.log(this.teams);
        })
      },       
    },
    mounted(){
      this.getTeams();
    }
  }
);