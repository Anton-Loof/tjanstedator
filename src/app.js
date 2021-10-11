const Main = {
    template: main,
    data: () => ({
        selectedItem: 1,
        filterText: '',
        players: [
            { firstname: 'Martin', lastname: 'Dremel', rank: 'Polisassistent', socialnumber: '070330-0202', phone: '070-648 83 74' },
            { firstname: 'Martin', lastname: 'Dremel', rank: 'Polisassistent', socialnumber: '070330-0202', phone: '070-648 83 74' },
            { firstname: 'Martin', lastname: 'Dremel', rank: 'Polisassistent', socialnumber: '070330-0202', phone: '070-648 83 74' },
        ],
    }),
    methods: {
        hello: function() {
            return 'hej'
        }
    }
}

const PlayerInspect = {
    template: player_inspect, 
    data: () => ({

    }), 
    mounted() {

        setInterval(() => {
            console.log(this.$root)
            
        }, 100);
    }
}


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/player_inspect',
        component: PlayerInspect
    },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router, 
    el: "#app",
    vuetify: new Vuetify(), 
    data: () => ({
        filterText: '',
        
    }), 
    methods: {
        
    },
    mounted() {
        this.$vuetify.theme.dark = true
    }
})