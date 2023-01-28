import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'https://github.com/patriciasegantine/'

  urlImage: string = 'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  cursoAngular: boolean = true

  nowValue: string = '';
  savedValue: string | undefined;

  isMouseOver: boolean = false

  constructor() {
  }

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  clickedButton() {
    alert('The button was clicked')
  }

  onKeyUp(event: KeyboardEvent) {
    this.nowValue = ((<HTMLInputElement>event.target).value)
  }

  onSaveValue(value: string | undefined) {
    this.savedValue = value
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
}
