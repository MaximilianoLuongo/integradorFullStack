document.getElementById("header").innerHTML=`
<header class="container-fluid bg-primary d-flex justify-content-center">
    <p class="text-light mb-0 p-2 fs-1">A mimir Zzz...</p>
  </header>

  <!-- BARRA DE NAVEGACION -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-4" id="menu">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-primary fs-5 fw-bold">A MIMIR</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="registro.html">Registrate</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="email" placeholder="Correo electronico" aria-label="email" />
          <button class="btn btn-outline-success" type="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </nav>`
document.getElementById("footer").innerHTML=`
<!-- FOOTER -->
<div class="container-fluid mt-md-5">
  <div class="row p-5 pb-2 bg-secondary text-white">
    <div class="col-xs-12 col-md-6 col-lg-3">
      <a href="#menu" class="h3 text-decoration-none text-white">A MIMIR</a>
    </div>

    <div class="col-xs-12 col-md-6 col-lg-3">
      <a href="" class="h5 text-decoration-none text-white">Sobre nosotros</a>
    </div>

    <div class="col-xs-12 col-md-6 col-lg-3">
      <p class="h5">Contactanos</p>
      <div>
        <a class="h6 text-decoration-none text-white" href="mailto:amimir@gmail.com">Mail</a>
      </div>
      <div>
        <a class="h6 text-decoration-none text-white" href="tel:+115555-5555">Telefono</a>
      </div>
    </div>

    <div class="col-xs-12 col-md-6 col-lg-3">
      <p class="h5">Redes sociales</p>
      <div>
        <a class="h6 text-decoration-none text-white" href="https://www.facebook.com/">Facebook</a>
      </div>
      <div>
        <a class="h6 text-decoration-none text-white" href="https://www.instagram.com/">Instagram</a>
      </div>
      <div>

      </div>
    </div>

    <div class="col-xs-12 pt-5">
      <p class="h3 text-white text-center"> Todos los derechos reservados 2022</p>
    </div>
  </div>
</div>`

 