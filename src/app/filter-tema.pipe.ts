import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTema'
})
export class FilterTemaPipe implements PipeTransform {

  transform(teme: any, keyword?: any): any {

    if(keyword){
      return teme.filter(function(t){ return t.naziv.toLowerCase().includes(keyword.toLowerCase());});
    }
    else{
        return teme;
    }
  }
}
