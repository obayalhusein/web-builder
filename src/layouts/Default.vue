<template>
  <div class="layout-wrapper">
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <g-link to="/" class="navbar-brand">
            <img src="/makane.svg" alt="">
          </g-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <g-link to="/" class="nav-link active" aria-current="page">Homepage</g-link>
              </li>
              <li class="nav-item">
                <g-link to="/pricing" class="nav-link">Pricing</g-link>
              </li>
              <li class="nav-item">
                <g-link to="/about" class="nav-link">About</g-link>
              </li>
              <li class="nav-item">
                <g-link to="/contact" class="nav-link">Contact</g-link>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <g-link to="/login" class="nav-link">Login</g-link>
              </li>
              <li class="nav-item">
                <g-link to="/select-plan" class="nav-link btn btn-primary text-white">Start free trail</g-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer>footer</footer>
  </div>
</template>