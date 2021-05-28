
  let ws = new WebSocket('ws://localhost:3001')

  ws.onmessage = (e) => {
    console.log(e)
    let container = document.getElementById('container')
    let p = document.createElement('p')
    p.innerText = e.data
    container.appendChild(p)
  }

  ws.onopen = (e) => {
    console.log('Abierto')
  }

  ws.onclose = (e) => {
    console.log('Cerrado')
  }

  ws.onerror = (e) => {
    console.log('error')
  }
