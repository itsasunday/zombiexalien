function showResponse(response) {
    if (response === 'Ya') {
        document.getElementById('responseMessage').innerText = "aaaaaa .. lope uu :* (ketik ya dan kirim ke WhatsApp pembuat)";
    } else {
        document.getElementById('responseMessage').innerText = "huaa .. gimana dong!? Bingung akuu :'' (ketik tidak dan kirim ke WhatsApp pembuat)";
    }
    document.getElementById('response').style.display = 'block';
}
