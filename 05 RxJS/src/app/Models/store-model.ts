import { ModeEnum } from '../Enums/mode.enum';
import { PostModel } from './post-model';

export class StoreModel {
  mode: ModeEnum;
  filter: number;
  dto: PostModel[];
  list: PostModel[];

  constructor() {
    this.changeMode( null );
  }

  changeMode( mode: ModeEnum ): boolean {
    if ( this.mode !== mode ) {
      this.mode = mode;
      this.setPayload( [] );
      return true;
    }
    return false;
  }

  changeFilter( filter: number ): boolean {
    if ( this.filter !== filter ) {
      this.filter = filter;
      this.list = this.applyFilter( this.dto, filter );
      return true;
    }
    return false;
  }

  setPayload( dto: PostModel[] ) {
    this.dto = dto;
    this.list = this.applyFilter( dto, this.filter );
  }

  private applyFilter( dto: PostModel[], filterValue: number ): PostModel[] {
    return filterValue ? dto.filter( item => item.userId === filterValue ) : dto;
  }
}
