
import { useState } from 'react'
import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovies } from '../actions'


const SideMenu = (props) => {

    const { categories } = props
    const router = useRouter()
    let modal = null


    const handleCreateMovie = (movie) => {
      createMovies(movie).then((movies) => {
        console.log(JSON.stringify(movies))
        modal.closeModal()
        router.push('/')
      })
    }

    return (
    <div>
        <Modal ref={ele => modal = ele} hasSubmit={false}>
          <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
        </Modal>
        <h1 className="my-4">Movie DB</h1>
        <div className="list-group">
          {
            categories.map(c => (

             <a
              onClick={() => props.changeCategory(c.name)}
              key={c.id} 
              href="#" 
              className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>

            ))
          }
         
        </div>
    </div>
    )
}

export default SideMenu; 