import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean = false;
  error: any;

  constructor(
    private _router: ActivatedRoute,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._router.params.subscribe(({ id }) => {
      console.log(id);
      this._store.dispatch(cargarUsuario({ id: id }));
    });

    this._store.select('usuario').subscribe(({ usuario, loading, error }) => {
      console.log(usuario);
      this.usuario = usuario;
      this.loading = loading;
      this.error = error;
    });
  }
}
