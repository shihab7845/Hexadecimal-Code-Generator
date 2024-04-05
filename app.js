document.getElementById('hex-btn').addEventListener('click', function () {
    let hexCode = "0123456789abcdef";
    let hexcol = '#'
    for (let i = 0; i < 6; i++) {
        hexcol += hexCode[Math.floor(Math.random() * 16)];
        console.log('#', hexcol);
    }

    const maindiv = document.getElementById('hex-color');

    const hexP = document.createElement('p');
    hexP.innerText = hexcol;
    hexP.className = "text-5xl text-red-800	font-bold";
    maindiv.appendChild(hexP);
})