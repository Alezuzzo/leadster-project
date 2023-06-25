import React from 'react'

function SecaoVideo() {
  return (
    <section>
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
        <div>

        </div>
    </section>
  )
}

export default SecaoVideo