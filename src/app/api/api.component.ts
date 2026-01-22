// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-api',
//   templateUrl: './api.component.html',
//   styleUrls: ['./api.component.css']
// })
// export class ApiComponent {

//   userId!: number;
//   errorMsg = '';
//   responseData: any;
//   imageUrl: string = '';

//   menuButtons = ['Comments', 'Albums', 'Photos', 'Todos'];
//   buttons = [ 'CREATE', 'UPDATE', 'DELETE'];

//   constructor(private http: HttpClient) {}

//   onAction(action: string) {
//     this.errorMsg = '';
//     this.responseData = null;

//     if (!this.userId) {
//       this.errorMsg = 'User Id is required';
//       return;
//     }

//     switch (action) {
//       case 'GET':
//         this.getUser();
//         break;
//       case 'CREATE':
//         this.createUser();
//         break;
//       case 'UPDATE':
//         this.updateUser();
//         break;
//       case 'DELETE':
//         this.deleteUser();
//         break;
//     }
//   }

//   getUser() {
//     this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
//       .subscribe({
//         next: res => this.responseData = res,
//         error: () => this.errorMsg = 'Error fetching user'
//       });
//   }

//   createUser() {
//     this.http.post(`https://jsonplaceholder.typicode.com/users`, {
//       id: this.userId,
//       name: 'New User'
//     }).subscribe({
//       next: res => this.responseData = res,
//       error: () => this.errorMsg = 'Error creating user'
//     });
//   }

//   updateUser() {
//     this.http.put(`https://jsonplaceholder.typicode.com/users/${this.userId}`, {
//       name: 'Updated User'
//     }).subscribe({
//       next: res => this.responseData = res,
//       error: () => this.errorMsg = 'Error updating user'
//     });
//   }

//   deleteUser() {
//     this.http.delete(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
//       .subscribe({
//         next: res => this.responseData = res,
//         error: () => this.errorMsg = 'Error deleting user'
//       });
//   }

//   fetchPhotos(){
//     this.errorMsg='';
//     this.responseData=null;
//     this.imageUrl='';

//     if(!this.userId){
//       this.errorMsg='User Id is required';
//       return;
//     }

//     this.http
//     .get<any[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${this.userId}`)
//     .subscribe({
//       next:(res)=>{
//         this.responseData=res;

//         if(res && res.length>0){
//           this.imageUrl=res[0].url;
//         }
//       },
//       error:()=>{
//         this.errorMsg='Error fetching photos';
//       }
//     })
//   }
// }



import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  userId!: number;
  errorMsg = '';
  responseData: any;
  imageUrl = '';
  commentsUrl='';
  albumUrl='';
  todoUrl='';
  newUser='';
  successMsg='';

  menuButtons = ['Comments', 'Albums', 'Photos', 'Todos'];
  buttons = ['DELETE', 'UPDATE', 'CREATE'];

  constructor(private apiService: ApiService) {}

  validateUserId(): boolean {
    if (!this.userId) {
      this.errorMsg = 'User Id is required';
      return false;
    }
    return true;
  }
  validateUserName(): boolean{
    if(!this.newUser){
      this.errorMsg ='User Name is Required';
      return false;
    }
    return true;
  }

  onMenuClick(type: string) {
    if (!this.validateUserId()) return;

    if (type === 'Photos') {
      this.apiService.fetchPhotos(this.userId).subscribe({
        next: (res: any) => {
          this.responseData = res;
          this.imageUrl = res && res.length > 0 ? res[0].url : '';
        },
        error: () => (this.errorMsg = 'Error fetching photos')
      });
    }

    else if(type=='Comments'){
      this.apiService.findComment(this.userId).subscribe({
        next: (res:any)=>{
          this.responseData=res;
          this.commentsUrl= res && res.length>0 ? res[0].url: '';   
        },
        error: () =>(this.errorMsg='Error in finding comment of {{userId}}')
      });
    }

    else if(type== 'Albums'){
        this.apiService.getAlbums(this.userId).subscribe({
          next:(res: any)=>{
            this.responseData=res;
            this.albumUrl=res && res.length>0 ? res[0].url: '';
          },
          error: () => (this.errorMsg="Error in finding Album of {{userId}}")
        });
    }
        else if(type=='Todos'){
          this.apiService.getTodos(this.userId).subscribe({
            next: (res:any)=>{
              this.responseData=res;
              this.todoUrl=res && res.length>0 ? res[0].url:' ';
            },
            error: () => (this.errorMsg="Error in getting Todo.")
          });
        }
   

    // TODO: add handling for Comments, Albums, Todos
  }

  onAction(action: string) {
    if (!this.validateUserId()) return;

    //const payload = { name: 'Sample user' };

    const actionMap: any = {
      CREATE: () => {
        if(!this.validateUserName()) return;
        return this.apiService.createUser({name: this.newUser});
      },
      UPDATE: () =>{
        if(!this.validateUserName()) return;
        return this.apiService.updateUser(this.userId, {name:this.newUser});
      },
      DELETE: () => this.apiService.deleteUser(this.userId)
    };

    actionMap[action]?.().subscribe({
        next: (res: any) => {
      this.responseData = res;

      if (action === 'CREATE') {
        this.successMsg = 'User created successfully';
      } else if (action === 'UPDATE') {
        this.successMsg = 'User updated successfully';
      } else if (action === 'DELETE') {
        this.successMsg = 'User deleted successfully';
      }
    },
    error: () => {
      this.errorMsg = `${action} failed`;
   }
   });
  }
}
