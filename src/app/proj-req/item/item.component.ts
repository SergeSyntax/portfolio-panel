import { Component, Input, OnInit } from '@angular/core';
import { ProjReqItem } from '../proj-req-item';

@Component({
  selector: 'proj-req-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  projReq!: ProjReqItem;
  @Input()
  currentId!: string;

  constructor() {}

  ngOnInit(): void {}

  isActive(id: string) {
    return this.currentId === id;
  }

  getUserNameAndLetter = (name: string) => {
    const letterArr = name
      .trim()
      .replace(/[^A-Za-z\s]/gm, '')
      .match(/\s[A-Z]|^[A-Za-z]/g)
      ?.map(letter => letter.trim());

    if (!letterArr) return 'U';
    const [firstLetter, secondLetter] = letterArr;
    return secondLetter ? `${firstLetter}${secondLetter}` : firstLetter;
  };

  setAvatarColor(name: string) {
    const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];
    const arrLastIndex = colors.length - 1;
    const letter = this.getUserNameAndLetter(name);
    let i = Number(letter.toLowerCase().charCodeAt(0) - 97);
    while (i > arrLastIndex) i -= arrLastIndex;
    return colors[i];
  }
}
