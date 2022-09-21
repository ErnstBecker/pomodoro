// this function will get the year and change the DOM
// for keep updated the copyright text
function copyrightYear(){
    const date = new Date();
    const year = date.getFullYear();
    let copyrightYear = document.getElementById('copyright');
    copyrightYear.innerHTML = `Copyright © ${year} Ernst Becker Neto`
}

copyrightYear()
