import { Component, Input, OnInit } from '@angular/core';

interface Attachments {
  title: string;
  address: string;
}

@Component({
  selector: 'proj-req-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {
  @Input() attachments!: Attachments[];
  constructor() {}

  ngOnInit(): void {}

  extractSubDomain(url: string) {
    const name = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
    return name?.length ? name[0] : 'Website';
  }
}
