//Status: Issue
package com.example.donationgram.repository;

import com.example.donationgram.model.ProcessedLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcessedLoginRepository extends JpaRepository<ProcessedLogin, Long>{

	ProcessedLogin findByUsername(String username);
	ProcessedLogin findByPassword(String password);

}
