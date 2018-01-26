import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  filterLists;
  lists = {
    999: { fruits: { 1: 'apple', 4: 'banana' }, drinks: ['coca cola', 'sprite'] },
    351: { fruits: { 2: 'pineaple', 5: 'pear' }, drinks: ['water', 'wine'] },
    423: { fruits: { 3: 'berrys', 6: 'straberry' }, drinks: ['whisky', 'poop'] }
  };

  ngOnInit() {
    console.log('app started');
    this.filterLists = this.lists;
  }

  applyFilterOnIds() {
    console.log('*applyFilterOnIds*');
    const allowed = ['999', '351'];
    const filter = Object.keys(this.filterLists).filter(key => allowed.includes(key)).reduce((obj, key) => {
      obj[key] = this.filterLists[key];
      return obj;
    }, {});
    console.dir(filter);
    this.filterLists = filter;
  }

  applyFilterOnFruits() {
    console.log('*applyFilterOnFruits*');
    const allowed = ['1', '2', '3'];
    for (const listId in this.filterLists) {
      const filter = Object.keys(this.filterLists[listId].fruits)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          console.log(obj);
          obj[key] = this.filterLists[listId].fruits[key];
          return obj;
        }, {});
      console.dir(filter);
      this.filterLists[listId].fruits = filter;
    }


  }


  clearFilter() {
    console.log('clear Filter');
    this.filterLists = this.lists;
  }

}
