import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.select('usuarios').subscribe(({ usuarios, loading, error }) => {
      console.log(usuarios);
      this.usuarios = usuarios;
      this.loading = loading;
      this.error = error;
    });

    this._store.dispatch(cargarUsuarios());
  }
}
