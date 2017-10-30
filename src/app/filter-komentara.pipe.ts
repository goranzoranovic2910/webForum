import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKomentara'
})
export class FilterKomentaraPipe implements PipeTransform {

  transform(komentari: any, keyword?: any): any {

    if(keyword){
      return komentari.filter(function(k){ return k.tekst.toLowerCase().includes(keyword.toLowerCase());});
    }
    else{
        return komentari;
    }
  }
}
