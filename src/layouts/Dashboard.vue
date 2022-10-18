<template>
  <div class="layout-wrapper">
    <header>
      <div class="d-flex bg-dark">
        <g-link class="text-white" to="/dashboard/products">Products</g-link>
        <g-link class="text-white" to="/dashboard/orders">Orders</g-link>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <span>Footer</span>
    </footer>
  </div>
</template>