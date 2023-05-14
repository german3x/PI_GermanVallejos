import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  habilidades: any[] = [
    { nombre: 'HTML', porcentaje: 90, imagen: 'assets/html.png' },
    { nombre: 'CSS', porcentaje: 85, imagen: 'assets/CSS.png' },
    { nombre: 'JavaScript', porcentaje: 80, imagen: 'assets/js.png' },
    { nombre: 'C++', porcentaje: 75, imagen: 'assets/c++.png' },
    { nombre: 'Trabajo en equipo', porcentaje: 95, imagen: 'assets/grupal.png' },
    { nombre: 'Inglés', porcentaje: 70, imagen: 'assets/eng.png' }
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
