import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  habilidades: any[] = [
    { nombre: 'HTML', porcentaje: 90, imagen: 'ruta_de_la_imagen' },
    { nombre: 'CSS', porcentaje: 85, imagen: 'ruta_de_la_imagen' },
    { nombre: 'JavaScript', porcentaje: 80, imagen: 'ruta_de_la_imagen' },
    { nombre: 'C++', porcentaje: 75, imagen: 'ruta_de_la_imagen' },
    { nombre: 'Trabajo en equipo', porcentaje: 95, imagen: 'ruta_de_la_imagen' },
    { nombre: 'Inglés', porcentaje: 70, imagen: 'ruta_de_la_imagen' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.actualizarPorcentajes();
  }

  actualizarPorcentajes() {
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach((progressCircle: any) => {
      const porcentaje: any = progressCircle.getAttribute('data-porcentaje');
      const imagen: any = progressCircle.getAttribute('data-imagen');

      const progress = progressCircle.querySelector('.progress-circle__progress');
      const number = progressCircle.querySelector('.progress-circle__number');
      const img = progressCircle.querySelector('.progress-circle__img');

      progress.setAttribute('data-porcentaje', `${porcentaje}%`);
      progress.style.strokeDasharray = `${porcentaje}, 100`;

      number.innerHTML = `${porcentaje}%`;

      if (imagen) {
        img.style.backgroundImage = `url(${imagen})`;
      }
    });
  }

}
