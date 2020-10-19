import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this._usuarioService.getUsers().subscribe((data) => {
      console.log(data);
      this.usuarios = data;
    });
  }
}
