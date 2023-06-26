import React from 'react'

function SecaoVideo() {
  return (
    <section className='videoSection'>
        <div className='buttonsVideo'>
            <button>
                Agências
            </button>
            <button>
                Chatbot
            </button>
            <button>
                Marketing Digital
            </button>
            <button>
                Geração de Leads
            </button>
            <button>
                Mídia Paga
            </button>

            <p>Ordenar por</p>
            <select name="selectVideo" id="selectVideo">
                <option value="data">Data de Publicação</option>
            </select>
        </div>
        <div className='videosDiv'>
            <div className='containerVideo'>
                <img src="/img/thumbnail.png" alt="thumbnail" />
                <div className='description'>Como aumentar sua Geração de Leads feat. Traktor</div>
            </div>
            
        </div>
    </section>
  )
}

export default SecaoVideo