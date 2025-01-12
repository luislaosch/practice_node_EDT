module.exports =(io)=>{
// console.log("server socket io")
    io.on('connection', (socket)=>{
        console.log("nuevo cliente conectado")

        //detectando eventos desde un cliente
        socket.on('add-information',(data)=>{
            // console.log(data);
            console.log(data.info);
            //emitir un evente
            io.emit('show-information',data);

            // io.emit('show-information',()=>{

            // });
        });

        socket.broadcast.emit('new-connection',"Nuevo cliente conectado");
        

        socket.on('disconnect',()=>{
            console.log("Cliente desconectado del servidor")
        })
    })
}