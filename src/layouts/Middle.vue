<template>
    <div class="layout-wrapper bg-light">
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                <g-link to="/" class="navbar-brand">
                    <img src="/makane.svg" alt="">
                </g-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="#" class="nav-link">عربي</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        <main class="d-flex flex-column justify-content-center">
            <slot />
        </main>
    </div>
</template>

<script>
export default {
    name: 'MiddleLayout',
}
</script>