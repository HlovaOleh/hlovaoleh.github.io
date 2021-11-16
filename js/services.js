function sendMessage(event) {
    event.preventDefault();

    const apiKey = '2118938714:AAGJd7SeGnVpmVJ13MyrOsx_ioF835iywuw';
    const chatId = '-649368690';

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const text = document.getElementById('text').value;
    const phoneErrorMessageElement = document.getElementById('phoneErrorMessage');

    if (!phone.match(/\d{10}/)) {
        phoneErrorMessageElement.style.display = 'block';
        phoneErrorMessageElement.innerHTML = 'Неправильно введений телефон!';
        return;
    } else {
        phoneErrorMessageElement.style.display = 'none';
    }

    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'chat_id': chatId,
                'text': `Ім'я - ${name}, телефон - ${phone}, текст - ${text}`,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/index.html"
    });
}