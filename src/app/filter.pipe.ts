import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, search: any): any {
    //eturn null;
    //checdk if search term is undefineed
      if (search === undefined) return users;
    //return updated ninjas array
      return users.filter(function(x) {
          return x.firstName.toLowerCase().includes(search.toLowerCase());
      })
  }

}
