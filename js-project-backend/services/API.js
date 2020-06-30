class API {

    static addTrips(){
        fetch("http://localhost:3000/trips")
          .then(resp => resp.json())
          .then(trips => {
            trips.forEach(trip => {
                const { id, name, photos, description, season, rating, user_id } = trip
                new Trip(id, name, photos, description, season, rating, user_id)
            })
        })
    }

    // static addTrip(){
    //     fetch("http://localhost:3000/trips/")
    //     .then(resp => resp.json())
    //     .then(trip => {
    //         trip.showTrip()
    //     })
    // }


    static createTrip(e){
          e.preventDefault()
        // capture our form data
        let data = {
            'name': e.target.name.value,
            'description': e.target.description.value,
            'season': e.target.season.value,
            'rating': e.target.rating.value,
            'photos': e.target.photos.value,
        };
        // write our fetch and send it to our back end
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // grab our fetch response
        .then(resp => resp.json())
        .then(trip => {
            const { id, name, photos, description, season, rating, user_id } = trip
            new Trip(id, name, photos, description, season, rating, user_id)
            document.getElementById('trip-form').reset()
        })
        // create a new Trip object
        // clear our form
      }
      // make sure all the functions still work

      static createUser(e){
          e.preventDefault()
          let data = {
              'name': e.target.name.value, 
              'username': e.target.username.value, 
              'password': e.target.password.value
          };

          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
    
        })
        
        .then(resp => resp.json())
        .then(user => {
            const { name, username, password } = user
            new User (name, username, password)
      }) 
    }
}