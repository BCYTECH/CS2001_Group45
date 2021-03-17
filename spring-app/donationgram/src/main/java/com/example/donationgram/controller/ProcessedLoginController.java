//Status: Works with basic init with no autowire 
package com.example.donationgram.controller;

import com.example.donationgram.model.ProcessedLogin;
import com.example.donationgram.processor.LoginProcessor;
import com.example.donationgram.repository.ProcessedLoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

import javax.validation.Valid;
//import java.util.List;

@RestController
@RequestMapping("/")
public class ProcessedLoginController {

	@Autowired
	private ProcessedLoginRepository login;
	
	//@Autowired
	//private LoginProcessor loginprocessor;
	
	String currentuser;
	
	//Register
	@PostMapping ("/create")
	public Status createAccount (@Valid @RequestBody ProcessedLogin newAccount) {
		List<ProcessedLogin> users = login.findAll();
		//System.out.println("New User: " + newAccount.toString());
		for(ProcessedLogin user: users)
		{
			//System.out.println("Registered user: " + newAccount.toString());
			if(user.equals(newAccount))
			{
				//System.out.println("User Already Exists");
				return Status.USER_ALREADY_EXISTS;
			}
		}
		login.save(newAccount);
		currentuser = newAccount.getUsername();
		return Status.SUCCESS;
	}
	
	//Login
	@PostMapping ("/signin")
	public Status loginAccount (@Valid @RequestBody ProcessedLogin checkAccount) {
		List<ProcessedLogin> users = login.findAll();
		
		for(ProcessedLogin other: users)
		{
			if(other.equals(checkAccount))
			{
				login.save(checkAccount);
				currentuser = checkAccount.getUsername();
				return Status.SUCCESS;
			}
		}
		return Status.FAILURE;
	}
	
	//Get username for dashboard page
	@GetMapping("/username")
	public String getAccountByUsername () {
		return currentuser;
	}
	
//	//Get password for authentication
//	@GetMapping("/account/{password}")
//	public ProcessedLogin getAccountByPassword (@PathVariable(value= "password")String password) {
//		return login.findByPassword(password);
//	}
//	@PostMapping ("/create")
//	public ProcessedLogin createAccount (@Valid @RequestBody ProcessedLogin newAccount) {
//		//Encrypting password entered by user and replacing into db
//		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//		String encodedPassword = encoder.encode(newAccount.getPassword());
//		newAccount.setPassword(encodedPassword);
//		System.out.println(">> Account Created");
//		return login.save(newAccount);
//	}
//
//	@PostMapping ("/verify")
//	public ProcessedLogin verifyAccount (@Valid @RequestBody ProcessedLogin checkAccount) throws UsernameNotFoundException {
//		ProcessedLogin user = login.findByUsername(checkAccount.getUsername());
//		if (user == null) {
//			throw new UsernameNotFoundException("Username Not Found!");
//		} else {
//			System.out.println("Username Found!");
//		}
//		return checkAccount;
//	}
}



/* 	NOTES
 *  
 *  //	//Create new login detail (username)
 *	@PostMapping ("/createU")
 *	public ProcessedLogin createNewUsername (@Valid @RequestBody ProcessedLogin newUsername) {
 *		return login.save(newUsername);
 *	}
 *	
 *	//Create new login detail (password)
 *	@PostMapping ("/createP")
 *	public ProcessedLogin createNewPassword (@Valid @RequestBody ProcessedLogin newPassword) {
 *		return login.save(newPassword);
 *	}
 * 
 *  //Delete account
 *  @DeleteMapping("/account/{id}")
 * 	public ProcessedLogin deleteAccount (@PathVariable(value = "id") Long loginId) {
 * 	ProcessedLogin acc = login.findById(loginId)
 * 			.orElseThrow(RuntimeException::new);
 * 
 * 		login.delete(acc);
 * 		
 * 		return ResponseEntity.ok().build();
 * }
 *	 
 *	    //Check login detail (username)
 * 	@GetMapping ("/check/{id}")
 *	public ProcessedLogin checkLoginUsername (@PathVariable(value= "id") Long textId) {
 *		return loginRepository.findById(textId)
 *				.orElseThrow(RuntimeException::new);
 *	}
 *	
 *	//Check login detail (password)
 *	@RequestMapping ("/check")
 * 	public ProcessedLogin checkLoginPassword (@PathVariable(value= "password") ProcessedLogin password) {
 *		password.getPassword();
 *		return password;
 *	}
 *	
 *  @GetMapping("/texts")
 *  public List<ProcessedLogin> getAllTexts() 
 *  {
 *     return loginRepository.findAll();
 *  }
 *   
	>> Check login detail (username)
 * 	@PostMapping ("/check")
 *	public ProcessedLogin checkLoginDetails (ProcessedLogin username, ProcessedLogin password) {
 *		username.getUsername();
 * 		password.getPassword();
 *		return 
 *	}
*/
