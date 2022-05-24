<template>
    <header>
        <div class="icon">
            <div class="iconleft">
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/home (1) 1.png" alt=""></a>
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/user (2) 1.png" alt=""></a>
            </div>
            <div class="logo">
                <p>LOGO</p>
            </div>
            <div class="iconright">
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/magnifying-glass (2) 1.png" alt=""></a>
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/heart (1) 1.png" alt=""></a>
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/direct 1.png" alt=""></a>
            </div>
        </div>
    </header>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url(http://localhost:8000/font-family/Montserrat-Light.ttf);
}
@font-face {
  font-family: 'Montserrat_Black';
  src: url(http://localhost:8000/font-family/Montserrat-Bold.ttf);
}

body {
    margin: 0;
}

header {
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 30px;
    width: 640px;
    height: 40px;
}

.icon {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
}

.iconleft {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 200px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 22px;
    display: flex;
    align-items: center;
}

.logo p {
    margin: 0 auto;
    color: black;
    font-family: 'Montserrat_Black';
    font-size: 15px;
}

.iconright {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
