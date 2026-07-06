// const net = require('net');
// const socket = net.Socket();
const local_port = 1138;

// const url = 'http://labobine-uzel.fr';
// const hostname = '217.160.0.229';
const url = 'localhost'

async function sendPacket(email)
{
	// socket.connect(port, hostname, () => {
	// 	socket.write(email);
	// 	socket.on('data', (data) => 
	// 	{
	// 		// console.log(String(data));
	// 		socket.write(data);
	// 	});
	// });

	await fetch('${url}',
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: email })
	});
}

function test(email)
{
	console.log('${email}');
}