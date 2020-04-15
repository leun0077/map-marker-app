const initMap = () => {
  mapboxgl.accessToken =
    'pk.please add your own access token at mapbox first 50,000 key is free!'

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-75.69, 45.42],
    zoom: 13
  })

  const popup = new mapboxgl.Popup().setHTML(
    `<h2>Shopify!</h2><p>This is the marker of the Shopify Office!🥰</p>`
  )

  const marker = new mapboxgl.Marker()
    .setLngLat([-75.692430, 45.420420])
    .setPopup(popup)
    .addTo(map)
}

const script = document.createElement('script')
script.src =
  'https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.3.0/mapbox-gl.js'
script.onload = () => {
  initMap()
}

document.body.appendChild(script)
