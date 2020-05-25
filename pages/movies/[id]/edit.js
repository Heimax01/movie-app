
import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'

class EditMovie extends React.Component {

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)

        return { movie }
    }

    handleUpdateMovie(movie)  {
        updateMovie(movie).then((updatedMovie) => {
          Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
      }




    render() {

        const { movie }  = this.props

        return (
        <div className="container">
            <h1>Edit the Movie</h1>
            <MovieCreateForm
            submitButton="Update"
            handleFormSubmit={this.handleUpdateMovie}
            initialData={movie} />
        </div> 
        )
    }
}

export default EditMovie;

//https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80