function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        // 0 or 1, at random
        val ? resolve("Luckky!!") : reject("Nope 😠");
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg(); // Luckky!!
msg(); // Luckky!!
msg(); // Luckky!!
msg(); // Nope 😠
msg(); // Luckky!!
msg(); // Nope 😠
msg(); // Nope 😠