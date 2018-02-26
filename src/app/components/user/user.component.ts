import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserPost } from '../user/userpost';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  hobbies: string[];
  address: Address;
  hello: any;
  posts: UserPost[];

  constructor(private dataService: DataService) {
    console.log('Start con............');
  }

  ngOnInit() {
    this.name = 'VSridhardth';
    this.age = 36;
    this.email = 'vsridhardth@gmail.com';
    this.address = {
      street: '1055 Souther Artery',
      city: 'Quincy',
      state: 'MA'
    };
    this.hobbies = ['Coding', 'Watching Movies', 'Music', 'Devotional'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    console.log('Hello...');
    this.name = 'Lovable Person';
    this.hobbies.push('New array element');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
    this.hobbies.slice(hobby);
    return false;
  }
}

interface Address {
  street: String;
  city: string;
  state: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: String;
}