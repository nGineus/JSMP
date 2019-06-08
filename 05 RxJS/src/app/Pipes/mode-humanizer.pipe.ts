import { Pipe, PipeTransform } from '@angular/core';
import { ModeEnum } from '../Enums/mode.enum';

@Pipe({
  name: 'ModeHumanizer'
})
export class ModeHumanizerPipe implements PipeTransform {

  transform(value: ModeEnum, args?: any): any {
    switch ( value ) {
      case ModeEnum.POSTS: return 'List of Posts';
      case ModeEnum.ALBUMS: return 'List of Albums';
      case ModeEnum.TODO: return 'List of Todos';
      default: return '';
    }
  }

}
