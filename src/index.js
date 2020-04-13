const initMap = () => {
  mapboxgl.accessToken =
    'pk.please add your own access token at mapbox first 50,000 key is free!'

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [4.894584, 52.36662],
    zoom: 13
  })

  const popup = new mapboxgl.Popup().setHTML(
    `<h2>Title of the station!</h2><p>This is the station of Amsterdam adding text filler to make the pop-up look better! 🥰</p>`
  )

  const marker = new mapboxgl.Marker()
    .setLngLat([4.900293, 52.379174])
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
