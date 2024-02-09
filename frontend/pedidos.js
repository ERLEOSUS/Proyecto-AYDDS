document.addEventListener('DOMContentLoaded', () => {
    cargarPedidos();
});

function cargarPedidos() {
    const tablaPedidos = document.getElementById('tablaPedidos').getElementsByTagName('tbody')[0];

    fetch('http://localhost:3000/pedidos')
        .then(response => response.json())
        .then(data => {
            console.log('Pedidos obtenidos:', data);

            data.forEach(pedido => {
                const row = tablaPedidos.insertRow();
                row.insertCell(0).textContent = pedido.id_pedido;
                row.insertCell(1).textContent = pedido.contenido;
                row.insertCell(2).textContent = pedido.estado;
                row.insertCell(3).textContent = pedido.total_compra;
            });
        })
        .catch(error => console.error('Error al obtener pedidos:', error));
}
