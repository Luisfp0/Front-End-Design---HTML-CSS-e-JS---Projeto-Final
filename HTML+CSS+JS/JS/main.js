//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var soliciteOrcamentoForm = document.querySelector('.jl-form');

//Page Preloader
window.addEventListener('load', function () {
  var pagePreloader = document.querySelector('.jl-preloader');
  pagePreloader.classList.add('jl-fade-out');

  setTimeout(function () {
    pagePreloader.style.display = 'none';
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
  var boxContact = document.querySelector('.jl-contact-info');
  boxContact.classList.toggle('jl-is-open');
  this.classList.toggle('jl-change-icon');
});

//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener('click', function () {
    var overlay = document.querySelector('.jl-overlay');
    var modalOrcamento = document.querySelector('#jl-modal-orcamento');

    overlay.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-is-open');
    modalOrcamento.classList.toggle('jl-slideTopIn');
  });
}

//Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle('jl-fade-out');
  },
  offset: '80%',
});

//Alterando o f5 no enviar
soliciteOrcamentoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Orçamento Solicitado.');
});
