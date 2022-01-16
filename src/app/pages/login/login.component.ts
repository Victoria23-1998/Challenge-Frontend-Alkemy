import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  
  ngOnInit(): void {
  }
  Login = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  onSubmit() {
    
    this.authService.login(this.Login.value).subscribe(data=>{
      console.log(data)
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigate(['home']);
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Acceso no autorizado',
        
      })
    })

  }
}
