import React from 'react'
import { 
    MapContainer,
    TileLayer,
    Marker,
    Tooltip,

 } from 'react-leaflet';
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import logo from '../../Image/logo.png';
export default function Mapa() {
    const local = 'https://www.google.com/maps/uv?pb=!1s0x926c1a6aa6179693%3A0xbd070fafebd9c809!3m1!7e115!4s%2Fmaps%2Fplace%2Fescola%2Bmunicipal%2Bfrancisca%2Bpereira%2Bde%2Baraujo%2F%40-3.0428435%2C-60.0043258%2C3a%2C75y%2C171.18h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sWk0bfEuEtJjkAT9XDmTIfQ*212e0*214m2*213m1*211s0x926c1a6aa6179693%3A0xbd070fafebd9c809%3Fsa%3DX%26ved%3D2ahUKEwjimubfpb-EAxWDNrkGHZBvDdAQpx96BAgOEAA!5sescola%20municipal%20francisca%20pereira%20de%20araujo%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e2!2sWk0bfEuEtJjkAT9XDmTIfQ&hl=pt-BR'
    const IconeLocalizacao = L.icon({
        iconUrl: logo,
        iconSize: [50,50]
    })

  return (
    <MapContainer
        center={[-3.042948522582238, -60.00431873082404]}
        zoom={50}
        scrollWheelZoom={false}
        style={{
            width: '100%',
            maxWidth: '650px',
            height: '60vh',
            outline: 'none',
            borderRadius: '20px',
            zIndex:'0'
        }}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=VX34Fyf9NqN0eZfWVHoB"
        />
            <Marker
                icon={IconeLocalizacao}
                position={[-3.042948522582238, -60.00431873082404]}
                eventHandlers={{
                    click: () => {
                        window.open(local, 'blank')
                    }
                }}
                >
                <Tooltip>E.M. Professora Francisca Pereira De Araújo</Tooltip>
            </Marker>
  
    </MapContainer>
  )
}
