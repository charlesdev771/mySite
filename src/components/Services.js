import React from 'react';
import '../App.css';

export default function Services() 
{
    return (
        <div id="SERVICES" class="SERVICES">
            <div id="services" class="services">
                    <section id="services_room" class="services_room">

                            <div id="title" class="col-sm-12 col-md-12">
                                <h1 class="text-dark text-center pt-5">Serviços</h1>
                            </div>

                            <div class="container">

                            <div class="card-body mt-3">
                                <h5 class="card-title">Programação Front-End</h5>
                                <p class="card-text">Construção de sites com HTML5, CSS3, JS e react</p>
                                <a href="https://github.com/charlesdev771/Site-spotify-clone" class="card-link" target="_blank">Projeto exemplo</a>
                            </div>
                            <div class="card-body mt-3">
                                <h5 class="card-title">Programação Back-End</h5>
                                <p class="card-text">Construção de dinâmicos com PHP e laravel, JS e nodeJS ou python e django</p>
                                <a href="https://github.com/charlesdev771/mySite" class="card-link" target="_blank">Projeto exemplo</a>
                            </div>
                            <div class="card-body mt-3">
                                <h5 class="card-title">Programação Mobile</h5>
                                <p class="card-text">Construção de aplicativos android e IOS com flutter ou react-native</p>
                                <a href="https://github.com/charlesdev771/Project-prioriser" class="card-link" target="_blank">Projeto exemplo</a>
                            </div>
                            <div class="card-body mt-3">
                                <h5 class="card-title">Consultoria de segurança digital</h5>
                                <p class="card-text">Uso de metodologias de E.S e ferramentas feitas por mim e o que tem de mais novo no mercado de S.I.</p>
                                <a href="https://github.com/charlesdev771/Keylogger-python" class="card-link" target="_blank">Projeto exemplo</a>
                            </div>
                            </div>


                </section>
                </div>
            </div>
    );
}