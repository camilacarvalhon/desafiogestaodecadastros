
/*Localstorege dados do cliente*/
const form = document.getElementById('form');

form.addEventListener('submit',(e)=> {
    e.preventDefault()
    let nome= document.getElementById('nome').value;
    let email= document.getElementById('email').value;
    let endereco= document.getElementById('endereco').value;
    let cidade= document.getElementById('cidade').value;
    let produto= document.getElementById('produto').value;
    let data= {
        nome, 
        email,
        endereco,
        cidade,
        produto

    }
    let convertData= JSON.stringify(data);

    localStorage.setItem('lead', convertData)
})