import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react'
import L from 'leaflet'

const pinIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function Mapa() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null)

  const cidades = [
    {
      nome: "Juazeiro do Norte",
      estado: "CE",
      titulo: "Projeto Local",
      descricao: "Instalação de cisternas para comunidades rurais. A ação visa garantir acesso à água potável durante o período de seca.",
      coords: [-7.2206, -39.0108]
    },
    {
      nome: "Uberlândia",
      estado: "MG",
      titulo: "Conecta Jovem",
      descricao: "Qualificação profissional para jovens em infográficos interativos e vídeos.",
      coords: [-18.9184, -48.2767]
    },
    {
      nome: "Cuiabá",
      estado: "MT",
      titulo: "Parque Protegido",
      descricao: "Monitoramento de áreas de preservação ambiental com relatórios em PDF e vídeos educativos.",
      coords: [-15.6014, -56.0979]
    },
    {
      nome: "Rio Grande",
      estado: "RS",
      titulo: "Pesca Sustentável",
      descricao: "Acompanhamento da pesca artesanal com infográficos e relatórios de impacto social.",
      coords: [-32.0323, -52.0907]
    },
    {
      nome: "Uberaba",
      estado: "MG",
      titulo: "Saúde no Campo",
      descricao: "Atendimento médico itinerante em zonas rurais. Disponível em vídeos e relatórios.",
      coords: [-19.7483, -47.9292]
    }
  ]


  function MapClickHandler() {
    useMapEvents({
      click: () => setCidadeSelecionada(null)
    })
    return null
  }

  return (
    <div className="pagina-mapa">
      <div className="cabecalho-mapa">
        <h1>Mapa</h1>
        <div className="balao-mapa">
          ESTATÍSTICAS SOBRE OS ESTADOS<br />
          Aprenda sobre preservação da água através de materiais educativos, cursos e conteúdos interativos desenvolvidos por especialistas.
        </div>
      </div>

      <div className="container-mapa">
        <MapContainer
          center={[-14.2350, -51.9253]} 
          zoom={4}
          style={{ height: '600px', width: '100%' }}
          className="mapa-leaflet"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler />

          {cidades.map((cidade, index) => (
            <Marker
              key={index}
              position={cidade.coords}
              icon={pinIcon}
              eventHandlers={{
                click: () => setCidadeSelecionada(cidade)
              }}
            >
              <Popup className="custom-popup">
                <h3>{cidade.nome} - {cidade.estado}</h3>
                <h4>{cidade.titulo}</h4>
                <p>{cidade.descricao}</p>
                <div className="acoes-popup">
                  <button className="btn-ver-mais">Ver Materiais</button>
                  <button className="btn-video">Assistir Vídeo</button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

       
        {cidadeSelecionada && (
          <div className="balao-info">
            <button className="fechar-balao" onClick={() => setCidadeSelecionada(null)}>×</button>
            <h3>{cidadeSelecionada.nome}</h3>
            <h4>{cidadeSelecionada.titulo}</h4>
            <p>{cidadeSelecionada.descricao}</p>
          </div>
        )}
      </div>

      {!cidadeSelecionada && (
        <div className="info-padrao">
          <div className="balao-info neutro">
            <h3>Informações de Cada Local</h3>
            <p>Clique em um dos pontos no mapa para ver os projetos e materiais disponíveis em cada cidade.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mapa