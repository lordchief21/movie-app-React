const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjE0MDZmZTFkMTA3YzUyNTQ2YThkMzMzY2RmYmVjMiIsInN1YiI6IjYyNmY4MmE1MDllZDhmMTFhODFjNjhkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwMZWES4BrX-ApIbHWX-BlYO0_wmpkeY3-VMNh9aTUY"
const API = "https://api.themoviedb.org/3"

export default function get(path) {
    
    return  fetch(API + path, {
        headers: {
            Authorization:
            `Bearer ${apiKey}`,
            'Content-Type': 'application/json;charset=utf-8', 
        },
    }).then((result) => result.json())  

    
}
