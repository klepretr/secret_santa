<template>
    <header class="header">
        <span class="header_inner">
            <a href="#">
                <span class="header_logo">
                    <div class="center">
                        <!--div class="hexagon"></div-->
                    </div>
                    <div>Secret Santa</div>
                </span>
            </a>
            <span class="header_links">
                <a href="https://github.com/klepretr/secret_santa"><i class="fab fa-2x fa-github"></i></a>
            </span>
        </span>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
a:hover {
    color: var(--color-clear);
}

a {
    text-decoration: none;
    color: var(--color-white);
}

.header {
    display: flex;
    align-items: center;
    position: relative;
    background: var(--color-secondary);
    padding: 20px;
    color: var(--color-tertiary);
}

.header_inner {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    width: 800px;
    max-width: 100%;
}

.header_logo {
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
}

@media (max-width:960px) { 
    .header_logo {
        max-width: 300px;
    }
}

@media (min-width:960px) { 
    .header_logo {
        width: 300px;
        max-width: 100%;
    }
}

.header_links {
    display: flex;
    align-items: center;
    max-width: 100%;
    font-size: 18px;
}

.header_links > a {
    margin-left: 10px;
    margin-right: 10px;
}

.center {
    margin-left: 25px;
    margin-right: 25px;
    position: relative;
    top: 0px;
    left: 0px;
    transform: translate(0%, 0%);
}

</style>