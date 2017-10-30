import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKategorija'
})
export class FilterKategorijaPipe implements PipeTransform {

  transform(kategorije: any, keyword?: any): any {

    if(keyword){
      return kategorije.filter(function(k){ return k.naziv.toLowerCase().includes(keyword.toLowerCase());});
    }
    else{
        return kategorije;
    }
  }
}
