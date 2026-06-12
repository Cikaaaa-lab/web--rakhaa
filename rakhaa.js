const form = document.getElementById("bioForm");
const output = document.getElementById("output");
const hasilData = document.getElementById("hasilData");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nama =
        document.querySelectorAll('input[type="text"]')[0].value;

    const alamat =
        document.querySelector("textarea").value;

    const tempatLahir =
        document.querySelectorAll('input[type="text"]')[1].value;

    const tanggal =
        document.querySelector('input[type="date"]').value;

    const hp =
        document.querySelector('input[type="tel"]').value;

    const email =
        document.querySelector('input[type="email"]').value;

    const password =
        document.querySelector('input[type="password"]').value;

    const agama =
        document.querySelector("select").value;

    let jk = "Belum dipilih";

    const radioJK =
        document.querySelector('input[name="jk"]:checked');

    if(radioJK){
        jk = radioJK.nextSibling.textContent.trim();
    }

    let hobi = [];

    const checkbox =
        document.querySelectorAll('input[type="checkbox"]:checked');

    checkbox.forEach(function(item){

        hobi.push(
            item.nextSibling.textContent.trim()
        );

    });

    const dataBaru = document.createElement("div");

    dataBaru.classList.add("hasil-card");

    dataBaru.innerHTML = `
        <h3>Data Berhasil Dikirim</h3>

        <p><b>Nama:</b> ${nama}</p>
        <p><b>Alamat:</b> ${alamat}</p>
        <p><b>Tempat Lahir:</b> ${tempatLahir}</p>
        <p><b>Tanggal Lahir:</b> ${tanggal}</p>
        <p><b>No HP:</b> ${hp}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
        <p><b>Jenis Kelamin:</b> ${jk}</p>
        <p><b>Agama:</b> ${agama}</p>
        <p><b>Hobi:</b> ${hobi.join(", ")}</p>
    `;

    hasilData.style.display = "block";

    output.prepend(dataBaru);

    window.scrollTo({
        top: output.offsetTop - 20,
        behavior: "smooth"
    });

    alert("Data berhasil dikirim!");

    form.reset();

});