import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: UserInformation[] = [
    {
      name: "Hinata Shoyo",
      email: "user1@maximago.de",
      age: 21,
      homePrefecture: "Miyagi Prefecture",
      detail: "Hi, I'm Hinata Shoyo, I like to play Volleyball and I'm scared of kageyama!",
      profilePicturePath: "../../assets/images/profile_picture_shoyo.jpg"
    },
    {
      name: "Kenma Kozume",
      email: "user2@maximago.de",
      age: 22,
      homePrefecture: "Nerima Ward",
      detail: "Hi, I'm Kenma, I don't like to do sports and want to play my games",
      profilePicturePath: "../../assets/images/profile_picture_kozume.jpg"
    },
  ]

  getUserInformation(email: string): UserInformation{
    console.log(email)
    const user = this.users.find(user => user.email == email);
    if(!user){
      return {
         age: 0,
         name: "--",
         detail: "--",
         email: "--",
         homePrefecture: "--",
         profilePicturePath: "--"
      }
    }
    return user
  }
}
 export interface UserInformation{
  name: string,
  email: string,
  homePrefecture: string,
  age: number
  detail: string,
  profilePicturePath: string;
 }