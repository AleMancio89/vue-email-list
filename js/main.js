/* 
Stampa una lista di 10 email random.
*/

const app = new Vue({
    el: "#root",
    data: {
        list: []
    },
    mounted() {        
        for(i=0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                this.list.push(result.data.response)
            });           
        }
    },
});